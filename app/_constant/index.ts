

//Status Bar

// data/stats.data.ts

export interface Stat {
  id: string;
  value: string;
  label: string;
  iconPlus:string;
}

export const statusBar: Stat[] = [
  { id: "s-1", value: "UK & UAE",iconPlus:"",  label: "Cross-Border Coverage" },
  { id: "s-2", value: "15",      iconPlus:"+", label: "Years of Sector Experience" },
  { id: "s-3", value: "100",     iconPlus:"+", label: "Partner-Led Engagements" },
  { id: "s-4", value: "4",       iconPlus:"",  label: "Core Practice Areas" },
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
    href: "#",
  },
  {
    id: "cs-2",
    icon: "/assets/advisoryandgovernance.svg",
    title: "Advisory & Governance",
    description:
      "CFO-level financial interpretation, cashflow planning, and governance design — without the full-time overhead. Built for founders and directors who need clarity, not more reports.",
    href: "#",
  },
  {
    id: "cs-3",
    icon: "/assets/propertyandconstruction.svg",
    title: "Property & Construction",
    description:
      "Specialist accounting for SPV structures, project cost tracking, CIS compliance, VAT on development, and working capital planning across the full project lifecycle.",
    href: "#",
  },
];


// PlatForm

export interface PlatForm {
  id: string;
  name: string;
  /** SVG logo as a URL or inline — use public CDN logos */
  logoUrl: string;
}

export const PlatForm: PlatForm[] = [
  {
    id: "p-1",
    name: "QuickBooks",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg",
  },
  {
    id: "p-2",
    name: "Xero",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/xero-2.svg",
  },
  {
    id: "p-3",
    name: "FreeAgent",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/freeagent.svg",
  },
  {
    id: "p-4",
    name: "Sage",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/sage-group.svg",
  },
  {
    id: "p-5",
    name: "AAT",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/aat.svg",
  },
  {
    id: "p-6",
    name: "CIMA",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/cima.svg",
  },
];

export const bulletPoints: string[] = [
  "Finance-led platform selection — not vendor-driven",
  "Chart of accounts designed around your reporting needs",
  "Migration oversight with data integrity validation",
  "Post-implementation review before full acceptance",
];


// Industries

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  width:string;
}

export const Industries: Industry[] = [
  {
    id: "ind-1",
    title: "Property & SPVs",
    description:
      "Portfolio landlords, SPV structures, temporary accommodation operators, and council-linked property businesses across the UK.",
    width:"max-w-60",
      image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "ind-2",
    title: "Construction & Contracting",
    description:
      "Main contractors, subcontractors, and refurbishment-led operators managing CIS, domestic reverse charge, and project margin complexity.",
    width:"",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "ind-3",
    title: "Founder-Led Businesses",
    description:
      "Owner-managed SMEs scaling through new markets, entity growth, or operational expansion — without the financial structure to match.",
    width:"",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "ind-4",
    title: "UK–UAE Cross-Border",
    description:
      "Businesses operating across both jurisdictions requiring structural alignment, VAT clarity, and consistent reporting from both ends.",
    width:"",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&auto=format&fit=crop",
  },
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
  avatarUrl?: string; // optional — falls back to initials
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
      "I was looking for a good, professional and affordable accountant in London and am very glad to find Alpha Tax & Accounting. I am very pleased with the service and expertise. They are great! Thank you, team.",
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
      "Exceptional service from start to finish. The team handled our year-end accounts with complete professionalism. Highly recommended for any SME looking for reliable accountants.",
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
      "Brilliant support setting up our SPV structure. They explained everything clearly and made the whole process stress-free. Will be using them for all future property acquisitions.",
    avatarInitial: "P",
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
      "Nexus works with owner-managed businesses, property and construction groups, and founder-led companies operating in the UK, UAE, or across both. We work selectively — with organisations where structured financial intervention can make a material difference. If your reporting is reactive, your tax position uncertain, or your structure hasn’t kept pace with growth, we’re likely the right fit."
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
      "Yes — but not as a software developer. We provide governance-led oversight for ERP and accounting platform implementations, ensuring systems are designed around financial requirements, not vendor preferences. We define scope, oversee configuration, and validate outputs before sign-off. Technical build is delivered through approved specialist partners under Nexus oversight.",
  },
  {
    id: "faq-8",
    value: "item-8",
    question: "How is Nexus different from a standard accounting firm?",
    answer:
      "Most accounting firms operate at volume — returns filed, deadlines met, relationship ends. Nexus operates differently. Every engagement is partner-led. We focus on financial interpretation, governance design, and structural clarity — not just compliance output. We work selectively and proportionately, which means clients receive structured attention rather than a junior handoff.",
  },
  {
    id: "faq-9",
    value: "item-9",
    question: "How do we get started?",
    answer:
      "Submit an enquiry through our Contact page. All enquiries are reviewed by senior advisory personnel to assess fit before a conversation is booked. From there: a short introductory discussion, a diagnostic review, and a clearly defined proposal. We operate with intention — not every enquiry becomes an engagement, and that’s by design.",
  },
];