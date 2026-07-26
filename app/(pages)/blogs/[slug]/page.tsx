
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

export const dynamic = "force-dynamic";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    try {

        const post = await prisma.blogPost.findUnique({
            where: { slug },
            select: { title: true, excerpt: true },
        });
        if (!post) return { title: "Post Not Found | Nexus" };
        return {
            title: `${post.title} | Nexus Advisory`,
            description: post.excerpt,
        };
    } catch {
        return { title: "Nexus Advisory" }
    }
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