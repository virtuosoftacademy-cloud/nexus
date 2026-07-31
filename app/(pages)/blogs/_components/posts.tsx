// ============================================================================
// File: app/blogs/_components/posts.tsx
// Purpose: Blog index content — data source swapped from the static
//          constant.ts arrays to live Prisma queries. STRICTLY NO DESIGN
//          CHANGES: markup, classes, headings, and the commented-out
//          category-heading / meta blocks are preserved exactly as-is.
//            FeaturedPosts (single object) -> newest isFeatured post
//            BlogCategories               -> categories with their posts
//            SidebarPosts                 -> isSidebar posts (all, no cap)
//          Rendered by app/blogs/page.tsx (a Server Component — this file
//          must NOT be imported from a 'use client' component).
// Type: Async Server Component
// ============================================================================

import Link from "next/link";
import { Clock } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import SidebarPost from "@/components/ui/SidebarPost";
import { getBlogData } from "@/lib/blog-actions/blogActions";
import Image from "next/image";
import { coverOf } from "@/lib/blog-actions/blog-image";
import SafeImage from "@/components/ui/safeimage";

export default async function Posts() {
  const { featured, sidebarPosts } = await getBlogData();

  return (
    <div className="min-h-screen pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">

        {/* ══ LEFT COLUMN ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">

          {/* ── Latest (Featured) ── */}
          {featured && (
            <>
            <h4 className="text-2xl md:text-4xl font-semibold text-foreground border-l-4 pl-3 border-primary">
              Latest
            </h4>
            <div className="bg-accent p-4">
              {/* Section heading with left teal bar */}

              <Link href={featured.href} className="group flex flex-col gap-4">
                {/* Hero image */}
                <div className="overflow-hidden w-full">
                  <SafeImage
                    src={coverOf(featured)}
                    alt={featured.title}
                    width={400}
                    height={700}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-[1.75rem] font-semibold text-foreground leading-snug">
                  {featured.title}{" "}<span>{featured.accent}</span>
                </h4>

                {/* Excerpt */}
                <p className="text-sm md:text-base font-heading text-foreground/60 leading-relaxed">
                  {featured.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-1.5 text-xs md:text-base text-primary">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{featured.timeAgo}</span>
                  {/* <span>|</span>
                <span>{FeaturedPosts.category}</span> */}
                </div>
              </Link>
            </div>
            </>
          )}

          {/* ── Category sections ── */}
          {/* {categories.map((cat) => (
            <div key={cat.id}>
              <h4 className="text-2xl md:text-[1.75rem] font-bold text-foreground my-6 md:my-6 border-l-4 pl-3 border-primary">
                {cat.label}{" "}
                <span className="text-primary">{cat.accent}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {cat.posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          ))} */}
          {sidebarPosts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {sidebarPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* ══ RIGHT SIDEBAR ════════════════════════════════════════════════════ */}
        {sidebarPosts.length > 0 && (
          <aside className="flex flex-col gap-4">
            {/* Sidebar heading */}
            <h4 className="text-lg md:text-2xl font-bold text-foreground mb-2 border-l-4 pl-3 border-primary">
              More from Nexus
            </h4>

            {/* Sidebar posts */}
            <div className="space-y-6">
              {sidebarPosts.map((post) => (
                <SidebarPost key={post.id} post={post} />
              ))}
            </div>
          </aside>
        )}

      </div>
    </div>
  );
}