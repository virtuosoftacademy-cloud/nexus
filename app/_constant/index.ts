

//Status Bar
export interface Stat {
  id: string;
  value: string;
  label: string;
  iconPlus: string;
}

export const statusBar: Stat[] = [
  { id: "s-1", value: "UK & UAE", iconPlus: "", label: "Cross-Border Coverage" },
  { id: "s-2", value: "15", iconPlus: "+", label: "Years of Sector Experience" },
  { id: "s-3", value: "100", iconPlus: "+", label: "Partner-Led Engagements" },
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
  width: string;
}

export const Industries: Industry[] = [
  {
    id: "ind-1",
    title: "Property & SPVs",
    description:
      "Portfolio landlords, SPV structures, temporary accommodation operators, and council-linked property businesses across the UK.",
    width: "max-w-60",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "ind-2",
    title: "Construction & Contracting",
    description:
      "Main contractors, subcontractors, and refurbishment-led operators managing CIS, domestic reverse charge, and project margin complexity.",
    width: "",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "ind-3",
    title: "Founder-Led Businesses",
    description:
      "Owner-managed SMEs scaling through new markets, entity growth, or operational expansion — without the financial structure to match.",
    width: "",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "ind-4",
    title: "UK–UAE Cross-Border",
    description:
      "Businesses operating across both jurisdictions requiring structural alignment, VAT clarity, and consistent reporting from both ends.",
    width: "",
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


// Blogs

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  timeAgo: string;
  category: string;
  href: string;
}

export interface BlogCategory {
  label: string;
  accent: string; // the teal word in the heading
  posts: BlogPost[];
}

// ── Featured (Latest) ──────────────────────────────────────────────────────────
export const FeaturedPosts: BlogPost = {
  id: "f-1",
  title: "The VAT Trap Most Property Businesses Don't See Coming — And How to Avoid It",
  excerpt:
    "Partial exemption, temporary accommodation, and the 28-day rule are three areas where VAT misapplication accumulates quietly — until HMRC asks a question you can't answer cleanly. Here's what to look for and what to document before scrutiny arrives.",
  image:
    "assets/vatblog.png",
  timeAgo: "23hrs ago",
  category: "Property & VAT",
  href: "#",
};

// ── Category sections ──────────────────────────────────────────────────────────
export const BlogCategories: BlogCategory[] = [
  {
    label: "Property &",
    accent: "Tax",
    posts: [
      {
        id: "pt-1",
        title: "How Capital vs Revenue Misclassification Quietly Damages Your Balance Sheet",
        excerpt: "Most refurbishment-led businesses misclassify expenditure without realising it — until a lender review or tax enquiry makes the cost visible.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=70&auto=format&fit=crop",
        timeAgo: "23hrs ago",
        category: "Property & Tax",
        href: "#",
      },
      {
        id: "pt-2",
        title: "Partial Exemption: The Calculation Most Mixed-Use Property Groups Are Getting Wrong",
        excerpt: "Recovery ratios applied without proper methodology create exposure that compounds year on year. Here’s what a defensible calculation looks like.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=70&auto=format&fit=crop",
        timeAgo: "23hrs ago",
        category: "Property VAT",
        href: "#",
      },
      {
        id: "pt-3",
        title: "Why Council Leasing VAT Treatment Is More Complex Than Most Operators Realise",
        excerpt: "The 28-day rule, service level agreements, and supply classification all interact in ways that generic accounting rarely addresses. Here’s the framework.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=70&auto=format&fit=crop",
        timeAgo: "23hrs ago",
        category: "Temporary Accomodation",
        href: "#",
      },
    ],
  },
  {
    label: "Construction &",
    accent: "Accounting",
    posts: [
      {
        id: "ca-1",
        title: "Why Turnover Growth in Construction Can Mask a Margin Crisis Nobody Sees Coming",
        excerpt: "Revenue increasing while net margins quietly decline is one of the most common — and most avoidable — problems in project-led businesses. Here’s how cost-to-complete discipline changes that.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=70&auto=format&fit=crop",
        timeAgo: "23hrs ago",
        category: "Construction Accounting",
        href: "#",
      },
      {
        id: "ca-2",
        title: "CIS Verification: The Compliance Step Most Contractors Skip Until It’s Too Late",
        excerpt: "Failing to correctly verify subcontractors before payment doesn’t just risk penalties — it creates a paper trail that HMRC can follow directly to enforcement action.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=70&auto=format&fit=crop",
        timeAgo: "23hrs ago",
        category: "CIS Compliance",
        href: "#",
      },
      {
        id: "ca-3",
        title: "Domestic Reverse Charge: A Plain-English Guide for Subcontractors Who Keep Getting It Wrong",
        excerpt: "The domestic reverse charge rules remain one of the most misapplied areas of construction VAT. This is what you need to know — and what to document.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70&auto=format&fit=crop",
        timeAgo: "23hrs ago",
        category: "VAT & DRC",
        href: "#",
      },
    ],
  },
];

// ── Sidebar posts ──────────────────────────────────────────────────────────────
export const SidebarPosts: BlogPost[] = [
  {
    id: "s-1",
    title: "Why the UAE Corporate Tax Window for Structuring Is Closing Fast",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "UAE Tax",
    href: "#",
  },
  {
    id: "s-2",
    title: "What Growing Construction Businesses Get Wrong About Domestic Reverse Charge",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "Construction & VAT",
    href: "#",
  },
  {
    id: "s-3",
    title: "How to Know If Your ERP Implementation Is Being Driven by Vendors Instead of Finance",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "Technology & Systems",
    href: "#",
  },
  {
    id: "s-4",
    title: "The Hidden Cost of Informal Governance in Founder-Led Businesses",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "Advisory",
    href: "#",
  },
  {
    id: "s-5",
    title: "SPV Structures: Why Intercompany Mismatches Create Lender Problems at the Worst Time",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "Property Accounting",
    href: "#",
  },
  {
    id: "s-6",
    title: "Cashflow Forecasting for Contractors: Why Milestone Timing Changes Everything",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "Construction Accounting",
    href: "#",
  },
  {
    id: "s-7",
    title: "What HMRC Is Looking for in a VAT Compliance Check — and How to Respond",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "Tax Authority Support",
    href: "#",
  },
  {
    id: "s-8",
    title: "Free Zone or Mainland UAE: What the Corporate Tax Rules Actually Mean for Your Structure",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "UAE Advisory",
    href: "#",
  },
  {
    id: "s-9",
    title: "Why Your Management Accounts Are Describing the Past Instead of Supporting the Future",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=60&auto=format&fit=crop",
    excerpt: "",
    timeAgo: "05 hrs ago",
    category: "Advisory Services",
    href: "#",
  },
];



// data/pricing.data.ts

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
      "Free Installment",
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