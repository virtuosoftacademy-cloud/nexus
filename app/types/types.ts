
import { isRenderableImageSrc } from "@/lib/blog-actions/blog-image";

export type PostFormState = {
    error?: string;
    fieldErrors?: Partial<Record<string, string>>;
    /**
     * What was submitted, echoed back so a rejected save can be re-rendered
     * with the author's own text still in place. React resets an uncontrolled
     * form once its action resolves, so without this a missing image would
     * blank out the title, excerpt and body along with it.
     */
    values?: ParsedPostForm;
};

export function slugify(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export function computeTimeAgo(dateStr: string): string {
    const then = new Date(dateStr).getTime();
    const diffMs = Date.now() - then;
    const minutes = Math.floor(diffMs / 60_000);
    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years === 1 ? "" : "s"} ago`;
}

export type ParsedPostForm = {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    /** Required by the form; nullable only for rows created before it existed. */
    thumbnailImage: string | null;
    accent: string;
    date: string;
    categoryId: number | null;
    isFeatured: boolean;
    isSidebar: boolean;
};

// Always returns `values` — even when invalid — so the caller can hand the
// submission back to the form instead of letting React blank it. Callers must
// check `fieldErrors` before writing anything to the database.
export function parseAndValidatePostForm(formData: FormData): {
    values: ParsedPostForm;
    fieldErrors?: Record<string, string>;
} {
    const title = String(formData.get("title") ?? "").trim();
    const excerpt = String(formData.get("excerpt") ?? "").trim();
    const content = String(formData.get("content") ?? "").trim();
    const image = String(formData.get("image") ?? "").trim();
    const thumbnailImage = String(formData.get("thumbnailImage") ?? "").trim();
    // A highlighted PHRASE from the title, not a colour. It used to fall back
    // to "#3b82f6" — a leftover from when this field held a hex value — and
    // because AccentedTitle appends an accent it can't find in the title, any
    // post saved without one rendered "#3b82f6" after its heading. Blank now
    // stays blank, which AccentedTitle already handles by returning the title.
    const accent = String(formData.get("accent") ?? "").trim();
    const date = String(formData.get("date") ?? "").trim();
    const categoryIdRaw = String(formData.get("categoryId") ?? "");

    const fieldErrors: Record<string, string> = {};
    if (!title) fieldErrors.title = "Title is required.";
    if (!excerpt) fieldErrors.excerpt = "Excerpt is required.";
    if (!content) fieldErrors.content = "Content is required.";
    if (!image) fieldErrors.image = "Image URL or path is required.";
    // The paste-a-URL box accepts free text; storing it would crash next/image
    // on the public post page rather than failing here.
    else if (!isRenderableImageSrc(image))
        fieldErrors.image =
            "Image must be a path starting with / or a full http(s) URL.";
    // Cards run this through next/image just like the cover, so it has to be
    // both present and renderable.
    if (!thumbnailImage) fieldErrors.thumbnailImage = "Card thumbnail is required.";
    else if (!isRenderableImageSrc(thumbnailImage))
        fieldErrors.thumbnailImage =
            "Card thumbnail must be a path starting with / or a full http(s) URL.";
    if (!date) fieldErrors.date = "Publish date is required.";

    const invalid = Object.keys(fieldErrors).length > 0;

    return {
        fieldErrors: invalid ? fieldErrors : undefined,
        values: {
            title,
            excerpt,
            content,
            image,
            thumbnailImage: thumbnailImage || null,
            accent,
            date,
            categoryId: categoryIdRaw ? Number(categoryIdRaw) : null,
            isFeatured: formData.get("isFeatured") === "on",
            isSidebar: formData.get("isSidebar") === "on",
        },
    };
}


// ---------------------------------------------------------------------------
// Section: Approach section types
// ---------------------------------------------------------------------------

/** Image descriptor for an Approach row */
export type ApproachImage = {
    src: string
    alt: string
}

/** One alternating text/image row in the Approach section */
export type ApproachRowData = {
    id: string
    /** Heading split so the highlighted span stays dynamic */
    titleStart: string
    titleHighlight: string
    intro: string
    items: string[]
    closing: string
    image: ApproachImage
    /** Controls which side the image renders on at lg+ */
    imagePosition: "left" | "right"
}
// Faq's
// ---------------------------------------------------------------------------
// Section: FaqWithImage types
// ---------------------------------------------------------------------------
/** One accordion entry with its paired image */
export type FaqImageItem = {
    /** Unique value used by Radix Accordion to identify the item */
    value: string
    /** Trigger label (e.g. "1. Structural Clarity") */
    trigger: string
    /** Expanded description text */
    content: string
    /** Image URL (remote or /public path) shown while this item is open */
    image: string
    /** Alt text for the image */
    alt: string
}

export type FaqWithImageProps = {
    /** Heading before the highlighted span */
    titleStart?: string
    /** Highlighted (text-primary) part of the heading */
    titleHighlight?: string
    /** Serif subtitle under the heading */
    subtitle?: string
    /** Accordion items; component renders null when missing/empty */
    data?: FaqImageItem[]
}



export type HeroData = {
    title: string;
    description: string;
    width: string;
    image: string;
}


// ---------------------------------------------------------------------------
// Section: ServicesCarousel types
// ---------------------------------------------------------------------------


/** One carousel slide: left service card + right case-illustration card */
export type ServiceSlide = {
    id: string
    /** Image path for the service card chip (e.g. /assets/icon/coins.svg) */
    icon: string
    /** Alt text for the service card icon */
    iconAlt: string
    /** Image path for the case card chip */
    caseIcon: string
    /** Alt text for the case card icon */
    caseIconAlt: string

    /* --- Left card: service description --- */
    titleLine1: string
    titleLine2: string
    intro?: string
    listHeading: string
    listItems: string[]
    outro?: string
    optionalHeading?: string
    optionallistItems?: string[]
    optionalParagraph?: string
    /* --- Right card: case illustration --- */
    caseTitle: string
    caseIntro?: string
    caseProblems?: string[]
    caseSolutionHeading?: string
    caseSolutions?: string[]
    caseResultTitle?: string
    caseResult?: string
    caseButton?: string
    caseDialogTitle?: string
    caseDialogIntro?: string
    caseDialogItemsTitle?: string
    caseDialogItems?: string[]
    caseDialogIcon?: string
    caseDialogIconAlt?: string
}


export type ServicesCarouselProps = {
    titleStart: string
    titleHighlight: string
    subtitle: string
    slides: ServiceSlide[]
}


// ---------------------------------------------------------------------------
// Section: ContactCta types
// ---------------------------------------------------------------------------

/** Image descriptor for the CTA section */
export type ContactCtaImage = {
    src: string
    alt: string
}

/**
 * Props for <ContactCta /> — bundled page constant:
 *   { Component: ContactCta, props: contactCtaUk }
 */
export type ContactCtaProps = {
    titleStart?: string
    titleHighlight?: string
    intro?: string
    listIntro?: string
    /** List rows; component renders null when missing/empty */
    discussionPoints?: string[]
    closing?: string
    buttonLabel?: string
    /** Defaults to /contact when omitted */
    buttonHref?: string
    image?: ContactCtaImage
}

import type { BlogPost as BlogPostRow, } from "@/generated/prisma/client";

/**
 * A blog post as the UI receives it: the Prisma row, optionally carrying
 * its included category relation (queries in lib/blogActions use
 * include: { category: true }). Derived from the generated client so the
 * type can never drift from the schema — new columns appear here
 * automatically after `prisma generate`.
 */
export type BlogPost = BlogPostRow  
