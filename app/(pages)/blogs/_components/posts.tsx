// components/blog/BlogPage.tsx  (or app/blog/page.tsx)

import Link from "next/link";
import { Clock } from "lucide-react";
import { BlogCategories, FeaturedPosts, SidebarPosts } from "@/app/_constant";
import BlogCard from "@/components/ui/BlogCard";
import SidebarPost from "@/components/ui/SidebarPost";

export default function Posts() {
  return (
    <div className="min-h-screen pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10">

        {/* ══ LEFT COLUMN ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">

          {/* ── Latest (Featured) ── */}
          <h4 className="text-2xl md:text-4xl font-semibold text-foreground border-l-4 pl-3 border-primary">
            Latest
          </h4>
          <div className="bg-accent p-4">
            {/* Section heading with left teal bar */}

            <Link href={FeaturedPosts.href} className="group flex flex-col gap-4">
              {/* Hero image */}
              <div className="overflow-hidden w-full">
                <img
                  src={FeaturedPosts.image}
                  alt={FeaturedPosts.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h4 className="text-lg md:text-[1.75rem] font-semibold text-foreground leading-snug">
                {FeaturedPosts.title}
              </h4>

              {/* Excerpt */}
              <p className="text-sm md:text-base font-serif text-foreground/60 leading-relaxed">
                {FeaturedPosts.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-1.5 text-xs md:text-base text-primary">
                <Clock className="h-3.5 w-3.5" />
                <span>{FeaturedPosts.timeAgo}</span>
                <span>|</span>
                <span>{FeaturedPosts.category}</span>
              </div>
            </Link>
          </div>

          {/* ── Category sections ── */}
          {BlogCategories.map((cat) => (
            <div key={cat.accent}>
              {/* Category heading */}
              <h4 className="text-2xl md:text-[1.75rem] font-bold text-foreground my-6 md:my-6 border-l-4 pl-3 border-primary">
                {cat.label}{" "}
                <span className="text-primary">{cat.accent}</span>
              </h4>

              {/* 3-col grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {cat.posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ══ RIGHT SIDEBAR ════════════════════════════════════════════════════ */}
        <aside className="flex flex-col gap-4">
          {/* Sidebar heading */}
          <h4 className="text-lg md:text-2xl font-bold text-foreground mb-2 border-l-4 pl-3 border-primary">
            More from Nexus
          </h4>

          {/* Sidebar posts */}
          <div className="space-y-6">
            {SidebarPosts.map((post) => (
              <SidebarPost key={post.id} post={post} />
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
}