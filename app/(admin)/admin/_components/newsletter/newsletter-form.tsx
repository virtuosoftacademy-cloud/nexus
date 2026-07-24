// ============================================================================
// File: components/newsletter/NewsletterForm.tsx
// Purpose: One-field newsletter signup — UPDATED to toast notifications:
//          success/error from the subscribe action fire sonner toasts
//          (via lib/toast-notifications) instead of inline text. The
//          input still clears on success via the key remount. Requires
//          <Toaster /> mounted once in the root layout.
// Type: Client Component ("use client")
// ============================================================================
"use client";

import { useActionState, useEffect } from "react";
import { subscribe, type NewsletterState } from "./actions";
import { showSimpleSuccess, showSimpleError } from "@/lib/toast-notifications";

const initialState: NewsletterState = {};

export function NewsletterForm() {
    const [state, formAction, isPending] = useActionState(subscribe, initialState);

    // Fire a toast whenever the action returns a new result. `state` is a
    // fresh object per submission, so this runs once per submit — including
    // repeat submits with the same message.
    useEffect(() => {
        if (state.success) showSimpleSuccess("Subscribed", state.success);
        if (state.error) showSimpleError("Subscription failed", state.error);
    }, [state]);

    return (
        <form action={formAction} className="w-full max-w-md">
            <div className="flex gap-2">
                {/* Honeypot — hidden from humans, tab order excluded */}
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                />

                <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                </label>
                <input
                    id="newsletter-email"
                    key={state.success ?? "email"} /* clears after success */
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2.5 text-sm
                               text-foreground placeholder:text-foreground/40
                               focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="shrink-0 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground
                               hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isPending ? "Subscribing…" : "Subscribe"}
                </button>
            </div>
        </form>
    );
}