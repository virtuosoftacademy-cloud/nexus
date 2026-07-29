import React from 'react'
import type { Metadata } from "next";
import { services } from './page';

export interface ServiceSection {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  props?: Record<string, unknown>;
}

export interface Service {
  slug: string;
  title: string;
  sections: ServiceSection[];
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams(): { slug: string }[] {
  return services.map((s) => ({ slug: s.slug }));
}

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
    description: `Professional ${service.title} services by Nexus Advisory – structured, compliant, and built around your business.`,
  };
}


export default function CaseStudiesLayout({
    children,
}: Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <div>
            {children}
        </div>
    )
}

