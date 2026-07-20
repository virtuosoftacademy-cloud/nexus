
"use client";

import { useActionState } from "react";
import type { PostFormState } from "@/app/types/types";
import { Button } from "../ui/button";

type Category = { id: number; label: string };

export type PostFormValues = {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    accent: string;
    date: string;
    categoryId: number | null;
    isFeatured: boolean;
    isSidebar: boolean;
};

type Props = {
    categories: Category[];
    action: (state: PostFormState, formData: FormData) => Promise<PostFormState>;
    submitLabel: string;
    pendingLabel: string;
    defaultValues?: Partial<PostFormValues>;
};

const initialState: PostFormState = {};

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

export function PostForm({
    categories,
    action,
    submitLabel,
    pendingLabel,
    defaultValues = {},
}: Props) {
    const [state, formAction, isPending] = useActionState(action, initialState);
    const errors = state.fieldErrors ?? {};

    const inputClass =
        "mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm " +
        "text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none " +
        "focus:ring-1 focus:ring-neutral-900";
    const labelClass = "block text-sm font-medium text-neutral-800";

    return (
        <form action={formAction} className="space-y-6">
            {state.error && (
                <div
                    role="alert"
                    className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    {state.error}
                </div>
            )}

            <div>
                <label htmlFor="title" className={labelClass}>
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    defaultValue={defaultValues.title}
                    placeholder="How we rebuilt our data layer"
                    className={inputClass}
                    aria-invalid={Boolean(errors.title)}
                />
                <FieldError message={errors.title} />
            </div>

            <div>
                <label htmlFor="excerpt" className={labelClass}>
                    Excerpt
                </label>
                <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={2}
                    required
                    defaultValue={defaultValues.excerpt}
                    placeholder="One or two sentences shown in post cards."
                    className={inputClass}
                    aria-invalid={Boolean(errors.excerpt)}
                />
                <FieldError message={errors.excerpt} />
            </div>

            <div>
                <label htmlFor="content" className={labelClass}>
                    Content
                </label>
                <textarea
                    id="content"
                    name="content"
                    rows={12}
                    required
                    defaultValue={defaultValues.content}
                    placeholder="Full post body…"
                    className={inputClass}
                    aria-invalid={Boolean(errors.content)}
                />
                <FieldError message={errors.content} />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="image" className={labelClass}>
                        Cover image URL
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        required
                        defaultValue={defaultValues.image}
                        placeholder="/images/data-layer.jpg"
                        className={inputClass}
                        aria-invalid={Boolean(errors.image)}
                    />
                    <FieldError message={errors.image} />
                </div>

                <div>
                    <label htmlFor="date" className={labelClass}>
                        Publish date
                    </label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        defaultValue={defaultValues.date}
                        className={inputClass}
                        aria-invalid={Boolean(errors.date)}
                    />
                    <FieldError message={errors.date} />
                </div>

                <div>
                    <label htmlFor="categoryId" className={labelClass}>
                        Category
                    </label>
                    <select
                        id="categoryId"
                        name="categoryId"
                        defaultValue={defaultValues.categoryId ?? ""}
                        className={inputClass}
                    >
                        <option value="">No category</option>
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="accent" className={labelClass}>
                        Accent phrase
                    </label>
                    {/* A PHRASE, not a color: rendered highlighted after/inside
                        the title on the public site (e.g. "with Prisma"). */}
                    <input
                        id="accent"
                        name="accent"
                        type="text"
                        defaultValue={defaultValues.accent ?? ""}
                        placeholder="highlighted part of the title"
                        className={inputClass}
                    />
                </div>
            </div>

            <fieldset className="flex flex-wrap gap-6">
                <legend className="sr-only">Placement</legend>
                <label className="flex items-center gap-2 text-sm text-neutral-800">
                    <input
                        type="checkbox"
                        name="isFeatured"
                        defaultChecked={defaultValues.isFeatured}
                        className="h-4 w-4 rounded border-neutral-300"
                    />
                    Featured post
                </label>
                <label className="flex items-center gap-2 text-sm text-neutral-800">
                    <input
                        type="checkbox"
                        name="isSidebar"
                        defaultChecked={defaultValues.isSidebar}
                        className="h-4 w-4 rounded border-neutral-300"
                    />
                    Show in sidebar
                </label>
            </fieldset>

            <div className="flex items-center justify-end gap-3 border-t border-neutral-200 pt-6">
                <Button
                    type="submit"
                    disabled={isPending}
                    className="py-4">
                    {isPending ? pendingLabel : submitLabel}
                </Button>
            </div>
        </form>
    );
}