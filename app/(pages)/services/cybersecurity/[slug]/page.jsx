
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
import { CyberAssessmentsEmpower, CyberAssessmentsHero, CyberSecurityDeploymentEmpower, CyberSecurityDeploymentHero, GovernanceComplianceEmpower, GovernanceComplianceHero, ManagedCyberSecurityEmpower, ManagedCyberSecurityHero,CyberRiskManagementEmpower,CyberRiskManagementHero, stepsDataCyberAssessments, stepsDataCyberSecurityDeployment, stepsDataGovernanceCompliance, stepsDataManagedCyberSecurity,stepsDataRiskManagement, valueDataCyberAssessments, valueDataCyberSecurityDeployment, valueDataGovernanceCompliance, valueDataManagedCyberSecurity,valueRiskManagement } from '../constant';
import { Faq_CyberSecurity_CyberAssessment, Faq_CyberSecurity_GovernanceCompliance, Faq_CyberSecurity_SecurityDeployment, Faq_CyberSecurityManagedCybersecurity,Faq_CyberSecurity_RiskManagement } from '@/app/_constant';


// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
  {
    slug: 'solution-deployment',
    title: 'Solution Deployment and Management',
    heroData: CyberSecurityDeploymentHero,
    value: valueDataCyberSecurityDeployment[0],
    Data: CyberSecurityDeploymentEmpower[0],
    timeLine: stepsDataCyberSecurityDeployment[0],
    sections: [
      { Component: Hero, props: CyberSecurityDeploymentHero },
      { Component: ValueSection, props: valueDataCyberSecurityDeployment[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCyberSecurityDeployment[0] },
      { Component: Empower, props: CyberSecurityDeploymentEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurity_SecurityDeployment } },
      { Component: Cta },
    ],
  },
  {
    slug: 'governance-and-compliance',
    title: 'Governance & Compliance Services',
    heroData: GovernanceComplianceHero,
    value: valueDataGovernanceCompliance[0],
    Data: GovernanceComplianceEmpower[0],
    timeLine: stepsDataGovernanceCompliance[0],
    sections: [
      { Component: Hero, props: GovernanceComplianceHero },
      { Component: ValueSection, props: valueDataGovernanceCompliance[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataGovernanceCompliance[0] },
      { Component: Empower, props: GovernanceComplianceEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurity_GovernanceCompliance } },
      { Component: Cta },
    ],
  },
  {
    slug: 'cyber-assessments',
    title: 'Cyber Assessments',
    heroData: CyberAssessmentsHero,
    value: valueDataCyberAssessments[0],
    Data: CyberAssessmentsEmpower[0],
    timeLine: stepsDataCyberAssessments[0],
    sections: [
      { Component: Hero, props: CyberAssessmentsHero },
      { Component: ValueSection, props: valueDataCyberAssessments[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataCyberAssessments[0] },
      { Component: Empower, props: CyberAssessmentsEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurity_CyberAssessment } },
      { Component: Cta },
    ],
  },
  {
    slug: 'managed-cybersecurity-service',
    title: 'Managed Cybersecurity Service',
    heroData: ManagedCyberSecurityHero,
    value: valueDataManagedCyberSecurity[0],
    timeLine: stepsDataManagedCyberSecurity[0],
    Data: ManagedCyberSecurityEmpower[0],
    sections: [
      { Component: Hero, props: ManagedCyberSecurityHero },
      { Component: ValueSection, props: valueDataManagedCyberSecurity[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataManagedCyberSecurity[0] },
      { Component: Empower, props: ManagedCyberSecurityEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurityManagedCybersecurity } },
      { Component: Cta },
    ],
  },
  {
    slug: 'risk-management',
    title: 'Risk Management & Governance',
    heroData: CyberRiskManagementHero,
    value: valueRiskManagement[0],
    timeLine: stepsDataRiskManagement[0],
    Data: CyberRiskManagementEmpower[0],
    sections: [
      { Component: Hero, props: CyberRiskManagementHero },
      { Component: ValueSection, props: valueRiskManagement[0] },
      { Component: Success },
      { Component: TimeLine, props: stepsDataRiskManagement[0] },
      { Component: Empower, props: CyberRiskManagementEmpower[0] },
      { Component: Blogs },
      { Component: Engage },
      { Component: Faq, props: { items: Faq_CyberSecurity_RiskManagement } },
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