'use client';
import { ArrowRight, Play, PoundSterling } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardMockup from "./DashboardMockup";
import Link from "next/link";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingElement = document.getElementById("pricing");
    if (pricingElement) {
        pricingElement.scrollIntoView({ 
            behavior: "smooth",
            block: "nearest"
        });
    }
};
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden px-6 md:px-0">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 animate-fade-up">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            New: AI-powered tenant screening
          </div> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Property management,{" "}
            <span className="text-gradient-primary">reimagined.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Nexus is the all-in-one platform for modern property managers. Track leases, automate rent collection, and delight tenants — all from one beautiful dashboard.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="xl" className="flex items-center">
              <Link href={"https://propertymanagement-zeta.vercel.app/"}>
                Signin 
              </Link>
                <ArrowRight className="w-4 h-4 mt-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToPricing}>
              <PoundSterling className="w-4 h-4" /> Pricing
            </Button>
          </div>
          {/* <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-background bg-gradient-primary" />
                ))}
              </div>
              <span><strong className="text-foreground">2,400+</strong> property managers</span>
            </div>
          </div> */}
        </div>

        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;