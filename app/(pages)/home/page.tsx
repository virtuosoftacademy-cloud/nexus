"use client";

import * as React from "react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  FileText,
  Clock,
  Globe,
  Building2,
  ChevronRight,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { HeroSection } from "./_components/Hero";
import { InsightsSection } from "./_components/Insights";
import { CtaSplitSection } from "../../../components/common/CTA";
import Faq from "@/components/common/Faq";
import { faqsHome } from "@/app/_constant";
import TestimonialsSection from "@/components/common/Testimonials";
import CaseStudiesSection from "./_components/Result";
import IndustriesSection from "./_components/Industries";
import PlatformsSection from "./_components/PlatForm";
import CoreServicesSection from "./_components/CoreServices";
import StatsBar from "./_components/Stats";
import VideoSection from "./_components/VideoSection";
import ReactLenis from "lenis/react";

export default function NexusHomepage() {

  return (
    <div className="min-h-screen font-sans">
      <ReactLenis root>
        <HeroSection />
        {/* ── STATS BAR ── */}
        <StatsBar />
        {/* ── CORE SERVICES ── */}
        <CoreServicesSection />
        {/* ── PLATFORMS ── */}
        <PlatformsSection />
        {/* ── INDUSTRIES ── */}
        <IndustriesSection />
        {/* ── RESULTS ── */}
        <CaseStudiesSection />
        {/* Video Section */}
        <VideoSection />
        {/* ── INSIGHTS ── */}
        <InsightsSection />
        {/* ── CLIENT REVIEWS ── */}
        <TestimonialsSection />
        {/* ── FAQ ── */}
        <Faq items={faqsHome} />
        {/* ── CTA SPLIT ── */}
        <CtaSplitSection />
      </ReactLenis>
    </div>
  );
}