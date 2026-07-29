

// Navbar

export interface ServiceItem { icon: string, title: string; description: string; href: string }

export const serviceItems: ServiceItem[] = [
  { icon: "/assets/nav/ukaccounting.png", title: "UK Accounting & Tax", description: "UK tax and accounting support.", href: "/services/uk-accounting-and-tax" },
  { icon: "/assets/nav/advisoryandgovernance.png", title: "Advisory & Governance", description: "Strategic business guidance.", href: "/services/advisory-services" },
  { icon: "/assets/nav/businessconsultancy.png", title: "Business Consultancy", description: "Advice for sustainable growth.", href: "/services/business-consultancy" },
  { icon: "/assets/nav/propertyaccounting.png", title: "Property Accounting & Tax", description: "Property-focused financial expertise.", href: "/services/property-accounting-and-tax" },
  { icon: "/assets/nav/uaeaccounting.png", title: "UAE Accounting & Tax", description: "UAE tax and compliance services.", href: "/services/uae-accounting-and-tax" },
  { icon: "/assets/nav/taxauthority.png", title: "Tax Authority Support", description: "Support with tax matters.", href: "/services/tax-authority-support" },
  { icon: "/assets/nav/construction.png", title: "Construction Accounting", description: "Accounting for construction projects.", href: "/services/construction-accounting" },
  { icon: "/assets/nav/digital.png", title: "Digital & Systems Advisory", description: "Smarter systems, better performance.", href: "/services/digital-and-systems-advisory" },
  { icon: "/assets/nav/solutions.png", title: "Solutions", description: "Tailored solutions for business.", href: "/services/solutions" },
];


interface FooterLinks {
  label: string;
  href: string
}

export const links: FooterLinks[] = [
  {
    label: "Services",
    href: "/services"
  },
  {
    label: "Insights",
    href: "/blogs"
  },
  {
    label: "Case Studies",
    href: "/case-studies"
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact"
  },
]

// Home Page

// ─── Types ────────────────────────────────────────────────────────────────────

interface TabLink {
  label: string;
  href: string;
}

interface TabConfig {
  label: string;
  image: string;
  tag: string;
  heading: string;
  subtitle: string;
  cta: TabLink;
}


// ─── Tab data ─────────────────────────────────────────────────────────────────
// Hero 
export const TABS: TabConfig[] = [
  {
    label: "Accounting & Tax",
    image:
      "/assets/financialadvisory.png",
    tag: "Financial Advisory",
    heading: "Financial Structure, \nGovernance and Advisory \nfor Growing Businesses",
    subtitle:
      "Structured accounting, defensible tax positions, and financial disciplinefor owner managed businesses, property groups, and construction enterprises that need more than routine compliance.",
    cta: { label: "SPEAK TO AN ADVISER", href: "#" },
  },
  {
    label: "Advisory Services",
    image:
      "/assets/advisoryandservices.png",
    tag: "Strategic Financial Advisory",
    heading: "Compliance Tells You What Happened. Advisory Tells You What to Do Next.",
    subtitle:
      "CFO level financial interpretation, governance design, and cashflow planningfor founders and directors who need structured oversight without the full time overhead.",
    cta: { label: "EXPLORE ADVISORY SERVICES", href: "#" },
  },
  {
    label: "Systems & Solutions",
    image:
      "/assets/digitalsolutions.png",
    tag: "Systems & Solutions",
    heading: "Technology Doesn’t Fix \nPoor Financial Governance.",
    subtitle:
      "Governance led oversight for ERP implementation, platform migration, and reporting automationensuring every system decision is driven by financial requirements, not vendor preference.",
    cta: { label: "EXPLORE DIGITAL SOLUTIONS", href: "#" },
  },
  {
    label: "Property & Construction",
    image:
      "/assets/propertyandconstruction.png",
    tag: "Property & Construction Advisory",
    heading: "Your Margins Are Under Pressure. Your Reporting Should Tell You Exactly Where.",
    subtitle:
      "Specialist accounting for SPV structures, project cost tracking, CIS compliance, VAT on construction activities, and working capital disciplinebuilt for the full financial complexity of property and construction businesses.",
    cta: { label: "EXPLORE PROPERTY & CONSTRUCTION", href: "#" },
  },
];

//Status Bar
export interface Stat {
  id: string;
  value: string;
  label: string;
  iconPlus: string;
}

export const statusBar: Stat[] = [
  { id: "s-1", value: "UK & UAE", iconPlus: "", label: "Cross Border Coverage" },
  { id: "s-2", value: "15", iconPlus: "+", label: "Years of Sector Experience" },
  { id: "s-3", value: "100", iconPlus: "+", label: "Partner Led Engagements" },
  { id: "s-4", value: "4", iconPlus: "", label: "Core Practice Areas" },
];
//Core Services

export interface CoreService {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const CoreServices: CoreService[] = [
  {
    id: "cs-1",
    icon: "/assets/accountingandtax.svg",
    title: "Accounting & Tax",
    description:
      "Statutory accounts, VAT, corporation tax, and payroll — structured around financial discipline for UK and UAE businesses, not just filing deadlines.",
    href: "/services/uk-accounting-and-tax",
  },
  {
    id: "cs-2",
    icon: "/assets/advisoryandgovernance.svg",
    title: "Advisory & Governance",
    description:
      "CFO level financial interpretation, cashflow planning, and governance designwithout the full time overhead. Built for founders and directors who need clarity, not more reports.",
    href: "/services/advisory-services",
  },
  {
    id: "cs-3",
    icon: "/assets/propertyandconstruction.svg",
    title: "Property & Construction",
    description:
      "Specialist accounting for SPV structures, project cost tracking, CIS compliance, VAT on development, and working capital planning across the full project lifecycle.",
    href: "/services/property-accounting-and-tax",
  },
  {
    id: "cs-4",
    icon: "/assets/authoritysupport.svg",
    title: "Tax Authority Support",
    description:
      "Documentation led support for businesses facing VAT compliance checks, corporation tax enquirers and HMRC correspondencefocused on measured response, not escalation.",
    href: "/services/tax-authority-support",
  },
  {
    id: "cs-5",
    icon: "/assets/businessconsultancy.svg",
    title: "Business Consultancy",
    description:
      "We help businesses improve performance, manage growth, and make confident strategic decisions through expert guidance in operations, finance, risk management and business planning.",
    href: "/services/business-consultancy",
  },
  {
    id: "cs-6",
    icon: "/assets/digitalandsystemsadvisory.svg",
    title: "Digital & Systems Advisory",
    description: "We help organizations leverage technology to optimize processes, enhance efficiency, and accelerate digital transformation through tailored systems, automation and technology strategies.",
    href: "/services/digital-and-systems-advisory",
  },
];
// Latest Insights

interface InsightCard {
  tag: string;
  title: string;
  description: string;
  src: string;
  gradientFrom: string;
  gradientTo: string;
  newsFrom: string;
}

export const insights: InsightCard[] = [
  {
    tag: "Accounting & Tax",
    title: "The VAT Trap Most Property Businesses Don't See Coming",
    description:
      "There's a moment many property business owners experience, usually during a lender review, an HMRC compliance check or when preparing to refinance.",
    src: "assets/vat.png",
    gradientFrom: "hsl(174 82% 10%)",
    gradientTo: "hsl(174 82% 22%)",
    newsFrom: "Brief",

  },
  {
    tag: "UAE & International",
    title: "Why Expanding Into the UAE Without Structured Reporting Is a Risk Most Business Owners Underestimate",
    description:
      "There is a moment that many UK founders experience somewhere between six and eighteen months after establishing a UAE entity.",
    src: "assets/advisory.png",
    gradientFrom: "hsl(210 60% 10%)",
    gradientTo: "hsl(210 60% 20%)",
    newsFrom: "Brief",
  },
];
// PlatForm

export interface PlatForm {
  id: string;
  name: string;
  /** SVG logo as a URL or inlineuse public CDN logos */
  logoUrl: string;
}

export const PlatForm: PlatForm[] = [
  {
    id: "p-1",
    name: "QuickBooks",
    logoUrl: `/assets/icon/quickbooks.svg`,
  },
  {
    id: "p-2",
    name: "Xero",
    logoUrl: "/assets/icon/zero.svg",
  },
  {
    id: "p-4",
    name: "Sage",
    logoUrl: "/assets/icon/sage.svg",
  },
  {
    id: "p-3",
    name: "FreeAgent",
    logoUrl: "/assets/icon/freeagent.svg",
  },
];

export const memberships = [
  {
    id: 1,
    name: "Association of Chartered Certified Accountants",
    logo: "/assets/icon/acca.svg",
  },
  {
    id: 2,
    name: "Institute of Financial Accountants",
    logo: "/assets/icon/ifa.svg",
  },
  {
    id: 3,
    name: "HMRC Authorised Agent",
    logo: "/assets/icon/hmrc.svg",
  },
  {
    id: 4,
    name: "Companies House ACSP",
    logo: "/assets/icon/acsp.svg",
  },
];

export const bulletPoints: string[] = [
  "Finance led platform selection not vendor driven",
  "Chart of accounts designed around your reporting needs",
  "Migration oversight with data integrity validation",
  "Post-implementation review before full acceptance",
];



//Case Study

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  image: string;
  metrics: [CaseStudyMetric, CaseStudyMetric]; // always exactly 2 impact metrics
}

export const CaseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Property Group Eliminates Year-End Chaos Across 14 SPVs",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80&auto=format&fit=crop",
    metrics: [
      { value: "14", label: "SPVs brought into consistent reporting alignment" },
      { value: "Materially reduced", label: "Months from ideation to launch" },
    ],
  },
  {
    id: "cs-2",
    title: "UAE Expansion Structured in 90 Days for a London-Based Retailer",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop",
    metrics: [
      { value: "90 days", label: "From engagement to full UAE entity setup" },
      { value: "£0", label: "Penalty exposure on first-year VAT filing" },
    ],
  },
  {
    id: "cs-3",
    title: "Construction Firm Recovers £220k in Misclaimed CIS Deductions",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
    metrics: [
      { value: "£220k", label: "Recovered through amended CIS submissions" },
      { value: "3 years", label: "Of prior filings reviewed and corrected" },
    ],
  },
  {
    id: "cs-4",
    title: "Multi-Site Healthcare Group Streamlines Reporting Across 6 Clinics",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop",
    metrics: [
      { value: "6 clinics", label: "Unified under a single consolidated report" },
      { value: "48 hrs", label: "Average month-end close time, down from 3 weeks" },
    ],
  },
];



// Testimonials

export interface Testimonial {
  id: string;
  name: string;
  rating: number; // out of 5
  review: string;
  avatarUrl?: string; // optionalfalls back to initials
  avatarInitial?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Zeynep Kara",
    rating: 5,
    review:
      "I enlisted the help of this Accountancy Firm after after i was badly let down from my previous Accountants in London.\nThis Firm has helped me soooo much. They have brought my Company tax affairs in order, and i have never been happier.\nI would highly recommend them! 😊😊😊",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "t-2",
    name: "Faraz Ahmed",
    rating: 5,
    review:
      "I was looking for a good, professional and affordable accountant in London and am very glad to find Nexus Accounting. I am very pleased with the service and expertise. They are great! Thank you, team.",
    avatarInitial: "F",
  },
  {
    id: "t-3",
    name: "Faizan Ahmed",
    rating: 5,
    review:
      "Professional and problem solver\nUp to date information and to the point advice\nThanks for all the help",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "t-4",
    name: "Sarah Mitchell",
    rating: 5,
    review:
      "Exceptional service from start to finish. The team handled our year end accounts with complete professionalism. Highly recommended for any SME looking for reliable accountants.",
    avatarInitial: "S",
  },
  {
    id: "t-5",
    name: "Omar Hassan",
    rating: 5,
    review:
      "Switched from our previous accountant and could not be happier. The UAE VAT guidance alone saved us thousands. Responsive, knowledgeable, and genuinely invested in our success.",
    avatarInitial: "O",
  },
  {
    id: "t-6",
    name: "Priya Sharma",
    rating: 5,
    review:
      "Brilliant support setting up our SPV structure. They explained everything clearly and made the whole process stress free. Will be using them for all future property acquisitions.",
    avatarInitial: "P",
  },
  {
    id: "t-7",
    name: "M. Ismail Nagori",
    rating: 5,
    review:
      "Nexus Accounting provided me with very accurate and prompt accounting services. They are very efficient in providing the accounting and advisory services. I recommend other companies to work with them as well!",
    avatarInitial: "M",
  },
  {
    id: "t-8",
    name: "Zak Dada",
    rating: 5,
    review:
      "I have been using Nexus for years for personal self assessment and business corporation tax and VAT. The owner is very quick and intelligent, they have helped me significantly getting my tax affairs in order. I would highly recommend using Nexus!",
    avatarInitial: "Z",
  },
  {
    id: "t-9",
    name: "Muhammad Imran",
    rating: 5,
    review:
      "I was searching for a reliable accountant in UK and Nexus Accounting exceeded my expectations. Their expertise and friendly service are unmatched. I m truly satisfied with their work. Highly recommend.",
    avatarInitial: "Z",
  },
];

// FAQ
// Home Page

export interface FaqItem {
  id: string;
  value: string;   // used by shadcn Accordion as the unique item identifier
  question: string;
  answer: string;
}

export const faqsHome: FaqItem[] = [
  {
    id: "faq-1",
    value: "item-1",
    question: "Who is Nexus Advisory & Services right for?",
    answer:
      "Nexus works with owner managed businesses, property and construction groups, and founder led companies operating in the UK, UAE, or across both. We work selectively with organisations where structured financial intervention can make a material difference. If your reporting is reactive, your tax position uncertain, or your structure hasn’t kept pace with growth, we’re likely the right fit."
  },
  {
    id: "faq-2",
    value: "item-2",
    question: "Do you only handle compliance, or do you offer strategic advice too?",
    answer:
      "Both — but our focus goes well beyond compliance. We prepare statutory accounts, VAT returns, and tax filings, but our core value is the advisory layer on top: interpreting what the numbers mean, identifying structural risk, and helping leadership make better financial decisions. Compliance is the floor, not the ceiling."
  },
  {
    id: "faq-3",
    value: "item-3",
    question: "Can you support businesses operating in both the UK and UAE?",
    answer:
      "Yes. Cross-border alignment between UK and UAE entities is one of our core practice areas. We support structural alignment, intercompany reporting clarity, VAT treatment across jurisdictions, and corporate tax readiness in the UAE — ensuring operations in one jurisdiction don’t create unintended exposure in the other.",
  },
  {
    id: "faq-4",
    value: "item-4",
    question: "Do you work with property businesses specifically?",
    answer:
      "Property is one of our deepest areas of expertise. We work with portfolio landlords, SPV structures, temporary accommodation operators, council leasing models, and property developers. We understand partial exemption, the 28-day rule, capital vs revenue classification, and the reporting discipline required across multi-entity property groups.",
  },
  {
    id: "faq-5",
    value: "item-5",
    question: "What does a typical engagement look like?",
    answer:
      "Every engagement begins with a structured diagnostic — not a sales call. We assess your current reporting, tax exposure, and governance gaps before recommending anything. From there, scope is defined clearly with documented deliverables. Engagements can be monthly, quarterly, or project-based depending on your needs.",
  },
  {
    id: "faq-6",
    value: "item-6",
    question: "Do you support businesses during HMRC enquiries?",
    answer:
      "Yes. We provide structured support for VAT compliance checks, corporation tax enquiries, CIS queries, and PAYE reviews. Our approach is documentation-led and professionally framed — focused on measured response rather than escalation. We do not provide tribunal litigation services.",
  },
  {
    id: "faq-7",
    value: "item-7",
    question: "Can you help with ERP or accounting software implementation?",
    answer:
      "Yes but not as a software developer. We provide governance led oversight for ERP and accounting platform implementations, ensuring systems are designed around financial requirements, not vendor preferences. We define scope, oversee configuration, and validate outputs before sign-off. Technical build is delivered through approved specialist partners under Nexus oversight.",
  },
  {
    id: "faq-8",
    value: "item-8",
    question: "How is Nexus different from a standard accounting firm?",
    answer:
      "Most accounting firms operate at volume returns filed, deadlines met, relationship ends. Nexus operates differently. Every engagement is partner led. We focus on financial interpretation, governance design, and structural clarity not just compliance output. We work selectively and proportionately, which means clients receive structured attention rather than a junior handoff.",
  },
  {
    id: "faq-9",
    value: "item-9",
    question: "How do we get started?",
    answer:
      "Submit an enquiry through our Contact page. All enquiries are reviewed by senior advisory personnel to assess fit before a conversation is booked. From there: a short introductory discussion, a diagnostic review, and a clearly defined proposal. We operate with intention — not every enquiry becomes an engagement, and that’s by design.",
  },
];


// Pricing
export interface PricingPlan {
  id: string;
  name: string;
  price: string | null;   // null = custom
  period: string | null;
  features: string[];
  cta: string;
  popular?: boolean;
  custom?: boolean;
  note?: string;
}

export const PricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "0",
    period: "/mo",
    features: [
      "We offers a free month of service for new customers.",
    ],
    cta: "Free Demo",
  },
  {
    id: "single",
    name: "Single",
    price: "9",
    period: "/mo",
    features: [
      "We offers a free 7 days of service for new customers.",
      "Our Talented & Experienced Marketing Agency.",
    ],
    cta: "Subscribe Now",
  },
  {
    id: "professional",
    name: "Professional",
    price: "49",
    period: "/mo",
    popular: true,
    features: [
      "We offers a free 14 days of service for new customers.",
      "Full Access",
      "Source Files",
      "Free Appointments",
      "Enhanced Security",
      "Free Instalment",
    ],
    cta: "Buy Now",
    note: "*T&C Apply",
  },
  {
    id: "custom",
    name: "Custom",
    price: null,
    period: null,
    custom: true,
    features: ["Custom Pricing"],
    cta: "Talk To Us",
  },
];