// components/blog/BlogCard.tsx

import Link from "next/link";
import { Clock } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/app/types/types";
import { coverOf } from "@/lib/blog-image";
import SafeImage from "./safeimage";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, excerpt, timeAgo, href } = post;

  return (
    <Link href={href} className="flex flex-col gap-3 group bg-accent p-4">
      {/* Image */}
      <div className="overflow-hidden w-full h-44">
        <SafeImage src={coverOf(post)} alt={title} width={1200} height={675} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <h4 className="text-base md:text-xl font-bold text-foreground leading-snug line-clamp-2">
        {title}
      </h4>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-sm text-foreground/55 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      )}

      {/* Meta */}
      <div className="flex items-center gap-1.5 text-xs text-primary mt-auto">
        <Clock className="h-3.5 w-3.5" />
        <span>{timeAgo}</span>
        {/* <span className="mx-1">|</span>
        <span>{category}</span> */}
      </div>
    </Link>
  );
}