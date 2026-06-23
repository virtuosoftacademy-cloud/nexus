import Link from "next/link";
import { ResultsData } from "../../constant";
import { Button } from "@/components/ui/button";

interface ResultsProps {
    result: ResultsData;
    seeMoreHref?: string;
}

export default function Results({ result, seeMoreHref = "/results" }: ResultsProps) {
    const { label, accent, results } = result;

    if (!results || results.length === 0) return null;

    return (
        <section className="mx-auto max-w-360 px-6">
            <div className="pt-2 md:pt-6">
                {/* Section Header */}
                <div className="mb-10 text-center flex items-center justify-between">
                    <div className="w-80 h-0.5 bg-muted hidden md:block" />
                    <div>
                        <h4 className="text-3xl md:text-4xl font-bold leading-tight">
                            {label}
                            {accent && <span className="text-primary"> {accent}</span>}
                        </h4>
                    </div>
                    <div className="w-80 h-0.5 bg-muted hidden md:block" />
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((item) => (
                        <Link
                            key={item.id}
                            href={`/results/${item.slug}`}
                            className="flex flex-col group border border-border bg-background overflow-hidden h-full"
                        >
                            {/* Image */}
                            <div className="w-full h-52 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-3 p-6 flex-1">
                                <p className="text-xs text-foreground/70 font-semibold tracking-widest capitalize">
                                    {item.category}
                                </p>

                                <h4 className="text-lg md:text-2xl font-bold text-primary leading-snug">
                                    {item.title}
                                </h4>

                                <p className="font-serif text-sm md:text-lg text-foreground/70 leading-relaxed flex-1">
                                    {item.excerpt}
                                </p>

                                <p className="text-xs md:text-base text-foreground/70 mt-auto pt-2">
                                    {item.type} <span className="mx-1.5">•</span> {item.date}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center py-10">
                    <Button variant="secondary" className="px-12 text-base" asChild>
                        <Link href={seeMoreHref}>See More</Link>
                    </Button>
                </div>
            </div>
        </section>

    );
}