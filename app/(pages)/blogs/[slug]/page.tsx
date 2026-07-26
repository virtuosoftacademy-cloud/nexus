// ============================================================================
// File: app/blogs/[slug]/page.tsx
// Purpose: Public blog post page at /blogs/<slug> — data source swapped from
//          the static constant.ts functions to live Prisma queries. Markup
//          preserved exactly, including the commented-out ReactLenis wrapper
//          and CTA blocks (uncomment + restore their imports when needed).
//            generateStaticSlugs -> async prisma slug query (build-time)
//            getPostBySlug       -> prisma.blogPost.findUnique
//            dynamicParams=true  -> admin-published posts render on demand
// Type: Server Component (async)
// ============================================================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Hero from "../_components/post/Hero";
import PostContent from "../_components/post/PostContent";
import { prisma } from "@/lib/prisma";

// Pre-render every existing post at build time.
export async function generateStaticParams() {
    try {
        const posts = await prisma.blogPost.findMany({ select: { slug: true } });
        return posts.map((p) => ({ slug: p.slug }));
    } catch {
        return []
    }
};

// Posts published via the admin after the build still work.
export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({
        where: { slug },
        select: { title: true, excerpt: true },
    });
    if (!post) return { title: "Post Not Found | Nexus" };
    return {
        title: `${post.title} | Nexus Advisory`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({
        where: { slug },
    });

    if (!post) notFound();

    return (
        <>
            <main className="min-h-screen pt-6">
                <Hero post={post} />
                <PostContent post={post} />
            </main>
        </>
    );
}