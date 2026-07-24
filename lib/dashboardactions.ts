"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePost(formData: FormData) {
    const id = String(formData.get("id") ?? "");
    if (!id) return;

    await prisma.blogPost.delete({ where: { id } });

    revalidatePath("/admin");
    revalidatePath("/blog");
}

export async function toggleFeatured(formData: FormData) {
    const id = String(formData.get("id") ?? "");
    if (!id) return;

    const post = await prisma.blogPost.findUnique({
        where: { id },
        select: { isFeatured: true },
    });
    if (!post) return;

    await prisma.blogPost.update({
        where: { id },
        data: { isFeatured: !post.isFeatured },
    });

    revalidatePath("/admin");
    revalidatePath("/blog");
}

export async function toggleSidebar(formData: FormData) {
    const id = String(formData.get("id") ?? "");
    if (!id) return;

    const post = await prisma.blogPost.findUnique({
        where: { id },
        select: { isSidebar: true },
    });
    if (!post) return;

    await prisma.blogPost.update({
        where: { id },
        data: { isSidebar: !post.isSidebar },
    });

    revalidatePath("/admin");
    revalidatePath("/blog");
}