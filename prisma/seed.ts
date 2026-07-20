
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

function slugify(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

function computeTimeAgo(dateStr: string): string {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diffMs / 86_400_000);
    if (days < 1) return "today";
    if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years === 1 ? "" : "s"} ago`;
}

async function main() {
    // ── Clean slate (delete children before parents) ──────────────
    await prisma.blogPost.deleteMany();
    await prisma.blogCategory.deleteMany();
    await prisma.session.deleteMany();
    await prisma.account.deleteMany();
    await prisma.user.deleteMany();

    // ── Admin user ────────────────────────────────────────────────
    // Local dev credentials — change before deploying anywhere.
    const admin = await prisma.user.create({
        data: {
            name: "Admin",
            email: "admin@example.com",
            password: await hash("change-me-locally-123", 12),
            role: "ADMIN",
        },
    });
    console.log(`✔ Admin user: ${admin.email} / change-me-locally-123`);

    // ── Categories ────────────────────────────────────────────────
    const categoryData = [
        { label: "Technology", accent: "#3b82f6" },
        { label: "Engineering", accent: "#8b5cf6" },
        { label: "Databases", accent: "#0ea5e9" },
        { label: "Design", accent: "#ec4899" },
    ];

    const categories: Record<string, number> = {};
    for (const c of categoryData) {
        const created = await prisma.blogCategory.create({ data: c });
        categories[c.label] = created.id;
    }
    console.log(`✔ ${categoryData.length} categories`);

    // ── Posts ─────────────────────────────────────────────────────
    const postsData = [
        {
            title: "How we rebuilt our data layer with Prisma",
            category: "Technology",
            accent: "#3b82f6",
            date: "2026-07-06",
            image: "/images/posts/data-layer.jpg",
            isFeatured: true,
            isSidebar: false,
            excerpt:
                "We moved twelve hardcoded arrays into MySQL and lived to tell the tale — the migration path, the schema, and what we'd do differently.",
            content: `For two years our blog data lived in a TypeScript file. Every new post was a pull request, every typo fix was a deploy, and the file had grown to four thousand lines.

This post walks through how we moved it into MySQL with Prisma: designing the schema, seeding the existing content, and rewriting the three data functions the whole site depended on.

The biggest surprise wasn't the migration itself — it was how many small decisions the old file had been hiding. Featured placement, sidebar ordering, category colors: all of it was implicit in array order. Making it explicit in the schema forced us to actually decide.`,
        },
        {
            title: "Shipping faster with server actions",
            category: "Engineering",
            accent: "#8b5cf6",
            date: "2026-07-01",
            image: "/images/posts/server-actions.jpg",
            isFeatured: false,
            isSidebar: true,
            excerpt:
                "Server actions removed an entire API layer from our admin panel. Here's where they shine and where they bite.",
            content: `When we rebuilt the admin panel, we skipped API routes entirely. Every form posts to a server action, every mutation revalidates its paths, and the client bundle got smaller.

The wins are real: colocation, type safety across the boundary, and progressive enhancement for free.

The bites are also real: actions are public endpoints whether you like it or not, so every destructive one needs its own auth check. Middleware protecting your routes does not protect your actions.`,
        },
        {
            title: "A field guide to MySQL indexes",
            category: "Databases",
            accent: "#0ea5e9",
            date: "2026-06-24",
            image: "/images/posts/mysql-indexes.jpg",
            isFeatured: true,
            isSidebar: true,
            excerpt:
                "Composite indexes, covering indexes, and the query planner: a practical tour using a real blog schema.",
            content: `Indexes are the highest-leverage performance tool most applications never tune. This guide uses our actual blog schema to show what the query planner does with and without them.

We cover the unique index on slug (free lookups for every post page), why filtering on isFeatured alone rarely uses an index, and when a composite index on (categoryId, date) pays for itself.

The rule of thumb that survived all our benchmarks: index what you filter and sort on together, and measure with EXPLAIN before adding anything else.`,
        },
        {
            title: "Why we write excerpts by hand",
            category: null,
            accent: "#f59e0b",
            date: "2026-06-15",
            image: "/images/posts/excerpts.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Auto-truncated excerpts read like auto-truncated excerpts. The case for treating the summary as its own piece of writing.",
            content: `The first version of our blog generated excerpts by slicing the first 160 characters of each post. It worked, in the sense that text appeared in the cards.

It also read exactly like what it was: a sentence cut off mid-thought, sometimes mid-wo.

An excerpt has a different job than an opening paragraph. The opening pulls a reader who already clicked; the excerpt earns the click. Writing it separately takes ninety seconds and changes the click-through rate more than any layout tweak we've shipped.`,
        },
        {
            title: "Designing an admin panel nobody has to learn",
            category: "Design",
            accent: "#ec4899",
            date: "2026-06-02",
            image: "/images/posts/admin-design.jpg",
            isFeatured: true,
            isSidebar: false,
            excerpt:
                "Good admin UI is boring on purpose: predictable tables, honest buttons, and confirmations that say what will actually happen.",
            content: `Admin panels fail differently than marketing pages. Nobody bounces — they just make mistakes.

So the design goals invert. Novelty becomes a cost. The best compliment an admin table can get is that nobody noticed it.

Our rules ended up simple: every destructive action names its target in the confirmation, every toggle shows its current state without hovering, and every form tells you where you'll land after saving.`,
        },
        {
            title: "Auth.js v5 in production: the checklist",
            category: "Engineering",
            accent: "#8b5cf6",
            date: "2026-05-20",
            image: "/images/posts/authjs.jpg",
            isFeatured: false,
            isSidebar: true,
            excerpt:
                "JWT vs database sessions, the edge-safe config split, and the five environment variables that actually matter.",
            content: `Auth.js v5 is a large improvement over v4, but the migration notes bury the two decisions that matter most.

First: if you use the Credentials provider, you are using JWT sessions. Database sessions are not supported with it, full stop.

Second: middleware runs on the Edge runtime, and your ORM almost certainly doesn't. Split your config so the middleware imports a file with zero database imports, and keep the adapter in the main auth.ts. Everything else is filling in environment variables.`,
        },
    ];

    for (const p of postsData) {
        const slug = slugify(p.title);
        await prisma.blogPost.create({
            data: {
                slug,
                title: p.title,
                accent: p.accent,
                excerpt: p.excerpt,
                image: p.image,
                date: p.date,
                timeAgo: computeTimeAgo(p.date),
                content: p.content,
                href: `/blog/${slug}`,
                isFeatured: p.isFeatured,
                isSidebar: p.isSidebar,
                categoryId: p.category ? categories[p.category] : null,
                authorId: admin.id,
            },
        });
    }
    console.log(`✔ ${postsData.length} posts`);

    console.log("\nSeed complete. Log in at /login with the admin credentials above.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());