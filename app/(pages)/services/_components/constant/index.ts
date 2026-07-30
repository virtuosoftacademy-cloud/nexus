


const ImagesCfo = "/assets/services/advisory";
const ImagesSolutions = "/assets/services/solutions";
const ImagesTax = "/assets/services/tax-authority";
const ImagesUae = "/assets/services/accounting-uae";
const ImagesSystems = "/assets/services/digital";
const ImagesBusiness = "/assets/services/business";

//UK Accounting & Tax

import { ApproachRowData, ContactCtaProps, FaqWithImageProps, HeroData } from "@/app/types/types";
import { ServicesCarouselProps } from "@/app/types/types"

// Hero

export const ukheroAccount: HeroData = {
    title: "Financial Discipline That Supports Growth",
    description: "Structured accounting, defensible tax positions, and financial discipline for owner managed businesses, property groups, and construction enterprises that need more than routine compliance.",
    width: "max-w-6xl",
    image: "/assets/services/bg-img-service1.png"
}



// Stats
export type StatsData = {
    id: string;
    value: string;
    label: string;
    size: string;
    icon?: string;
}

export type statsProps = {
    stats?: StatsData[]
}


export const Accountstats: statsProps = {
    stats: [
        { id: "s-1", size: "md:mr-25", value: "Finance First", icon: "", label: "System Design & Governance" },
        { id: "s-3", size: "md:mr-25", value: "100", icon: "%", label: "Partner Led Engagements" },
        { id: "s-2", size: "md:mr-25", value: "15", icon: "+", label: "Years of Systems Advisory Experience" },
    ]
};
// About Service
export type ServiceArea = {
    id: string
    description: string
}

export type AboutServiceData = {
    className?: string
    introParagraph: string
    listIntro?: string
    serviceAreasTitle?: string
    serviceAreas?: ServiceArea[]
    closingParagraph: string
    serviceTitleClassName?: string
    introClassName?: string
    optionalParagraph?: string
};


export const UKAccountingAbout: AboutServiceData = {
    introParagraph:
        `For many businesses, accounting begins as compliance and gradually becomes complexity. Growth introduces multiple entities, intercompany balances, property structures, construction contracts, VAT exposure, and corporation tax considerations. Without structure, reporting becomes reactive and risk accumulates quietly.`,
    optionalParagraph:"Nexus Advisory & Services provides UK Accounting & Tax support built around control, clarity, and defensible technical positioning. We work with owner managed businesses, property groups, construction led enterprises, and growth stage companies that require more than routine year end processing.",
    className: "italic font-bold",
    closingParagraph:
        "Our objective is not simply to file accounts and returns. \nOur objective is to strengthen financial discipline.",
};

// Approach
export type ApproachProps = {
    /** Rows to render; component renders null when missing/empty */
    rows?: ApproachRowData[]
}

export const approachRows: ApproachProps = {
    rows: [
        {
            id: "who-this-is-for-top",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "Our UK Accounting & Tax services are designed for:",
            items: [
                "Owner managed businesses seeking stronger reporting control",
                "Property backed groups operating through SPVs",
                "Construction and project based enterprises",
                "Multi entity groups requiring consolidation alignment",
                "Growing SMEs preparing for lender or investor scrutiny",
            ],
            closing:
                "If your reporting feels reactive, inconsistent, or disconnected from decision making, structured intervention is often required.",
            image: {
                src: "/assets/services/accounting-uk/approach1.png",
                alt: "Professional team in a boardroom meeting",
            },
            imagePosition: "right",
        },
        {
            id: "who-this-is-for-bottom",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "Our UK Accounting & Tax services are designed for:",
            items: [
                "Owner managed businesses seeking stronger reporting control",
                "Property backed groups operating through SPVs",
                "Construction and project based enterprises",
                "Multi entity groups requiring consolidation alignment",
                "Growing SMEs preparing for lender or investor scrutiny",
            ],
            closing:
                "These issues do not always trigger immediate crisis. They gradually erode credibility, create inefficiency, and increase regulatory exposure.",
            image: {
                src: "/assets/services/accounting-uk/approach2.png",
                alt: "Confident businessman at his desk",
            },
            imagePosition: "left",
        },
    ]
};
// Faq's

export const faqItemsUk: FaqWithImageProps =
{
    titleStart: "Our Structured",
    titleHighlight: "Approach",
    subtitle: "Our methodology is built around four principles:",
    data: [
        {
            value: "reporting-framework",
            trigger: "1. Stabilise",
            content:
                "Establish reconciled balance sheets, documented policies, and reliable monthly reporting cadence.",
            image:
                "/assets/services/accounting-uk/faq1.png",
            alt: "Business team in a boardroom meeting",
        },
        {
            value: "tax-applicability",
            trigger: "2. Clarify",
            content: "Align statutory reporting with commercial insight so management understands what the numbers represent.",
            image:
                "/assets/services/accounting-uk/faq2.png",
            alt: "Tax and legal documents on a desk",
        },
        {
            value: "vat-governance",
            trigger: "3. Structure",
            content:
                "Ensure tax positions are defensible, documented and aligned with group objectives.",
            image:
                "/assets/services/accounting-uk/faq3.png",
            alt: "Analytics dashboard with financial charts",
        },
        {
            value: "embedding-controls",
            trigger: "4. Strengthen",
            content: "Embed financial discipline so reporting improves over time rather than deteriorates.",
            image:
                "/assets/services/accounting-uk/faq4.png",
            alt: "Team collaborating over documents",
        },
    ]
}

// ---------------------------------------------------------------------------
// Section: UK Accounting & Tax — services carousel
// ---------------------------------------------------------------------------
export const servicesCarouselUk: ServicesCarouselProps = {
    titleStart: "Scope of UK Accounting &",
    titleHighlight: "Tax Services",
    subtitle: "The principles behind every recommendation.",
    slides: [
        {
            id: "statutory-accounting",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Statutory accounting icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. Statutory Accounting",
            titleLine2: "Audit Ready Reporting Discipline",
            intro:
                "We prepare statutory financial statements under UK GAAP (FRS 102 / FRS 105) with an audit ready mindset, even where audit is not required.",
            optionalHeading: "",
            optionallistItems: [],
            optionalParagraph: "",
            listHeading: "Our work typically includes:",
            listItems: [
                "Preparation of statutory financial statements",
                "Full balance sheet reconciliations",
                "Audit ready working papers and schedules",
                "Group consolidation support (non-audit)",
                "Technical accounting support for complex judgements",
                "Year end accounts finalisation and Companies House filing support",
            ],
            outro:
                "We ensure that year end outputs reflect disciplined monthly reporting not a year end reconstruction exercise.",
            caseTitle: "Case Illustration Multi SPV Property Group",
            caseIntro:
                "A property group operating through multiple SPVs experienced repeated delays at year end due to:",
            caseProblems: [
                "Intercompany mismatches",
                "Development cost inconsistencies",
                "Dividend documentation gaps",
            ],
            caseSolutionHeading: "We implemented:",
            caseSolutions: [
                "Standardised accounting policy framework",
                "Monthly intercompany reconciliation templates",
                "Consolidation ready reporting schedules",
            ],
            caseResultTitle: "Result",
            caseResult:
                "Improved lender confidence and materially reduced year end completion time.",
        },
        {
            id: "property-accounting-tax",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Property accounting icon",
            caseIcon: "/assets/icon/stock-money.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. Property Accounting & Tax",
            titleLine2: "Specialist Support for Rental, Development & Council Linked Structures",
            intro:
                "Property accounting requires technical precision across VAT, capitalisation, and structuring.",
            optionalHeading: "",
            optionallistItems: [],
            optionalParagraph: "We reviewed contractual structures, modelled VAT impact scenarios and provided a documented treatment framework.",
            listHeading: "We support:",
            listItems: [
                "Rental portfolios and SPVs",
                "Resident and Non Resident Landlord structures",
                "Mixed use partial exemption",
                "Temporary accommodation and council leasing models",
                "Development and refurbishment accounting",
                "Capital allowances and SDLT coordination",
            ],
            outro:
                "Our focus is ensuring tax efficiency while preserving commercial margin and compliance integrity.",
            caseTitle: "Case Illustration Temporary Accommodation VAT Review",
            caseIntro:
                "A temporary accommodation provider faced uncertainty regarding:",
            caseProblems: [],
            caseSolutionHeading: "We:",
            caseSolutions: [
                "VAT treatment of council supply",
                "Application of the 28 day rule",
                "Partial exemption recovery",
            ],
            caseResultTitle: "Outcome",
            caseResult:
                "Reduced VAT exposure risk and improved pricing clarity.",
        },
        {
            id: "construction-accounting",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Construction accounting icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "3. Construction & Project Based Accounting",
            titleLine2: "Financial Visibility Across the Project Lifecycle",
            intro: "",
            optionalHeading: "Construction and project based businesses require:",
            optionallistItems: [
                "Cost to complete accuracy",
                "Stage of completion clarity",
                "Working capital forecasting",
                "CIS compliance discipline",
            ],
            optionalParagraph: "",
            listHeading: "We provide:",
            listItems: [
                "Project cost reporting and profitability analysis",
                "Revenue recognition alignment",
                "VAT treatment support for construction activities",
                "CIS compliance and subcontractor structuring",
                "Budgeting and cashflow forecasting",
                "Multi currency accounting frameworks",
            ],
            outro: "",
            caseTitle: "Case Illustration Margin Erosion in Growing Contractor",
            caseIntro:
                "A contractor experienced turnover growth but declining margins.",
            caseProblems: [],
            caseSolutionHeading: "We implemented:",
            caseSolutions: [
                "Project level profitability dashboards",
                "Monthly cost to complete reviews",
                "Overhead allocation discipline",
                "Cashflow modelling aligned to milestones",
            ],
            caseResultTitle: "Result",
            caseResult:
                "Improved margin visibility and stabilised working capital.",
        },
        {
            id: "corporation-tax",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Corporation tax icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "4. Corporation Tax",
            titleLine2: "Structured and Defensible Tax Planning",
            intro:
                "We provide corporation tax support that is technically robust and commercially aligned.",
            optionalHeading: "",
            optionallistItems: [],
            optionalParagraph: "",
            listHeading: "Scope includes:",
            listItems: [
                "Corporation tax computations and CT600 filings",
                "Group relief optimisation",
                "Capital allowances reviews",
                "Tax provision and ETR analysis",
                "R&D tax credit eligibility support (non-contingent)",
            ],
            outro:
                "We focus on documentation, proportionality, and sustainability.",
            caseTitle: "Case Illustration Group Relief Optimisation",
            caseIntro:
                "A multi entity group held unutilised losses in one entity while another entity was profitable. \n\nWe reviewed group structure, calculated surrenderable losses, and aligned reporting.",
            caseProblems: [],
            caseSolutionHeading: "",
            caseSolutions: [],
            caseResultTitle: "Outcome",
            caseResult:
                "Reduced tax payable while maintaining defensible documentation.",
        },
        {
            id: "vat-services",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "VAT services icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "5. VAT",
            titleLine2: "Managing High Risk Compliance Areas",
            intro:
                "VAT risk frequently arises in property and construction sectors.",
            optionalHeading: "",
            optionallistItems: [],
            optionalParagraph: "",
            listHeading: "We provide:",
            listItems: [
                "VAT registration and deregistration support",
                "VAT return preparation and review",
                "Partial exemption analysis",
                "Property and construction VAT structuring",
                "Compliance health checks",
                "HMRC VAT correspondence (non-tribunal)",
            ],
            outro:
                "Our objective is proactive exposure management.",
            caseTitle: "Case Illustration Partial Exemption Exposure",
            caseIntro:
                "A property group had overstated input tax recovery due to mixed use property classification.\n\nWe recalculated recovery ratios and documented methodology.",
            caseProblems: [],
            caseSolutionHeading: "",
            caseSolutions: [],
            caseResultTitle: "Outcome",
            caseResult:
                "Reduced future exposure and strengthened compliance governance.",
        },
        {
            id: "payroll-employment-taxes",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Payroll and employment taxes icon",
            caseIcon: "/assets/icon/payroll-puzzle.svg",
            caseIconAlt: "Payroll discipline icon",
            titleLine1: "6. Payroll & Employment Taxes",
            titleLine2: "Controlled Employment Tax Compliance",
            // intro:
            //     "VAT risk frequently arises in property and construction sectors.",
            optionalHeading: "",
            optionallistItems: [],
            optionalParagraph: "",
            listHeading: "We support:",
            listItems: [
                "Payroll processing and RTI submissions",
                "PAYE and NIC compliance",
                "CIS registration and reporting",
                "P11D and PSA preparation",
                "Employment tax risk reviews",
            ],
            outro:
                "Payroll is integrated into reporting discipline, not treated in isolation.",
            caseTitle: "Why Payroll Discipline Matters",
            caseIntro:
                "Payroll errors are rarely isolated. A misclassified worker, a missed RTI deadline, or an incorrectly processed benefit creates a chain of exposure PAYE liability, NIC underpayment, and potential HMRC review.\n\nWe integrate payroll compliance into the broader reporting framework. Not as a standalone administrative function, but as a controlled process with documented outputs, aligned to your wider employment tax position.",
            caseProblems: [],
            caseSolutionHeading: "",
            caseSolutions: [],
            caseResultTitle: "",
            caseResult:
                "The result is a payroll function that is accurate, on time, and defensible under scrutiny. \n\nReducing exposure and strengthening compliance governance.",
        },
    ],
}

export type DifferenceItem = {
    id: string
    text: string
}

export type DifferenceProps = {
    titleStart?: string
    titleHighlight?: string
    subtitle?: string
    items?: DifferenceItem[]
    closing?: string
}

export const differenceUk: DifferenceProps = {
    titleStart: "What Makes",
    titleHighlight: "Nexus Different",
    subtitle: "Unlike compliance driven firms, we:",
    items: [
        { id: "partner led", text: "Partner led delivery, not volume processing" },
        { id: "property and construction", text: "Property and Construction sector depth" },
        { id: "audit", text: "Audit ready working standards" },
        { id: "governance", text: "Governance first mindset" },
        { id: "cross-border", text: "Cross border perspective (UK and UAE readiness)" },
        { id: "advisory", text: "Advisory capability beyond compliance" },
    ],
    closing: "We combine technical precision with commercial understanding.",
}

// Models

export type Phase = {
    id: string;
    title: string;
    description: string;
    image: string;
    width: string;
}

export type ModelsDataProps = {
    titleStart: string;
    titleAccent: string;
    subTitle: string;
    closingSubtitle: string;
    columns: number
    data?: Phase[]
}

export const ModelsDataUK: ModelsDataProps =
{
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "Our engagements typically follow:",
    closingSubtitle: "We work selectively and proportionately, ensuring each client receives structured attention.",
    columns: 4,
    data: [
        {
            id: "ind-1",
            title: "Phase 1 - Initial Structured Review",
            description:
                "A structured assessment of financial reporting, governance, and risk exposure to identify key improvement opportunities.",
            width: "max-w-60",
            image:
                "/assets/services/accounting-uk/phase1.png"
        },
        {
            id: "ind-2",
            title: "Phase 2 - Scope definition and timetable alignment",
            description:
                "Establish clear objectives, priorities, and timelines to create a focused and achievable implementation roadmap.",
            width: "",
            image:
                "/assets/services/accounting-uk/phase2.png"
        },
        {
            id: "ind-3",
            title: "Phase 3 - Implementation with documented deliverables Implementation Oversight",
            description:
                "Manage execution and monitor progress to ensure deliverables are completed accurately, on time and in line with agreed objectives.",
            width: "",
            image:
                "/assets/services/accounting-uk/phase3.png"
        },
        {
            id: "ind-4",
            title: "Phase 4 - Ongoing cadence (monthly, quarterly, annual as appropriate)",
            description: "Regular monthly, quarterly, or annual reviews to monitor performance, manage risks and support continuous improvement.",
            width: "",
            image:
                "/assets/services/accounting-uk/phase4.png"
        }]
};

// Conatct Cta

// ---------------------------------------------------------------------------
// Section: ContactCta types
// ---------------------------------------------------------------------------
const ctaImage = "/assets/services";
export const contactCtaUk: ContactCtaProps = {
    titleStart: "Start a",
    titleHighlight: "Conversation",
    intro:
        "If your reporting feels reactive, your tax position uncertain, or your structure increasingly complex, a structured review can clarify next steps.",
    listIntro: "A short initial discussion can determine:",
    discussionPoints: [
        "Where risk exists",
        "Where reporting can improve",
        "What practical scope is appropriate",
    ],
    closing: "A structured early discussion can prevent future compliance risk.",
    buttonLabel: "Speak to an Adviser",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Support advisor with a headset ready to take your call",
    },
}

// Property Accounting & Tax

// Hero

export const propertyHero: HeroData = {
    title: "Specialist Financial & Tax Support for Property Structures",
    description:
        "From portfolio landlords and SPV structures to temporary accommodation operators and property developers structured financial and tax support for the full complexity of UK property ownership.",
    width: "max-w-6xl",
    image: "/assets/bg-img-service2.png",
}
// Stats

export const Propertystats: statsProps = {
    stats: [
        { id: "s-1", size: "md:mr-25", value: "SPV & Portfolio", icon: "", label: "Specialist Structuring Experience" },
        { id: "s-3", size: "md:mr-25", value: "100", icon: "%", label: "Partner Led Engagements" },
        { id: "s-2", size: "md:mr-25", value: "15", icon: "+", label: "Years of Systems Advisory Experience" },
    ]
};
// About Service

export const propertyAbout: AboutServiceData = {
    introParagraph:
        `Property businesses operate within a uniquely complex financial and tax environment. Rental portfolios, SPVs, refurbishment programmes, development cycles, VAT exposure, SDLT implications, and capital allowances all intersect in ways that generic accounting rarely addresses adequately.`,
    listIntro:
        "Nexus Advisory & Services provides structured property focused accounting and tax support for landlords, developers, investors, and council-linked operators.",
    serviceAreasTitle: "We work with:",
    serviceAreas: [
        { id: "psa-1", description: "Portfolio landlords operating through multiple SPVs" },
        { id: "psa-2", description: "Resident and Non-Resident Landlord structures" },
        { id: "psa-3", description: "Temporary accommodation providers" },
        { id: "psa-4", description: "Council leasing and guaranteed rent operators" },
        { id: "psa-5", description: "Property developers and refurbishment led groups" },
        { id: "psa-6", description: "Mixed use and partially exempt property businesses" },
    ],
    className: "",
    closingParagraph:
        "Our approach is technical, commercially aware, and defensible.",
}

// Approach 

export const approachRowsProperty: ApproachProps = {
    rows: [
        {
            id: "property-who-this-is-for",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "This service is designed for:",
            items: [
                "Property groups operating through multiple entities",
                "Landlords experiencing increasing VAT or tax complexity",
                "Operators working with local authorities",
                "Developers managing capitalisation decisions",
                "Businesses facing HMRC scrutiny",
                "Investors seeking structured reporting discipline",
            ],
            closing:
                "If your property operations involve VAT complexity, capital expenditure classification questions, or cross entity structuring, specialist oversight becomes essential.",
            image: {
                src: "/assets/services/property-tax/approach1.png",
                alt: "Professional team in a boardroom meeting",
            },
            imagePosition: "right",
        },
        {
            id: "property-common-problems",
            titleStart: "The Problems We",
            titleHighlight: "Commonly See",
            intro: "Across property clients, recurring issues include:",
            items: [
                "Incorrect classification of capital vs revenue expenditure",
                "Inconsistent development cost capitalisation",
                "Intercompany loan documentation gaps",
                "VAT misapplication (particularly in temporary accommodation)",
                "Partial exemption miscalculations",
                "Non-resident landlord compliance confusion",
                "SDLT planning handled without accounting alignment",
                "Weak reporting across multiple SPVs",
            ],
            closing:
                "These issues often remain hidden until lender review, HMRC enquiry, or transaction preparation.",
            image: {
                src: "/assets/services/property-tax/approach2.png",
                alt: "Confident businessman at his desk",
            },
            imagePosition: "left",
        },
    ],
}

// Faq's — Our Structured Approach to Property Accounting (five core areas)
const ImagesProperty = "/assets/services/property-tax";
export const faqItemsProperty: FaqWithImageProps = {
    titleStart: "Our Structured Approach to ",
    titleHighlight: "Property Accounting",
    subtitle: "We focus on five core areas:",
    data: [
        {
            value: "structural-clarity",
            trigger: "1. Structural Clarity",
            content:
                "Ensuring accurate accounting and tax treatment of SPVs, intercompany loans, and ownership structures.",
            image:
                `${ImagesProperty}/structural-clarity.png`,
            alt: "Modern residential property exterior",
        },
        {
            value: "vat-precision",
            trigger: "2. VAT Precision",
            content:
                "Modelling and documenting VAT treatment across rental, development, and temporary accommodation models.",
            image:
                `${ImagesProperty}/vat-precision.png`,
            alt: "Tax and legal documents on a desk",
        },
        {
            value: "capital-discipline",
            trigger: "3. Capital Discipline",
            content:
                "Correct classification of refurbishment and development expenditure, avoiding misstatements and future tax risk.",
            image:
                `${ImagesProperty}/capital-discipline.png`,
            alt: "Construction site with cranes",
        },
        {
            value: "reporting-alignment",
            trigger: "4. Reporting Alignment",
            content:
                "Ensuring each SPV produces consistent, reconciled financial outputs aligned to group reporting.",
            image:
                `${ImagesProperty}/reporting-alignment.png`,
            alt: "Analytics dashboard with financial charts",
        },
        {
            value: "defensible-tax",
            trigger: "5. Defensible Tax Positioning",
            content:
                "Supporting corporation tax, capital allowances, and SDLT considerations with documented technical rationale.",
            image:
                `${ImagesProperty}/defensible-tax.png`,
            alt: "Team collaborating over documents",
        },
    ],
}

// Services Carousel
export const servicesCarouselProperty: ServicesCarouselProps = {
    titleStart: "Core Areas of",
    titleHighlight: "Support",
    subtitle: "Specialist support across the property lifecycle.",
    slides: [
        {
            id: "rental-portfolios-spvs",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Rental portfolios icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. Rental Portfolios",
            titleLine2: "& Property SPVs",
            intro:
                "We support property groups operating across multiple SPVs.",
            listHeading: "We implement:",
            listItems: [
                "Standardised accounting policies",
                "Monthly reconciliation discipline",
                "Intercompany alignment",
                "Dividend documentation clarity",
                "Lender ready financial reporting",
            ],
            caseTitle: "Case Illustration Multi SPV Portfolio with Reporting Gaps",
            caseIntro:
                "A property group operating 14 SPVs had inconsistent accounting treatment and intercompany mismatches.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Introduced uniform accounting policy framework",
                "Created structured intercompany reconciliation process",
                "Implemented monthly balance sheet review schedule",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Reduced year end consolidation pressure and improved lender confidence.",
        },
        {
            id: "landlord-structures",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Landlord structures icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. Resident & Non-Resident",
            titleLine2: "Landlord Structures",
            intro:
                "Cross border property ownership introduces additional compliance layers.",
            listHeading: "We support:",
            listItems: [
                "Non-resident landlord tax compliance",
                "UK withholding considerations",
                "Cross border reporting alignment",
                "Structuring reviews for efficiency and clarity",
            ],
            outro:
                "Our approach ensures technical compliance while preserving commercial viability.",
            caseTitle: "Case Illustration Overseas Investor with UK Rental Portfolio",
            caseIntro:
                "An overseas investor operating UK properties lacked clarity on reporting and withholding treatment.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed landlord registration position",
                "Structured reporting templates",
                "Coordinated tax position documentation",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved compliance certainty and reduced administrative confusion.",
        },
        {
            id: "property-vat-partial-exemption",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Property VAT icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "3. Property VAT &",
            titleLine2: "Partial Exemption Analysis",
            optionalHeading: "Property VAT is frequently misunderstood, particularly in:",
            optionallistItems: [
                "Mixed use buildings",
                "Opted-to-tax units",
                "Temporary accommodation",
                "Development to rental transitions",
            ],
            listHeading: "We provide:",
            listItems: [
                "Partial exemption calculations and review",
                "VAT option to tax assessment",
                "Input tax recovery modelling",
                "Scenario planning for development conversion",
            ],
            caseTitle: "Case Illustration Partial Exemption Exposure",
            caseIntro:
                "A property group overstated input VAT recovery across mixed use units. \n\nWe recalculated recovery ratios and documented defensible methodology.",
            caseResultTitle: "Outcome:",
            caseResult:
                "Reduced potential HMRC exposure and improved VAT governance.",
        },
        {
            id: "temporary-accommodation-council",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Temporary accommodation icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "4. Temporary Accommodation",
            titleLine2: "& Council Leasing Models",
            optionalHeading: "Temporary accommodation models often trigger complex VAT analysis due to:",
            optionallistItems: [
                "Supply structure",
                "28 day rule implications",
                "Service level agreements",
                "Mixed treatment of rent and management services",
            ],
            listHeading: "We review:",
            listItems: [
                "Contractual terms",
                "Supply classification",
                "VAT recovery implications",
                "Pricing impact",
            ],
            caseTitle: "Case Illustration Council Leasing Operator",
            caseIntro:
                "An operator leasing properties to councils faced potential standard rated VAT exposure due to service structure.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed tenancy agreements",
                "Modelled alternative supply structures",
                "Clarified VAT position documentation",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Reduced exposure risk and improved margin certainty.",
        },
        {
            id: "development-refurbishment",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Development accounting icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "5. Property Development &",
            titleLine2: "Refurbishment Accounting",
            intro:
                "Development cycles require disciplined cost tracking and capitalisation clarity.",
            listHeading: "We support:",
            listItems: [
                "Development cost capitalisation frameworks",
                "Revenue recognition timing",
                "WIP treatment",
                "Stage of completion reviews",
                "Development to investment transitions",
            ],
            caseTitle: "Case Illustration Refurbishment Programme Classification Risk",
            caseIntro:
                "A refurbishment heavy portfolio incorrectly capitalised minor repairs.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Introduced capital vs revenue framework",
                "Restated misclassified expenditure",
                "Strengthened documentation for future review",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved balance sheet accuracy and reduced corporation tax risk.",
            caseButton: "Capital Allowances & SDLT Support",
            caseDialogTitle: "Capital Allowances & SDLT Support",
            caseDialogIntro:
                "Capital allowances and SDLT planning must align with accounting reality.",
            caseDialogItemsTitle: "We Support:",
            caseDialogItems: [
                "Capital allowances identification and review",
                "Coordination with specialist surveyors where required",
                "SDLT structuring alignment",
                "Transaction-ready documentation",
            ],
            caseDialogIcon: "/assets/icon/file-search.svg",
            caseDialogIconAlt: "Capital Allowances & SDLT Support"
        },
    ],
}

// Difference

export const differenceProperty: DifferenceProps = {
    titleStart: "What Makes Nexus Different in",
    titleHighlight: "Property Advisory",
    subtitle: "Unlike generic accounting firms, we:",
    items: [
        { id: "temp-accommodation", text: "Deep understanding of temporary accommodation models" },
        { id: "council-leasing", text: "Experience with council linked leasing arrangements" },
        { id: "vat-modelling", text: "Structured VAT modelling" },
        { id: "spv-reporting", text: "SPV focused reporting discipline" },
        { id: "cross-border", text: "Cross border landlord \nunderstanding" },
        { id: "advisory-mindset", text: "Advisory mindset beyond \ncompliance" },
    ],
    closing: "We combine technical tax awareness with commercial practicality.",
}

// Models — property engagement phases

export const ModelsDataProperty: ModelsDataProps = {
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "Property engagements typically follow:",
    closingSubtitle:
        "We tailor engagement intensity based on portfolio scale and complexity.",
    columns: 5,
    data: [
        {
            id: "prop-phase-1",
            title: "Phase 1 - Initial Structural & Reporting Review",
            description:
                "Reviewing financial governance and reporting effectiveness.",
            width: "",
            image:
                `${ImagesProperty}/phase1.png`
        },
        {
            id: "prop-phase-2",
            title: "Phase 2 - Identification of Risk Areas",
            description:
                "Identifying risks and revenue recovery opportunities.",
            width: "",
            image:
                `${ImagesProperty}/phase2.png`
        },
        {
            id: "prop-phase-3",
            title: "Phase 3 - VAT & Tax Position Modelling",
            description:
                "Developing a clear and defensible tax framework.",
            width: "",
            image:
                `${ImagesProperty}/phase3.png`
        },
        {
            id: "prop-phase-4",
            title: "Phase 4 - Structured Reporting Discipline & Ongoing Oversight",
            description:
                "Providing ongoing monitoring and reporting guidance.",
            width: "",
            image:
                `${ImagesProperty}/phase4.png`
        },
        {
            id: "prop-phase-5",
            title: "Phase 5 - Ongoing Oversight",
            description:
                "Maintaining accurate records and regulatory compliance.",
            width: "",
            image:
                `${ImagesProperty}/phase5.png`
        },
    ],
}

// Contact Cta — When to Contact Us

export const contactCtaProperty: ContactCtaProps = {
    titleStart: "When to",
    titleHighlight: "Contact Us",
    intro:
        "You should consider structured property advisory if:",
    listIntro: "A short discussion can clarify exposure and next steps if:",
    discussionPoints: [
        "Your portfolio has grown significantly",
        "VAT treatment feels uncertain",
        "You operate across multiple SPVs",
        "You are working with councils or local authorities",
        "You are preparing for lender review",
        "You are considering expansion or refinancing",
    ],
    closing: "A short discussion can clarify exposure and next steps.",
    buttonLabel: "Speak to a Property Adviser",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Property advisor ready to take your call",
    },
}

// Construction Accounting

export const constructHero: HeroData = {
    title: "Financial Control for Contract Driven and Project Led Businesses",
    description:
        "Project led businesses face unique financial complexities, from tracking milestone billing to managing subcontractor costs.",
    width: "max-w-6xl",
    image: "/assets/bg-img-service5.png"
}

// Stats

export const constructStats: statsProps = {
    stats: [
        { id: "s-1", size: "md:mr-25", value: "CIS & DRC", icon: "", label: "Compliance Specialist Experience" },
        { id: "s-3", size: "md:mr-25", value: "100", icon: "%", label: "Partner Led Engagements" },
        { id: "s-2", size: "md:mr-25", value: "15", icon: "+", label: "Years of Construction Sector Depth" },
    ]
};

// About Service

export const constructAbout: AboutServiceData = {
    introParagraph:
        `Construction and project based businesses operate in a financially demanding environment. Revenue is milestone driven, costs fluctuate across phases, margins can be narrow, and working capital pressure is constant.

Standard accounting processes are rarely sufficient for contract led operations. Without disciplined cost tracking, revenue recognition clarity, and structured cashflow planning, profitability can erode long before it becomes visible in statutory accounts.

Nexus Advisory & Services provides specialist accounting and tax support tailored to construction contractors, subcontractors, refurbishment led businesses, and project based service providers.
`,
    listIntro:
        "",
    serviceAreasTitle: "Our objective is simple:",
    serviceAreas: [],
    className: "",
    closingParagraph:
        "To ensure projects remain financially visible, commercially viable, and structurally compliant throughout their lifecycle."
}
const ImagesConstruct = "/assets/services/construct-account/";
// Approach 

export const constructApproachRows: ApproachProps = {
    rows: [
        {
            id: "who-this-is-for",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "This service is designed for:",
            items: [
                "Main contractors and subcontractors",
                "Refurbishment led property operators",
                "Specialist trades operating under CIS",
                "Project led service businesses",
                "Multi site contractors",
                "Businesses operating across multiple currencies"
            ],
            closing:
                "If your profitability depends on accurate project costing, milestone billing, and disciplined VAT/CIS compliance, structured financial oversight becomes essential.",
            image: {
                src: `${ImagesConstruct}/approach1.png`,
                alt: "Professional team in a boardroom meeting",
            },
            imagePosition: "right",
        },
        {
            id: "property-common-problems",
            titleStart: "The Problems We",
            titleHighlight: "Commonly See",
            intro: "Across construction and project led businesses, recurring challenges include:",
            items: [
                "Margin drift due to incomplete cost allocation",
                "Overstatement or understatement of WIP",
                "Revenue recognition misalignment",
                "Poor visibility of cost to complete",
                "CIS compliance errors",
                "VAT misapplication under domestic reverse charge",
                "Working capital strain due to milestone timing",
                "Multi project reporting inconsistencies"
            ],
            closing:
                "These issues are often not visible in year end accounts until cashflow pressure emerges.",
            image: {
                src: `${ImagesConstruct}/approach2.png`,
                alt: "Confident businessman at his desk",
            },
            imagePosition: "left",
        },
    ],
}

// Faq's — Our Structured Approach to Property Accounting (five core areas)
export const constructFaqItems: FaqWithImageProps = {
    titleStart: "Our Structured Approach to ",
    titleHighlight: "Construction Accounting",
    subtitle: "We focus on five core areas:",
    data: [
        {
            value: "project-Level-financial-visibility",
            trigger: "1. Project Level Financial Visibility",
            content:
                "Ensuring each contract or project has measurable profitability tracking.",
            image:
                `${ImagesConstruct}/project.png`,
            alt: "Modern residential property exterior",
        },
        {
            value: "revenue-recognition-discipline",
            trigger: "2. Revenue Recognition Discipline",
            content:
                "Aligning reporting with stage of completion methodology where appropriate.",
            image:
                `${ImagesConstruct}/revenue.png`,
            alt: "Tax and legal documents on a desk",
        },
        {
            value: "cost-allocation-accuracy",
            trigger: "3. Cost Allocation Accuracy",
            content:
                "Ensuring overheads and direct costs are properly attributed.",
            image:
                `${ImagesConstruct}/cost.png`,
            alt: "Construction site with cranes",
        },
        {
            value: "compliance-control",
            trigger: "4. Compliance Control",
            content:
                "Managing CIS and VAT obligations with structured documentation.",
            image:
                `${ImagesConstruct}/compliance.png`,
            alt: "Analytics dashboard with financial charts",
        },
        {
            value: "working-capital-planning",
            trigger: "5. Cashflow & Working Capital Planning",
            content:
                "Forecasting inflows and outflows aligned to contract milestones.",
            image:
                `${ImagesConstruct}/cashflow.png`,
            alt: "Team collaborating over documents",
        },
    ],
}

// Services Carousel
export const constructServicesCarousel: ServicesCarouselProps = {
    titleStart: "Core Areas of",
    titleHighlight: "Support",
    subtitle:
        "The principles behind every recommendation.",
    slides: [
        {
            id: "rental-portfolios-spvs",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Rental portfolios icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. Project Cost Reporting & Profitability",
            titleLine2: "\nAnalysis",
            intro:
                "Construction profitability depends on real time cost awareness.",
            listHeading: "We implement:",
            listItems: [
                "Project level P&L tracking",
                "Cost to complete modelling",
                "Overhead allocation frameworks",
                "Margin variance reporting",
                "Contract performance dashboards"
            ],
            outro: "Our focus is ongoing financial monitoring, not retrospective review.",
            caseTitle: "Case Illustration Margin Erosion in Expanding Contractor",
            caseIntro:
                "A growing contractor reported increasing turnover but declining net profit margins. Project reporting was informal and overhead allocation inconsistent.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Introduced project based reporting structure",
                "Implemented monthly cost to complete reviews",
                "Allocated indirect costs proportionately",
                "Created margin variance analysis"
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved pricing discipline and restored margin transparency."
        },
        {
            id: "landlord-structures",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Landlord structures icon",
            caseIcon: "/assets/icon/stock-money.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. Revenue Recognition & WIP Management",
            titleLine2: "",
            intro:
                "Revenue recognition in construction requires structured judgement.",
            listHeading: "We support:",
            listItems: [
                "Stage of completion reporting frameworks",
                "WIP calculation methodology",
                "Contract asset and liability analysis",
                "Revenue deferral where required",
                "Documentation of accounting judgements"
            ],
            outro:
                "This ensures statutory accounts reflect economic reality.",
            caseTitle: "Case Illustration WIP Overstatement Risk",
            caseIntro:
                "A contractor recognised revenue aggressively at early project stages, overstating profit.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed contract performance",
                "Adjusted stage of completion calculations",
                "Introduced revenue recognition checklist"
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "More conservative, defensible reporting aligned to financial control."
        },
        {
            id: "property-vat-partial-exemption",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Property VAT icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "3. VAT Treatment for Construction Activities",
            titleLine2: "",
            optionalHeading: "Construction VAT is complex due to:",
            optionallistItems: [
                "Domestic reverse charge",
                "Mixed residential and commercial supply",
                "Subcontractor invoicing",
                "Reduced rate eligibility",
            ],
            listHeading: "We provide:",
            listItems: [
                "VAT treatment reviews",
                "Reverse charge assessment",
                "Compliance health checks",
                "Invoice structure review",
                "HMRC correspondence support (non-tribunal)",
                "Multi currency accounting frameworks"
            ],
            outro: "Our objective is to reduce avoidable VAT risk exposure.",
            caseTitle: "Case Illustration Domestic Reverse Charge Confusion",
            caseIntro:
                "A subcontractor incorrectly charged VAT under reverse charge rules.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed contractual arrangements",
                "Corrected VAT invoicing procedures",
                "Provided internal compliance guidance"
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Reduced risk HMRC penalty exposure.",
        },
        {
            id: "temporary-accommodation-council",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Temporary accommodation icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "4. CIS Compliance",
            titleLine2: "",
            intro: "CIS compliance errors can trigger significant penalties and cashflow disruption.",
            listHeading: "We support:",
            listItems: [
                "CIS registration",
                "Subcontractor verification processes",
                "Monthly CIS return preparation",
                "Deduction statement alignment",
                "Compliance review prior to HMRC enquiry"
            ],
            caseTitle: "Case Illustration CIS Verification Risk",
            caseIntro:
                "A contractor failed to verify multiple subcontractors correctly, risking higher deduction rates and potential penalties.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed subcontractor status",
                "Corrected verification process",
                "Structured documentation framework"
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved compliance and reduced exposure to enforcement action.",
        },
        {
            id: "development-refurbishment",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Development accounting icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "5. Budgeting & Working Capital Planning",
            titleLine2: "",
            listHeading: "Construction businesses frequently experience:",
            listItems: [
                "Delayed receipts",
                "Retention balances",
                "Supplier pressure",
                "Payroll intensity",
            ],
            optionalHeading: "We provide:",
            optionallistItems: [
                "Rolling cashflow forecasts",
                "Retention tracking models",
                "Milestone based forecasting",
                "Supplier payment scheduling support",
                "Scenario modelling"
            ],
            outro: "Our modelling aligns operational planning with financial sustainability.",
            caseTitle: "Case Illustration Cashflow Strain During Expansion",
            caseIntro:
                "A contractor expanded rapidly into multiple concurrent projects and faced liquidity pressure due to milestone delays.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Modelled contract inflow timing",
                "Identified funding gap periods",
                "Structured revised payment sequencing"
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Stabilised working capital and avoided emergency borrowing.",
        },
        {
            id: "multi-currency",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Development accounting icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "6. Multi Currency Accounting",
            titleLine2: "",
            intro: "For contractors sourcing materials internationally or operating cross border, currency volatility adds risk.",
            listHeading: "We Support",
            listItems: [
                "Foreign currency transaction tracking",
                "FX gain/loss monitoring",
                "Multi currency reporting alignment",
                "Cashflow impact modelling",

            ],
            caseTitle: "Why Multi Currency Accounting Matters",
            caseIntro:
                "Currency volatility is rarely contained. A foreign material purchase, a cross border subcontract, or an untracked FX movement creates a chain of exposure reporting distortion, margin erosion, and cashflow uncertainty. \nWe integrate multi currency accounting into the broader project reporting framework. Not as a peripheral consideration, but as a structured process with documented transaction tracking, aligned to your wider financial control position.\n The result is a currency accounting function that is accurate, consistently monitored, and defensible under lender or regulatory scrutiny.",
            caseResult:
                "Reduced cashflow risk and strengthened cross border reporting discipline."
        },
    ],
}

// Difference

export const constructDifferenceConstruct: DifferenceProps = {
    titleStart: "What Makes Nexus Different in",
    titleHighlight: "Construction Advisory",
    subtitle: "Unlike compliance driven firms, we:",
    items: [
        { id: "temp-accommodation", text: "Practical understanding of project margin dynamics" },
        { id: "council-leasing", text: "Sector awareness of domestic reverse charge" },
        { id: "vat-modelling", text: "Structured cost to complete frameworks" },
        { id: "spv-reporting", text: "CIS compliance depth" },
        { id: "cross-border", text: "Cashflow modelling discipline" },
        { id: "advisory-mindset", text: "Audit ready reporting approach" },
    ],
    closing: "We combine accounting precision with commercial awareness of construction risk.",
}

// Models

export const constructModelsData: ModelsDataProps = {
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "Business consultancy engagements typically follow:",
    closingSubtitle:
        "Our support scales with project size and complexity.",
    columns: 5,
    data: [
        {
            id: "prop-phase-1",
            title: "Phase 1 - Initial Financial Process Review",
            description:
                "We conduct a structured review of your financial reporting, governance, and risk exposure.",
            width: "",
            image:
                `${ImagesProperty}/phase1.png`
        },
        {
            id: "prop-phase-2",
            title: "Phase 2 - Identification of Reporting and Margin Gaps",
            description:
                "We uncover immediate opportunities to recapture revenue and improve data accuracy.",
            width: "",
            image:
                `${ImagesProperty}/phase2.png`
        },
        {
            id: "prop-phase-3",
            title: "Phase 3 - Implementation of Project Reporting Structure",
            description:
                "Next, we build and deploy a customised project reporting framework.",
            width: "",
            image:
                `${ImagesProperty}/phase3.png`
        },
        {
            id: "prop-phase-4",
            title: "Phase 4 - Ongoing Monthly or Quarterly Oversight",
            description:
                "We provide regular monthly or quarterly oversight to monitor your performance.",
            width: "",
            image:
                `${ImagesProperty}/phase4.png`
        },
        {
            id: "prop-phase-5",
            title: "Phase 5 - Annual Statutory Alignment",
            description:
                "We ensure your internal financials perfectly match external legal and regulatory requirements.",
            width: "",
            image:
                `${ImagesProperty}/phase5.png`
        },
    ],
}

// Contact Cta — When to Contact Us

export const constructContactCta: ContactCtaProps = {
    titleStart: "When to",
    titleHighlight: "Contact Us",
    intro:
        "Consider structured construction accounting support if:",
    listIntro: "",
    discussionPoints: [
        "Margins feel inconsistent or unclear",
        "Cashflow pressure is increasing",
        "VAT or CIS treatment feels uncertain",
        "You are preparing for lender review",
        "Project reporting lacks discipline"
    ],
    closing: "A structured review can clarify financial exposure and strengthen profitability visibility.",
    buttonLabel: "Speak to a Construction Adviser",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Property advisor ready to take your call",
    },
}





// Hero

// 1. Structured Financial Solutions (puzzle-pieces image)
export const solutionsHero: HeroData = {
    title: "Structured Financial Solutions Designed Around Control and Clarity",
    description:
        "Delivering practical financial governance, reporting frameworks, and compliance support that strengthen oversight, improve transparency, and enable confident decision making.",
    width: "max-w-6xl",
    image: `${ImagesSolutions}/bg-hero.png`,
};

// Tax Authorities
export const taxHero: HeroData = {
    title: "Structured Engagement with Tax Authorities",
    description:
        "Documentation led support for businesses facing VAT compliance checks, corporation tax enquiries, CIS reviews, and HMRC correspondence focused on measured response, not escalation.",
    width: "max-w-6xl",
    image: "/assets/bg-img-service8.png",
};

// 3. Digital & Systems
export const systemsHero: HeroData = {
    title: "Ensuring Technology Serves Financial Control. Not the Other Way Around",
    description:
        "Technology promises efficiency. Poorly implemented systems create complexity.",
    width: "max-w-6xl",
    image: `${ImagesSystems}/bg-hero.png`,
};

// 4. Structured Commercial Advisory (advisors-with-plans image)
export const businessAdvisoryHero: HeroData = {
    title: "Structured Commercial Advisory Grounded in Financial Reality",
    description:
        "Business strategy means nothing without practical execution. We deliver structured commercial guidance backed by real financial data, ensuring every decision drives measurable profitability.",
    width: "max-w-6xl",
    image: "/assets/bg-img-service6.png",
};

// 5. UAE — Structured Financial & Tax Readiness (UAE professional image)
export const uaeAdvisoryHero: HeroData = {
    title: "Structured Financial & Tax Readiness in a Changing Regulatory Environment",
    description:
        "Advisory led accounting and tax support for businesses establishing or scaling in the UAE covering VAT readiness, corporate tax compliance, bookkeeping discipline, and cross border alignment with UK operations.",
    width: "max-w-6xl",
    image: `${ImagesUae}/bg-hero.png`,
};

// 6. CFO-level — Financial Clarity for Leaders (charts-and-pen image)
export const cfoAdvisoryHero: HeroData = {
    title: "Financial Clarity for Leaders Who Require More Than Compliance",
    description:
        "CFO level financial interpretation, governance design, cashflow planning, and strategic structuring for founders, directors, and management teams who require disciplined financial oversight without building a full in house finance function.",
    width: "max-w-7xl",
    image: "/assets/bg-img-service4.png",
};


// HMRC & Authority page
export const hmrcStats: statsProps = {
    stats: [
        { id: "s-1", size: "", value: "HMRC & Authority", icon: "", label: "Cross Border Coverage" },
        { id: "s-3", size: "", value: "100", icon: "%", label: "Partner Led Engagements" },
        { id: "s-2", size: "", value: "15", icon: "+", label: "Years of Tax Investigation Experience" },
    ],
};

// UAE Advisory page
export const uaeStats: statsProps = {
    stats: [
        { id: "s-1", size: "md:mr-25", value: "VAT & Tax", icon: "", label: "Cross Border Coverage" },
        { id: "s-3", size: "md:mr-25", value: "100", icon: "%", label: "Partner Led Engagements" },
        { id: "s-2", size: "md:mr-25", value: "15", icon: "+", label: "Accounting Discipline Applied to UAE" },
    ],
};

// CFO-Level Strategic Advisory page
export const cfoStats: statsProps = {
    stats: [
        { id: "s-1", size: "md:mr-25", value: "CFO Level", icon: "", label: "Advisory Without the Overhead" },
        { id: "s-3", size: "md:mr-25", value: "100", icon: "%", label: "Partner Led Engagements" },
        { id: "s-2", size: "md:mr-25", value: "15", icon: "+", label: "Years of Strategic Advisory Experience" },
    ],
};


export const solutionsAbout: AboutServiceData = {
    introParagraph:
        `As businesses grow, standard accounting software and reporting frameworks often become insufficient. Manual reconciliations increase, reporting becomes fragmented, and operational workflows expand without financial oversight.\n\nMany organisations respond by purchasing new tools or commissioning bespoke development frequently without defining financial governance requirements first.`,
    listIntro:
        "Nexus Advisory & Services provides structured solution design and oversight for finance led systems, tools, and workflow enhancements. We define, govern, and validate financial solutions.",
    serviceAreasTitle: "",
    className: "", // closing line is NOT italic/bold in this design
    serviceAreas: [],
    closingParagraph:
        "Technical development is delivered through approved specialist partners under Nexus oversight.",
};

// 2. HMRC & Authority page
export const taxAbout: AboutServiceData = {
    introParagraph:
        `Engagement with HMRC or other tax authorities can be disruptive, particularly where documentation is incomplete or internal reporting lacks structure. Many enquiries escalate not because of deliberate error, but because responses are reactive, inconsistent, or poorly presented.`,
    listIntro:
        "Nexus Advisory & Services provides disciplined, technically grounded support in managing HMRC and authority correspondence. Our approach is structured, proportionate, and documentation led.",
    serviceAreasTitle: "",
    className: "", // closing line is NOT italic/bold in this design
    serviceAreas: [],
    closingParagraph: "We focus on clarity, control, and risk mitigation.",
};

// 3. Accounting Systems & Automation page
export const systemsAbout: AboutServiceData = {
    introParagraph:
        `As businesses grow, accounting software, ERP platforms, reporting dashboards, and workflow automation become essential. However, system implementation without financial governance often results in:`,
    listIntro: "",
    serviceAreasTitle: "",
    className: "italic font-bold",
    serviceAreas: [
        { id: "misaligned-reporting", description: "Misaligned reporting structures" },
        { id: "poor-data-integrity", description: "Poor data integrity" },
        { id: "over-complicated-workflows", description: "Over complicated workflows" },
        { id: "weak-internal-controls", description: "Weak internal controls" },
        { id: "post-implementation-corrections", description: "Expensive post implementation corrections" },
    ],
    optionalParagraph:
        "Nexus Advisory & Services provides governance led digital and systems advisory for businesses implementing or upgrading financial systems. We design, oversee, and validate systems from a finance and control perspective.",
    closingParagraph:
        "We do not operate as a software development house. \nWe operate as a financial governance partner.",
};

// 4. Business Advisory page
export const businessAdvisoryAbout: AboutServiceData = {
    introParagraph:
        `Business growth introduces structural decisions that affect tax exposure, governance, operational efficiency, and financial sustainability. Many organisations make expansion or restructuring decisions without fully understanding downstream implications.`,
    listIntro:
        "Nexus Advisory & Services provides finance led business consultancy focused on structural clarity, operational discipline, and risk awareness.",
    serviceAreasTitle: "",
    className: "italic font-bold",
    serviceAreas: [],
    closingParagraph:
        "We do not offer abstract strategy consulting. \nWe provide commercially grounded advisory built on financial analysis.",
};

// 5. CFO-Level Strategic Advisory page
export const cfoAbout: AboutServiceData = {
    introParagraph:
        `Compliance reports what happened.`,
    listIntro: "Advisory explains what it means and what to do next.",
    introClassName: "italic font-bold -mt-6",
    serviceAreasTitle:
        "As businesses grow, financial complexity increases faster than reporting maturity. Revenue expands, cost structures diversify, teams scale and decision making accelerates. Yet financial visibility often remains fragmented. \n\nNexus Advisory & Services provides structured, partner led advisory support to founders, directors, and management teams who require disciplined financial interpretation without building a full in house finance leadership function.",
    className: "italic font-bold",
    serviceAreas: [],
    closingParagraph:
        "Our role is not to produce more reports. \nOur role is to improve financial judgement.",
};

export const uaeAbout: AboutServiceData = {
    introParagraph:
        `The UAE regulatory landscape has evolved significantly with the introduction of Value Added Tax and Corporate Tax. Businesses that previously operated in low reporting environments are now required to maintain structured accounting records, VAT documentation, and corporate tax frameworks.`,
    listIntro:
        "Nexus Advisory & Services provides advisory led accounting and tax support during the UAE establishment and growth phase. Our focus is on readiness, structure, and compliance clarity.",
    serviceAreasTitle: `Launch Phase Positioning`,
    serviceTitleClassName: "font-bold md:text-4xl",
    className: "",
    serviceAreas: [],
    closingParagraph:
        "During the UAE launch phase, services are delivered on an advisory led basis while local entity setup and regulatory arrangements continue to develop. Regulatory representation scope is defined clearly within engagement terms.",
};

export const solutionsFaqItems: FaqWithImageProps = {
    titleStart: "Our Structured Approach to ",   // placeholder
    titleHighlight: "Solution Delivery",          // placeholder
    subtitle: "",                                 // placeholder
    data: [
        {
            value: "define-requirements",
            trigger: "1. Define Requirements",
            content:
                "Clarify financial, reporting, and control objectives before development begins.",
            image: `${ImagesSolutions}/define.png`,
            alt: "Team meeting around a planning-cycle screen",
        },
        {
            value: "design-architecture",
            trigger: "2. Design Architecture",
            content:
                "Structure tool logic, reporting flows, and governance safeguards.",
            image: `${ImagesSolutions}/design.png`,
            alt: "Designers collaborating over plans and samples",
        },
        {
            value: "oversee-delivery",
            trigger: "3. Oversee Delivery",
            content:
                "Coordinate with approved development partners to ensure scope alignment.",
            image: `${ImagesSolutions}/oversee.png`,
            alt: "Hands with drafting compass over blueprints",
        },
        {
            value: "validate-approve",
            trigger: "4. Validate & Approve",
            content:
                "Test financial integrity, documentation, and usability prior to acceptance. This ensures tools enhance control rather than create dependency.",
            image: `${ImagesSolutions}/validate.png`,
            alt: "Handshake sealing an approval in an office",
        },
    ],
};

// 2. HMRC & Authority page (5 steps)
export const taxFaqItems: FaqWithImageProps = {
    titleStart: "Our Structured ",   // placeholder
    titleHighlight: "Response Methodology",       // placeholder
    subtitle: "We approach authority engagement through five controlled stages:",                                 // placeholder
    data: [
        {
            value: "diagnostic-review",
            trigger: "1. Diagnostic Review",
            content:
                "We assess the scope of enquiry and identify exposure areas.",
            image: `${ImagesTax}/diagnostic.png`,
            alt: "Team reviewing details on a monitor",
        },
        {
            value: "technical-position-assessment",
            trigger: "2. Technical Position Assessment",
            content: "We review relevant accounting and tax treatment.",
            image: `${ImagesTax}/technical.png`,
            alt: "Colleagues examining figures on screen",
        },
        {
            value: "documentation-preparation",
            trigger: "3. Documentation Preparation",
            content:
                "We prepare reconciliations, schedules, and supporting documentation.",
            image: `${ImagesTax}/documentation.png`,
            alt: "Organising tabbed document stacks",
        },
        {
            value: "structured-correspondence",
            trigger: "4. Structured Correspondence",
            content: "We draft disciplined, technically grounded responses.",
            image: `${ImagesTax}/correspondence.png`,
            alt: "Construction site with crane and building frame",
        },
        {
            value: "mitigation-strategy",
            trigger: "5. Mitigation Strategy",
            content:
                "Where exposure exists, we assess behavioural classification and penalty mitigation options. Our focus is measured response not escalation.",
            image: `${ImagesTax}/mitigation.png`,
            alt: "Hands steadying a wooden block tower",
        },
    ],
};

// 3. Digital & Systems Advisory page (4 steps)
export const systemsFaqItems: FaqWithImageProps = {
    titleStart: "Our Structured Approach to ",   // placeholder
    titleHighlight: "Systems Advisory",           // placeholder
    subtitle: "",                                 // placeholder
    data: [
        {
            value: "define",
            trigger: "1. Define",
            content:
                "Clarify financial and reporting requirements before platform selection.",
            image: `${ImagesSystems}/define.png`,
            alt: "Audience taking notes at a briefing",
        },
        {
            value: "design",
            trigger: "2. Design",
            content:
                "Ensure system architecture aligns with governance and reporting needs.",
            image: `${ImagesSystems}/design.png`,
            alt: "Designer at desk with colour swatches and monitor",
        },
        {
            value: "oversee",
            trigger: "3. Oversee",
            content:
                "Monitor implementation milestones, testing, and configuration.",
            image: `${ImagesSystems}/oversee.png`,
            alt: "Three professionals walking through an office",
        },
        {
            value: "validate",
            trigger: "4. Validate",
            content:
                "Approve system functionality from a finance integrity perspective.",
            image: `${ImagesSystems}/validate.png`,
            alt: "Stacked hands over analytics dashboards",
        },
    ],
};

// 4. Business Consultancy page (4 principles)
export const businessFaqItems: FaqWithImageProps = {
    titleStart: "Our Consultancy ",   // placeholder
    titleHighlight: "Philosophy",       // placeholder
    subtitle: "Our advisory approach is based on:",                                 // placeholder
    data: [
        {
            value: "financial-led-strategy",
            trigger: "1. Financial Led Strategy",
            content: "All structural decisions must be financially sustainable.",
            image: `${ImagesBusiness}/strategy.png`,
            alt: "Presenter explaining charts on a wall screen",
        },
        {
            value: "proportionate-structuring",
            trigger: "2. Proportionate Structuring",
            content: "Complexity should only be introduced where necessary.",
            image: `${ImagesBusiness}/structuring.png`,
            alt: "Steel structure under construction against blue sky",
        },
        {
            value: "governance-before-expansion",
            trigger: "3. Governance Before Expansion",
            content: "Internal control must evolve before scale increases.",
            image: `${ImagesBusiness}/governance.png`,
            alt: "Board members in a formal meeting",
        },
        {
            value: "measured-implementation",
            trigger: "4. Measured Implementation",
            content: "Recommendations must be practical, not theoretical.",
            image: `${ImagesBusiness}/implementation.png`,
            alt: "Team reviewing dashboards in a meeting room",
        },
    ],
};

// 5. UAE Advisory page (4 steps)
export const uaeFaqItems: FaqWithImageProps = {
    titleStart: "Our Advisory Approach to ",   // placeholder
    titleHighlight: "UAE Accounting & Tax",               // placeholder
    subtitle: "",                                 // placeholder
    data: [
        {
            value: "establishing-reporting-framework",
            trigger: "1. Establishing a Reporting Framework",
            content:
                "Ensuring accounting systems are aligned with VAT and Corporate Tax requirements.",
            image: `${ImagesUae}/framework.png`,
            alt: "Team meeting at a boardroom table",
        },
        {
            value: "clarifying-tax-applicability",
            trigger: "2. Clarifying Tax Applicability",
            content: "Determining exposure under UAE Corporate Tax rules.",
            image: `${ImagesUae}/tax.png`,
            alt: "Gavel beside TAX letter blocks and coins",
        },
        {
            value: "strengthening-vat-governance",
            trigger: "3. Strengthening VAT Governance",
            content:
                "Implementing invoice discipline, transaction classification, and recovery modelling.",
            image: `${ImagesUae}/vat.png`,
            alt: "Group discussing documents around a table",
        },
        {
            value: "embedding-controls-early",
            trigger: "4. Embedding Controls Early",
            content: "Preventing compliance gaps before scale increases.",
            image: `${ImagesUae}/controls.png`,
            alt: "Team collaborating in front of a data screen",
        },
    ],
};

// 6. CFO-Level Strategic Advisory page (4 principles)
export const cfoFaqItems: FaqWithImageProps = {
    titleStart: "Our Structured Approach to ",   // placeholder
    titleHighlight: "Strategic Advisory",         // placeholder
    subtitle: "",                                 // placeholder
    data: [
        {
            value: "interpretation-before-recommendation",
            trigger: "1. Interpretation Before Recommendation",
            content:
                "We diagnose financial structure before proposing change.",
            image: `${ImagesCfo}/interpretation.png`,
            alt: "Advisors talking over coffee by a window",
        },
        {
            value: "discipline-before-growth",
            trigger: "2. Discipline Before Growth",
            content:
                "Strong financial governance must precede sustainable expansion.",
            image: `${ImagesCfo}/discipline.png`,
            alt: "Businessman arranging chess pieces on stacked blocks",
        },
        {
            value: "proportionate-intervention",
            trigger: "3. Proportionate Intervention",
            content:
                "We design advisory support appropriate to scale and complexity.",
            image: `${ImagesCfo}/intervention.png`,
            alt: "Hands with drafting compass over blueprints",
        },
        {
            value: "measured-not-aggressive",
            trigger: "4. Measured, Not Aggressive",
            content:
                "We avoid unnecessary restructuring or complexity. Advisory must be grounded.",
            image: `${ImagesCfo}/measured.png`,
            alt: "Hand placing a wooden block in a line",
        },
    ],
};

export const solutionsApproachRows: ApproachProps = {
    rows: [
        {
            id: "who-this-is-for",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "Our Solutions advisory is designed for:",
            items: [
                "Property and construction groups requiring structured reporting tools",
                "Businesses with multi entity reporting complexity",
                "Organisations requiring customised budgeting or forecasting models",
                "Founder led companies seeking improved workflow automation",
                "Groups operating across UK and UAE",
                "Businesses implementing integration between financial and operational systems",
            ],
            closing:
                "If financial reporting feels fragmented despite investment in technology, structured oversight becomes essential.",
            image: {
                src: `${ImagesSolutions}/approach1.png`,
                alt: "Team assembling puzzle pieces on a desk",
            },
            imagePosition: "right",
        },
        {
            id: "solutions-common-problems",
            titleStart: "The Problems We",
            titleHighlight: "Commonly See",
            intro: "Across growing businesses, we frequently observe:",
            items: [
                "Over reliance on spreadsheets without control discipline",
                "Dashboard tools implemented without financial validation",
                "Disconnected accounting and operational systems",
                "Inconsistent approval workflows",
                "Reporting templates that do not reflect commercial reality",
                "Bespoke development built without finance input",
            ],
            closing:
                "Technology alone does not solve structural reporting weaknesses.",
            image: {
                src: `${ImagesSolutions}/approach2.png`,
                alt: "Colleagues reviewing charts on a laptop",
            },
            imagePosition: "left",
        },
    ],
};
// 2. tax & Authority Support page
export const taxApproachRows: ApproachProps = {
    rows: [
        {
            id: "who-this-is-for",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "Our HMRC & Authority Support services are designed for:",
            items: [
                "Businesses facing VAT or corporation tax enquiries",
                "Property and construction operators under review",
                "Companies receiving compliance checks working with local authorities",
                "Directors concerned about potential exposure",
                "Businesses requiring structured authority correspondence",
                "Organisations seeking penalty mitigation support",
            ],
            closing:
                "If communication with HMRC feels uncertain or reactive, structured intervention reduces escalation risk.",
            image: {
                src: `${ImagesTax}/approach1.png`,
                alt: "Team joining hands in an office",
            },
            imagePosition: "right",
        },
        {
            id: "hmrc-common-problems",
            titleStart: "The Problems We",
            titleHighlight: "Commonly See",
            intro: "Across enquiry cases, recurring weaknesses include:",
            items: [
                "Incomplete reconciliation schedules",
                "VAT treatment inconsistencies",
                "Poor documentation of accounting judgement",
                "Intercompany balances unsupported",
                "Capital vs revenue misclassification",
                "Delayed or unstructured responses to HMRC queries",
                "Emotional or defensive communication tone",
            ],
            closing:
                "Enquiries often become more complex when responses lack technical clarity.",
            image: {
                src: `${ImagesTax}/approach2.png`,
                alt: "Magnifying glass over a question mark note",
            },
            imagePosition: "left",
        },
    ],
};

// 3. Digital & Systems Advisory page

export const systemsApproachRows: ApproachProps = {
    rows: [
        {
            id: "who-this-is-for",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "Our Digital & Systems Advisory is designed for:",
            items: [
                "Businesses upgrading accounting platforms",
                "Groups implementing ERP systems",
                "Companies seeking improved management reporting",
                "Cross border businesses aligning UK and UAE reporting",
                "Construction or property businesses requiring project based reporting automation",
                "Founder led organisations transitioning from spreadsheets to structured systems",
            ],
            closing:
                "If system implementation decisions are being driven by vendors rather than financial requirements, independent oversight becomes essential.",
            image: {
                src: `${ImagesSystems}/approach1.png`,
                alt: "Team working at trading screens and monitors",
            },
            imagePosition: "right",
        },
        {
            id: "systems-common-problems",
            titleStart: "The Problems We",
            titleHighlight: "Commonly See",
            intro: "Across system projects, recurring risks include:",
            items: [
                "ERP selected without proper finance input",
                "Chart of accounts not aligned with reporting objectives",
                "Poor migration planning",
                "Inadequate testing before go live",
                "Dashboard metrics misaligned with commercial reality",
                "Automation introduced without control safeguards",
                "Reporting becoming less transparent after implementation",
            ],
            closing:
                "Technology rarely fails because of coding errors. It fails due to poor governance.",
            image: {
                src: `${ImagesSystems}/approach2.png`,
                alt: "Wooden blocks stopping a domino effect",
            },
            imagePosition: "left",
        },
    ],
};

// 4. Business Consultancy page

export const businessApproachRows: ApproachProps = {
    rows: [
        {
            id: "who-this-is-for",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "Our Business Consultancy services are designed for:",
            items: [
                "Founder led and owner managed businesses",
                "Property and construction groups scaling operations",
                "Businesses expanding into new jurisdictions (UK-UAE)",
                "Organisations restructuring group entities",
                "Businesses preparing for investment or refinancing",
                "Companies experiencing operational inefficiency",
            ],
            closing:
                "If your growth decisions are outpacing financial structure, structured consultancy becomes essential.",
            image: {
                src: `${ImagesBusiness}/approach1.png`,
                alt: "Team planning with charts and sticky notes",
            },
            imagePosition: "right",
        },
        {
            id: "business-common-problems",
            titleStart: "The Problems We",
            titleHighlight: "Commonly See",
            intro: "Across growing businesses, we frequently observe:",
            items: [
                "Entity structures created reactively rather than strategically",
                "Intercompany arrangements poorly documented",
                "Operational processes not aligned with financial controls",
                "Cost structures expanding without proportional oversight",
                "Expansion decisions made without financial modelling",
                "Governance lagging behind turnover growth",
            ],
            closing:
                "These weaknesses may not be immediately visible in profit and loss accounts but often surface during lender scrutiny, investor due diligence or regulatory review.",
            image: {
                src: `${ImagesBusiness}/approach2.png`,
                alt: "Hand drawing an upward growth chart",
            },
            imagePosition: "left",
        },
    ],
};

// 5. UAE Advisory page

export const uaeApproachRows: ApproachProps = {
    rows: [
        {
            id: "who-this-is-for",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "Our UAE advisory support is designed for:",
            items: [
                "UK based businesses expanding into the UAE",
                "Founder led UAE startups requiring structured reporting",
                "Property and service businesses navigating VAT",
                "Free zone and mainland entities requiring corporate tax clarity",
                "Groups operating across UK and UAE",
            ],
            closing:
                "If you are establishing operations in the UAE and require structured financial discipline from inception, early advisory intervention reduces downstream risk.",
            image: {
                src: `${ImagesUae}/approach1.png`,
                alt: "UAE business team reviewing expenses presentation",
            },
            imagePosition: "right",
        },
        {
            id: "uae-common-problems",
            titleStart: "The Problems We",
            titleHighlight: "Commonly See",
            intro: "Across UAE businesses, we frequently observe:",
            items: [
                "Incomplete bookkeeping structures",
                "VAT applied inconsistently across invoices",
                "Unclear documentation of input tax recovery",
                "Corporate tax applicability misunderstood",
                "Free zone status misinterpreted",
                "Weak month end reporting discipline",
                "Lack of formal financial controls",
            ],
            closing:
                "These weaknesses increase regulatory exposure as enforcement matures.",
            image: {
                src: `${ImagesUae}/approach2.png`,
                alt: "Signing documents beside UAE and EU flags",
            },
            imagePosition: "left",
        },
    ],
};

// 6. CFO-Level Strategic Advisory page

export const cfoApproachRows: ApproachProps = {
    rows: [
        {
            id: "who-this-is-for",
            titleStart: "Who This",
            titleHighlight: "Is For",
            intro: "Our advisory services are designed for:",
            items: [
                "Founder led businesses scaling rapidly",
                "Property and construction groups managing multi entity complexity",
                "Businesses preparing for lender scrutiny or refinancing",
                "Directors seeking stronger financial control",
                "Organisations without a full time CFO but requiring strategic oversight",
                "Businesses experiencing margin pressure or cashflow uncertainty",
            ],
            closing:
                "If decision making feels reactive or financially opaque, structured advisory intervention becomes necessary.",
            image: {
                src: `${ImagesCfo}/approach1.png`,
                alt: "Adviser presenting data on a screen to colleagues",
            },
            imagePosition: "right",
        },
        {
            id: "cfo-common-problems",
            titleStart: "The Problems We",
            titleHighlight: "Commonly See",
            intro: "Across sectors, we observe recurring advisory gaps:",
            items: [
                "Management reports that do not support real decisions",
                "Revenue growth masking declining margins",
                "Cost structures expanding without proportional analysis",
                "Cashflow forecasts prepared informally or retrospectively",
                "Lack of forward looking scenario planning",
                "Governance processes not scaling with growth",
                "Financial data presented without interpretation",
            ],
            closing:
                "These weaknesses rarely cause immediate failure. They gradually reduce strategic clarity.",
            image: {
                src: `${ImagesCfo}/approach2.png`,
                alt: "Boardroom meeting behind glass walls",
            },
            imagePosition: "left",
        },
    ],
};
// Services Carousels

export const solutionsCarousel: ServicesCarouselProps = {
    titleStart: "Core Areas of ",       // placeholder — not visible in screenshot
    titleHighlight: "Solutions Support",         // placeholder
    subtitle: "The principles behind every recommendation.",                      // placeholder
    slides: [
        {
            id: "bespoke-financial-tools",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Bespoke financial tools icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. Bespoke Financial Tools",
            titleLine2: "Structured Models for Control and Visibility",
            listHeading: "We support businesses transitioning to platforms such as:",
            listItems: [
                "Custom reporting dashboards",
                "Budgeting and forecasting models",
                "Reconciliation control templates",
                "Project level profitability tools",
                "Intercompany tracking models",
                "Multi entity consolidation tools",
            ],
            outro:
                "Our role is to ensure tools reflect accounting integrity and commercial reality.",
            caseTitle: "Case Illustration Multi Entity Reporting Fragmentation",
            caseIntro:
                "A property and construction group operating multiple SPVs relied on inconsistent spreadsheet reporting.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Defined consolidation logic",
                "Designed structured reporting templates",
                "Oversaw development of dashboard integration",
                "Validated reconciliation processes",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved real time performance visibility and reduced manual error risk.",
        },
        {
            id: "workflow-integration-solutions",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Workflow and integration icon",
            caseIcon: "/assets/icon/stock-money.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. Workflow & Integration Solutions",
            titleLine2: "Finance Controlled Process Automation",
            optionalHeading: "Operational growth often introduces workflow inefficiencies:",
            optionallistItems: [
                "Manual approval chains",
                "Disconnected invoice processing",
                "Poor audit trails",
                "Inconsistent expense tracking",
            ],
            listHeading: "We support structured workflow design for:",
            listItems: [
                "Invoice approval systems",
                "Purchase order controls",
                "Expense reporting automation",
                "Integration between accounting and operational systems",
                "Multi currency transaction oversight",
                "Cross border reporting alignment",
            ],
            outro:
                "All workflows are designed around control integrity and documentation clarity.",
            caseTitle: "Case Illustration Disconnected Approval Processes",
            caseIntro:
                "A construction business operated multiple manual approval systems, leading to delayed payments and inconsistent control.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Mapped workflow process",
                "Defined structured approval thresholds",
                "Oversaw automation integration",
                "Validated audit trail functionality",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved payment discipline and reduced operational friction.",
            caseButton: "Partner Delivery Model",
            caseDialogTitle: "Partner Delivery Model", // TODO: dialog content not visible in screenshot
            caseDialogIntro: "",                        // TODO
            caseDialogItemsTitle: "",                   // TODO
            caseDialogItems: [],                        // TODO
            caseDialogIcon: "/assets/icon/file-search.svg",
            caseDialogIconAlt: "Partner Delivery Model",
        },
    ],
};

// ─────────────────────────────────────────────────────────────
// 2. HMRC Correspondence & Enquiry Support (4 slides)
// ─────────────────────────────────────────────────────────────
export const taxCarouselProperty: ServicesCarouselProps = {
    titleStart: "Core Areas of ",      // placeholder
    titleHighlight: "Support",
    subtitle: "",                      // placeholder
    slides: [
        {
            id: "hmrc-correspondence-handling",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "HMRC correspondence icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. HMRC Correspondence Handling",
            titleLine2: "",
            optionalHeading: "We manage structured communication with HMRC regarding:",
            optionallistItems: [
                "VAT compliance checks",
                "Corporation tax enquiries",
                "PAYE reviews",
                "CIS compliance queries",
                "Information requests",
            ],
            listHeading: "We ensure responses are:",
            listItems: [
                "Timely",
                "Documented",
                "Technically accurate",
                "Professionally framed",
            ],
            caseTitle: "Case Illustration VAT Compliance Check",
            caseIntro:
                "A property group received a VAT compliance check regarding partial exemption treatment.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed VAT recovery methodology",
                "Recalculated ratios",
                "Prepared reconciliation schedules",
                "Structured written response",
            ],
            caseResultTitle: "Outcome:",
            caseResult: "Enquiry resolved without escalation.",
        },
        {
            id: "enquiry-compliance-support",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Enquiry and compliance icon",
            caseIcon: "/assets/icon/stock-money.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. Enquiry & Compliance Support",
            titleLine2: "",
            listHeading: "When formal enquiries are opened, we provide:",
            listItems: [
                "Scope clarification",
                "Risk assessment",
                "Accounting treatment review",
                "Schedule preparation",
                "Documentation alignment",
            ],
            outro: "Our aim is to reduce uncertainty and prevent scope expansion.",
            caseTitle: "Case Illustration Corporation Tax Review",
            caseIntro:
                "A construction business faced HMRC review regarding capital allowances and development expenditure classification.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed historic treatment",
                "Clarified capitalisation policy",
                "Structured technical explanation",
                "Presented reconciled documentation",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Reduced adjustment exposure and maintained professional engagement tone.",
        },
        {
            id: "penalty-mitigation-appeals",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Penalty mitigation icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "3. Penalty Mitigation & Appeals Support",
            titleLine2: "",
            intro:
                "Where exposure exists, penalty classification often depends on behaviour categorisation (careless vs deliberate).",
            listHeading: "We support:",
            listItems: [
                "Behavioural position analysis",
                "Reasonable care documentation",
                "Mitigation submissions",
                "Structured appeal preparation (non-tribunal)",
            ],
            outro:
                "We focus on demonstrating proportionality and documented effort.",
            caseTitle: "Case Illustration Late VAT Filing Exposure",
            caseIntro:
                "A business faced penalties due to late VAT submissions linked to reporting process weaknesses.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Documented process deficiencies",
                "Demonstrated corrective action",
                "Submitted mitigation narrative",
            ],
            caseResultTitle: "Outcome:",
            caseResult: "Reduced penalty impact.",
        },
        {
            id: "dispute-preparation-non-tribunal",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Dispute preparation icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Sector depth icon",
            titleLine1: "4. Dispute Preparation (Non-Tribunal)",
            titleLine2: "",
            listHeading: "Where disagreement arises, we assist with:",
            listItems: [
                "Technical position papers",
                "Evidence collation",
                "Schedule reconciliation",
                "Structured dispute documentation",
            ],
            outro:
                "We do not provide tribunal litigation services but ensure documentation is prepared to professional standards.",
            // Right-hand card here is NOT a case study — it's a sector-depth panel
            caseTitle: "Property & Construction Sector Depth",
            caseIntro:
                "Given our sector focus, we frequently support authority matters involving:",
            caseSolutions: [
                "Partial exemption disputes",
                "Temporary accommodation VAT treatment",
                "Domestic reverse charge confusion",
                "CIS verification exposure",
                "Capital vs revenue classification",
                "Development accounting review",
            ],
            caseResult:
                "This sector specific familiarity reduces response preparation time and improves clarity.",
        },
    ],
};

// ─────────────────────────────────────────────────────────────
// 3. Accounting Systems & Automation Advisory (3 slides)
// ─────────────────────────────────────────────────────────────
export const systemsCarousel: ServicesCarouselProps = {
    titleStart: "Core Areas of",           // placeholder
    titleHighlight: "Support",
    subtitle: "The principles behind every recommendation.",                      // placeholder
    slides: [
        {
            id: "accounting-systems-advisory",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Accounting systems icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. Accounting Systems Advisory",
            titleLine2: "Platform Selection & Migration Oversight",
            optionalHeading: "We support businesses transitioning to platforms such as:",
            optionallistItems: [
                "Xero",
                "QuickBooks",
                "Sage",
                "Cloud based accounting suites",
            ],
            listHeading: "Our role includes:",
            listItems: [
                "Requirements definition",
                "Platform comparison",
                "Chart of accounts design",
                "Data migration planning",
                "Post migration validation",
            ],
            outro:
                "We ensure financial outputs remain reliable during transition.",
            caseTitle: "Case Illustration Spreadsheet Dependent SME",
            caseIntro:
                "A growing SME relied heavily on spreadsheets with limited accounting software integration.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Defined reporting requirements",
                "Selected appropriate cloud platform",
                "Designed chart of accounts",
                "Oversaw migration testing",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved reporting speed and reduced manual reconciliation risk.",
        },
        {
            id: "erp-finance-systems-advisory",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "ERP advisory icon",
            caseIcon: "/assets/icon/stock-money.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. ERP & Finance Systems Advisory",
            titleLine2: "Financial Oversight for ERP Implementation",
            intro: "ERP implementation should be finance led, not vendor led.",
            optionalHeading: "We provide:",
            optionallistItems: [
                "ERP requirements specification",
                "Vendor evaluation support",
                "Financial module configuration review",
                "Implementation milestone monitoring",
                "Acceptance testing and sign off",
                "Internal control alignment",
            ],
            listHeading: "Our focus is ensuring the ERP supports:",
            listItems: [
                "Accurate revenue recognition",
                "Project level reporting",
                "Multi entity consolidation",
                "VAT and tax reporting",
                "Internal control frameworks",
            ],
            caseTitle:
                "Case Illustration ERP Implementation Risk in Manufacturing Business",
            caseIntro:
                "A business implementing ERP lacked finance led oversight and faced risk of reporting misalignment.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed financial configuration",
                "Adjusted reporting structure",
                "Oversaw testing prior to go live",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Avoided costly post implementation rework and protected reporting integrity.",
        },
        {
            id: "reporting-automation-oversight",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Reporting and automation icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "3. Reporting & Automation Oversight",
            titleLine2: "Structured Automation Without Control Erosion",
            intro:
                "Automation can improve efficiency but poorly designed automation weakens oversight.",
            listHeading: "We support:",
            listItems: [
                "Management reporting automation design",
                "Dashboard requirement specification",
                "KPI definition alignment",
                "Workflow automation planning",
                "Control environment validation",
            ],
            outro:
                "We ensure automation enhances clarity without compromising audit trail.",
            caseTitle: "Case Illustration Dashboard Misalignment",
            caseIntro:
                "A business invested in dashboard software that presented visually attractive but commercially misleading metrics.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed KPI definitions",
                "Redesigned dashboard logic",
                "Aligned metrics with financial reality",
            ],
            caseResultTitle: "Outcome:",
            caseResult: "Improved board level decision clarity.",
            caseButton: "Partner Delivery & Governance Model",
            caseDialogTitle: "Partner Delivery & Governance Model", // TODO: dialog content not visible
            caseDialogIntro: "",                                    // TODO
            caseDialogItemsTitle: "",                               // TODO
            caseDialogItems: [],                                    // TODO
            caseDialogIcon: "/assets/icon/file-search.svg",
            caseDialogIconAlt: "Partner Delivery & Governance Model",
        },
    ],
};

// ─────────────────────────────────────────────────────────────
// 4. Business Structuring & Advisory (3 slides)
// ─────────────────────────────────────────────────────────────
export const businessAdvisoryCarouselProperty: ServicesCarouselProps = {
    titleStart: "Core Areas of ",            // placeholder
    titleHighlight: "Business Consultancy",
    subtitle: "",                      // placeholder
    slides: [
        {
            id: "business-structuring-growth",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Business structuring icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. Business Structuring & Growth Support",
            titleLine2: "Aligning Structure with Commercial Intent",
            intro: "As businesses grow, entity structures often become inefficient.",
            listHeading: "We provide:",
            listItems: [
                "Group structuring advisory (UK / UAE)",
                "Entity rationalisation",
                "Intercompany loan alignment",
                "Dividend structuring review",
                "Cross border reporting alignment",
                "Financial feasibility modelling",
            ],
            outro:
                "Our objective is to ensure structural decisions are sustainable, defensible, and aligned with growth strategy.",
            caseTitle: "Case Illustration Fragmented Multi Entity Group",
            caseIntro:
                "A property and construction group operated across multiple entities created over several years without strategic alignment.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Mapped ownership and cashflow flows",
                "Identified inefficient duplication",
                "Recommended rationalised structure",
                "Modelled tax and reporting implications",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved transparency, simplified governance, and reduced compliance burden.",
        },
        {
            id: "process-operational-advisory",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Process advisory icon",
            caseIcon: "/assets/icon/stock-money.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. Process & Operational Advisory",
            titleLine2: "Strengthening Operational Discipline",
            intro:
                "Operational inefficiencies often originate within finance processes.",
            listHeading: "We support:",
            listItems: [
                "Finance process mapping",
                "Cost structure analysis",
                "Approval hierarchy design",
                "Scalability assessment",
                "Internal reporting improvement",
                "Operational bottleneck identification",
            ],
            outro:
                "Our aim is to ensure financial processes support operational performance rather than hinder it.",
            caseTitle: "Case Illustration Rapidly Scaling Service Business",
            caseIntro:
                "A service business scaled from 10 to 40 employees within two years but retained informal operational controls.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed internal workflows",
                "Introduced structured approval matrix",
                "Strengthened reporting cadence",
                "Identified cost inefficiencies",
            ],
            caseResultTitle: "Outcome:",
            caseResult: "Improved operational control and clearer cost management.",
        },
        {
            id: "risk-compliance-advisory",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Risk and compliance icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Cross border consultancy icon",
            titleLine1: "3. Risk & Compliance Advisory (Non-Regulated)",
            titleLine2: "Identifying Financial Exposure Before It Escalates",
            intro:
                "Growth introduces financial and structural risk that may not be immediately visible.",
            listHeading: "We provide:",
            listItems: [
                "Financial risk identification",
                "Compliance readiness reviews",
                "Internal control gap analysis",
                "Regulatory awareness advisory (non-regulated)",
                "Documentation framework design",
            ],
            outro:
                "Our focus is early identification of exposure before enforcement or lender scrutiny arises.",
            caseTitle: "Cross Border Consultancy (UK–UAE)",
            caseIntro:
                "For businesses operating across jurisdictions, we support:",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Structural alignment between UK and UAE entities",
                "Reporting consistency",
                "Governance documentation",
                "Financial feasibility analysis for expansion",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Our cross border perspective reduces structural risk during international growth.",
        },
    ],
};

// ─────────────────────────────────────────────────────────────
// 5. UAE Advisory (3 slides)
// ─────────────────────────────────────────────────────────────
export const uaeAdvisoryCarouselProperty: ServicesCarouselProps = {
    titleStart: "Core Advisory of ",                 // placeholder
    titleHighlight: "Support",
    subtitle: "The principles behind every recommendation.",                      // placeholder
    slides: [
        {
            id: "uae-vat-advisory",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "UAE VAT advisory icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. UAE VAT Advisory",
            titleLine2: "Structured VAT Readiness",
            listHeading: "We support businesses in:",
            listItems: [
                "VAT registration readiness",
                "Transaction classification analysis",
                "Input tax recovery assessment",
                "VAT documentation framework",
                "VAT return review and advisory oversight",
            ],
            caseTitle: "Case Illustration Service Business VAT Confusion",
            caseIntro:
                "A UAE service firm applied inconsistent VAT treatment across contracts.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Conducted transaction mapping",
                "Standardised invoice templates",
                "Implemented VAT documentation checklist",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Reduced regulatory exposure and improved reporting clarity.",
        },
        {
            id: "uae-corporate-tax-readiness",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "UAE corporate tax icon",
            caseIcon: "/assets/icon/stock-money.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. UAE Corporate Tax Readiness",
            titleLine2: "Preparing for Corporate Tax Compliance",
            intro:
                "Corporate Tax in the UAE requires structured accounting discipline.",
            listHeading: "We support:",
            listItems: [
                "Corporate tax applicability assessments",
                "Accounting alignment for taxable income computation",
                "Preliminary tax position modelling",
                "High level transfer pricing readiness",
                "Documentation framework design",
            ],
            outro:
                "Our objective is to ensure businesses understand their obligations before filing deadlines arise.",
            caseTitle: "Case Illustration Free Zone Corporate Tax Uncertainty",
            caseIntro:
                "A free zone entity was uncertain about its corporate tax position and qualifying income status.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed income categories",
                "Analysed substance requirements",
                "Structured accounting reporting alignment",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Clearer tax exposure understanding and improved governance framework.",
        },
        {
            id: "bookkeeping-reporting-frameworks",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "Bookkeeping frameworks icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Cross border perspective icon",
            titleLine1: "3. Bookkeeping & Reporting Frameworks",
            titleLine2: "Strong Foundations Before Growth",
            intro:
                "Many UAE startups delay formal accounting discipline until required by regulators.",
            listHeading: "We implement:",
            listItems: [
                "Chart of accounts design",
                "Month end close discipline",
                "Reconciliation schedules",
                "Financial reporting templates",
                "Documentation procedures",
            ],
            outro: "This creates reliable financial outputs from inception.",
            caseTitle: "Cross Border Perspective (UK–UAE Alignment)",
            caseIntro:
                "For businesses operating across both jurisdictions, we assist with:",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Structural alignment",
                "Intercompany reporting clarity",
                "Transfer pricing awareness (high level advisory)",
                "Financial reporting consistency",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "This ensures operations in one jurisdiction do not create unintended exposure in another.",
        },
    ],
};

// ─────────────────────────────────────────────────────────────
// 6. Advisory Carousel
// ─────────────────────────────────────────────────────────────
export const cfoAdvisoryCarouselProperty: ServicesCarouselProps = {
    titleStart: "Core Advisory", // placeholder
    titleHighlight: "Areas",
    subtitle: "The principles behind every recommendation.",                      // placeholder
    slides: [
        {
            id: "cfo-style-strategic-advisory",
            icon: "/assets/icon/money-hand.svg",
            iconAlt: "CFO advisory icon",
            caseIcon: "/assets/icon/file-search.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "1. CFO Style Strategic Financial Advisory",
            titleLine2: "Structured Financial Interpretation",
            intro:
                "We provide ongoing or project based CFO level support without requiring full time executive overhead.",
            listHeading: "This includes:",
            listItems: [
                "Financial performance analysis",
                "Margin and profitability review by segment or project",
                "Cost structure rationalisation",
                "Variance interpretation and board reporting",
                "Pricing and cost modelling support",
                "Financial decision support for directors",
            ],
            outro:
                "We bridge the gap between accounting output and strategic decision making.",
            caseTitle: "Case Illustration Scaling Multi Channel Business",
            caseIntro:
                "A founder led business expanded into new product lines and channels but lacked clarity on true profitability drivers.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Rebuilt reporting by segment",
                "Isolated marketing ROI distortions",
                "Identified fixed vs variable cost imbalance",
                "Designed board ready reporting pack",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Clearer allocation of capital and improved profitability focus.",
        },
        {
            id: "cashflow-financial-planning",
            icon: "/assets/icon/money.svg",
            iconAlt: "Cashflow planning icon",
            caseIcon: "/assets/icon/stock-money.svg",
            caseIconAlt: "Case illustration icon",
            titleLine1: "2. Cashflow & Financial Planning Advisory",
            titleLine2: "Protecting Stability in Periods of Growth",
            intro:
                "Cash flow risk often emerges during expansion rather than contraction.",
            listHeading: "We provide:",
            listItems: [
                "Rolling 3, 6, and 12-month cash flow forecasts",
                "Sensitivity modelling under stress scenarios",
                "Working capital optimisation reviews",
                "Retention and milestone modelling (construction/property)",
                "Debt covenant readiness",
                "Funding readiness support (non-regulated)",
            ],
            outro:
                "Our modelling is conservative, assumption driven, and documented.",
            caseTitle: "Case Illustration Rapid Growth Cash flow Gap",
            caseIntro:
                "A contractor scaling across multiple concurrent projects experienced short term liquidity pressure due to milestone misalignment.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Modelled project level cash timing",
                "Identified funding gap window",
                "Structured staged payment sequencing",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved liquidity stability and avoided emergency borrowing.",
        },
        {
            id: "governance-financial-control",
            icon: "/assets/icon/idea.svg", // screenshot shows a people/settings icon here
            iconAlt: "Governance advisory icon",
            caseIcon: "/assets/icon/progress.svg", // screenshot shows a dashboard icon here
            caseIconAlt: "Case illustration icon",
            titleLine1: "3. Governance & Financial Control Advisory",
            titleLine2: "Embedding Discipline Before Risk Materialises",
            intro: "As businesses scale, informal controls become insufficient.",
            listHeading: "We provide:",
            listItems: [
                "Financial controls review",
                "Segregation of duties mapping",
                "Authorisation matrix design",
                "Month end close discipline frameworks",
                "Policy and procedure documentation",
                "Reporting governance structure",
            ],
            outro:
                "Our objective is to build financial repeatability and reduce operational risk.",
            caseTitle: "Case Illustration Founder Led SME with Informal Controls",
            caseIntro:
                "A business grew from £2m to £8m turnover without strengthening internal governance.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Mapped finance processes",
                "Introduced approval thresholds",
                "Implemented structured month end timetable",
                "Formalised financial policies",
            ],
            caseResultTitle: "Outcome:",
            caseResult:
                "Improved reporting reliability and reduced fraud exposure risk.",
        },
        {
            id: "strategic-structuring-growth",
            icon: "/assets/icon/structure.svg", // screenshot shows an org-chart icon here
            iconAlt: "Strategic structuring icon",
            caseIcon: "/assets/icon/cross-border.svg", // screenshot shows a network icon here
            caseIconAlt: "Case illustration icon",
            titleLine1: "4. Strategic Structuring & Growth Advisory",
            titleLine2: "",
            intro:
                "Growth introduces structural decisions that affect tax, governance, and reporting complexity.",
            listHeading: "We provide:",
            listItems: [
                "Group structuring advisory (UK / UAE)",
                "Entity rationalisation",
                "Cross border expansion alignment",
                "Financial feasibility modelling",
                "Risk exposure identification",
            ],
            outro:
                "We ensure structural decisions align with financial sustainability.",
            caseTitle: "Case Illustration Cross Border Expansion Without Clarity",
            caseIntro:
                "A UK founder expanded into the UAE without defined reporting or structural alignment.",
            caseSolutionHeading: "We:",
            caseSolutions: [
                "Reviewed entity interaction",
                "Identified tax and governance exposure",
                "Designed reporting alignment framework",
            ],
            caseResultTitle: "Outcome:",
            caseResult: "Improved oversight and reduced structural risk.",
        },
    ],
};



// "What Makes Nexus Different" sections extracted from screenshots,
// following your DifferenceProps structure. Titles split exactly as coloured in the design.

// 1. Solutions Advisory page
export const solutionsDifference: DifferenceProps = {
    titleStart: "What Makes Nexus Different in",
    titleHighlight: "Solutions Advisory",
    subtitle: "Unlike compliance driven firms, we:",
    items: [
        { id: "finance-first-design", text: "Finance first design approach" },
        { id: "governance-led-implementation", text: "Governance led implementation" },
        { id: "sector-understanding", text: "Sector understanding in property and construction" },
        { id: "cross-border-awareness", text: "Cross border awareness" },
        { id: "independent-oversight", text: "Independent oversight separate from developer incentives" },
        { id: "structured-validation", text: "Structured validation before approval" },
    ],
    closing: "We ensure technology strengthens reporting discipline.",
};

// 2. HMRC & Authority page
export const taxDifference: DifferenceProps = {
    titleStart: "What Makes",
    titleHighlight: "Nexus Different",
    subtitle: "Unlike compliance driven firms, we:",
    items: [
        { id: "documentation-led-approach", text: "Structured, documentation led approach" },
        { id: "professional-tone", text: "Calm and professional communication tone" },
        { id: "sector-familiarity", text: "Sector familiarity in property and construction" },
        { id: "audit-ready-discipline", text: "Audit ready working discipline" },
        { id: "proportionate-mitigation", text: "Proportionate mitigation strategy" },
        { id: "resolution-focus", text: "Focus on resolution, not confrontation" },
    ],
    closing: "We reduce escalation risk through clarity.",
};

// 3. Digital & Systems Advisory page
export const systemsDifference: DifferenceProps = {
    titleStart: "What Makes",
    titleHighlight: "Nexus Different",
    subtitle: "Unlike compliance driven firms, we:",
    items: [
        { id: "finance-first-system-design", text: "Finance first system design" },
        { id: "governance-led-oversight", text: "Governance led oversight" },
        { id: "platform-neutrality", text: "ERP and accounting platform neutrality" },
        { id: "sector-understanding", text: "Sector understanding (property & construction reporting needs)" },
        { id: "cross-border-alignment", text: "Cross border reporting alignment" },
        { id: "independent-advisory", text: "Independent advisory position separate from technical vendor" },
    ],
    closing: "We ensure technology strengthens financial discipline.",
};

// 4. Business Consultancy page
export const businessDifference: DifferenceProps = {
    titleStart: "What Makes Nexus Different in",
    titleHighlight: "Business Consultancy",
    subtitle: "Unlike compliance driven firms, we:",
    items: [
        { id: "finance-led-advisory", text: "Finance led advisory, not generic consulting" },
        { id: "practical-recommendations", text: "Practical recommendations grounded in accounting reality" },
        { id: "sector-familiarity", text: "Property and construction sector familiarity" },
        // NOTE: the live page shows "Governance-Cross border UK–UAE insight mindset" —
        // this looks like two items merged by a data bug. Extracted as the likely intended text:
        { id: "cross-border-insight", text: "Cross border UK-UAE insight" },
        { id: "governance-first-mindset", text: "Governance first mindset" },
        { id: "proportionate-structuring", text: "Proportionate structuring approach" },
    ],
    closing: "We focus on clarity and sustainability not complexity for its own sake.",
};

// 5. UAE Advisory page
export const uaeDifference: DifferenceProps = {
    titleStart: "What Makes Nexus Different in",
    titleHighlight: "UAE Advisory",
    subtitle: "Unlike compliance driven firms, we:",
    items: [
        { id: "uk-trained-discipline", text: "UK trained accounting discipline applied to UAE environment" },
        { id: "vat-modelling", text: "Structured VAT modelling approach" },
        { id: "corporate-tax-awareness", text: "Awareness of corporate tax evolution" },
        { id: "sector-familiarity", text: "Property and service sector familiarity" },
        { id: "cross-border-understanding", text: "Cross border structural understanding" },
        { id: "advisory-first", text: "Advisory first positioning" },
    ],
    closing: "We focus on building structure early not correcting errors later.",
};

// 6. CFO-Level Strategic Advisory page
export const cfoDifference: DifferenceProps = {
    titleStart: "What Makes Nexus",
    titleHighlight: "Advisory Different",
    subtitle: "Unlike compliance driven firms, we:",
    items: [
        { id: "leadership-engagement", text: "Engage directly at leadership level" },
        { id: "financial-interpretation", text: "Focus on financial interpretation, not volume reporting" },
        { id: "sector-depth", text: "Maintain sector depth in property and construction" },
        { id: "documented-outputs", text: "Provide structured, documented advisory outputs" },
        { id: "no-theoretical-consulting", text: "Avoid theoretical consulting without operational grounding" },
        { id: "precision-judgement", text: "Combine accounting precision with commercial judgement" },
    ],
    closing: "We operate as a disciplined external finance partner.",
};


// "Engagement Model" sections extracted from screenshots,
// following your ModelsDataProps structure.
// columns is set to the number of phases each page shows (4 / 4 / 4 / 4 / 3 / 4).
// Image base constants match the earlier files — swap for your real asset paths.

// 1. Solutions Advisory page (4 phases)
export const solutionsModelsData: ModelsDataProps = {
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "Solutions engagements typically follow:",
    closingSubtitle: "Engagement scope is proportionate to complexity and risk.",
    columns: 4,
    data: [
        {
            id: "sol-phase-1",
            title: "Phase 1 – Requirements Definition",
            description: "Clarify reporting, control, and workflow objectives.",
            width: "",
            image: `${ImagesSolutions}/phase1.png`,
        },
        {
            id: "sol-phase-2",
            title: "Phase 2 – Structured Design",
            description: "Define tool logic, integration flow, and governance safeguards.",
            width: "",
            image: `${ImagesSolutions}/phase2.png`,
        },
        {
            id: "sol-phase-3",
            title: "Phase 3 – Development Oversight",
            description: "Coordinate with partner to ensure scope integrity.",
            width: "",
            image: `${ImagesSolutions}/phase3.png`,
        },
        {
            id: "sol-phase-4",
            title: "Phase 4 – Testing & Validation",
            description: "Financial validation and documentation prior to deployment.",
            width: "",
            image: `${ImagesSolutions}/phase4.png`,
        },
    ],
};

// 2. HMRC & Authority page (4 phases)
export const taxModelsData: ModelsDataProps = {
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "Authority engagements typically follow:",
    closingSubtitle: "Scope is defined proportionately to enquiry scale.",
    columns: 4,
    data: [
        {
            id: "hmrc-phase-1",
            title: "Phase 1 – Initial Review",
            description: "Clear documentation of financial and reporting needs.",
            width: "",
            image: `${ImagesTax}/phase1.png`,
        },
        {
            id: "hmrc-phase-2",
            title: "Phase 2 – Technical Analysis",
            description: "Evaluation of accounting and tax treatment.",
            width: "",
            image: `${ImagesTax}/phase2.png`,
        },
        {
            id: "hmrc-phase-3",
            title: "Phase 3 – Response Preparation",
            description: "Drafting structured, disciplined submissions.",
            width: "",
            image: `${ImagesTax}/phase3.png`,
        },
        {
            id: "hmrc-phase-4",
            title: "Phase 4 – Ongoing Correspondence",
            description: "Managing follow up requests and clarifications.",
            width: "",
            image: `${ImagesTax}/phase4.png`,
        },
    ],
};

// 3. Digital & Systems Advisory page (4 phases)
export const systemsModelsData: ModelsDataProps = {
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "Digital & Systems engagements typically follow:",
    closingSubtitle: "Engagements are structured proportionately to project size and risk.",
    columns: 4,
    data: [
        {
            id: "sys-phase-1",
            title: "Phase 1 – Diagnostic Review",
            description: "Assessment of current reporting and system gaps.",
            width: "",
            image: `${ImagesSystems}/phase1.png`,
        },
        {
            id: "sys-phase-2",
            title: "Phase 2 – Requirements Definition",
            description: "Clear documentation of financial and reporting needs.",
            width: "",
            image: `${ImagesSystems}/phase2.png`,
        },
        {
            id: "sys-phase-3",
            title: "Phase 3 – Oversight & Implementation Monitoring",
            description: "Coordination with delivery partner.",
            width: "",
            image: `${ImagesSystems}/phase3.png`,
        },
        {
            id: "sys-phase-4",
            title: "Phase 4 – Validation & Acceptance",
            description: "Financial integrity review prior to system approval.",
            width: "",
            image: `${ImagesSystems}/phase4.png`,
        },
    ],
};

// 4. Business Consultancy page (4 phases)
export const businessModelsData: ModelsDataProps = {
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "Business consultancy engagements typically follow:",
    closingSubtitle: "Scope is defined clearly at engagement outset.",
    columns: 4,
    data: [
        {
            id: "biz-phase-1",
            title: "Phase 1 – Diagnostic Review",
            description: "Assessment of structural and operational exposure.",
            width: "",
            image: `${ImagesBusiness}/phase1.png`,
        },
        {
            id: "biz-phase-2",
            title: "Phase 2 – Advisory Roadmap",
            description: "Clear, prioritised recommendations with financial modelling.",
            width: "",
            image: `${ImagesBusiness}/phase2.png`,
        },
        {
            id: "biz-phase-3",
            title: "Phase 3 – Implementation Support",
            description: "Oversight of agreed changes.",
            width: "",
            image: `${ImagesBusiness}/phase3.png`,
        },
        {
            id: "biz-phase-4",
            title: "Phase 4 – Ongoing Strategic Oversight (Optional)",
            description: "Periodic review aligned to growth phase.",
            width: "",
            image: `${ImagesBusiness}/phase4.png`,
        },
    ],
};

// 5. UAE Advisory page (3 phases)
export const uaeModelsData: ModelsDataProps = {
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "UAE engagements typically follow:",
    closingSubtitle: "Engagement scope is proportionate and defined at outset.",
    columns: 3,
    data: [
        {
            id: "uae-phase-1",
            title: "Phase 1 – Initial Readiness Review",
            description: "Assessment of VAT, corporate tax, and reporting exposure.",
            width: "",
            image: `${ImagesUae}/phase1.png`,
        },
        {
            id: "uae-phase-2",
            title: "Phase 2 – Framework Design",
            description: "Implementation of structured bookkeeping and documentation processes.",
            width: "",
            image: `${ImagesUae}/phase2.png`,
        },
        {
            id: "uae-phase-3",
            title: "Phase 3 – Ongoing Advisory Oversight",
            description: "Periodic review aligned to growth stage.",
            width: "",
            image: `${ImagesUae}/phase3.png`,
        },
    ],
};

// 6. CFO-Level Strategic Advisory page (4 phases)
export const cfoModelsData: ModelsDataProps = {
    titleStart: "Engagement",
    titleAccent: "Model",
    subTitle: "Advisory engagements typically follow:",
    closingSubtitle: "Engagement scope is proportionate and defined at outset.",
    columns: 4,
    data: [
        {
            id: "cfo-phase-1",
            title: "Phase 1 – Diagnostic Review",
            description: "Structured review of financial reporting, governance, and risk exposure.",
            width: "",
            image: `${ImagesCfo}/phase1.png`,
        },
        {
            id: "cfo-phase-2",
            title: "Phase 2 – Structured Recommendations",
            description: "Clear, prioritised advisory roadmap.",
            width: "",
            image: `${ImagesCfo}/phase2.png`,
        },
        {
            id: "cfo-phase-3",
            title: "Phase 3 – Implementation Oversight",
            description: "Support implementation of agreed changes.",
            width: "",
            image: `${ImagesCfo}/phase3.png`,
        },
        {
            id: "cfo-phase-4",
            title: "Phase 4 – Ongoing Cadence (Optional)",
            description: "Monthly or quarterly strategic oversight.",
            width: "",
            image: `${ImagesCfo}/phase4.png`,
        },
    ],
};


// "When to Contact Us" CTA sections extracted from screenshots,
// following your ContactCtaProps structure. All six use the same CTA image
// as your construct example (`${ctaImage}/servicePagesCta.png`).
// NOTE: one screenshot is the PROPERTY page ("Speak to a Property Adviser") —
// no Business Consultancy CTA was in this batch.

// 1. Solutions Advisory page
export const solutionsContactCta: ContactCtaProps = {
    titleStart: "When to",
    titleHighlight: "Contact Us",
    intro: "Consider structured solution advisory if:",
    listIntro: "",
    discussionPoints: [
        "Reporting feels fragmented despite multiple systems",
        "Manual processes are increasing with scale",
        "Dashboard outputs lack financial clarity",
        "You operate across multiple entities or jurisdictions",
        "System implementation decisions are vendor led",
        "You require structured financial tool development",
    ],
    closing:
        "Early advisory intervention reduces implementation risk and protects financial control.",
    buttonLabel: "Speak to a Solutions Adviser",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Solutions advisor ready to take your call",
    },
};

// 2. HMRC & Authority page
export const taxContactCta: ContactCtaProps = {
    titleStart: "When to",
    titleHighlight: "Contact Us",
    intro: "You should consider structured authority support if:",
    listIntro: "",
    discussionPoints: [
        "You have received an HMRC compliance check",
        "You are uncertain about VAT or tax treatment",
        "Documentation feels incomplete",
        "Penalty exposure is possible",
        "You wish to respond in a measured and structured manner",
    ],
    closing: "Early intervention often prevents escalation.",
    buttonLabel: "Speak to a Tax Adviser",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Tax advisor ready to take your call",
    },
};

// 3. Property Advisory page (note: this is the property page, not one of the six service pages)
export const businessCta: ContactCtaProps = {
    titleStart: "When to",
    titleHighlight: "Contact Us",
    intro:
        "Consider structured business consultancy support if:",
    listIntro: "",
    discussionPoints: [
        "Your group structure has evolved without review",
        "You are expanding into new markets",
        "Operational inefficiencies are affecting margins",
        "You are preparing for refinancing or investment",
        "Governance has not evolved with growth",
        "You operate across UK and UAE",
    ],
    closing: "A structured initial discussion can clarify risk and opportunity.",
    buttonLabel: "Speak to a Business Advisory Partner",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Property advisor ready to take your call",
    },
};

// 4. Digital & Systems Advisory page
export const systemsContactCta: ContactCtaProps = {
    titleStart: "When to",
    titleHighlight: "Contact Us",
    intro: "Consider governance led digital advisory if:",
    listIntro: "",
    discussionPoints: [
        "You are implementing ERP",
        "You are migrating accounting software",
        "Reporting lacks clarity despite new systems",
        "Automation is increasing but control feels weaker",
        "You operate across UK and UAE",
        "Vendors are driving system decisions without financial oversight",
    ],
    closing:
        "A structured early review can prevent expensive downstream correction.",
    buttonLabel: "Speak to a Digital Advisory Partner",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Digital advisory partner ready to take your call",
    },
};

// 5. UAE Advisory page
export const uaeContactCta: ContactCtaProps = {
    titleStart: "When to",
    titleHighlight: "Contact Us",
    intro: "Consider structured advisory support if:",
    listIntro: "",
    discussionPoints: [
        "You are establishing a UAE entity",
        "VAT treatment feels uncertain",
        "Corporate tax obligations are unclear",
        "You are expanding from the UK into the UAE",
        "You require structured reporting from inception",
    ],
    closing: "A structured early discussion can prevent future compliance risk.",
    buttonLabel: "Speak to an Adviser",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Adviser ready to take your call",
    },
};

// 6. CFO-Level Strategic Advisory page
// (identified by content: reporting maturity, margins, cashflow, governance, lender/investor)
export const cfoContactCta: ContactCtaProps = {
    titleStart: "When to",
    titleHighlight: "Contact Us",
    intro: "Consider structured advisory support if:",
    listIntro: "",
    discussionPoints: [
        "Your business is growing faster than your reporting systems",
        "Margin clarity feels inconsistent",
        "Cash flow forecasting lacks confidence",
        "Governance has not evolved with scale",
        "You are preparing for lender or investor engagement",
        "Decision making feels financially reactive",
    ],
    closing:
        "A structured initial conversation can identify exposure and opportunity.",
    buttonLabel: "Speak to an Adviser",
    buttonHref: "/contact",
    image: {
        src: `${ctaImage}/servicePagesCta.png`,
        alt: "Adviser ready to take your call",
    },
};