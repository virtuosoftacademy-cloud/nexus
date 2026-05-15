// components/stats/StatsBar.tsx

import { statusBar } from "@/app/_constant";
import { Plus } from "lucide-react";

export default function StatsBar() {
  return (
    <section className="bg-muted py-8 px-6 sm:px-12">
      <div className="mx-auto max-w-350">
        <div className="flex flex-wrap items-center divide-x divide-border gap-6">
          {statusBar.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-3 px-8 first:pl-0 last:pr-0 py-2"
            >
              {/* Value */}
              <span
                className="text-4xl md:text-[4rem] font-bold leading-none text-primary"
              >
                {stat.value}
              </span>
              <div className="mt-6 -ml-3 text-4xl text-primary"
              style={{ WebkitTextStroke: "1px var(--primary)"}}
              >
                {stat.iconPlus}
              </div>
              {/* Label */}
              <h3 className="font-serif text-sm md:text-base text-foreground/70 leading-snug max-w-30">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}