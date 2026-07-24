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
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-center md:justify-between">
          {stats.map((stat, index) => (
            <Fragment key={stat.id}>
              {index > 0 && (
                <div className="items-center justify-center mx-18 hidden md:flex">
                  <Separator orientation="vertical" className="h-12 bg-primary/30" />
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center md:gap-4 py-2">

                {/* Value + icon */}

                <div className="flex items-center font-semibold">
                  <div className="text-3xl md:text-[4rem] text-primary md:whitespace-pre">
                    {stat.value}
                  </div>
                  {stat.icon && (
                    <div className="text-3xl md:text-[4rem] ml-0.5 text-primary">
                      {stat.icon}
                    </div>
                  )}
                </div>

                {/* Label */}
                <div>
                  <h4 className="text-xs md:text-base text-foreground/70 leading-snug max-w-52">
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