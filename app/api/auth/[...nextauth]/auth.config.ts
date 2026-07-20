import { NextAuthOptions } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/login",
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
        // auth.config.ts — authorized() callback
        authorized({ auth, request }) {
            const { pathname } = request.nextUrl;
            const isProtected =
                pathname.startsWith("/admin") ||
                pathname.startsWith("/new-post") ||
                pathname.startsWith("/posts") ||   // covers /posts/<slug>/edit
                pathname.startsWith("/view-page");
            if (!isProtected) return true;
            return auth?.user?.role === "ADMIN";
        },
    },
    providers: [], // real providers live in auth.ts
} satisfies NextAuthOptions;