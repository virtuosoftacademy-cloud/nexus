"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bookmark, Save } from "lucide-react";

interface InsightCard {
  tag: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  newsFrom: string;
}

const insights: InsightCard[] = [
  {
    tag: "Accounting & Tax",
    title: "The VAT Trap Most Property Businesses Don't See Coming",
    description:
      "Partial exemption, the option to tax, and mixed-use developments create VAT liabilities that are avoidable — if you know they're coming. Most don't.",
    gradientFrom: "hsl(174 82% 10%)",
    gradientTo: "hsl(174 82% 22%)",
    newsFrom: "Brief",

  },
  {
    tag: "UAE & International",
    title: "Why Expanding Into the UAE Without Structured Reporting Is…",
    description:
      "As the UAE approaches its first year of corporate tax, the gap between compliant and non-compliant businesses widens by the day.",
    gradientFrom: "hsl(210 60% 10%)",
    gradientTo: "hsl(210 60% 20%)",
    newsFrom: "Brief",
  },
];

export function InsightsSection() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-350 mx-auto">
        <h4 className="font-heading text-4xl font-bold text-foreground mb-10">
          Our Latest{" "}
          <span className="text-primary">Insights</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((ins) => (
            <div
              key={ins.title}
              className="overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className="h-44 flex items-end p-5 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${ins.gradientFrom}, ${ins.gradientTo})`,
                }}
              >
                {/* <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    background: "hsl(172 66% 50% / 0.18)",
                    color: "hsl(168 76% 75%)",
                    border: "1px solid hsl(172 66% 50% / 0.25)",
                  }}
                >
                  {ins.tag}
                </span> */}
              </div>

              <div className="px-2 py-6 border-b border-primary/60">
                <p
                  className="text-base text-primary tracking-widest font-bold mb-2"
                >
                  {ins.tag}
                </p>
                <h4 className="font-bold text-foreground text-xl leading-snug mb-2">
                  {ins.title}
                </h4>
                <p className="text-base leading-relaxed font-serif">{ins.description}</p>
              <div className="flex justify-between pt-2 text-foreground/50 text-sm">
                <span>{ins.newsFrom}</span>
                <span><Bookmark size={18}/> </span>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/5 px-8"
          >
            See All Insights <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}