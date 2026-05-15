
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero from '../_components/Hero';
import Success from '../../common/Success';
import Cta from '@/components/common/Cta';
import { Faq_ITGovernance_GovernanceFrameworkDev, Faq_ITGovernance_RegulatoryCompliance, Faq_ITGovernance_ResourceAugmentation } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';
import { EmpowerFramework, EmpowerResource, FrameworkHero, ProductRegulatory, ProductStrategyEmpower, ProductStrategyHero, regulatoryHero, resourceHero, stepsDataDigitalTransformation, stepsDataFramework, stepsDataProductStrategy, stepsDataRegulatory, stepsDataresource, valueDataDigital, valueDataFramework, valueDataProductStrategy, valueDataRegulatory, valueDataresource } from '../constant';
import TimeLine from '../../common/TimeLine';
import Faq from '@/components/common/Faq';
import ValueSection from '../../common/ValueSection';
import Engage from '../../common/Engage';
import Empower from '../../common/Empower';


// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
  {
    slug: 'regulatory-compliance',
    title: 'Regulatory Compliance',
    heroData: regulatoryHero,
    value: valueDataRegulatory[0],
    Data: ProductRegulatory[0],
    timeLine: stepsDataRegulatory[0],
    sections: [
      { Component: Hero, props: regulatoryHero },
      { Component: ValueSection, props: valueDataRegulatory[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataRegulatory[0] },
      { Component: Empower, props: ProductRegulatory[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_ITGovernance_RegulatoryCompliance } },
      { Component: Cta },
    ],
  },
  {
    slug: 'governance-framework-development',
    title: 'Governance Framework Development',
    heroData: FrameworkHero,
    value: valueDataFramework[0],
    Data: EmpowerFramework[0],
    timeLine: stepsDataFramework[0],
    sections: [
      { Component: Hero, props: FrameworkHero },
      { Component: ValueSection, props: valueDataFramework[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataFramework[0] },
      { Component: Empower, props: EmpowerFramework[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_ITGovernance_GovernanceFrameworkDev} },
      { Component: Cta },
    ],
  },
  {
    slug: 'resource-augmentation',
    title: 'Resource Augmentation',
    heroData: resourceHero,
    value: valueDataresource[0],
    Data: EmpowerResource[0],
    timeLine: stepsDataresource[0],
    sections: [
      { Component: Hero, props: resourceHero },
      { Component: ValueSection, props: valueDataresource[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataresource[0] },
      { Component: Empower, props: EmpowerResource[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_ITGovernance_ResourceAugmentation} },
      { Component: Cta },
    ],
  },
];

// Helper to find service by slug
function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

// ────────────────────────────────────────────────
//  Static params
// ────────────────────────────────────────────────
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// ────────────────────────────────────────────────
//  Page component
// ────────────────────────────────────────────────
export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ReactLenis root>
      <main className="min-h-screen bg-background antialiased pt-2">
        {service.sections.map(({ Component, props = {} }, index) => (
          <Component key={index} {...props} />
        ))}

        {/* Optional universal CTA at the bottom — same across all services */}
        {/* <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/40 text-center">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to get started with {service.title}?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Let’s talk about how Virtuosoft can help you achieve your goals.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
              >
                Talk to our team →
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </ReactLenis>
  );
}

// ────────────────────────────────────────────────
//  Optional: dynamic metadata
// ────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found | Virtuosoft' };
  }

  return {
    title: `${service.title} | Virtuosoft`,
    description:
      service.hero?.bottomDescription ||
      `Professional ${service.title} services by Virtuosoft – custom, scalable, and built for your success.`,
  };
}