// ============================================================================
// File: app/(admin)/categories/actions.ts
// Purpose: Server actions for category management:
//            - createCategory: validates, blocks duplicates by label, inserts
//            - deleteCategory: detaches posts FIRST (sets categoryId = null,
//              so no post is lost and no foreign-key error fires), then
//              deletes the category
// Type: Server Actions ("use server")
// ============================================================================

"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export type CategoryFormState = { error?: string; success?: string };

export async function createCategory(
    _prevState: CategoryFormState,
    formData: FormData
): Promise<CategoryFormState> {
    // Guard: only a signed-in ADMIN may manage categories.
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return { error: "You must be signed in as an admin." };
    }

    const label = String(formData.get("label") ?? "").trim();
    // Accent is a highlighted phrase shown after the label (may be empty).
    const accent = String(formData.get("accent") ?? "").trim();

    if (!label) return { error: "Category name is required." };

    const existing = await prisma.blogCategory.findFirst({ where: { label } });
    if (existing) return { error: `"${label}" already exists.` };

    await prisma.blogCategory.create({ data: { label, accent } });

    revalidatePath("/categories");
    revalidatePath("/view-page");
    return { success: `Created "${label}".` };
}

export async function deleteCategory(formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return;

    const id = Number(formData.get("id"));
    if (!id) return;

    // Detach posts first — categoryId is nullable, so posts survive
    // as "No category" instead of failing the foreign-key constraint.
    await prisma.blogPost.updateMany({
        where: { categoryId: id },
        data: { categoryId: null },
    });
    await prisma.blogCategory.delete({ where: { id } });

    revalidatePath("/categories");
    revalidatePath("/view-page");
    revalidatePath("/blogs");
}


export type EditCategoryState = { error?: string; success?: boolean };

export async function updateCategory(
    id: number,
    _prev: EditCategoryState,
    formData: FormData
): Promise<EditCategoryState> {
    "use server"; // omit if the file already has top-level "use server"
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return { error: "You must be signed in as an admin." };
    }

    const label = String(formData.get("label") ?? "").trim();
    const accent = String(formData.get("accent") ?? "").trim();
    if (!label) return { error: "Label is required." };

    await prisma.blogCategory.update({ where: { id }, data: { label, accent } });

    revalidatePath("/admin/blog/categories"); // adjust to your route
    revalidatePath("/blogs");                 // labels render publicly
    return { success: true };
}