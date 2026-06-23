export interface ServiceCardInterface {
    // tag: string;
    // eyebrow: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    href: string;
}
const images = "/assets/services"
export const services: ServiceCardInterface[] = [
    {
        // tag: "Financial",
        // eyebrow: "Core Service",
        title: "UK Accounting & Tax",
        description:
            "Statutory accounts, VAT, corporation tax, and payroll — structured around financial discipline for UK and UAE businesses, not just filing deadlines.",
        image: `${images}/ukaccounting.png`,
        alt: "Business professionals in a meeting room",
        href: "#",
    },
    {
        // tag: "Strategy",
        // eyebrow: "Core Service",
        title: "Advisory & Governance",
        description:
            "CFO-level financial interpretation, cashflow planning, and governance design — without the full-time overhead. Built for founders and directors who need clarity, not more reports.",
        image: `${images}/advisory.png`,
        alt: "Strategy session with team",
        href: "#",
    },
    {
        // tag: "Incorporation",
        // eyebrow: "Core Service",
        title: "Business Consultancy",
        description:
            "We help businesses improve performance, manage growth, and make confident strategic decisions through expert guidance in operations, finance, risk management & business planning.",
        image: `${images}/businessconsultancy.png`,
        alt: "Modern office space",
        href: "#",
    },
    {
        // tag: "Incorporation",
        // eyebrow: "Core Service",
        title: "Property Accounting & Tax",
        description:
            "Specialist accounting for SPV structures, project cost tracking, CIS compliance, VAT on development, and working capital planning across the full project lifecycle.",
        image: `${images}/propertyaccounting.png`,
        alt: "Modern office space",
        href: "#",
    },
    {
        // tag: "Incorporation",
        // eyebrow: "Core Service",
        title: "UAE Accounting & Tax",
        description:
            "Comprehensive UAE accounting and tax services tailored to your business needs. Stay compliant, manage finances effectively, and navigate evolving regulations with confidence.",
        image: `${images}/uaeaccounting.png`,
        alt: "Modern office space",
        href: "#",
    },
    {
        // tag: "Incorporation",
        // eyebrow: "Core Service",
        title: "Tax Authority Support",
        description:
            "Documentation-led support for businesses facing VAT compliance checks, corporation tax enquirers and HMRC correspondence — focused on measured response, not escalation.",
        image: `${images}/taxauthority.png`,
        alt: "Modern office space",
        href: "#",
    },
    {
        // tag: "Incorporation",
        // eyebrow: "Core Service",
        title: "Construction Accounting",
        description:
            "Specialized accounting services for construction businesses, helping you manage improve cash flow and maximize profitability. Gain clear financial insights at every stage of your projects.",
        image: `${images}/constructionaccounting.png`,
        alt: "Modern office space",
        href: "#",
    },
    {
        // tag: "Incorporation",
        // eyebrow: "Core Service",
        title: "Digital & Systems Advisory",
        description:
            "Optimize your business with smarter digital solutions. We streamline processes, improve efficiency, and support sustainable growth. Empower your team with technology.",
        image: `${images}/digitalandsystems.png`,
        alt: "Modern office space",
        href: "#",
    },
    {
        // tag: "Incorporation",
        // eyebrow: "Core Service",
        title: "Solutions",
        description:
            "Expert guidance on tax, compliance, and regulatory matters. Helping businesses reduce risk and stay confidently compliant. We provide practical solutions to support informed decision.",
        image: `${images}/solutions.png`,
        alt: "Modern office space",
        href: "#",
    },
];