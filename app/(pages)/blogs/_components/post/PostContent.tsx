// components/blog/BlogPostContent.tsx

import { getBlogData } from "@/lib/blog-actions/blogActions";
import SidebarPost from "@/components/ui/SidebarPost";
import { BlogPost } from "@/app/types/types";
import { postBodyHtml } from "@/lib/blog-actions/post-body";

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

                    {/* The body is admin-authored HTML from the editor (legacy
                        posts are plain text and get converted). It is sanitised
                        on every render rather than on save, so anything already
                        stored is cleaned too, and a tightened allow-list applies
                        immediately without a data migration. */}
                    <div
                        className="font-heading text-sm md:text-xl text-foreground/70 max-w-4xl
                                   [&_p]:mb-4
                                   [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:md:text-4xl [&_h1]:font-semibold [&_h1]:text-foreground
                                   [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:md:text-3xl [&_h2]:font-semibold [&_h2]:text-foreground
                                   [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:text-foreground
                                   [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6
                                   [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6
                                   [&_li]:mb-1
                                   [&_blockquote]:mb-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic
                                   [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-foreground [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-background
                                   [&_hr]:my-6 [&_hr]:border-border
                                   [&_img]:my-6 [&_img]:h-auto [&_img]:max-w-full
                                   [&_figure]:my-6 [&_figcaption]:mt-2 [&_figcaption]:text-sm [&_figcaption]:text-foreground/50
                                   [&_strong]:font-semibold [&_strong]:text-foreground
                                   [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2"
                        dangerouslySetInnerHTML={{ __html: postBodyHtml(content) }}
                    />

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