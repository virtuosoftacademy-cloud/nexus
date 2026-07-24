"use client";

import { CaseStudy } from "@/app/_constant";
// components/case-studies/CaseStudyCard.tsx

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const { title, image, metrics } = study;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">

      {/* ── Left: text content ── */}
      <div className="flex flex-col gap-2">
        {/* ── Section heading ── */}
        <h4 className="text-3xl md:text-[3.5rem] font-medium text-foreground leading-tight">
          Structured results,<br />
          <span className="text-primary">delivered.</span>
        </h4>

        <h4 className="font-serif text-sm md:text-lg">Featured Client Stories</h4>
        <hr className="w-172" />
        {/* Case title */}
        <h4 className="text-2xl md:text-4xl text-foreground font-semibold leading-snug mt-5">
          {title}
        </h4>

        {/* Impact metrics */}
        <div>
          <p className="text-sm md:text-lg text-foreground mb-3 font-medium">The impact</p>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-primary/10 p-4 flex flex-col"
              >
                <p
                  className="text-xl md:text-4xl text-primary font-bold mb-1"
                >
                  {m.value}
                </p>
                <p className="text-sm md:text-lg text-foreground/60 leading-snug font-serif">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Read story link */}
        
        <Link
          href="#"
          className="text-primary mt-2 inline-flex items-center gap-1.5 text-sm md:text-base transition-all"
        >
          Read Story
          <Play fill="#188182" className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* ── Right: image ── */}
      <div className="w-full h-72 md:h-140 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}