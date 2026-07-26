"use client";


import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/app/_constant";
import TestimonialCard from "@/components/ui/TestimonialCard";

const AUTOPLAY_MS = 2000;
const TOTAL = testimonials.length; // e.g. 6

const cardVariants = {
  enter: (d: number) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0, scale: 0.96 }),
};

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0); // 0 → TOTAL-1
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((next: number, dir: 1 | -1) => {
    setDirection(dir);
    setActiveIdx(next);
  }, []);

  const next = useCallback(
    () => goTo((activeIdx + 1) % TOTAL, 1),
    [activeIdx, goTo]
  );

  const prev = useCallback(
    () => goTo((activeIdx - 1 + TOTAL) % TOTAL, -1),
    [activeIdx, goTo]
  );

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, next]);

  // Indices of the 3 visible cards: active first, then next 2.
  // Keys are the REAL testimonial indices, so when activeIdx advances by 1,
  // two cards persist (and slide over via layout animation), one exits, one enters.
  const visibleIdxs = [0, 1, 2].map((offset) => (activeIdx + offset) % TOTAL);

  const counterCurrent = String(activeIdx + 1).padStart(2, "0");
  const counterTotal = String(TOTAL).padStart(2, "0");

  return (
    <section
      className="bg-background py-20 px-8 md:px-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[212.5rem]">

        {/* ── Heading ── */}
        <h4 className="text-center md:text-left text-2xl md:text-[42px] font-bold text-foreground mb-10">
          What Our <span className="text-primary">Clients Say</span>
        </h4>

        {/* ── Carousel: cards shift one slot at a time ── */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              {visibleIdxs.map((tIdx, i) => (
                <motion.div
                  key={tIdx}
                  layout
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  className={i === 0 ? "h-full" : "hidden md:block h-full"}
                >
                  <TestimonialCard
                    testimonial={testimonials[tIdx]}
                    isActive={i === 0}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">

          <p className="text-sm text-foreground/50 tabular-nums">
            <span className="text-foreground font-semibold">
              {counterCurrent}
            </span>
            {" / "}
            {counterTotal}
          </p>

          <div className="flex items-center gap-2">
            {[0, 1, 2].map((dotIdx) => {
              const isActive = activeIdx % 3 === dotIdx;

              return (
                <motion.button
                  key={dotIdx}
                  onClick={() => {
                    const target =
                      (Math.floor(activeIdx / 3) * 3 + dotIdx) % TOTAL;
                    if (target === activeIdx) return;
                    goTo(target, target > activeIdx ? 1 : -1);
                  }}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  animate={{
                    width: isActive ? 14 : 10,
                    height: isActive ? 14 : 10,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  style={{
                    height: 10,
                    background: isActive
                      ? "var(--primary)"
                      : "color-mix(in oklch, var(--foreground) 25%, transparent)",
                    flexShrink: 0,
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}