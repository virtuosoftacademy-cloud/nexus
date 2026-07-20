/** One case study card */
export type CaseStudy = {
    id: string
    category: string
    title: string
    summary: string
    serviceAreas: string[]
    image: string
    imageAlt: string
    href: string
}

export const caseStudies: CaseStudy[] = [
    {
        id: "multi-entity-property-portfolio",
        category: "Property & Real Estate",
        title: "Restructuring a Multi-Entity Property Portfolio",
        summary:
            "Bringing structure, visibility and tax clarity to a property group that had outgrown its original ownership model.",
        serviceAreas: [
            "Property Accounting & Tax",
            "Advisory Services",
            "Corporation Tax",
            "Governance & Reporting",
        ],
        image: "/assets/casestudycard.png",
        imageAlt: "City skyline with residential and commercial towers",
        href: "/case-studies/case-study",
    },
    {
        id: "multi-entity-property-portfolio",
        category: "Property & Real Estate",
        title: "Restructuring a Multi-Entity Property Portfolio",
        summary:
            "Bringing structure, visibility and tax clarity to a property group that had outgrown its original ownership model.",
        serviceAreas: [
            "Property Accounting & Tax",
            "Advisory Services",
            "Corporation Tax",
            "Governance & Reporting",
        ],
        image: "/assets/casestudycard.png",
        imageAlt: "City skyline with residential and commercial towers",
        href: "/case-studies/case-study",
    },
    {
        id: "multi-entity-property-portfolio",
        category: "Property & Real Estate",
        title: "Restructuring a Multi-Entity Property Portfolio",
        summary:
            "Bringing structure, visibility and tax clarity to a property group that had outgrown its original ownership model.",
        serviceAreas: [
            "Property Accounting & Tax",
            "Advisory Services",
            "Corporation Tax",
            "Governance & Reporting",
        ],
        image: "/assets/casestudycard.png",
        imageAlt: "City skyline with residential and commercial towers",
        href: "/case-studies/case-study",
    },
    {
        id: "multi-entity-property-portfolio",
        category: "Property & Real Estate",
        title: "Restructuring a Multi-Entity Property Portfolio",
        summary:
            "Bringing structure, visibility and tax clarity to a property group that had outgrown its original ownership model.",
        serviceAreas: [
            "Property Accounting & Tax",
            "Advisory Services",
            "Corporation Tax",
            "Governance & Reporting",
        ],
        image: "/assets/casestudycard.png",
        imageAlt: "City skyline with residential and commercial towers",
        href: "/case-studies/case-study",
    },
    {
        id: "multi-entity-property-portfolio",
        category: "Property & Real Estate",
        title: "Restructuring a Multi-Entity Property Portfolio",
        summary:
            "Bringing structure, visibility and tax clarity to a property group that had outgrown its original ownership model.",
        serviceAreas: [
            "Property Accounting & Tax",
            "Advisory Services",
            "Corporation Tax",
            "Governance & Reporting",
        ],
        image: "/assets/casestudycard.png",
        imageAlt: "City skyline with residential and commercial towers",
        href: "/case-studies/case-study",
    },
    {
        id: "multi-entity-property-portfolio",
        category: "Property & Real Estate",
        title: "Restructuring a Multi-Entity Property Portfolio",
        summary:
            "Bringing structure, visibility and tax clarity to a property group that had outgrown its original ownership model.",
        serviceAreas: [
            "Property Accounting & Tax",
            "Advisory Services",
            "Corporation Tax",
            "Governance & Reporting",
        ],
        image: "/assets/casestudycard.png",
        imageAlt: "City skyline with residential and commercial towers",
        href: "/case-studies/case-study",
    },
    {
        id: "multi-entity-property-portfolio",
        category: "Property & Real Estate",
        title: "Restructuring a Multi-Entity Property Portfolio",
        summary:
            "Bringing structure, visibility and tax clarity to a property group that had outgrown its original ownership model.",
        serviceAreas: [
            "Property Accounting & Tax",
            "Advisory Services",
            "Corporation Tax",
            "Governance & Reporting",
        ],
        image: "/assets/casestudycard.png",
        imageAlt: "City skyline with residential and commercial towers",
        href: "/case-studies/case-study",
    },
]




// ---------------------------------------------------------------------------
// Section: CaseStudyDetail types
// ---------------------------------------------------------------------------

export type ApproachCard = {
    title: string
    description: string
}

export type TimelineRow = {
    phase: string
    duration: string
}

export type RelatedService = {
    label: string
    href: string
}

export type CaseStudyCallout = {
    heading: string
    text: string
    buttonLabel: string
    buttonHref: string
}

/**
 * Props for <CaseStudyDetail /> — bundled page constant:
 *   { Component: CaseStudyDetail, props: caseStudyPropertyPortfolio }
 */
export type CaseStudyDetailProps = {
    heroTitle: string
    heroSubtitle: string
    heroImage: string
    industry?: string
    serviceAreas?: string[]
    /** Executive Summary paragraphs */
    summary?: string[]
    situation?: {
        paragraphs?: string[]
        questions?: string[]
        closing?: string
    }
    /** The Challenge paragraphs */
    challenge?: string[]
    approach?: {
        intro?: string[]
        cards?: ApproachCard[]
    }
    timeline?: TimelineRow[]
    /** The Outcome paragraphs */
    outcome?: string[]
    keyResults?: string[]
    relatedServices?: RelatedService[]
    callout?: CaseStudyCallout
}

// ---------------------------------------------------------------------------
// Section: Case study — Restructuring a Multi-Entity Property Portfolio
// ---------------------------------------------------------------------------
export const caseStudyPropertyPortfolio: CaseStudyDetailProps = {
    heroTitle: "Restructuring a Multi-Entity Property Portfolio",
    heroSubtitle: "Bringing structure, visibility and tax clarity to a property group that had outgrown its original ownership model.",
    heroImage: "/assets/casestudy.png",   // ← drop your real asset here
    industry: "Property & Real Estate",
    serviceAreas: [
        "Property Accounting & Tax",
        "Advisory Services",
        "Corporation Tax",
        "Governance & Reporting",
    ],
    summary: [
        "A growing property group operating through multiple companies approached Nexus once its ownership structure, reporting and intercompany arrangements had become difficult to manage. The group had expanded over several years through acquisitions, refinancing and development activity, but its governance and reporting had not kept pace with that growth.",
        "Management had limited visibility over portfolio-wide performance, intercompany balances had grown complex, and planned restructuring required a clearer view of the accounting, tax and commercial consequences involved. Nexus was engaged to review the existing structure, support the reorganisation of property ownership, improve reporting across the group and put in place a governance framework capable of supporting future growth.",
    ],
    situation: {
        paragraphs: [
            "The group held a mix of investment and development property across several companies. Some assets generated recurring rental income; others were held for future development or long-term strategic purposes. Funding had evolved over time, leaving multiple intercompany balances and transactions between entities.",
            "Although each company maintained its own records, management found it increasingly difficult to answer otherwise straightforward questions:",
        ],
        questions: [
            "How is the portfolio performing as a whole?",
            "Which entities are generating the strongest returns?",
            "What level of intercompany exposure exists across the group?",
            "How would proposed property transfers affect future tax positions?",
            "Which entities should hold future acquisitions and developments?",
        ],
        closing:
            "The structure remained operationally functional, but it was becoming inefficient to manage as the portfolio continued to expand.",
    },
    challenge: [
        "The proposed restructuring involved far more than moving properties between companies. Each decision carried implications for corporation tax, capital gains exposure, intercompany balances, financing arrangements, future refinancing, reporting consistency and long-term governance.",
        "The objective was not simply to achieve compliance. It was to ensure that future decisions could be made on the back of accurate information, a documented rationale and a structure able to support continued growth. Left unaddressed, the group risked rising complexity and decisions being taken without a clear view of the wider portfolio position.",
    ],
    approach: {
        intro: [
            "Nexus began with a comprehensive review of the existing structure, then worked with management to surface the commercial objectives behind the restructuring. Rather than treating this as a technical compliance exercise, we focused on aligning accounting, tax and governance with the long-term direction of the business.",
        ],
        cards: [
            {
                title: "Group Structure Review",
                description:
                    "We analysed the existing ownership arrangements to test whether they still supported the group's commercial objectives, and evaluated restructuring options from both a tax and a governance perspective.",
            },
            {
                title: "Intercompany Visibility",
                description:
                    "Intercompany balances and historical transactions were reviewed to improve transparency and establish a clearer picture of the financial relationships across the group. Supporting schedules were built to aid ongoing monitoring and reconciliation",
            },
            {
                title: "Reporting Improvements",
                description:
                    "Management reporting was redesigned to give genuine portfolio-wide visibility, focused on entity performance, property-level profitability, cashflow, funding exposure and consolidated oversight.",
            },
            {
                title: "Governance Framework",
                description:
                    "Additional documentation and review procedures were introduced around significant transactions and restructuring decisions, ensuring major decisions were supported by appropriate evidence, analysis and technical rationale.",
            },
        ],
    },
    timeline: [
        { phase: "Initial Review & Diagnostic Assessment", duration: "3 weeks" },
        { phase: "Restructuring Analysis & Recommendations", duration: "5 weeks" },
        { phase: "Reporting Framework Development", duration: "5 weeks" },
        { phase: "Ongoing Advisory Support", duration: "Continuing" },
    ],
    outcome: [
        "The engagement gave management materially greater visibility over the structure and performance of the portfolio. The directors gained a clearer understanding of property ownership arrangements, intercompany exposure, restructuring opportunities, reporting needs and long-term governance considerations.",
        "The revised reporting framework also improved the quality of information available for strategic decisions, financing discussions and development planning. The most significant shift was one of mindset: management moved from running individual companies in isolation to managing the portfolio as an integrated group - creating greater confidence in decision-making and a stronger platform for growth.",
    ],
    keyResults: [
        "Improved visibility across multiple property-owning entities",
        "Stronger governance over intercompany transactions",
        "Greater reporting consistency throughout the group",
        "Improved readiness for future refinancing and lender discussions",
        "Clearer alignment between ownership structure and commercial objectives",
        "Reduced operational complexity through structured reporting and documentation",
        "Greater confidence in future acquisition and development decisions",
        "A scalable framework capable of supporting future portfolio growth",
    ],
    relatedServices: [
        { label: "Property Accounting & Tax", href: "/services/property-accounting-tax" },
        { label: "Advisory Services", href: "/services/advisory" },
        { label: "Corporation Tax", href: "/services/uk-accounting-tax" },
        { label: "Governance & Reporting", href: "/services/governance-reporting" },
    ],
    callout: {
        heading: "Facing a similar challenge?",
        text: "Estate and lettings businesses often operate multiple income streams and client-money processes. Nexus helps landlords build clearer reporting, stronger controls and better commercial visibility.",
        buttonLabel: "Request a structured discussion",
        buttonHref: "/contact",
    },
}