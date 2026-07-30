import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

// Keep this list in sync with the matcher in middleware.ts.
const PROTECTED_PREFIXES = ["/admin"];

export const authConfig = {
    pages: {
        signIn: "/signin",
    },
    session: {
        // Credentials provider requires JWT sessions — database
        // sessions are not supported with it.
        strategy: "jwt",
    },
    callbacks: {
        // Copy the role onto the token at sign-in…
        jwt({ token, user }) {
            if (user) {
                token.role = (user as { role?: string }).role ?? "USER";
                token.id = user.id;
            }
            return token;
        },
        // …and expose it on the session object.
        session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as "USER" | "ADMIN";
                session.user.id = token.id as string;
            }
            return session;
        },
        // Runs in middleware for every matched request.
        authorized({ auth, request }) {
            const { pathname } = request.nextUrl;
            const isProtected = PROTECTED_PREFIXES.some((p) =>
                pathname.startsWith(p)
            );
            if (!isProtected) return true;
            if (auth?.user?.role === "ADMIN") return true;
            // Hide the admin area from unauthorised visitors — a blocked
            // admin route renders as a plain 404 rather than bouncing to
            // /signin (which would reveal that the route exists at all).
            return NextResponse.rewrite(new URL("/admin/not-found", request.url));
        },
    },
    providers: [], // real providers live in auth.ts
} satisfies NextAuthConfig;