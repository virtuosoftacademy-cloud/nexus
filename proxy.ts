import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

export const { auth: middleware } = NextAuth(authConfig);

export default middleware;

// middleware.ts
export const config = {
    matcher: ["/admin", "/admin/view-page", "/admin/new-post", "/admin/posts/:path*", "/admin/categories"],
};

