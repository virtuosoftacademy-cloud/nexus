"use client";

import { insights } from "@/app/_constant";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bookmark, Save } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export function InsightsSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto px-4 sm:px-8 xl:px-18">
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
                className="flex items-end relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${ins.gradientFrom}, ${ins.gradientTo})`,
                }}
              >
                <Image src={ins.src} alt={ins.title} width={400} height={400} className="object-cover w-full" />
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
                {/* <p
                  className="text-base text-primary tracking-widest font-bold mb-2"
                >
                  {ins.tag}
                </p> */}
                <h4 className="font-bold text-foreground text-xl leading-snug mb-2">
                  {ins.title}
                </h4>
                <p className="text-base leading-relaxed font-serif">{ins.description}</p>
                {/* <div className="flex justify-between pt-2 text-foreground/50 text-sm">
                  <span>{ins.newsFrom}</span>
                  <span><Bookmark size={18} /> </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href={"/blogs"}>
            <Button
              variant="secondary"
              className="px-6 md:px-8"
            >
              See All Insights 
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}