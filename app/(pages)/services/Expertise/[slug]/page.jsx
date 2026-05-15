
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero from '../_components/Hero';
import ValueSection from '../../common/ValueSection';
import Empower from '../../common/Empower';
import TimeLine from '../../common/TimeLine';
import Cta from '@/components/common/Cta';
import Blogs from '@/app/(pages)/blogs/page';
import Success from '../../common/Success';
import Faq from '@/components/common/Faq';
import Engage from '../../common/Engage';
import { RpaEmpower, RpaHero, DevOpsEmpower, DevOpsHero,stepsDataRpa,stepsDataDevOps,valueDataRpa,valueDataDevOps,} from '../constant';
import { Faq_Expertise_RPA,Faq_Expertise_DEVOPs  } from '@/app/_constant';


// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
     {
    slug: 'rpa',
    title: 'RPA',
    heroData:  RpaHero,
    value: valueDataRpa[0],
    Data:  RpaEmpower[0],
    timeLine: stepsDataRpa[0],
    sections: [
      { Component: Hero, props:  RpaHero},
      { Component: ValueSection, props: valueDataRpa[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataRpa[0] },
      { Component: Empower, props:  RpaEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Expertise_RPA } },
      { Component: Cta },
    ],
  },
  {
    slug: 'devops',
    title: 'DevOps',
    heroData: DevOpsHero,
    value: valueDataDevOps[0],
    Data: DevOpsEmpower[0],
    timeLine: stepsDataDevOps[0],
    sections: [
      { Component: Hero, props: DevOpsHero },
      { Component: ValueSection, props: valueDataDevOps[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataDevOps[0] },
      { Component: Empower, props: DevOpsEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_Expertise_DEVOPs } },
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