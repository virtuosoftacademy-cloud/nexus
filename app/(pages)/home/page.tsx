
import { HeroSection } from "./_components/Hero";
import { InsightsSection } from "../../../components/common/Insights";
import { faqsHome } from "@/app/_constant";
import Faq from "@/components/common/Faq";
import TestimonialsSection from "@/components/common/Testimonials";
import PlatformsSection from "./_components/PlatForm";
import CoreServicesSection from "./_components/CoreServices";
import StatsBar from "./_components/Stats";
import ProfessionalMemberships from "./_components/Membership";
import GovernancePhilosophy from "./_components/Governance";
import { getBlogData } from "@/lib/blog-actions/blogActions";

export default async function Homepage() {
  const { blogPosts } = await getBlogData();

  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* ── STATS BAR ── */}
      <StatsBar />
      {/* ── CORE SERVICES ── */}
      <CoreServicesSection />
      {/* ── PLATFORMS ── */}
      <PlatformsSection />
      {/* Professional Memberships */}
      <ProfessionalMemberships />
      {/* Governance */}
      <GovernancePhilosophy/>
      {/* ── INSIGHTS ── */}
      <InsightsSection posts={blogPosts}/>
      {/* ── CLIENT REVIEWS ── */}
      <TestimonialsSection />
      {/* ── FAQ ── */}
      <Faq items={faqsHome} />
      {/* ── CTA SPLIT ── */}
      {/* <CtaSplitSection /> */}
    </div>
  );
}