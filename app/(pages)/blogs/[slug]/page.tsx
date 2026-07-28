// app/blogs/[slug]/page.tsx

import { notFound } from "next/navigation";
import Hero from "../_components/post/Hero";
import PostContent from "../_components/post/PostContent";
import { getPostBySlug } from "../constant";


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
                <main className="min-h-screen pt-6">
                    <Hero post={post} />
                    <PostContent post={post} />
                </main>
        </>
    );
}