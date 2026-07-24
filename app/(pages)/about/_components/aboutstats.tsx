// components/stats/StatsBar.tsx

import { statusBar } from "@/app/_constant";
import { Plus } from "lucide-react";

export default function Aboutstats() {
    const stats = [
        {
            value: "2024",
            label: "Year Nexus was established — built around professional standards, not personality"
        },
        {
            value: "UK & UAE",
            label: "Two jurisdictions. One consistent governance standard across both"
        },
        {
            value: "100%",
            label: "Partner-led at every stage — no junior handoffs, no volume processing"
        }
    ]
    return (
        <section>
            <div className="flex items-center justify-center gap-4 py-8">
                <div className="w-100 h-0.5 bg-muted hidden md:block" />
                <div>
                    <h4 className="text-2xl md:text-4xl font-semibold">
                        By The{" "}
                        <span className="text-primary">
                            Number
                        </span>
                    </h4>
                </div>
                <div className="w-100 h-0.5 bg-muted hidden md:block" />
            </div>
            <div className="bg-muted py-8">
                <div className="flex flex-col md:flex-row justify-between items-center divide-primary/30 divide-y md:divide-y-0 md:divide-x text-center gap-y-10 md:gap-y-0">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-center flex-col gap-3 px-12 pb-10 md:py-2"
                        >
                            {/* Value */}
                            <span
                                className="text-4xl md:text-[4rem] font-bold text-primary"
                            >
                                {stat.value}
                            </span>
                            {/* Label */}
                            <h3 className="max-w-xs font-serif text-base md:text-lg text-foreground/60">
                                {stat.label}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}