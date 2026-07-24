import Image from "next/image";

export type NoticeItem = {
    id: string;
    text: string;
};

export type ImportantNoticeProps = {
    titleStart: string;
    titleHighlight: string;
    intro: string;
    items: NoticeItem[];
    closing: string;
    image: {
        src: string;
        alt: string;
    };
    /** "left" (default, as in the design) or "right" */
    imagePosition?: "left" | "right";
};

// ── Component ────────────────────────────────────────────────────────────
export default function Notice({
    titleStart,
    titleHighlight,
    intro,
    items,
    closing,
    image,
    imagePosition = "left",
}: ImportantNoticeProps) {
    return (
        <section className="bg-primary/5 py-10 md:py-20">
            <div
                className={`grid grid-cols-1 md:grid-cols-2 px-4 md:px-18 ${imagePosition === "right" ? "md:[direction:rtl]" : ""
                    }`}
            >
                {/* ── Image ── */}
                <div className="relative min-h-[280px] md:min-h-[420px] md:[direction:ltr]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col justify-center font-heading text-sm md:text-lg px-2 py-12 md:px-14 md:py-16 md:[direction:ltr]">
                    <h4 className="text-3xl md:text-4xl font-bold text-foreground font-sans">
                        {titleStart}{" "}
                        <span className="text-primary">{titleHighlight}</span>
                    </h4>

                    <p className="mt-3 text-foreground/80">{intro}</p>

                    <ul className="mt-6 space-y-3">
                        {items?.map((item) => (
                            <li key={item.id} className="pl-6 text-primary/80 bg-background py-2">
                                {item.text}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 text-foreground/80">{closing}</p>
                </div>
            </div>
        </section>
    );
}

// ── Data (move to app/constant) ──────────────────────────────────────────
export const uaeImportantNotice: ImportantNoticeProps = {
    titleStart: "Important",
    titleHighlight: "Notice",
    intro: "During the UAE launch phase:",
    items: [
        { id: "advisory-basis", text: "Services are delivered on an advisory basis" },
        { id: "representation-scope", text: "Regulatory representation scope is defined clearly" },
        { id: "engagement-terms", text: "Engagement terms are structured proportionately" },
    ],
    closing: "This ensures responsible and compliant growth.",
    image: {
        src: "/assets/services/accounting-uae/notice.png",
        alt: "Hand holding a UAE flag against the Dubai skyline",
    },
    imagePosition: "left",
};

// ── Usage ────────────────────────────────────────────────────────────────
// import ImportantNotice, { uaeImportantNotice } from "@/components/sections/ImportantNotice";
// <ImportantNotice {...uaeImportantNotice} />