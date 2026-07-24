
"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import {
    isRateLimited,
    recordFailure,
    clearAttempts,
    minutesLeft,
} from "@/lib/rate-limit";

export type LoginState = { error?: string };

export async function login(
    _prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    const email = String(formData.get("email") ?? "").toLowerCase().trim();

    if (!email) return { error: "Invalid email or password." };

    if (isRateLimited(email)) {
        return {
            error: `Too many attempts. Try again in ${minutesLeft(email)} minute(s).`,
        };
    }

    try {
        await signIn("credentials", {
            email,
            password: formData.get("password"),
            redirectTo: "/admin",
        });
        clearAttempts(email);
        return {};
    } catch (error) {
        if (error instanceof AuthError) {
            recordFailure(email);
            // Same message for wrong email and wrong password.
            return { error: "Invalid email or password." };
        }
        // Success path: signIn redirects by throwing — rethrow it.
        throw error;
    }
}