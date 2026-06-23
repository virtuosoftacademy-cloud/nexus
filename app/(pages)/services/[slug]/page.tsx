
import { notFound } from "next/navigation";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import Hero from "../_components/servicePagesComponents/Hero";
import { AccountingCta, AccountingResult, AdvisoryAbout, AdvisoryCta, AdvisoryResult, ConstructionAbout, ConstructionCta, ConstructionResult, heroAccount, heroAdvisory, heroConstruction, heroProperty, heroTax, heroTech, PropertyAbout, PropertyCta, PropertyResult, statusAccount, statusAdvisory, statusConstruction, statusProperty, statusTax, statusTech, TaxAbout, TaxCta, TaxResult, TechAbout, TechCta, TechResult, UKAccountingAbout } from "../constant";
import Stats from "../_components/servicePagesComponents/Stats";
import ServicesStats from "../_components/servicePagesComponents/Stats";
import AboutService from "../_components/servicePagesComponents/aboutservice";
import Cta from "../_components/servicePagesComponents/cta";
import Results from "../_components/servicePagesComponents/Results";
import CtaForm from "@/components/common/ctaForm";
import { CtaSplitSection } from "@/components/common/CTA";



// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceSection {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  props?: Record<string, unknown>;
}

interface Service {
  slug: string;
  title: string;
  sections: ServiceSection[];
}

// ─── Service definitions ──────────────────────────────────────────────────────

const services: Service[] = [
  {
    slug: "uk-accounting-and-tax",
    title: "UK Accounting & Tax",
    sections: [
      { Component: Hero, props: { data: heroAccount } },
      { Component: ServicesStats, props: { data: statusAccount } },
      { Component: AboutService, props: { data: UKAccountingAbout } },
      { Component: Cta, props: { data: AccountingCta } },
      { Component: Results, props: { result: AccountingResult } },
    ],
  },
  {
    slug: "property-accounting-and-tax",
    title: "Property Accounting & Tax",
    sections: [
      { Component: Hero, props: { data: heroProperty } },
      { Component: ServicesStats, props: { data: statusProperty } },
      { Component: AboutService, props: { data: PropertyAbout } },
      { Component: Cta, props: { data: PropertyCta } },
      { Component: Results, props: { result: PropertyResult } },
    ]
  },
  {
    slug: "construction-accounting",
    title: "Construction Accounting",
    sections: [
      { Component: Hero, props: { data: heroConstruction } },
      { Component: ServicesStats, props: { data: statusConstruction } },
      { Component: AboutService, props: { data: ConstructionAbout } },
      { Component: Cta, props: { data: ConstructionCta } },
      { Component: Results, props: { result: ConstructionResult } },
    ]
  },
  {
    slug: "advisory-services",
    title: "Advisory Services",
    sections: [
      { Component: Hero, props: { data: heroAdvisory } },
      { Component: ServicesStats, props: { data: statusAdvisory } },
      { Component: AboutService, props: { data: AdvisoryAbout } },
      { Component: Cta, props: { data: AdvisoryCta } },
      { Component: Results, props: { result: AdvisoryResult } },
    ]
  },
  {
    slug: "technology-and-solutions",
    title: "Technology & Solutions",
    sections: [
      { Component: Hero, props: { data: heroTech } },
      { Component: ServicesStats, props: { data: statusTech } },
      { Component: AboutService, props: { data: TechAbout } },
      { Component: Cta, props: { data: TechCta } },
      { Component: Results, props: { result: TechResult } },
    ]
  },
  {
    slug: "tax-authority-support",
    title: "Tax Authority Support",
    sections: [
      { Component: Hero, props: { data: heroTax } },
      { Component: ServicesStats, props: { data: statusTax } },
      { Component: AboutService, props: { data: TaxAbout } },
      { Component: Cta, props: { data: TaxCta } },
      { Component: Results, props: { result: TaxResult } },
    ]
  }
];

// ─── Helper ───────────────────────────────────────────────────────────────────

function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams(): { slug: string }[] {
  return services.map((s) => ({ slug: s.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Nexus" };
  }

  return {
    title: `${service.title} | Nexus Advisory`,
    description: `Professional ${service.title} services by Nexus Advisory — structured, compliant, and built around your business.`,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <ReactLenis root>
      <main className="min-h-screen antialiased">
        {service.sections.map(({ Component, props = {} }, index) => (
          <Component key={index} {...props} />
        ))}
        <div className="mx-auto max-w-360 px-6">
          <CtaForm />
        </div>
        <CtaSplitSection />
      </main>
    </ReactLenis>
  );
}