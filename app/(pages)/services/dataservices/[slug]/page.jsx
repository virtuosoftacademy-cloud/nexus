
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero from '../_components/Hero';
import Success from '../../common/Success';
import Cta from '@/components/common/Cta';
import { Faq_DataServices_AnalyticsBI, Faq_DataServices_DataStrategy, Faq_DataServices_DataWarehouse } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';
import { AnalyticsBIEmpower, AnalyticsBIHero, DataStrategyEmpower, DataStrategyHero, DataWarehouseEmpower, DataWarehouseHero, DigitalHero, EmpowerDigitalTransformation, ProductStrategyEmpower, ProductStrategyHero, stepsDataAnalyticsBI, stepsDataDataStrategy, stepsDataDataWarehouse, stepsDataDigitalTransformation, stepsDataProductStrategy, valueDataAnalyticsBI, valueDataDataStrategy, valueDataDataWarehouse, valueDataDigital, valueDataProductStrategy } from '../constant';
import TimeLine from '../../common/TimeLine';
import Faq from '@/components/common/Faq';
import ValueSection from '../../common/ValueSection';
import Engage from '../../common/Engage';
import Empower from '../../common/Empower';


// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
  {
    slug: 'data-strategy',
    title: 'Data Strategy Consulting',
    heroData: DataStrategyHero,
    value: valueDataDataStrategy[0],
    Data: DataStrategyEmpower[0],
    timeLine: stepsDataDataStrategy[0],
    sections: [
      { Component: Hero, props: DataStrategyHero },
      { Component: ValueSection, props: valueDataDataStrategy[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDataStrategy[0] },
      { Component: Empower, props: DataStrategyEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_DataServices_DataStrategy } },
      { Component: Cta },
    ],
  },
  {
    slug: 'data-warehouse',
    title: 'Data Warehouse Solutions',
    heroData: DataWarehouseHero,
    value: valueDataDataWarehouse[0],
    Data: DataWarehouseEmpower[0],
    timeLine: stepsDataDataWarehouse[0],
    sections: [
      { Component: Hero, props: DataWarehouseHero },
      { Component: ValueSection, props: valueDataDataWarehouse[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDataWarehouse[0] },
      { Component: Empower, props: DataWarehouseEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_DataServices_DataWarehouse} },
      { Component: Cta },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics and BI',
    heroData: AnalyticsBIHero,
    value: valueDataAnalyticsBI[0],
    Data: AnalyticsBIEmpower[0],
    timeLine: stepsDataAnalyticsBI[0],
    sections: [
      { Component: Hero, props: AnalyticsBIHero },
      { Component: ValueSection, props: valueDataAnalyticsBI[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataAnalyticsBI[0] },
      { Component: Empower, props: AnalyticsBIEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_DataServices_AnalyticsBI} },
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