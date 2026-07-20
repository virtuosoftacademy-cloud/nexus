// ============================================================================
// File: types/next-auth.d.ts
// Purpose: TypeScript module augmentation. Auth.js doesn't know about our
//          custom fields, so this teaches it that session.user has `id` and
//          `role`, and that the JWT carries them too. Without this file,
//          `session.user.role` is a type error everywhere.
//          Make sure tsconfig.json "include" covers the types/ folder.
// Type: Ambient type declarations (no runtime code)
// ============================================================================

import type { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: "USER" | "ADMIN";
        } & DefaultSession["user"];
    }

    interface User {
        role?: "USER" | "ADMIN";
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        role?: "USER" | "ADMIN";
    }
}