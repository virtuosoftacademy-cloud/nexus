import { EditTaxonomyState } from "@/app/api/case-study/actions";
import { useActionState, useEffect, useState } from "react";


export function EditTaxonomyForm({
    id,
    label,
    action,
}: {
    id: number;
    label: string;
    action: (id: number, state: EditTaxonomyState, formData: FormData) => Promise<EditTaxonomyState>;
}) {
    const [editing, setEditing] = useState(false);
    const bound = action.bind(null, id);
    const [state, formAction, isPending] = useActionState<EditTaxonomyState, FormData>(bound, {});

    useEffect(() => {
        if (state.success) setEditing(false);
    }, [state]);

    if (!editing) {
        return (
            <div className="flex items-center gap-2">
                <span className="font-medium text-neutral-900">{label}</span>
                <button
                    type="button"
                    onClick={() => setEditing(true)}
                    className="rounded-md px-2 py-1 text-xs font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                >
                    Edit
                </button>
            </div>
        );
    }

    return (
        <form action={formAction} className="flex flex-wrap items-center gap-2">
            <input
                name="label"
                defaultValue={label}
                required
                className="w-48 rounded-md border border-neutral-300 px-2 py-1 text-sm text-neutral-900
                           focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
            <button type="submit" disabled={isPending}
                className="rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-neutral-700 disabled:opacity-60">
                {isPending ? "Saving…" : "Save"}
            </button>
            <button type="button" onClick={() => setEditing(false)}
                className="rounded-md px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-100">
                Cancel
            </button>
            {state.error && <p className="w-full text-xs text-red-600">{state.error}</p>}
        </form>
    );
}