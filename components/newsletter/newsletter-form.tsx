"use client";

import { useActionState, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribe, type NewsletterState } from "@/app/api/newsletter/actions";
import { showSimpleSuccess, showSimpleError } from "@/lib/toast-notifications";
import { FieldDescription } from "../ui/field";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import Link from "next/link";

const initialState: NewsletterState = {};

export function NewsletterForm() {
    const [state, formAction, isPending] = useActionState(subscribe, initialState);
    useEffect(() => {
        if (state.success) showSimpleSuccess("Subscribed", state.success);
        if (state.error) showSimpleError("Subscription failed", state.error);
    }, [state]);
    // Consent gate. Checkbox is a Radix control: it reports state through
    // onCheckedChange, not a DOM change event, so this must be a boolean.
    const [accepted, setAccepted] = useState(false);

    // Reset the tick after a successful submit, so the next visitor to the
    // form has to consent again rather than inheriting the previous consent.
    useEffect(() => {
        if (state.success) setAccepted(false);
    }, [state.success]);

    return (
        <div className="flex flex-col gap-2">
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
                        disabled={isPending || !accepted}
                        title={!accepted ? "Please accept the Privacy Notice first" : undefined}
                        className="p-6 text-sm md:text-base hover:text-foreground transition hover:bg-secondary"
                    >
                        {isPending ? "Subscribing…" : "Subscribe"}
                    </Button>
                </div>

                {/* Inside the form so the value is actually submitted, and so
                    the server can reject a request that skips the checkbox. */}
                <FieldDescription className="flex gap-2 pt-3 text-background items-center">
                    <Checkbox
                        id="terms"
                        name="consent"
                        value="yes"
                        checked={accepted}
                        onCheckedChange={(v) => setAccepted(v === true)}
                        aria-describedby="terms-label"
                        className="bg-background rounded-none text-sm md:text-base"
                    />
                    <Label id="terms-label" htmlFor="terms" className="font-normal text-xs md:text-base whitespace-pre">* I have read and understand{" "}<Link href="/privacy-policy" className="underline underline-offset-4 decoration-primary">Nexus Privacy Notice.</Link>
                    </Label>
                </FieldDescription>
            </form>
        </div>
    );
}