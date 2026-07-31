

import Link from "next/link";
import { Clock } from "lucide-react";
import Image from "next/image";
import { coverOf } from "@/lib/blog-actions/blog-image";
import { BlogPost } from "@/app/types/types";
import SafeImage from "./safeimage";

interface SidebarPostProps {
  post: BlogPost;
}

export default function SidebarPost({ post }: SidebarPostProps) {
  const { title, timeAgo, href } = post;

  return (
    <Link
      href={href}
      className="flex items-start gap-3 p-4 group max-w-sm bg-accent"
    >
      {/* Text */}
      <article className="flex-1 flex flex-col gap-1.5">
        <p className="text-sm md:text-base font-semibold text-foreground leading-snug transition-colors line-clamp-2">
          {title}
        </p>
        <div className="flex items-center gap-0.5 md:gap-1.5 text-xs text-foreground/45">
          <Clock className="h-3 w-3" />
          <span>{timeAgo}</span>
          {/* <span>|</span>
          <span>{category}</span> */}
        </div>
      </article>

      {/* Thumbnail */}
      <div className="w-16 h-14 shrink-0 overflow-hidden">
        <SafeImage
          src={coverOf(post)} alt={title} width={200} height={175} priority
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Link>
  );
}