// components/blog/BlogPostHero.tsx

import { LinkedinIcon } from "@/components/ui/linkedin";
import { BlogPost } from "../../constant";
import { YoutubeIcon } from "@/components/ui/youtube";
import { InstagramIcon } from "@/components/ui/instagram";
import { FacebookIcon } from "@/components/ui/facebook";
import { TwitterIcon } from "@/components/ui/twitter";
import Link from "next/link";

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

export default function Hero({ post }: BlogPostHeroProps) {
  if (!post) return null;

  const { category, title, excerpt, image, date,accent } = post;

  return (
    <section className="bg-background py-12 px-6 sm:px-12">
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
              {title.split(/(Long-Term Growth|structured|scale|clarity)/i).map((part, i) =>
                /Long-Term Growth|structured|scale|clarity/i.test(part)
                  ? <span key={i} className="text-primary">{part}</span>
                  : part
              )}
              {" "}<span className="text-primary">{accent}</span>
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
            <div className="flex items-center gap-5">
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
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className="w-full h-80 lg:h-105 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}