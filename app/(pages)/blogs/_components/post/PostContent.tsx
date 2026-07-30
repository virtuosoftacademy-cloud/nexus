// components/blog/BlogPostContent.tsx

import { getBlogData } from "@/lib/blogActions";
import SidebarPost from "@/components/ui/SidebarPost";
import { BlogPost } from "@/app/types/types";

interface BlogPostContentProps {
    post: BlogPost;
}

export default async function PostContent({ post }: BlogPostContentProps) {
    if (!post) return null;

    const { sidebarPosts } = await getBlogData();

    const { content } = post;

    return (
        <section className="bg-background py-12 px-6 sm:px-12">
            <div className="mx-auto max-w-[212.5rem]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px]">

                    <h3 className="font-serif text-sm md:text-xl text-foreground/70 whitespace-pre-line max-w-4xl">
                        {content}
                    </h3>

                    {/* ══ RIGHT SIDEBAR ════════════════════════════════════════════════════ */}
                    <aside className="flex flex-col gap-4">
                        {/* Sidebar heading */}
                        <h4 className="text-lg md:text-2xl font-bold text-foreground mb-2 border-l-4 pl-3 border-primary">
                            More from Nexus
                        </h4>

                        {/* Sidebar posts */}
                        <div className="space-y-6">
                            {sidebarPosts.slice(0, 4).map((post) => (
                                <SidebarPost key={post.id} post={post} />
                            ))}
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    );
}