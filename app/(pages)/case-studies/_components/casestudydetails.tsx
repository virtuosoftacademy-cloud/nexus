
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowList } from "@/components/ui/ArrowList";
import { SquareArrowOutUpRight } from "lucide-react";
import { CaseStudyDetailProps } from "@/lib/case-study/types";
import { toSafeHtml } from "@/lib/rich-text-html";

// Styling for admin-authored rich text. The editor emits real HTML, so each
// block element needs its own spacing — there is no typography plugin here.
// Shared by every rich-text section so they cannot drift apart.
const PROSE =
    "mt-4 font-heading text-sm leading-relaxed text-foreground/80 md:text-lg " +
    "[&_p]:mb-4 " +
    "[&_h1]:mb-3 [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:text-foreground " +
    "[&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground " +
    "[&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground " +
    "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 " +
    "[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 " +
    "[&_li]:mb-1 " +
    "[&_blockquote]:mb-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic " +
    "[&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-foreground [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-background " +
    "[&_hr]:my-6 [&_hr]:border-border " +
    "[&_img]:my-6 [&_img]:h-auto [&_img]:max-w-full " +
    "[&_strong]:font-semibold [&_strong]:text-foreground " +
    "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2";

/** Renders one admin-authored rich-text block, already sanitised. */
function RichText({ html }: { html: string }) {
    if (!html) return null;
    return <div className={PROSE} dangerouslySetInnerHTML={{ __html: html }} />;
}

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
    // Sanitised once here rather than inline, so the section guard tests the
    // rendered output — "<p></p>" from an emptied editor must not count.
    const summaryHtml = toSafeHtml(summary);
    const challengeHtml = toSafeHtml(challenge);

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

                {/* Both halves are optional, so the strip splits in two only
                    when both are filled — otherwise the single box spans the
                    full width and the dividing borders would sit on nothing. */}
                {industry || serviceAreas?.length ? (
                    <section className="py-10 md:py-14">
                        <div
                            className={`grid border border-border ${industry && serviceAreas?.length ? "md:grid-cols-2" : ""
                                }`}
                        >
                            {industry ? (
                                <div
                                    className={`p-8 ${serviceAreas?.length ? "md:border-r md:border-border" : ""
                                        }`}
                                >
                                    <h4 className="text-2xl font-semibold uppercase text-foreground md:text-3xl">
                                        Industry
                                    </h4>
                                    <p className="mt-3 font-heading text-lg text-foreground/70 md:text-base">
                                        {industry}
                                    </p>
                                </div>
                            ) : null}

                            {serviceAreas?.length ? (
                                <div
                                    className={`p-8 ${industry ? "border-t border-border md:border-t-0" : ""
                                        }`}
                                >
                                    <h4 className="text-2xl font-semibold uppercase text-foreground md:text-3xl">
                                        Service Areas
                                    </h4>
                                    <p className="mt-3 font-heading text-lg text-foreground/70 md:text-base max-w-lg">
                                        {serviceAreas.join("  ·  ")}
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    </section>
                ) : null}

                {/* ---------------------------------------------------------------
                Executive Summary
            ---------------------------------------------------------------- */}
                {/* Every section below is conditional: only the hero is required
                    when a case study is created, so an unfinished one would
                    otherwise print a heading and a divider over nothing. */}
                {summaryHtml ? (
                    <section className="py-10 md:py-14">
                        <SectionHeading title="Executive Summary" />
                        <RichText html={summaryHtml} />
                    </section>
                ) : null}

                {/* ---------------------------------------------------------------
                The Situation — paragraphs, question list, closing line
            ---------------------------------------------------------------- */}
                {situation?.paragraphs?.length ||
                situation?.questions?.length ||
                situation?.closing ? (
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
                ) : null}

                {/* ---------------------------------------------------------------
                The Challenge
            ---------------------------------------------------------------- */}
                {challengeHtml ? (
                    <section className="border-t border-border py-10 md:py-14">
                        <SectionHeading title="The Challenge" />
                        <RichText html={challengeHtml} />
                    </section>
                ) : null}

                {/* ---------------------------------------------------------------
                Our Approach — intro + 4 bordered cards
            ---------------------------------------------------------------- */}
                {approach?.intro?.length || approach?.cards?.length ? (
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
                ) : null}

                {/* ---------------------------------------------------------------
                Engagement Timeline — teal-headed table
            ---------------------------------------------------------------- */}
                {timeline?.length ? (
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
                                    {timeline.map((row, i) => (
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
                ) : null}

                {/* ---------------------------------------------------------------
                The Outcome
            ---------------------------------------------------------------- */}
                {outcome?.length ? (
                    <section className="border-t border-border py-10 md:py-14">
                        <SectionHeading title="The Outcome" />
                        <BodyText paragraphs={outcome} />
                    </section>
                ) : null}

                {/* ---------------------------------------------------------------
                Key Results
            ---------------------------------------------------------------- */}
                {keyResults?.length ? (
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
                ) : null}
            </div>

            {/* ---------------------------------------------------------------
                Related Services band + callout
            ---------------------------------------------------------------- */}
            {/* The whole band goes when there is neither a service list nor a
                callout, rather than leaving an empty grey stripe. */}
            {relatedServices?.length || callout ? (
            <section className="bg-muted py-12 md:py-16">
                <div className="mx-auto w-full px-6 sm:px-16 space-y-8 md:space-y-16">
                    {relatedServices?.length ? (
                    <div>
                        <SectionHeading title="Related Services" />
                        <p className="mt-2 font-heading text-sm text-foreground/70 md:text-lg">
                            Solutions engagements typically follow:
                        </p>
                        <div className="mt-10 flex flex-wrap">
                            {relatedServices.map((service, i) => (
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
                    ) : null}

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
            ) : null}
        </div>
    );
}