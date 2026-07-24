import { BlogPost } from "@/app/types/types";



// ── Featured ───────────────────────────────────────────────────────────────────
export const FeaturedPosts: BlogPost = {
    id: "f-1",
    slug: "construction-accounting",
    title: "Construction Accounting: Building Financial Control for",
    accent: "Long-Term Growth",
    excerpt:
        `Construction accounting requires more than standard bookkeeping. With project-based costing, subcontractor payments and cash flow management, businesses need accurate financial systems to maintain profitability and compliance.\n
This guide explores practical accounting strategies for construction companies, including job costing, CIS compliance, budgeting and financial reporting. By improving visibility across projects, businesses can reduce risk, control expenses and make smarter operational decisions.`,
    image: "/assets/vat.png",
    timeAgo: "23hrs ago",
    date: "30 May 2026",
    href: "/blogs/construction-accounting",
    content: `Construction accounting is more complex than traditional accounting methods. With fluctuating project costs, subcontractor payments, retention management and strict compliance requirements, construction businesses need accurate financial oversight to maintain profitability and operational stability.\n
  As projects grow in scale and complexity, even small accounting errors can lead to cash flow problems, delayed reporting and reduced margins. Effective construction accounting helps businesses track project performance in real time,\n
  manage budgets efficiently and improve financial decision-making across every stage of a project.\n
This report explores the key principles of construction accounting, including job costing, project forecasting, CIS compliance, payroll management and financial reporting. It also highlights practical strategies for improving cost control, reducing financial risk and strengthening long-term business performance.\n
By implementing structured accounting systems and clear financial processes, construction companies can gain better visibility into project profitability, maintain compliance with industry regulations and build a stronger foundation for sustainable growth.`
};

// ── Category sections ──────────────────────────────────────────────────────────
export const BlogCategories: BlogCategory[] = [
    {
        label: "Property &",
        accent: "Tax",
        posts: [
            {
                id: "pt-1",
                slug: "capital-vs-revenue-misclassification",
                title: "How Capital vs Revenue Misclassification Quietly Damages Your Balance Sheet",
                accent: "",
                excerpt: "Most refurbishment-led businesses misclassify expenditure without realising it — until a lender review or tax enquiry makes the cost visible.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=70&auto=format&fit=crop",
                timeAgo: "23hrs ago",
                date: "28 May 2026",
                href: "/blogs/capital-vs-revenue-misclassification",
                content: `Most refurbishment-led businesses misclassify expenditure without realising it — until a lender review or tax enquiry makes the cost visible.</p><h2>Capital vs Revenue</h2><p>Capital expenditure cannot be deducted against income in the same year. Roof replacements, extension works, and full rewires are capital — not revenue costs.</p>`,
            },
            {
                id: "pt-2",
                slug: "partial-exemption-calculation",
                title: "Partial Exemption: The Calculation Most Mixed-Use Property Groups Are Getting Wrong",
                accent: "",
                excerpt: "Recovery ratios applied without proper methodology create exposure that compounds year on year. Here's what a defensible calculation looks like.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=70&auto=format&fit=crop",
                timeAgo: "23hrs ago",
                date: "25 May 2026",
                href: "/blogs/partial-exemption-calculation",
                content: `<p>Recovery ratios applied without proper methodology create exposure that compounds annually. The standard method is a blunt instrument that most mixed-use groups should not rely on.</p>`,
            },
            {
                id: "pt-3",
                slug: "council-leasing-vat-treatment",
                title: "Why Council Leasing VAT Treatment Is More Complex Than Most Operators Realise",
                accent: "",
                excerpt: "The 28-day rule, service level agreements, and supply classification all interact in ways that generic accounting rarely addresses. Here's the framework.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=70&auto=format&fit=crop",
                timeAgo: "23hrs ago",
                date: "22 May 2026",
                href: "/blogs/council-leasing-vat-treatment",
                content: `<p>The 28-day rule, service level agreements, and supply classification create layered risk that many landlords working with local authorities have not fully mapped.</p>`,
            },
        ],
    },
    {
        label: "Construction &",
        accent: "Accounting",
        posts: [
            {
                id: "ca-1",
                slug: "turnover-growth-construction-margins",
                title: "Why Turnover Growth in Construction Can Mask a Margin Crisis Nobody Sees Coming",
                accent: "",
                excerpt: "Revenue increasing while net margins quietly decline is one of the most common — and most avoidable — problems in project-led businesses.",
                image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=70&auto=format&fit=crop",
                timeAgo: "23hrs ago",
                date: "20 May 2026",
                href: "/blogs/turnover-growth-construction-margins",
                content: `<p>Revenue increasing while net margins quietly decline is one of the most common patterns in growing contractors. The problem compounds when reporting is done on cash rather than accruals basis.</p>`,
            },
            {
                id: "ca-2",
                slug: "cis-verification-compliance",
                title: "CIS Verification: The Compliance Step Most Contractors Skip Until It's Too Late",
                accent: "",
                excerpt: "Failing to correctly verify subcontractors before payment doesn't just risk penalties — it creates a paper trail that HMRC can follow directly to enforcement action.",
                image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=70&auto=format&fit=crop",
                timeAgo: "23hrs ago",
                date: "18 May 2026",
                href: "/blogs/cis-verification-compliance",
                content: `<p>Failing to correctly verify subcontractors before payment triggers higher deduction rates and HMRC exposure. The verification step is legally required — not optional.</p>`,
            },
            {
                id: "ca-3",
                slug: "domestic-reverse-charge-guide",
                title: "Domestic Reverse Charge: A Plain-English Guide for Subcontractors Who Keep Getting It Wrong",
                accent: "",
                excerpt: "The domestic reverse charge rules remain one of the most misapplied areas of construction VAT. This is what you need to know — and what to document.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70&auto=format&fit=crop",
                timeAgo: "23hrs ago",
                date: "15 May 2026",
                href: "/blogs/domestic-reverse-charge-guide",
                content: `<p>The domestic reverse charge rules remain one of the most misapplied areas of construction VAT. Introduced in March 2021, the rules shifted the obligation to account for VAT from the supplier to the customer in most construction supply chains.</p>`,
            },
        ],
    },
];

// ── Sidebar posts ──────────────────────────────────────────────────────────────
export const SidebarPosts: BlogPost[] = [
    { id: "s-1", slug: "uae-corporate-tax-window", date: "30 May 2026", content: "", title: "Why the UAE Corporate Tax Window for Structuring Is Closing Fast", accent: "", image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago", href: "/blogs/uae-corporate-tax-window" },
    { id: "s-2", slug: "construction-reverse-charge", date: "29 May 2026", content: "", title: "What Growing Construction Businesses Get Wrong About Domestic Reverse Charge", accent: "", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago",  href: "/blogs/construction-reverse-charge" },
    { id: "s-3", slug: "erp-implementation-finance", date: "28 May 2026", content: "", title: "How to Know If Your ERP Implementation Is Being Driven by Vendors Instead of Finance", accent: "", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago",  href: "/blogs/erp-implementation-finance" },
    { id: "s-4", slug: "informal-governance-founders", date: "27 May 2026", content: "", title: "The Hidden Cost of Informal Governance in Founder-Led Businesses", accent: "", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago",  href: "/blogs/informal-governance-founders" },
    { id: "s-5", slug: "spv-intercompany-lender-problems", date: "26 May 2026", content: "", title: "SPV Structures: Why Intercompany Mismatches Create Lender Problems at the Worst Time", accent: "", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago",  href: "/blogs/spv-intercompany-lender-problems" },
    { id: "s-6", slug: "cashflow-milestone-contractors", date: "25 May 2026", content: "", title: "Cashflow Forecasting for Contractors: Why Milestone Timing Changes Everything", accent: "", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago",  href: "/blogs/cashflow-milestone-contractors" },
    { id: "s-7", slug: "hmrc-vat-compliance-check", date: "24 May 2026", content: "", title: "What HMRC Is Looking for in a VAT Compliance Check — and How to Respond", accent: "", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago",  href: "/blogs/hmrc-vat-compliance-check" },
    { id: "s-8", slug: "free-zone-mainland-uae-tax", date: "23 May 2026", content: "", title: "Free Zone or Mainland UAE: What the Corporate Tax Rules Actually Mean for Your Structure", accent: "", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago",  href: "/blogs/free-zone-mainland-uae-tax" },
    { id: "s-9", slug: "management-accounts-future", date: "22 May 2026", content: "", title: "Why Your Management Accounts Are Describing the Past Instead of Supporting the Future", accent: "", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=60&auto=format&fit=crop", excerpt: "", timeAgo: "05 hrs ago",  href: "/blogs/management-accounts-future" },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
    return [
        FeaturedPosts,
        ...BlogCategories.flatMap((c) => c.posts),
        ...SidebarPosts,
    ];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return getAllPosts().find((p) => p.slug === slug);
}

export function generateStaticSlugs(): { slug: string }[] {
    return getAllPosts().map((p) => ({ slug: p.slug }));
}