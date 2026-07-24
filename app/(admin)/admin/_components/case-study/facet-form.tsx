
"use client";

import { useState, useTransition } from "react";

export function RenameFacetForm({
    current,
    action,
}: {
    current: string;
    action: (formData: FormData) => Promise<void>;
}) {
    const [value, setValue] = useState(current);
    const [isPending, startTransition] = useTransition();
    const dirty = value.trim() !== current && value.trim().length > 0;

    return (
        <form
            className="flex items-center gap-2"
            action={(formData) => startTransition(() => action(formData))}
        >
            <input type="hidden" name="from" value={current} />
            <input
                name="to"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-56 rounded-md border border-neutral-300 px-3 py-1.5 text-sm
                           focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
            <button
                type="submit"
                disabled={!dirty || isPending}
                className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white
                           hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
                {isPending ? "Saving…" : "Rename"}
            </button>
        </form>
    );
}