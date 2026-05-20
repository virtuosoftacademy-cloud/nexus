
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
import CtaForm from "@/components/common/ctaForm";
import LandingDashboard from "./_components/DashboardScreen";
import TestimonialsSection from "@/components/common/Testimonials";
import LandingPricing from "./_components/Pricing";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-foreground">
        <Hero />
        <LandingWorks />
        <LandingExperience />
        <LandingDashboard />
        <TestimonialsSection />
        <LandingPricing />
        <div className="mx-auto max-w-350 px-6 md:px-0">
          <CtaForm />
        </div>
        <CtaSplitSection />
    </div>
  );
};

export default LandingPage;
