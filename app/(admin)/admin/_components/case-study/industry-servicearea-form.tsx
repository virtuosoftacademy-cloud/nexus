// Purpose: Client pieces for the Industries / Service-areas pages, mirroring
//            NewTaxonomyForm    — add form with pending + success/error
//            DeleteTaxonomyButton — confirm() naming the usage count
"use client";

import { useActionState } from "react";
import { TaxonomyFormState } from "./actions";

const initialState: TaxonomyFormState = {};

export function NewTaxonomyForm({
    action,
    label,
    placeholder,
}: {
    action: (state: TaxonomyFormState, formData: FormData) => Promise<TaxonomyFormState>;
    label: string;
    placeholder: string;
}) {
    const [state, formAction, isPending] = useActionState(action, initialState);

    return (
        <form
            action={formAction}
            className="flex flex-wrap items-end gap-3 rounded-lg border border-neutral-200 bg-white p-4"
        >
            <div className="min-w-48 flex-1">
                <label htmlFor="label" className="block text-sm font-medium text-neutral-800">
                    {label}
                </label>
                <input
                    id="label"
                    name="label"
                    type="text"
                    required
                    placeholder={placeholder}
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm
                               focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
            </div>
            <button
                type="submit"
                disabled={isPending}
                className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white
                           hover:bg-neutral-700 disabled:opacity-60"
            >
                {isPending ? "Adding…" : "Add"}
            </button>

            {state.error && (
                <p role="alert" className="w-full text-sm text-red-600">{state.error}</p>
            )}
            {state.success && (
                <p role="status" className="w-full text-sm text-green-700">{state.success}</p>
            )}
        </form>
    );
}

export function DeleteTaxonomyButton({
    id,
    label,
    usageCount,
    usageNoun,
    detachNote,
    action,
}: {
    id: number;
    label: string;
    usageCount: number;
    usageNoun: string;
    detachNote: string;
    action: (formData: FormData) => Promise<void>;
}) {
    const warning =
        usageCount > 0
            ? `Delete "${label}"? ${usageCount} ${usageNoun}${usageCount === 1 ? "" : "s"} ${detachNote}`
            : `Delete "${label}"?`;

    return (
        <form
            action={action}
            onSubmit={(e) => {
                if (!confirm(warning)) e.preventDefault();
            }}
        >
            <input type="hidden" name="id" value={id} />
            <button
                type="submit"
                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-600
                           hover:bg-red-50 hover:text-red-700"
            >
                Delete
            </button>
        </form>
    );
}