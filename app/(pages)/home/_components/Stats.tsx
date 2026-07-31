// components/stats/StatsBar.tsx

import { statusBar } from "@/app/_constant";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react/jsx-runtime";

export default function StatsBar() {
  return (
    <section className="bg-muted py-6 sm:py-8 mx-auto lg:pl-6">
      <div className="px-4 sm:px-8 xl:px-12">
        <div className="flex items-center flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0">
          {statusBar.map((stat, index) => (
            <Fragment key={stat.id}>
              {index > 0 && (
                <div className="items-center justify-center pr-4 first:hidden hidden lg:flex">
                  <Separator orientation="vertical" className="w-px! h-10 bg-primary" />
                </div>)
              }
              <div
                className="flex items-center gap-2 sm:gap-3 lg:px-6 xl:px-8 first:lg:pl-0 last:lg:pr-0 py-2"
              >
                {/* Value */}
                <span className="text-4xl sm:text-3xl md:text-4xl xl:text-[4rem] font-bold leading-none text-primary">
                  {stat.value}
                </span>
                <div
                  className="mt-4 sm:mt-6 -ml-2 sm:-ml-3 text-3xl sm:text-4xl text-primary"
                  style={{ WebkitTextStroke: "1px var(--primary)" }}
                >
                  {stat.iconPlus}
                </div>
                {/* Label */}
                <h3 className="font-heading text-sm md:text-base text-foreground/70 leading-snug max-w-24 sm:max-w-30">
                  {stat.label}
                </h3>
              </div >
            </Fragment>
          ))}
        </div>
      </div>
    </section >
  );
}