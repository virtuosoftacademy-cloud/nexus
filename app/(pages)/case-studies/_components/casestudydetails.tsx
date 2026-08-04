
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowList } from "@/components/ui/ArrowList";
import { SquareArrowOutUpRight } from "lucide-react";
import { CaseStudyDetailProps } from "@/app/(admin)/admin/case-study/types";

function SectionHeading({ title }: { title: string }) {
    const [first, ...rest] = title.split(" ");

    return (
        <h4 className="text-3xl font-semibold text-foreground md:text-4xl">
            {first}{" "}
            {rest.length > 0 && (
                <span className="text-primary">{rest.join(" ")}</span>
            )}
        </h4>
    );
}

// ---------------------------------------------------------------------------
// Section: Sub-component — BodyText
// Serif paragraph stack used by every prose section.
// ---------------------------------------------------------------------------
function BodyText({ paragraphs }: { paragraphs?: string[] }) {
    if (!paragraphs?.length) return null;

    return (
        <div className="mt-4 space-y-4">
            {/* Index keys: these lists are rendered once from server data and
                never reordered or filtered, and the content itself is not
                unique — two identical paragraphs or repeated phase names are
                perfectly legal input, and keying on the text collides. */}
            {paragraphs.map((paragraph, i) => (
                <p
                    key={i}
                    className="font-heading text-sm leading-relaxed text-foreground/80 md:text-lg"
                >
                    {paragraph}
                </p>
            ))}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Section: Component — CaseStudyDetail
// ---------------------------------------------------------------------------
export default function CaseStudyDetail({
    heroTitle,
    heroSubtitle,
    heroImage,
    industry,
    serviceAreas,
    summary,
    situation,
    challenge,
    approach,
    timeline,
    outcome,
    keyResults,
    relatedServices,
    callout,
}: CaseStudyDetailProps) {
    return (
        <div>
            {heroTitle && (
                <section className="relative overflow-hidden -z-20 flex items-center">
                    {/* Background image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${heroImage}')` }}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 pointer-events-none" />

                    {/* Content */}
                    <div className="relative w-full px-6 sm:px-14 pb-20 pt-30 md:pt-40 max-w-5xl">
                        <div className="flex flex-col text-center md:text-left">
                            <h4 className="text-4xl md:text-[3.5rem] font-medium text-white md:leading-tight">
                                {heroTitle}
                            </h4>
                            <p className="text-lg md:text-base text-accent leading-tight max-w-[54em]">
                                {heroSubtitle}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* ---------------------------------------------------------------
                Industry / Service Areas strip
            ---------------------------------------------------------------- */}
            <div className="mx-auto w-full px-6 sm:px-16 ">

                <section className="py-10 md:py-14">
                    <div className="grid border border-border md:grid-cols-2">
                        <div className="p-8 md:border-r md:border-border">
                            <h4 className="text-2xl font-semibold uppercase text-foreground md:text-3xl">
                                Industry
                            </h4>
                            <p className="mt-3 font-heading text-lg text-foreground/70 md:text-base">
                                {industry}
                            </p>
                        </div>
                        <div className="border-t border-border p-8 md:border-t-0">
                            <h4 className="text-2xl font-semibold uppercase text-foreground md:text-3xl">
                                Service Areas
                            </h4>
                            <p className="mt-3 font-heading text-lg text-foreground/70 md:text-base max-w-lg">
                                {serviceAreas?.join("  ·  ")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------
                Executive Summary
            ---------------------------------------------------------------- */}
                <section className="py-10 md:py-14">
                    <SectionHeading title="Executive Summary" />
                    <BodyText paragraphs={summary} />
                </section>

                {/* ---------------------------------------------------------------
                The Situation — paragraphs, question list, closing line
            ---------------------------------------------------------------- */}
                <section className="border-t border-border py-10 md:py-14">
                    <SectionHeading title="The Situation" />
                    <BodyText paragraphs={situation?.paragraphs} />
                    <div className="mt-4">
                        <ArrowList
                            items={situation?.questions}
                            itemsClassName="text-sm md:text-lg text-foreground/80"
                            markerclassName="text-primary text-xl -mt-0 ml-0"
                        />
                    </div>
                    <BodyText
                        paragraphs={situation?.closing ? [situation.closing] : undefined}
                    />
                </section>

                {/* ---------------------------------------------------------------
                The Challenge
            ---------------------------------------------------------------- */}
                <section className="border-t border-border py-10 md:py-14">
                    <SectionHeading title="The Challenge" />
                    <BodyText paragraphs={challenge} />
                </section>

                {/* ---------------------------------------------------------------
                Our Approach — intro + 4 bordered cards
            ---------------------------------------------------------------- */}
                <section className="border-t border-border py-10 md:py-14">
                    <SectionHeading title="Our Approach" />
                    <BodyText paragraphs={approach?.intro} />

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        {approach?.cards?.map((card, i) => (
                            <div key={i} className="border border-border p-6">
                                <h4 className="text-lg font-semibold text-primary">
                                    {card.title}
                                </h4>
                                <p className="mt-3 font-heading text-lg leading-relaxed text-foreground/80">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ---------------------------------------------------------------
                Engagement Timeline — teal-headed table
            ---------------------------------------------------------------- */}
                <section className="border-t border-border py-10 md:py-14">
                    <SectionHeading title="Engagement Timeline" />
                    <p className="mt-2 font-heading text-sm text-foreground/70 md:text-lg font-semibold">
                        Indicative phasing of the engagement.
                    </p>

                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border border-primary/30 text-left">
                            <thead>
                                <tr className="bg-primary text-primary-foreground">
                                    <th className="p-4 text-lg font-semibold uppercase tracking-wider">
                                        Phase
                                    </th>
                                    <th className="p-4 text-lg font-semibold uppercase tracking-wider">
                                        Duration
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {timeline?.map((row, i) => (
                                    <tr
                                        key={i}
                                        className="border-t border-primary/20 font-heading text-sm text-foreground/80 md:text-lg"
                                    >
                                        <td className="p-4">{row.phase}</td>
                                        <td className="p-4">{row.duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ---------------------------------------------------------------
                The Outcome
            ---------------------------------------------------------------- */}
                <section className="border-t border-border py-10 md:py-14">
                    <SectionHeading title="The Outcome" />
                    <BodyText paragraphs={outcome} />
                </section>

                {/* ---------------------------------------------------------------
                Key Results
            ---------------------------------------------------------------- */}
                <section className="border-t border-border py-10 md:py-14">
                    <SectionHeading title="Key Results" />
                    <div className="mt-4">
                        <ArrowList
                            items={keyResults}
                            itemsClassName="text-lg md:text-base text-foreground/80"
                            markerclassName="text-primary text-xl -mt-0 ml-0"
                        />
                    </div>
                </section>
            </div>

            {/* ---------------------------------------------------------------
                Related Services band + callout
            ---------------------------------------------------------------- */}
            <section className="bg-muted py-12 md:py-16">
                <div className="mx-auto w-full px-6 sm:px-16 space-y-8 md:space-y-16">
                    <div>
                        <SectionHeading title="Related Services" />
                        <p className="mt-2 font-heading text-sm text-foreground/70 md:text-lg">
                            Solutions engagements typically follow:
                        </p>
                        <div className="mt-10 flex flex-wrap">
                            {relatedServices?.map((service, i) => (
                                <div
                                    key={i}
                                    className="group transition-all duration-900 text-white"
                                >
                                    <Link
                                        href={service.href}
                                        className="flex items-center justify-center gap-1 border border-primary py-7 px-8 group-hover:pr-16 text-lg text-center font-semibold text-primary group-hover:text-white duration-400 transition-all group-hover:bg-primary"
                                    >
                                        {service.label}
                                        <SquareArrowOutUpRight className="text-muted translate-x-4 size-8" strokeWidth={2}/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Callout */}
                    {callout && (
                        <div className="border border-primary bg-primary/10 p-6 md:p-8">
                            <h4 className="text-lg font-semibold uppercase tracking-wider text-primary">
                                {callout.heading}
                            </h4>
                            <p className="my-3 max-w-4xl font-heading text-sm leading-relaxed text-foreground/80 md:text-lg">
                                {callout.text}
                            </p>
                            <Button
                                asChild
                                variant={"ternary"}
                            >
                                <Link href={callout.buttonHref}>{callout.buttonLabel}</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}