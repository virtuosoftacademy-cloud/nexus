"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { hash, compare } from "bcryptjs";
import { getDeviceId } from "@/lib/device";

export type DeviceActionState = { success?: string; error?: string };

/**
 * Every action re-checks the session. Middleware gates the /admin pages, but a
 * server action is its own endpoint and must verify the caller itself.
 */
async function requireAdmin() {
    const session = await auth();
    if (session?.user?.role !== "ADMIN" || !session.user.id) return null;
    return session.user;
}

export async function approveDevice(
    _prev: DeviceActionState,
    formData: FormData
): Promise<DeviceActionState> {
    const admin = await requireAdmin();
    if (!admin) return { error: "Not authorised." };

    const id = String(formData.get("id") ?? "");
    if (!id) return { error: "Missing device id." };

    const device = await prisma.device.findUnique({ where: { id } });
    if (!device) return { error: "That device no longer exists." };

    await prisma.device.update({
        where: { id },
        data: { approved: true, approvedAt: new Date(), approvedBy: admin.id },
    });

    revalidatePath("/admin/devices");
    return { success: `Approved ${device.label || "device"}.` };
}

export async function revokeDevice(
    _prev: DeviceActionState,
    formData: FormData
): Promise<DeviceActionState> {
    const admin = await requireAdmin();
    if (!admin) return { error: "Not authorised." };

    const id = String(formData.get("id") ?? "");
    if (!id) return { error: "Missing device id." };

    const device = await prisma.device.findUnique({ where: { id } });
    if (!device) return { error: "That device no longer exists." };

    // Refuse to revoke the device you're currently using — doing so would lock
    // you out mid-session with no way back in if you're the only admin.
    const current = await getDeviceId();
    if (current && device.deviceId === current) {
        return { error: "You cannot revoke the device you're signed in on." };
    }

    await prisma.device.delete({ where: { id } });
    revalidatePath("/admin/devices");
    return { success: `Removed ${device.label || "device"}.` };
}

export async function changePassword(
    _prev: DeviceActionState,
    formData: FormData
): Promise<DeviceActionState> {
    const admin = await requireAdmin();
    if (!admin) return { error: "Not authorised." };

    const current = String(formData.get("currentPassword") ?? "");
    const next = String(formData.get("newPassword") ?? "");
    const confirm = String(formData.get("confirmPassword") ?? "");

    if (!current || !next) return { error: "Both password fields are required." };
    if (next.length < 12) return { error: "New password must be at least 12 characters." };
    if (next !== confirm) return { error: "New passwords do not match." };

    const user = await prisma.user.findUnique({ where: { id: admin.id } });
    if (!user?.password) return { error: "This account has no password set." };

    if (!(await compare(current, user.password))) {
        return { error: "Current password is incorrect." };
    }

    await prisma.user.update({
        where: { id: admin.id },
        data: { password: await hash(next, 12) },
    });

    revalidatePath("/admin/profile");
    return { success: "Password updated." };
}
