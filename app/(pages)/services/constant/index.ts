

export interface ServiceCardInterface {
    title: string;
    description: string;
    image: string;
    alt: string;
    href: string;
}
const images = "/assets/services"

export const services: ServiceCardInterface[] = [
    {
        title: "UK Accounting & Tax",
        description:
            "Statutory accounts, VAT, corporation tax, and payroll structured around financial discipline for UK and UAE businesses, not just filing deadlines.",
        image: `${images}/ukaccounting.png`,
        alt: "Business professionals in a meeting room",
        href: "/services/uk-accounting-and-tax",
    },
    {
        title: "Advisory & Governance",
        description:
            "CFO level financial interpretation, cashflow planning, and governance design without the full time overhead. Built for founders and directors who need clarity, not more reports.",
        image: `${images}/advisory.png`,
        alt: "Strategy session with team",
        href: "/services/advisory-services",
    },
    {
        title: "Business Consultancy",
        description:
            "We help businesses improve performance, manage growth, and make confident strategic decisions through expert guidance in operations, finance, risk management & business planning.",
        image: `${images}/businessConsultancy.png`,
        alt: "Modern office space",
        href: "/services/business-consultancy",
    },
    {
        title: "Property Accounting & Tax",
        description:
            "Specialist accounting for SPV structures, project cost tracking, CIS compliance, VAT on development, and working capital planning across the full project lifecycle.",
        image: `${images}/propertyAccounting.png`,
        alt: "Modern office space",
        href: "/services/property-accounting-and-tax",
    },
    {
        title: "UAE Accounting & Tax",
        description:
            "Comprehensive UAE accounting and tax services tailored to your business needs. Stay compliant, manage finances effectively, and navigate evolving regulations with confidence.",
        image: `${images}/uaeaccounting.png`,
        alt: "Modern office space",
        href: "/services/uae-accounting-and-tax",
    },
    {
        title: "Tax Authority Support",
        description:
            "Documentation led support for businesses facing VAT compliance checks, corporation tax enquiries and HMRC correspondence focused on measured response, not escalation.",
        image: `${images}/taxauthority.png`,
        alt: "Modern office space",
        href: "/services/tax-authority-support",
    },
    {
        title: "Construction Accounting",
        description:
            "Specialised accounting services for construction businesses, helping you manage and improve cash flow and maximise profitability. Gain clear financial insights at every stage of your projects.",
        image: `${images}/constructionaccounting.png`,
        alt: "Modern office space",
        href: "/services/construction-accounting",
    },
    {
        title: "Digital & Systems Advisory",
        description:
            "Optimise your business with smarter digital solutions. We streamline processes, improve efficiency, and support sustainable growth. Empower your team with technology.",
        image: `${images}/digitalandsystems.png`,
        alt: "Modern office space",
        href: "/services/digital-and-systems-advisory",
    },
    {
        title: "Solutions",
        description:
            "Expert guidance on tax, compliance, and regulatory matters. Helping businesses reduce risk and stay confidently compliant. We provide practical solutions to support informed decisions.",
        image: `${images}/solutions.png`,
        alt: "Modern office space",
        href: "/services/solutions",
    },
];