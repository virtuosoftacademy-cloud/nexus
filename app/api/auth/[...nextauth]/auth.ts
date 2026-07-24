
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