// components/landing/LandingExperience.tsx

import Link from "next/link";
import { TrendingUp, Compass, Command } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const features: FeatureCard[] = [
  {
    icon: <TrendingUp className="h-5 w-5" style={{ color: "var(--primary)" }} />,
    title: "Your Entire Portfolio at One Place",
    description:
      "No more switching between files and folders. Every property, unit and document lives in one organized system, accessible anytime, from anywhere.",
    href: "#",
  },
  {
    icon: <TrendingUp className="h-5 w-5" style={{ color: "var(--primary)" }} />,
    title: "Rent That Collects Itself",
    description:
      "Set it up once and let Nexus handle the rest. Automated billing, payment tracking and reconciliation so your cash flow stays consistent without the follow-up.",
    href: "#",
  },
  {
    icon: <Compass className="h-5 w-5" style={{ color: "var(--primary)" }} />,
    title: "Maintenance, Without the Mess",
    description:
      "Tenants log issues with ease. You assign, oversee and resolve with full visibility into every open and closed request at every stage.",
    href: "#",
  },
  {
    icon: <Command className="h-5 w-5" style={{ color: "var(--primary)" }} />,
    title: "Data That Actually Helps You Grow",
    description:
      "Know exactly how your portfolio is performing. Occupancy trends, revenue snapshots and key metrics presented clearly, so you can act on them quickly.",
    href: "#",
  },
];

export default function LandingExperience() {
  return (
    <section className="bg-foreground/5 py-20">
      <div className="mx-auto max-w-[212.5rem] px-6 sm:px-15 bg-primary/5">

        {/* ── Heading ── */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 h-px bg-border" />
          <h4 className="text-3xl md:text-4xl font-bold text-foreground text-center whitespace-nowrap">
            Powerful Tools. Simple{" "}
            <span className="text-primary">Experience.</span>
          </h4>
          <div className="flex-1 h-px bg-border" />
        </div>

        <p className="text-sm md:text-lg font-medium text-foreground/55 text-center leading-relaxed font-serif mb-12">
          Every feature in Nexus is designed to remove friction and put you in
          full control of your properties.
        </p>

        {/* ── 4-col cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col justify-between border border-border bg-background p-8 gap-8 max-w-xs"
            >
              {/* Top */}
              <div className="flex flex-col gap-5">
                {/* Icon circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "color-mix(in oklch, var(--primary) 4%, transparent)" }}
                >
                  {f.icon}
                </div>

                {/* Title */}
                <h4 className="text-base md:text-xl font-bold text-foreground leading-snug">
                  {f.title}
                </h4>

                {/* Description */}
                <p className="font-serif text-sm md:text-lg text-foreground/55 leading-relaxed">
                  {f.description}
                </p>
              </div>

              {/* Read More */}
              <Link
                href={f.href}
                className="inline-flex items-center gap-1 text-base text-primary font-semibold transition-opacity hover:opacity-70"
              >
                Read More
                <span className="text-xs">▶</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}