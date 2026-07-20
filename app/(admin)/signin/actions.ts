// ============================================================================
// File: app/login/actions.ts
// Purpose: login server action wrapping Auth.js signIn("credentials").
//          Returns { error } for bad credentials — deliberately the SAME
//          message for wrong email and wrong password, so the form never
//          reveals which accounts exist. Important quirk: on SUCCESS signIn
//          redirects by THROWING, so non-AuthError errors must be rethrown
//          or the redirect never completes.
// Type: Server Action ("use server")
// ============================================================================

"use server";

import { signIn } from "@/auth";

export type LoginState = { error?: string };

export async function login(
    _prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    try {
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/admin",
        });
        return {};
    } catch (error) {
        if (error) {
            return { error: "Invalid email or password." };
        }
        throw error;
    }
}