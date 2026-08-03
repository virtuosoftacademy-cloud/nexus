
"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import {
    isRateLimited,
    recordFailure,
    clearAttempts,
    minutesLeft,
} from "@/lib/rate-limit";

export type LoginState = { error?: string; pendingDevice?: boolean };

export async function login(
    _prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    const email = String(formData.get("email") ?? "").toLowerCase().trim();

    if (!email) return { error: "Invalid email or password." };

    if (isRateLimited(email)) {
        return {
            error: `Too many attempts. Try again in ${minutesLeft(email)} minute(s).`,
        };
    }

    try {
        await signIn("credentials", {
            email,
            password: formData.get("password"),
            deviceName: formData.get("deviceName"),
            redirectTo: "/admin",
        });
        clearAttempts(email);
        return {};
    } catch (error) {
        if (error instanceof AuthError) {
            // A pending device means the password was right, so this isn't a
            // failed attempt — counting it would lock the account out while the
            // admin is still deciding whether to approve the browser.
            if ((error as AuthError & { code?: string }).code === "device_pending") {
                clearAttempts(email);
                return {
                    pendingDevice: true,
                    error:
                        "This device is not recognised. Your request has been sent " +
                        "to the administrator for approval.",
                };
            }
            recordFailure(email);
            // Same message for wrong email and wrong password.
            return { error: "Invalid email or password." };
        }
        // Success path: signIn redirects by throwing — rethrow it.
        throw error;
    }
}