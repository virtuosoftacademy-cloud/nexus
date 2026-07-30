'use client'

import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import { statsProps } from "../constant";

// ---------------------------------------------------------------------------
// Section: Component — ServicesStats
// Stats arrive solely from the renderer config; renders nothing when the
// config omits them.
// ---------------------------------------------------------------------------
export default function ServicesStats({ stats }: statsProps) {
  // Guard: nothing to render without stats
  if (!stats?.length) return null;

  return (
    <section className="bg-muted py-8 px-6 sm:px-12">
      <div className="mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row text-center lg:text-left items-center justify-center lg:justify-between">
          {stats.map((stat, index) => (
            <Fragment key={stat.id}>
              {index > 0 && (
                <div className="items-center justify-center mx-6 lg:mx-10 hidden lg:flex">
                  <Separator orientation="vertical" className="h-12 bg-primary/30" />
                </div>
              )}

              <div className="flex flex-col lg:flex-row items-center lg:gap-4 py-2">

                {/* Value + icon */}

                <div className="flex items-center font-semibold">
                  <div className="text-2xl sm:text-3xl md:text-4xl 2xl:text-[4rem] text-primary whitespace-pre">
                    {stat.value}
                  </div>
                  {stat.icon && (
                    <div className="text-2xl sm:text-3xl md:text-4xl 2xl:text-[4rem] ml-0.5 text-primary">
                      {stat.icon}
                    </div>
                  )}
                </div>

                {/* Label */}
                <div>
                  <h4 className="text-xs md:text-base text-foreground/70 leading-snug max-w-52 lg:max-w-40 ">
                    {stat.label}
                  </h4>
                </div>

              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}