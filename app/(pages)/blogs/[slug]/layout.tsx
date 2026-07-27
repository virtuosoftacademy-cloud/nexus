import { Metadata } from "next";
import { generateStaticSlugs, getPostBySlug } from "../constant";


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


export default function BlogLayout({
    children,
}: Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <div className='min-h-screen mx-auto'>
            {children}
        </div>
    )
}