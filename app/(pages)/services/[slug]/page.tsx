

import { notFound } from "next/navigation";
import { ReactLenis } from "lenis/react";
import Hero from "../_components/servicePagesComponents/Hero";
import { Accountstats, approachRows, approachRowsProperty, businessAdvisoryAbout, businessAdvisoryCarouselProperty, businessAdvisoryHero, businessApproachRows, businessCta, businessDifference, businessFaqItems, businessModelsData, cfoAbout, cfoAdvisoryCarouselProperty, cfoAdvisoryHero, cfoApproachRows, cfoContactCta, cfoDifference, cfoFaqItems, cfoModelsData, cfoStats, constructAbout, constructApproachRows, constructContactCta, constructDifferenceConstruct, constructFaqItems, constructHero, constructModelsData, constructServicesCarousel, constructStats, contactCtaProperty, contactCtaUk, differenceProperty, differenceUk, faqItemsProperty, faqItemsUk, hmrcStats, ModelsDataProperty, ModelsDataUK, propertyAbout, propertyHero, Propertystats, servicesCarouselProperty, servicesCarouselUk, solutionsAbout, solutionsApproachRows, solutionsCarousel, solutionsContactCta, solutionsDifference, solutionsFaqItems, solutionsHero, solutionsModelsData, systemsAbout, systemsApproachRows, systemsCarousel, systemsContactCta, systemsDifference, systemsFaqItems, systemsHero, systemsModelsData, taxAbout, taxApproachRows, taxCarouselProperty, taxContactCta, taxDifference, taxFaqItems, taxHero, taxModelsData, uaeAbout, uaeAdvisoryCarouselProperty, uaeAdvisoryHero, uaeApproachRows, uaeContactCta, uaeDifference, uaeFaqItems, uaeModelsData, uaeStats, UKAccountingAbout, ukheroAccount } from "../_components/constant";
import AboutService from "../_components/servicePagesComponents/aboutservice";
import Approach from "../_components/servicePagesComponents/approach";
import { FaqWithImage } from "@/components/ui/accordionwithimage";
import { ServicesCarousel } from "../_components/servicePagesComponents/ServicesCarousel";
import { ContactCta } from "../_components/servicePagesComponents/contactcta";
import ServicesStats from "../_components/servicePagesComponents/Stats";
import DifferenceComponent from "../_components/servicePagesComponents/different";
import ModelsSection from "../_components/servicePagesComponents/Industries";
import Notice, { uaeImportantNotice } from "../_components/servicePagesComponents/notice";
import { getServiceBySlug, Service } from "./layout";


// ─── Types ────────────────────────────────────────────────────────────────────





// ─── Service definitions ──────────────────────────────────────────────────────

export const services: Service[] = [
  {
    slug: "uk-accounting-and-tax",
    title: "UK Accounting & Tax",
    sections: [
      { Component: Hero, props: ukheroAccount },
      { Component: ServicesStats, props: Accountstats },
      { Component: AboutService, props: UKAccountingAbout },
      { Component: Approach, props: approachRows },
      { Component: FaqWithImage, props: faqItemsUk },
      { Component: ServicesCarousel, props: servicesCarouselUk },
      { Component: DifferenceComponent, props: differenceUk },
      { Component: ModelsSection, props: ModelsDataUK },
      { Component: ContactCta, props: contactCtaUk },
    ],
  },
  {
    slug: "property-accounting-and-tax",
    title: "Property Accounting & Tax",
    sections: [
      { Component: Hero, props: propertyHero },
      { Component: ServicesStats, props: Propertystats },
      { Component: AboutService, props: propertyAbout },
      { Component: Approach, props: approachRowsProperty },
      { Component: FaqWithImage, props: faqItemsProperty },
      { Component: ServicesCarousel, props: servicesCarouselProperty },
      { Component: DifferenceComponent, props: differenceProperty },
      { Component: ModelsSection, props: ModelsDataProperty },
      { Component: ContactCta, props: contactCtaProperty },
    ]
  },
  {
    slug: "construction-accounting",
    title: "Construction Accounting",
    sections: [
      { Component: Hero, props: constructHero },
      { Component: ServicesStats, props: constructStats },
      { Component: AboutService, props: constructAbout },
      { Component: Approach, props: constructApproachRows },
      { Component: FaqWithImage, props: constructFaqItems },
      { Component: ServicesCarousel, props: constructServicesCarousel },
      { Component: DifferenceComponent, props: constructDifferenceConstruct },
      { Component: ModelsSection, props: constructModelsData },
      { Component: ContactCta, props: constructContactCta },
    ]
  },
  {
    slug: "advisory-services",
    title: "Advisory Services",
    sections: [
      { Component: Hero, props: cfoAdvisoryHero },
      { Component: ServicesStats, props: cfoStats },
      { Component: AboutService, props: cfoAbout },
      { Component: Approach, props: cfoApproachRows },
      { Component: FaqWithImage, props: cfoFaqItems },
      { Component: ServicesCarousel, props: cfoAdvisoryCarouselProperty },
      { Component: DifferenceComponent, props: cfoDifference },
      { Component: ModelsSection, props: cfoModelsData },
      { Component: ContactCta, props: cfoContactCta },
    ]
  },
  {
    slug: "uae-accounting-and-tax",
    title: "UAE Accounting & Tax",
    sections: [
      { Component: Hero, props: uaeAdvisoryHero },
      { Component: ServicesStats, props: uaeStats },
      { Component: AboutService, props: uaeAbout },
      { Component: Approach, props: uaeApproachRows },
      { Component: FaqWithImage, props: uaeFaqItems },
      { Component: ServicesCarousel, props: uaeAdvisoryCarouselProperty },
      { Component: DifferenceComponent, props: uaeDifference },
      { Component: Notice, props:uaeImportantNotice },
      { Component: ModelsSection, props: uaeModelsData },
      { Component: ContactCta, props: uaeContactCta },
    ]
  },
  {
    slug: "digital-and-systems-advisory",
    title: "Digital & Systems Advisory",
    sections: [
      { Component: Hero, props: systemsHero },
      { Component: ServicesStats, props: Accountstats },
      { Component: AboutService, props: systemsAbout },
      { Component: Approach, props: systemsApproachRows },
      { Component: FaqWithImage, props: systemsFaqItems },
      { Component: ServicesCarousel, props: systemsCarousel },
      { Component: DifferenceComponent, props: systemsDifference },
      { Component: ModelsSection, props: systemsModelsData },
      { Component: ContactCta, props: systemsContactCta },
    ]
  },
  {
    slug: "business-consultancy",
    title: "Business Consultancy",
    sections: [
      { Component: Hero, props: businessAdvisoryHero },
      { Component: ServicesStats, props: hmrcStats },
      { Component: AboutService, props: businessAdvisoryAbout },
      { Component: Approach, props: businessApproachRows },
      { Component: FaqWithImage, props: businessFaqItems },
      { Component: ServicesCarousel, props: businessAdvisoryCarouselProperty },
      { Component: DifferenceComponent, props: businessDifference },
      { Component: ModelsSection, props: businessModelsData },
      { Component: ContactCta, props: businessCta },
    ]
  },
  {
    slug: "tax-authority-support",
    title: "Tax Authority Support",
    sections: [
      { Component: Hero, props: taxHero },
      { Component: ServicesStats, props: hmrcStats },
      { Component: AboutService, props: taxAbout },
      { Component: Approach, props: taxApproachRows },
      { Component: FaqWithImage, props: taxFaqItems },
      { Component: ServicesCarousel, props: taxCarouselProperty },
      { Component: DifferenceComponent, props: taxDifference },
      { Component: ModelsSection, props: taxModelsData },
      { Component: ContactCta, props: taxContactCta },
    ]
  },
  {
    slug: "solutions",
    title: "Solutions",
    sections: [
      { Component: Hero, props: solutionsHero },
      { Component: ServicesStats, props: hmrcStats },
      { Component: AboutService, props: solutionsAbout },
      { Component: Approach, props: solutionsApproachRows },
      { Component: FaqWithImage, props: solutionsFaqItems },
      { Component: ServicesCarousel, props: solutionsCarousel },
      { Component: DifferenceComponent, props: solutionsDifference },
      { Component: ModelsSection, props: solutionsModelsData },
      { Component: ContactCta, props: solutionsContactCta },
    ]
  }
];

// ─── Helper ───────────────────────────────────────────────────────────────────



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
        {(service?.sections ?? []).map(({ Component, props = {} }, index) => (
          <Component key={index} {...props} />
        ))}
      </main>
    </ReactLenis>
  );
}