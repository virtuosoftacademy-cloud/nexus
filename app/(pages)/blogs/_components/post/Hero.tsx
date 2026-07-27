// components/blog/BlogPostHero.tsx

import { LinkedinIcon } from "@/components/ui/linkedin";
import type { BlogPost } from "@/generated/prisma/client";
import { YoutubeIcon } from "@/components/ui/youtube";
import { InstagramIcon } from "@/components/ui/instagram";
import { FacebookIcon } from "@/components/ui/facebook";
import { TwitterIcon } from "@/components/ui/twitter";
import Link from "next/link";
import Image from "next/image";
import { coverOf } from "@/lib/blog-image";
import SafeImage from "@/components/ui/safeimage";

interface BlogPostHeroProps {
  post: BlogPost;
}

const socialLinks = [
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "X" },
];

// Renders the title with the post's accent phrase highlighted where it
// appears inside the title; if the phrase isn't in the title, it's
// appended highlighted (matches the previous visual behavior).
function AccentedTitle({ title, accent }: { title: string; accent: string }) {
  const trimmed = accent.trim();
  if (!trimmed) return <>{title}</>;

  const index = title.toLowerCase().indexOf(trimmed.toLowerCase());
  if (index === -1) {
    return (
      <>
        {title} <span className="text-primary">{trimmed}</span>
      </>
    );
  }

  return (
    <>
      {title.slice(0, index)}
      <span className="text-primary">{title.slice(index, index + trimmed.length)}</span>
      {title.slice(index + trimmed.length)}
    </>
  );
}

export default function Hero({ post }: BlogPostHeroProps) {
  if (!post) return null;

  const { title, excerpt, date, accent } = post;

  return (
    <section className="bg-accent pt-20 pb-10 md:pt-50 md:pb-30 px-8 sm:px-16">
      <div className="mx-auto max-w-[212.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">

          {/* ── Left ── */}
          <div className="flex flex-col gap-6">

            {/* Category + divider */}
            {/* <div>
              <p className="text-sm md:text-xl font-semibold text-foreground mb-3">{category}</p>
              <hr className="border-border" />
            </div> */}

            {/* Published date */}
            <h2 className="text-sm md:text-lg text-foreground/70">
              Published: {date}
            </h2>

            {/* Title */}
            <h4 className="text-4xl md:text-[3.5rem] font-semibold text-foreground leading-tight max-w-4xl">
              <AccentedTitle title={title} accent={accent} />
            </h4>

            {/* Excerpt paragraphs */}
            {excerpt && (
              <div className="space-y-4">
                {excerpt.split("\n\n").map((para, i) => (
                  <h3 key={i} className="text-sm md:text-xl text-foreground/70 leading-relaxed">
                    {para}
                  </h3>
                ))}
              </div>
            )}

            {/* Social icons */}
            {/* <div className="flex items-center gap-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-opacity hover:opacity-70 text-primary"
                >
                  <Icon />
                </Link>
              ))}
            </div> */}
          </div>

          {/* ── Right: image ── */}
          <div className="w-full h-80 lg:h-105 overflow-hidden">
            <SafeImage
              src={coverOf(post)}
              alt={title}
              width={800}
              height={840}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}