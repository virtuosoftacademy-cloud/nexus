// ============================================================================
// File: auth.ts  (project root, next to package.json — or src/ if used)
// Purpose: Main Auth.js v5 entry point. Combines the edge-safe config from
//          auth.config.ts with the parts that CANNOT run on the Edge runtime:
//            - PrismaAdapter (persists users via the MariaDB driver adapter
//              client exported from lib/prisma.ts)
//            - Credentials provider (email + password, bcryptjs compare)
//          Exports:
//            handlers -> used by app/api/auth/[...nextauth]/route.ts
//            auth     -> read the session in Server Components / actions
//            signIn / signOut -> used by the login action and layout button
//          Import from "@/auth" everywhere EXCEPT middleware.ts.
// Type: Server-only module
// ============================================================================

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Normalize the email the same way create-admin.ts stores it
                // (lowercased + trimmed), so lookups always match.
                const email = String(credentials?.email ?? "").toLowerCase().trim();
                const password = String(credentials?.password ?? "");
                if (!email || !password) return null;

                const user = await prisma.user.findUnique({ where: { email } });
                // User must exist AND have a password (OAuth-only users can't
                // log in with credentials).
                if (!user?.password) return null;

                const valid = await compare(password, user.password);
                if (!valid) return null;

                // Only return what the JWT needs — never the password hash.
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],
});