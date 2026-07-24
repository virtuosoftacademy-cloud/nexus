"use client";

import { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribe, type NewsletterState } from "@/app/(admin)/admin/_components/newsletter/actions";
import { showSimpleSuccess, showSimpleError } from "@/lib/toast-notifications";

const initialState: NewsletterState = {};

export function NewsletterForm() {
    const [state, formAction, isPending] = useActionState(subscribe, initialState);
    useEffect(() => {
        if (state.success) showSimpleSuccess("Subscribed", state.success);
        if (state.error) showSimpleError("Subscription failed", state.error);
    }, [state]);

    return (
        <form action={formAction}>
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
            />

            <div className="flex gap-4">
                <div className="bg-accent/10 p-2 w-2xl">
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        key={state.success ?? "email"} /* clears after success */
                        placeholder="Your email address"
                        className="rounded-none border-0 placeholder:text-sm md:placeholder:text-base placeholder:text-accent/50"
                    />
                </div>
                <Button
                    type="submit"
                    disabled={isPending}
                    className="p-6 text-sm md:text-base hover:text-foreground transition hover:bg-secondary"
                >
                    {isPending ? "Subscribing…" : "Subscribe"}
                </Button>
            </div>
        </form>
    );
}