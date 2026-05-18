
import Benefits from "@/components/Benefits";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ReactLenis from "lenis/react";
import { CtaSplitSection } from "@/components/common/CTA";
import Hero from "./_components/Hero";
import LandingWorks from "./_components/Works";
import LandingExperience from "./_components/Experience";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-foreground">
      <ReactLenis root>
        <Hero />
        <main className="mx-auto max-w-350">
          <LandingWorks />
        </main>
          <LandingExperience />
        <CtaSplitSection />
      </ReactLenis>
    </div>
  );
};

export default LandingPage;
