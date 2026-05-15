"use client";

// components/case-studies/CaseStudiesSection.tsx

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CaseStudies } from "@/app/_constant";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

const TOTAL = CaseStudies.length;
const AUTOPLAY_MS = 6000;

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? "6%" : "-6%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? "-6%" : "6%", opacity: 0 }),
};

export default function CaseStudiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((next: number, dir: 1 | -1) => {
    setDirection(dir);
    setActiveIdx(next);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      goTo((activeIdx + 1) % TOTAL, 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [activeIdx, isPaused, goTo]);

  return (
    <section
      className="bg-background py-20 px-6 sm:px-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[212.5rem]">

       
        {/* ── Sliding case study ── */}
        <div className="overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <CaseStudyCard study={CaseStudies[activeIdx]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Dots + CTA ── */}
        <div className="mt-10 flex flex-col items-center gap-6">

          {/* Square dots */}
          <div className="flex items-center gap-2">
            {CaseStudies.map((_, i) => {
              const isActive = i === activeIdx;
              return (
                <motion.button
                  key={i}
                  onClick={() => goTo(i, i > activeIdx ? 1 : -1)}
                  aria-label={`Go to case study ${i + 1}`}
                  animate={{
                    width: isActive ? 16 : 12,
                    height: isActive ? 16 : 12,
                    opacity: isActive ? 1 : 0.35,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  style={{
                    background: isActive
                      ? "var(--primary)"
                      : "var(--foreground)",
                    flexShrink: 0,
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="px-10 font-semibold hover:bg-primary hover:text-accent p-6"
            variant={"secondary"}
          >
            See All Client Results
          </Button>
        </div>

      </div>
    </section>
  );
}