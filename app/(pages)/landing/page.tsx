
import Benefits from "@/components/Benefits";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ReactLenis from "lenis/react";
import { CtaSplitSection } from "@/components/common/CTA";
import Hero from "./_components/Hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-foreground">
      <ReactLenis root>
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <DashboardPreview />
          <Pricing />
          <Benefits />
          <CtaSplitSection />
        </main>
      </ReactLenis>
    </div>
  );
};

export default LandingPage;
