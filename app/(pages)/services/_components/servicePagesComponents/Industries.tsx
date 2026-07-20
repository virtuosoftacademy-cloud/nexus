
import PhaseCard from "@/components/ui/IndustryCard";
import { ModelsDataProps } from "../constant";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Section: Component — ModelsSection
// ---------------------------------------------------------------------------
const gridCols: Record<number, string> = {
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
}

export default function ModelsSection({
    titleStart,
    titleAccent,
    subTitle,
    closingSubtitle,
    data,
    columns
}: ModelsDataProps) {
    // Guard: nothing to render without phases
    if (!data?.length) return null;

    return (
        <section className="text-center bg-accent py-12 px-4 sm:px-12 flex justify-center items-center">
            <div>
                {/* ── Heading ── */}
                <h4 className="text-3xl md:text-4xl font-semibold text-foreground my-2">
                    {titleStart}{" "}
                    <span className="text-primary">{titleAccent}</span>
                </h4>
                <p className="font-heading text-base md:text-lg text-accent-foreground/80">
                    {subTitle}
                </p>

                <div className={cn("grid grid-cols-1 md:grid-cols-2 py-6 gap-4 md:gap-5 xl:gap-2.5 transition-all duration-700", gridCols[columns])}>
                    {data.map((phase) => (
                        <PhaseCard key={phase.id} phase={phase} />
                    ))}
                </div>

                <p className="font-heading text-base md:text-lg text-accent-foreground/80">
                    {closingSubtitle}
                </p>
            </div>
        </section>
    );
}