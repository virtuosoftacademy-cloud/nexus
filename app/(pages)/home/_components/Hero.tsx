"use client";

import { ScrollToSection } from "@/components/scrolltosection";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TabLink {
  label: string;
  href: string;
}

interface TabConfig {
  label: string;
  image: string;
  tag: string;
  heading: string;
  subtitle: string;
  cta: TabLink;
}

// ─── Tab data ─────────────────────────────────────────────────────────────────

const TABS: TabConfig[] = [
  {
    label: "Financial Advisory · UK & UAE",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format&fit=crop",
    tag: "Financial Advisory · UK & UAE",
    heading: "Your Business Is Growing.\nYour Financial Structure\nIsn't Keeping Up.",
    subtitle:
      "Full-spectrum compliance across UK & UAE — VAT returns, year-end accounts, and corporate tax readiness built for founders who need clarity, not confusion.",
    cta: { label: "UK Accounting & Tax", href: "#" },
  },
  {
    label: "Advisory Services",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&auto=format&fit=crop",
    tag: "Advisory Services",
    heading: "CFO Thinking,\nWithout the CFO Salary.",
    subtitle:
      "CFO-level advisory, governance frameworks, and creditor services built for scale. Timely decisions — not rear-view reports.",
    cta: { label: "Advisory Services", href: "#" },
  },
  {
    label: "Digital Solutions",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop",
    tag: "Digital Solutions",
    heading: "Automate the Back Office.\nOwn the Strategy.",
    subtitle:
      "Platform integration, workflow automation, and tech-enabled finance operations — so your team spends time on decisions, not data entry.",
    cta: { label: "Technology & Solutions", href: "#" },
  },
  {
    label: "Property & Construction",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop",
    tag: "Property & Construction",
    heading: "From SPV to Exit,\nWe Know the Lifecycle.",
    subtitle:
      "SDLT planning, SPV structures, CIS obligations, and construction accounting — specialist support for every stage of your property or build project.",
    cta: { label: "Property Accounting & Tax", href: "#" },
  },
];

const AUTOPLAY_INTERVAL = 5000;

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.28, ease: [0.55, 0, 1, 0.45] },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

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
      <section className="relative overflow-hidden min-h-screen flex flex-col -z-40 -mt-25" id="hero">

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

        {/* ── Dark overlay — always present so text is readable ── */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />

        {/* ── Persistent overlays ── */}
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(172 66% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(172 66% 50% / 0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none bg-gradient-to-t from-black/70 to-transparent" />

        {/* ── Content ── */}
        <div className="relative flex-1 py-24 mt-30 flex flex-col justify-between">

          {/* ── Animated text block ── */}
          <div className="md:ml-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="max-w-2xl text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Service tag */}
                <motion.p
                  variants={itemVariants}
                  className="text-base font-serif capitalize tracking-widest mb-3 text-accent"
                >
                  {current.tag}
                </motion.p>

                {/* Heading */}
                <motion.h1
                  variants={itemVariants}
                  className="font-heading text-5xl md:text-[3.6rem] font-bold leading-[1.1] mb-5 whitespace-pre-line"
                >
                  {current.heading}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={itemVariants}
                  className="font-serif text-base leading-relaxed max-w-lg mb-8 text-white/75"
                >
                  {current.subtitle}
                </motion.p>

                {/* CTA button */}
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

          {/* ── SERVICE TABS ── */}
          <div className="mt-10">
            <div className="flex max-w-360">
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => {
                    setActiveTab(i);
                    setIsPaused(true);
                  }}
                  className={cn(
                    "relative mx-auto px-6 py-4 text-sm md:text-xl font-semibold transition-colors duration-300 text-center",
                    activeTab === i
                      ? "text-white"
                      : "text-white/45 hover:text-white/75"
                  )}
                >
                  {/* Top border indicator */}
                  {activeTab === i && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute top-0 left-6 right-0 max-w-50 h-0.5 bg-gradient-primary rounded-full"
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
        { sectionId: "hero", targetId: "coreservices", variant: "down" },
      ]} />
    </>
  );
}