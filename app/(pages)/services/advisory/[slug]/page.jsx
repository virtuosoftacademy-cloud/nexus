
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero from '../_components/Hero';
import Success from '../../common/Success';
import Cta from '@/components/common/Cta';
import { Faq_Advisory_DigitalTransformation, Faq_Advisory_ProductStrategy, Faq_AI_CustomAgent } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';
import { DigitalHero, EmpowerDigitalTransformation, ProductStrategyEmpower, ProductStrategyHero, stepsDataDigitalTransformation, stepsDataProductStrategy, valueDataDigital, valueDataProductStrategy } from '../constant';
import TimeLine from '../../common/TimeLine';
import Faq from '@/components/common/Faq';
import ValueSection from '../../common/ValueSection';
import Engage from '../../common/Engage';
import Empower from '../../common/Empower';


// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
  {
    slug: 'product-strategy',
    title: 'Product Strategy & Roadmapping',
    heroData: ProductStrategyHero,
    value: valueDataProductStrategy[0],
    Data: ProductStrategyEmpower[0],
    timeLine: stepsDataProductStrategy[0],
    sections: [
      { Component: Hero, props: ProductStrategyHero },
      { Component: ValueSection, props: valueDataProductStrategy[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataProductStrategy[0] },
      { Component: Empower, props: ProductStrategyEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Advisory_ProductStrategy } },
      { Component: Cta },
    ],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    heroData: DigitalHero,
    value: valueDataDigital[0],
    Data: EmpowerDigitalTransformation[0],
    timeLine: stepsDataDigitalTransformation[0],
    sections: [
      { Component: Hero, props: DigitalHero },
      { Component: ValueSection, props: valueDataDigital[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDigitalTransformation[0] },
      { Component: Empower, props: EmpowerDigitalTransformation[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Advisory_DigitalTransformation } },
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