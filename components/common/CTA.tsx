"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Briefcase } from "lucide-react";

export function CtaSplitSection() {
  return (
    <section className="flex flex-col md:flex-row bg-primary items-center">
      {/* Business owners */}
      <div
        className="p-16 text-accent relative overflow-hidden text-center">
        {/* Subtle glow */}
        {/* <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
        /> */}
        <div className="relative">
          {/* <p className="text-[10px] tracking-widest uppercase font-bold mb-3 text-primary-foreground/70">
            For Business Owners
          </p> */}
          <p className="text-2xl md:text-4xl font-semibold mb-3 leading-snug text-primary-foreground">
            Is your financial structure keeping pace with your growth?
          </p>
          {/* <p className="text-sm leading-relaxed mb-7 text-primary-foreground/75">
            Book a no-obligation discovery call and find out how we can help you build something
            that scales.
          </p> */}
          <Button variant={"secondary"}
            className="p-5"
          >
            Book a Discovery Call
          </Button>
        </div>
      </div>

      <div className="w-2xs h-0.5 md:w-0.5 md:h-34 rounded bg-muted-foreground/50" />

      {/* Careers */}
      <div
        className="p-16 text-accent relative overflow-hidden text-center">
        {/* Subtle glow */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
        />
        <div className="relative">
          {/* <p className="text-[10px] tracking-widest uppercase font-bold mb-3 text-primary-foreground/70">
            For Business Owners
          </p> */}
          <p className="text-2xl md:text-4xl font-semibold mb-3 leading-snug text-primary-foreground">
          Build a career grounded in discipline and technical depth.
          </p>
          {/* <p className="text-sm leading-relaxed mb-7 text-primary-foreground/75">
            Book a no-obligation discovery call and find out how we can help you build something
            that scales.
          </p> */}
          <Button variant={"secondary"}
            className="p-5"
          >
              Explore Opportunities
          </Button>
        </div>
      </div>

    </section>
  );
}