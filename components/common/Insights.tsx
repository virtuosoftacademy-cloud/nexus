
import { BlogPost } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { coverOf } from "@/lib/blog-image";
import SafeImage from "../ui/safeimage";

const GRADIENT_FROM = "hsl(172 66% 22%)";
const GRADIENT_TO = "hsl(200 40% 14%)";

type BlogPostProps={
  posts:BlogPost[]
}

export function InsightsSection({ posts }: BlogPostProps) {
  return (
    <section className="bg-background py-10 md:py-20">
      <div className="mx-auto px-8 md:px-18">
        <h4 className="text-2xl md:text-4xl font-bold text-foreground mb-10 text-center md:text-left">
          Our Latest{" "}
          <span className="text-primary">Insights</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts?.map((post) => (
            <a
              href={post.href}
              key={post.id}
              className="overflow-hidden group cursor-pointer block"
            >
              {/* Thumbnail */}
              <div
                className="flex items-end relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${GRADIENT_FROM}, ${GRADIENT_TO})`,
                }}
              >
                <SafeImage src={coverOf(post)} alt={post.title} width={400} height={800} className="object-cover w-full h-96" />
                {/* <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    background: "hsl(172 66% 50% / 0.18)",
                    color: "hsl(168 76% 75%)",
                    border: "1px solid hsl(172 66% 50% / 0.25)",
                  }}
                >
                  {post.category?.label}
                </span> */}
              </div>

              <div className="px-2 py-6 border-b border-primary/60">
                {/* <p
                  className="text-base text-primary tracking-widest font-bold mb-2"
                >
                  {post.category?.label}
                </p> */}
                <h4 className="font-bold text-foreground text-xl leading-snug mb-2 line-clamp-1">
                  {post.title}
                </h4>
                <p className="text-base leading-relaxed font-serif">{post.excerpt}</p>
                {/* <div className="flex justify-between pt-2 text-foreground/50 text-sm">
                  <span>{post.timeAgo}</span>
                  <span><Bookmark size={18} /> </span>
                </div> */}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={"/blogs"}>
            <Button
              variant="ternary"
            >
              See All Insights
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}