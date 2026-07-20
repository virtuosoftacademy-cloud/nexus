
"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";
import { Button } from "@/components/ui/button";

const initialState: LoginState = {};

export function LoginForm() {
    const [state, formAction, isPending] = useActionState(login, initialState);

    const inputClass =
        "mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm " +
        "text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none " +
        "focus:ring-1 focus:ring-neutral-900";

    return (
        <form
            action={formAction}
            className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
        >
            {state.error && (
                <div
                    role="alert"
                    className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                >
                    {state.error}
                </div>
            )}

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-800"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                />
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-800"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className={inputClass}
                />
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="w-full py-6 text-xl! hover:bg-secondary">
                <h2>
                    {isPending ? "Signing in…" : "Sign in"}
                </h2>
            </Button>
        </form>
    );
}