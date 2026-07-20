
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/app/(pages)/case-studies/constant";

// ---------------------------------------------------------------------------
// Section: Component — CaseStudyCard
// ---------------------------------------------------------------------------
export function CaseStudyCard({ image,category,href,id,imageAlt,serviceAreas,summary,title }: CaseStudy ) {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* ── Cover image with gold accent strip beneath ── */}
            <div className="relative h-80 w-full border-b-4 border-[#AD8228]/80">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30rem"
                    className="object-cover"
                />
            </div>

            {/* ── Content ── */}
            <div className="flex flex-1 flex-col p-8">
                {/* Category */}
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {category}
                </p>

                {/* Title */}
                <h4 className="mt-3 text-2xl font-bold leading-tight text-foreground">
                    {title}
                </h4>

                {/* Summary */}
                <p className="mt-4 font-serif text-lg leading-relaxed text-foreground/70">
                    {summary}
                </p>

                {/* Service areas */}
                <p className="mt-6 text-[0.70rem] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                    Service Areas
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {serviceAreas.map((area) => (
                        <li
                            key={area}
                            className="rounded-full border border-border bg-accent px-4 py-1.5 text-base text-foreground font-semibold"
                        >
                            {area}
                        </li>
                    ))}
                </ul>

                {/* Divider + link pinned to the card bottom (mt-auto) so
                    cards in a grid row align their footers */}
                <div className="mt-auto pt-8">
                    <div className="border-t border-border" />
                    <Link
                        href={href}
                        className="group mt-5 inline-flex items-center gap-2 font-semibold text-[#AD8228]"
                    >
                        Read case study
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}