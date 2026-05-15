
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero from '../_components/Hero';
import { aiAgentsEmpower, aiAgentsHero, ComHero, ConHero, DataScienceHero, EmpowerCom, EmpowerCon, EmpowerDataScience, EmpowerGen, EmpowerOcr, genaiHero, OcrHero, stepsData, stepsDataCom, stepsDataCon, stepsDataGen, stepsDataOcr, stepsDataScience, valueData, valueDataCom, valueDataCon, valueDataGen, valueDataOcr, valueDataScience } from '../constant';
import Cta from '@/components/common/Cta';
import Faq from '../../../../../components/common/Faq';
import { Faq_AI_ComputerVision, Faq_AI_ConversationalAI, Faq_AI_CustomAgent, Faq_AI_DataScience_MLOps, Faq_AI_GenerativeAI, Faq_AI_OCR } from '@/app/_constant';
import Blogs from '@/app/(pages)/blogs/page';
import Engage from '../../common/Engage';
import Success from '../../common/Success';
import TimeLine from '../../common/TimeLine';
import ValueSection from '../../common/ValueSection';
import Empower from '../../common/Empower';


// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
  {
    slug: 'ai-agent',
    title: 'AI Agent',
    heroData: aiAgentsHero,
    value: valueData[0],
    Data: aiAgentsEmpower[0],
    timeLine: stepsData[0],
    sections: [
      { Component: Hero, props: aiAgentsHero },
      { Component: ValueSection, props: valueData[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsData[0] },
      { Component: Empower, props: aiAgentsEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_CustomAgent } },
      { Component: Cta },
    ],
  },
  {
    slug: 'generative-ai',
    title: 'Generative AI',
    heroData: genaiHero,
    value: valueDataGen[0],
    Data: EmpowerGen[0],
    timeLine: stepsData[0],
    sections: [
      { Component: Hero, props: genaiHero },
      { Component: ValueSection, props: valueDataGen[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataGen[0] },
      { Component: Empower, props: EmpowerGen[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_GenerativeAI } },
      { Component: Cta },
    ],
  },
  {
    slug: 'data-science',
    title: 'Data Science & MLOps',
    heroData: DataScienceHero,
    value: valueDataGen[0],
    Data: EmpowerDataScience[0],
    timeLine: stepsDataScience[0],
    sections: [
      { Component: Hero, props: DataScienceHero },
      { Component: ValueSection, props: valueDataScience[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataScience[0] },
      { Component: Empower, props: EmpowerDataScience[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_DataScience_MLOps } },
      { Component: Cta },
    ],
  },
  {
    slug: 'conversational-intelligence',
    title: 'Conversational Intelligence',
    heroData: ConHero,
    value: valueDataCon[0],
    Data: EmpowerCon[0],
    timeLine: stepsDataCon[0],
    sections: [
      { Component: Hero, props: ConHero },
      { Component: ValueSection, props: valueDataCon[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCon[0] },
      { Component: Empower, props: EmpowerCon[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_ConversationalAI } },
      { Component: Cta },
    ],
  },
  {
    slug: 'computer-vision',
    title: 'Computer Vision',
    heroData: ComHero,
    value: valueDataCon[0],
    Data: EmpowerCom[0],
    timeLine: stepsDataCom[0],
    sections: [
      { Component: Hero, props: ComHero },
      { Component: ValueSection, props: valueDataCom[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCom[0] },
      { Component: Empower, props: EmpowerCom[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_ComputerVision } },
      { Component: Cta },
    ],
  },
  {
    slug: 'optical-character-recognition',
    title: 'Optical Character Recognition',
    heroData: OcrHero,
    value: valueDataOcr[0],
    Data: EmpowerOcr[0],
    timeLine: stepsDataOcr[0],
    sections: [
      { Component: Hero, props: OcrHero },
      { Component: ValueSection, props: valueDataOcr[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataOcr[0] },
      { Component: Empower, props: EmpowerOcr[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_AI_OCR } },
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