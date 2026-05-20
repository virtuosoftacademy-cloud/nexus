// app/blogs/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Hero from "../_components/post/Hero";
import PostContent from "../_components/post/PostContent";
import { generateStaticSlugs, getPostBySlug } from "../constant";
import ReactLenis from "lenis/react";
import CtaForm from "@/components/common/ctaForm";
import { CtaSplitSection } from "@/components/common/CTA";

export function generateStaticParams() {
    return generateStaticSlugs();
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
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
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <>
            {/* <ReactLenis root> */}
                <main className="min-h-screen pt-6">
                    <Hero post={post} />
                    <PostContent post={post} />
                    <div className="px-7 md:px-12">
                        <CtaForm />
                    </div>
                    <CtaSplitSection />
                </main>
            {/* </ReactLenis> */}
        </>
    );
}