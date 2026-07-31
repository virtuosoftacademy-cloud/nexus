import React from 'react'
import type { Metadata } from "next";
import { getServiceBySlug } from './page';

export interface ServiceSection {
  // any is required — each section pairs a different component with a differently shaped
  // props object (HeroData, statsProps, ApproachProps, ...), so no shared generic fits the render loop
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  props?: Record<string, unknown>;
}

export interface Service {
  slug: string;
  title: string;
  sections: ServiceSection[];
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
    description: `Professional ${service.title} services by Nexus Advisory, structured, compliant, and built around your business.`,
  };
}


export default function ServiceLayout({
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

