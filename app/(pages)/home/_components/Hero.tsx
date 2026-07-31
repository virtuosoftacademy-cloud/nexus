"use client";

import { TABS } from "@/app/_constant";
import { ScrollToSection } from "@/components/scrolltosection";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const AUTOPLAY_INTERVAL = 5000;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 as const } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.28, ease: [0.55, 0, 1, 0.45] } },
};

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(
      () => setActiveTab((p) => (p + 1) % TABS.length),
      AUTOPLAY_INTERVAL
    );
    return () => clearInterval(id);
  }, [isPaused]);

  const current = TABS[activeTab];

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col -z-40 px-8 md:px-2">

        {/* ── Background image crossfade ── */}
        <AnimatePresence initial={false}>
          <motion.div
            key={activeTab}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})` }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(172 66% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(172 66% 50% / 0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none bg-linear-to-t from-black/70 to-transparent" />

        {/* ── Content ── */}
        <div className="relative flex-1 py-24 mt-10 md:mt-30 flex flex-col justify-between">

          {/* ── Animated text block ── */}
          <div className="md:ml-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="max-w-4xl text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.p variants={itemVariants} className="text-base font-heading capitalize tracking-widest mb-3 text-accent">
                  {current.tag}
                </motion.p>

                <motion.h4 variants={itemVariants} className="text-3xl md:text-[3.6rem] font-medium leading-[1.1] mb-5 md:whitespace-pre-line">
                  {current.heading}
                </motion.h4>

                <motion.p variants={itemVariants} className="font-heading text-base leading-relaxed mb-8 text-white/75">
                  {current.subtitle}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <a
                    href={current.cta.href}
                    className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    {current.cta.label}
                    <motion.span
                      animate={{ x: hovered ? 6 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-flex items-center"
                    >
                      <Image src="/assets/arrowright.svg" alt="" width={20} height={20} className="size-5" />
                    </motion.span>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── TABS ── */}
          <div className="md:mt-10">

            {/* ── MOBILE: active label only ── */}
            <div className="md:hidden ml-0">
              <div className="relative inline-flex px-6 py-4">
                <motion.span
                  layoutId="tab-underline-mobile"
                  className="absolute top-0 left-6 right-0 max-w-50 h-0.5 bg-gradient-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm font-medium text-white"
                  >
                    {current.label}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* ── DESKTOP: all tabs ── */}
            <div className="hidden md:flex max-w-360">
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => {
                    setActiveTab(i);
                    setIsPaused(true);
                  }}
                  className={cn(
                    "relative ml-10 mr-auto px-6 py-4 text-xl font-semibold transition-colors duration-300 text-center",
                    activeTab === i ? "text-white" : "text-white/45 hover:text-white/75"
                  )}
                >
                  {activeTab === i && (
                    <motion.span
                      layoutId="tab-underline-desktop"
                      className="absolute top-0 left-6 right-0 max-w-50 h-1 bg-gradient-primary rounded-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      <ScrollToSection sections={[
        { sectionId: "nav", targetId: "coreservices", variant: "down" },
      ]} />
    </>
  );
}