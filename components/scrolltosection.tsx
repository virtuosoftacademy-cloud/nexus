"use client";

import { ArrowUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SectionButton {
  /** id of the section that triggers this button to show */
  sectionId: string;
  /** id to scroll to when clicked */
  targetId: string;
  /** which button to render for this section */
  variant: "up" | "down";
}

interface ScrollToSectionProps {
  /** Define which button shows for which section */
  sections: SectionButton[];
}

export function ScrollToSection({ sections }: ScrollToSectionProps) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSectionId(sectionId);
          }
        },
        { threshold: 0.4 } // section must be 40% visible to trigger
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeConfig = sections.find((s) => s.sectionId === activeSectionId);

  if (!activeConfig) return null;

  return (
    <div className="z-50">
      {activeConfig.variant === "down" ? (
        <button
          onClick={() => scrollTo(activeConfig.targetId)}
          aria-label="Scroll to next section"
          className={cn(
            "absolute bottom-24 right-10",
            "w-10 h-10 flex items-center justify-center",
            "bg-transparent text-primary-foreground",
            "rounded-full border border-accent",
            "hover:bg-accent/10 transition-colors duration-200"
          )}
        >
          <ChevronDown className="size-8" />
        </button>
      ) : (
        <button
          onClick={() => scrollTo(activeConfig.targetId)}
          aria-label="Scroll up"
          className={cn(
            "bottom-8 right-8",
            "w-12 h-12 flex items-center justify-center",
            "bg-secondary text-primary-foreground",
            "rounded-full",
            "hover:opacity-80 transition-opacity duration-200"
          )}
        >
          <ArrowUp className="size-5" strokeWidth={4} />
        </button>
      )}
    </div>
  );
}