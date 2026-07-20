// ============================================================================
// File: middleware.ts  (project root — Next.js only picks it up there,
//          or in src/ if your project uses a src directory)
// Purpose: Route protection for the whole /admin section. Instantiates
//          NextAuth from auth.config.ts ONLY (the edge-safe half, no Prisma),
//          so it runs on the Edge runtime. The actual allow/deny decision
//          lives in the authorized() callback in auth.config.ts.
//          Unauthenticated or non-admin visitors are redirected to /login.
// Type: Next.js Middleware (Edge runtime)
// ============================================================================

import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Instantiated from the edge-safe config (no Prisma), so this
// runs fine in the Edge runtime. The `authorized` callback in
// auth.config.ts decides who gets through.
export const { auth: middleware } = NextAuth(authConfig);

export default middleware;

// middleware.ts
export const config = {
    matcher: ["/admin/:path*", "/new-post", "/posts/:path*", "/view-page"],
};