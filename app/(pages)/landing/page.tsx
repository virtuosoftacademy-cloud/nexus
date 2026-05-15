import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import Footer from "@/components/common/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/common/Navbar";
import Pricing from "@/components/Pricing";
import ReactLenis from "lenis/react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReactLenis root>
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <DashboardPreview />
          <Pricing />
          <Benefits />
          <CTA />
        </main>
      </ReactLenis>
    </div>
  );
};

export default LandingPage;
