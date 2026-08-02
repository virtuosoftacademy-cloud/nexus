
// ============================================================================
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

// ── Config ──────────────────────────────────────────────────────────
const MIN_PASSWORD_LENGTH = 12;

const INDUSTRIES = [
    "Property & Real Estate",
    "Professional Services",
    "Hospitality & Leisure",
];

const SERVICE_AREAS = [
    "Management Accounts",
    "Systems Migration",
    "Advisory",
    "Payroll",
    "Tax Planning",
    "Cash Flow Forecasting",
];

// ── Helpers ─────────────────────────────────────────────────────────
function slugify(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

function computeTimeAgo(dateStr: string): string {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diffMs / 86_400_000);
    if (days < 1) return "today";
    if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years === 1 ? "" : "s"} ago`;
}

async function main() {
    // ════════════════════════════════════════════════════════════════
    // Validate BEFORE anything destructive. Section 0 wipes every table,
    // so failing later would leave the database empty AND without an admin.
    // Credentials must come from the environment — a default password
    // committed to this repo would be public knowledge, and this script is
    // runnable against production.
    // ════════════════════════════════════════════════════════════════
    const adminEmail = (process.env.ADMIN_EMAIL ?? "").toLowerCase().trim();
    const adminPassword = process.env.ADMIN_PASSWORD ?? "";

    if (!adminEmail || !adminPassword) {
        console.error(
            "✖ ADMIN_EMAIL and ADMIN_PASSWORD must both be set before seeding.\n" +
            "  Set them in .env locally, or in your host's environment variables.\n" +
            "  Nothing was changed."
        );
        process.exit(1);
    }

    if (adminPassword.length < MIN_PASSWORD_LENGTH) {
        console.error(
            `✖ ADMIN_PASSWORD must be at least ${MIN_PASSWORD_LENGTH} characters. Nothing was changed.`
        );
        process.exit(1);
    }

    // ════════════════════════════════════════════════════════════════
    // 0. Clean slate — children before parents
    // ════════════════════════════════════════════════════════════════
    await prisma.approachCard.deleteMany();
    await prisma.timelinePhase.deleteMany();
    await prisma.relatedService.deleteMany();
    await prisma.caseStudy.deleteMany();
    await prisma.industry.deleteMany();
    await prisma.serviceArea.deleteMany();
    await prisma.blogPost.deleteMany();
    await prisma.blogCategory.deleteMany();
    await prisma.newsletterSubscriber.deleteMany();
    await prisma.session.deleteMany();
    await prisma.account.deleteMany();
    await prisma.user.deleteMany();
    console.log("✔ Cleared existing content");

    // ════════════════════════════════════════════════════════════════
    // 1. Admin user
    // ════════════════════════════════════════════════════════════════
    // upsert, not create: re-running the seed should rotate the password
    // rather than fail on the unique email constraint.
    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {
            name: process.env.ADMIN_NAME?.trim() || "Admin",
            password: await hash(adminPassword, 12),
            role: "ADMIN",
        },
        create: {
            name: process.env.ADMIN_NAME?.trim() || "Admin",
            email: adminEmail,
            password: await hash(adminPassword, 12),
            role: "ADMIN",
        },
    });

    console.log(`✔ Admin user: ${admin.email} (password from ADMIN_PASSWORD)`);


    // ════════════════════════════════════════════════════════════════
    // 2. Blog — categories
    // ════════════════════════════════════════════════════════════════
    const categoryData = [
        { label: "Renting", accent: "Guides" },
        { label: "Landlords", accent: "Essentials" },
        { label: "Buying & Selling", accent: "Advice" },
        { label: "Property Investment", accent: "Insights" },
    ];
    const categories: Record<string, number> = {};
    for (const c of categoryData) {
        const created = await prisma.blogCategory.create({ data: c });
        categories[c.label] = created.id;
    }
    console.log(`✔ ${categoryData.length} categories`);

    // ════════════════════════════════════════════════════════════════
    // 3. Blog — posts
    // ════════════════════════════════════════════════════════════════
    const postsData = [
        {
            title: "The complete first time renter's checklist",
            accent: "checklist",
            category: "Renting",
            date: "2026-07-18",
            image: "/assets/propertyandconstruction.png",
            isFeatured: true,
            isSidebar: false,
            excerpt:
                "From viewing to move in day: the documents, questions, and small print every first time tenant should have covered before signing.",
            content: `Renting your first home is equal parts exciting and confusing. Between referencing checks, deposits, and a tenancy agreement full of unfamiliar terms, it's easy to say yes to things you don't fully understand.

Start with the viewing: check water pressure, test every window, ask about council tax banding and average utility bills, and look for damp in corners and behind furniture. A ten-minute inspection now saves months of complaints later.

Before signing, confirm the deposit will be protected in a government-approved scheme, get the inventory in writing with photos, and read the break clause twice. If anything is promised verbally — repairs, redecoration, included appliances — get it added to the agreement before you sign, not after.`,
        },
        {
            title: "How much rent can you actually afford",
            accent: "actually afford",
            category: "Renting",
            date: "2026-07-12",
            image: "/assets/financialadvisory.png",
            isFeatured: false,
            isSidebar: true,
            excerpt:
                "The 30% rule is a starting point, not an answer. A practical way to work out your real ceiling before you fall in love with a flat.",
            content: `Most letting agents apply a simple affordability test: your annual income should be at least 30 times the monthly rent. That tells you what you can be approved for — not what you can comfortably live on.

A more honest calculation starts from your take-home pay and subtracts the fixed costs renting brings with it: utilities, council tax, contents insurance, commuting from that specific location. What's left has to cover food, debt payments, and savings.

Our rule of thumb for clients: if a property only works when nothing goes wrong, it doesn't work. Build in a buffer of at least one month's rent in accessible savings before committing.`,
        },
        {
            title: "Understanding your tenancy deposit rights",
            accent: "deposit rights",
            category: "Renting",
            date: "2026-07-05",
            image: "/assets/vat.png",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Where your deposit must be held, what can legally be deducted, and how to dispute a deduction that doesn't add up.",
            content: `In most jurisdictions, a residential deposit can't simply sit in your landlord's bank account. It must be protected in an approved scheme within a set window, and you must be told which one.

Deductions at the end of a tenancy have to reflect actual loss: unpaid rent, damage beyond fair wear and tear, or missing items from the inventory. Faded paint and worn carpet after three years of normal living are not damage — they're depreciation.

If you disagree with a deduction, don't accept a partial refund as final. Every protection scheme includes a free dispute resolution service, and the burden of evidence sits with the landlord, which is exactly why your dated move in photos matter.`,
        },
        {
            title: "Rent increases: what's fair and what's negotiable",
            accent: "negotiable",
            category: "Renting",
            date: "2026-06-27",
            image: "/assets/advisoryandservices.png",
            isFeatured: false,
            isSidebar: true,
            excerpt:
                "A rise isn't automatically enforceable just because it arrived in writing. How increases work, and how to push back well.",
            content: `A rent increase has to follow the route your tenancy allows: a renewal, a rent review clause, or the formal statutory notice process. An email announcing a new figure mid-term, on its own, often isn't enforceable.

Whether an increase is fair is a market question. Pull comparable listings for your street and property type. If similar homes rent for less, that's your negotiating evidence — landlords with good tenants rarely want a void period over a modest difference.

Counter-offering is normal and expected. A reasonable response acknowledges the market, proposes a smaller step, and reminds the landlord what they keep: on-time payments, a cared-for property, and no re-letting fees.`,
        },
    ];
    for (const p of postsData) {
        const slug = slugify(p.title);
        await prisma.blogPost.create({
            data: {
                slug,
                title: p.title,
                accent: p.accent,
                excerpt: p.excerpt,
                image: p.image,
                date: p.date,
                timeAgo: computeTimeAgo(p.date),
                content: p.content,
                href: `/blogs/${slug}`,
                isFeatured: p.isFeatured,
                isSidebar: p.isSidebar,
                categoryId: p.category ? categories[p.category] : null,
                authorId: admin.id,
            },
        });
    }
    console.log(`✔ ${postsData.length} posts`);

    // ════════════════════════════════════════════════════════════════
    // 4. Case studies — taxonomy
    // ════════════════════════════════════════════════════════════════
    const industries: Record<string, number> = {};
    for (const label of INDUSTRIES) {
        const row = await prisma.industry.create({ data: { label } });
        industries[label] = row.id;
    }

    const areas: Record<string, number> = {};
    for (const label of SERVICE_AREAS) {
        const row = await prisma.serviceArea.create({ data: { label } });
        areas[label] = row.id;
    }
    console.log(`✔ ${INDUSTRIES.length} industries, ${SERVICE_AREAS.length} service areas`);

    const connectAreas = (labels: string[]) => ({
        connect: labels.map((l) => ({ id: areas[l] })),
    });

    // ════════════════════════════════════════════════════════════════
    // 5. Case studies
    // ════════════════════════════════════════════════════════════════
    const caseStudiesData = [
        {
            slug: "regional-property-group-finance-transformation",
            heroTitle: "Finance transformation for a regional property group",
            heroSubtitle:
                "How a 120-unit portfolio moved from spreadsheet chaos to monthly management accounts in ninety days.",
            heroImage: "/assets/services/propertyAccounting.png",
            industry: "Property & Real Estate",
            serviceAreas: ["Management Accounts", "Systems Migration", "Advisory"],

            summary: `A growing property group had outgrown its spreadsheet-based finance function. Rent rolls, service charges, and supplier payments lived in disconnected files maintained by different people.

Over a ninety-day engagement we consolidated the portfolio onto a single cloud ledger, rebuilt the chart of accounts around properties and cost centres, and established a monthly close the directors could rely on.`,

            situationParagraphs: `The group had doubled its portfolio in three years, but the finance function hadn't changed since the first ten units.

Each acquisition brought its own spreadsheet conventions, and consolidation took the office manager two weeks per quarter.`,

            situationQuestions: `Which properties are actually profitable after maintenance and voids?
What does the group owe suppliers right now, across all entities?
Can we produce lender-ready accounts without a quarter's delay?`,

            situationClosing:
                "The directors didn't need more data — they needed one version of the truth, on time, every month.",

            challenge: `Twelve legal entities, three bookkeeping styles, and no shared chart of accounts. Historic data quality varied from meticulous to missing.

The migration had to happen without pausing rent collection or supplier payments — the business could not stop to be fixed.`,

            approachIntro: `We phased the work so each stage delivered something usable on its own, rather than a single big-bang cutover.`,

            outcome: `The first consolidated monthly management accounts were delivered on working day eight — previously a quarterly exercise taking two weeks.

Per-property profitability became visible for the first time, prompting the disposal of two persistently loss-making units.`,

            keyResults: `Monthly close reduced from 10+ days quarterly to 8 working days monthly
12 entities consolidated onto one ledger with a shared chart of accounts
Supplier payment runs centralised, duplicate payments eliminated
Lender reporting pack produced on demand instead of on request`,

            calloutHeading: "Facing a similar challenge?",
            calloutText:
                "If your finance function hasn't kept pace with your portfolio, a short discovery conversation will tell you what ninety days could change.",
            calloutButtonHref: "/contact",
            calloutButtonLabel: "Book a discovery call",

            cards: [
                { title: "Discover", description: "Mapped every entity, bank account, and data source; graded historic data quality to decide what to migrate versus archive." },
                { title: "Design", description: "Built a property-centric chart of accounts and reporting pack agreed with the directors before any data moved." },
                { title: "Migrate", description: "Moved entities in waves, reconciling each to bank and rent roll before switching it live." },
                { title: "Embed", description: "Trained the in-house team on the monthly close checklist and handed over a documented process." },
            ],
            timeline: [
                { phase: "Discovery & data audit", duration: "Weeks 1–2" },
                { phase: "Chart of accounts & reporting design", duration: "Weeks 3–4" },
                { phase: "Entity migration (waves 1–3)", duration: "Weeks 5–10" },
                { phase: "First full monthly close & handover", duration: "Weeks 11–13" },
            ],
            services: [
                { label: "Management Accounts", href: "/services/management-accounts" },
                { label: "Systems Advisory", href: "/services/systems-advisory" },
            ],
        },
        {
            slug: "architecture-practice-payroll-and-project-profitability",
            heroTitle: "Project profitability for a 40-person architecture practice",
            heroSubtitle:
                "Turning timesheets into a live view of which projects pay — and which quietly do not.",
            heroImage: "/assets/services/businessConsultancy.png",
            industry: "Professional Services",
            serviceAreas: ["Management Accounts", "Payroll", "Advisory"],

            summary: `A well-regarded practice was busy, growing, and unsure why margins kept slipping. Fees were competitive and utilisation looked healthy, yet cash never quite matched the workload.

We rebuilt the link between timesheets, payroll cost, and project reporting so partners could see contribution per project while the work was still in progress.`,

            situationParagraphs: `Timesheets were collected diligently but used only for client billing, never for cost analysis. Salary cost sat in one ledger account for the whole practice.

Partners judged project health on fee value and gut feel, discovering overruns only at final invoicing — often months after the hours were spent.`,

            situationQuestions: `Which project types actually deliver our target margin?
How much unbilled time is sitting in work in progress right now?
Are we pricing stages consistently across the studio?`,

            situationClosing:
                "The practice wasn't short of information — it was short of information arriving early enough to act on.",

            challenge: `Salary cost had to be allocated to projects without turning payroll into a disclosure risk internally, and without asking architects to record their time differently.

Any reporting had to be produced by the practice manager in under a day each month, or it would quietly stop happening.`,

            approachIntro: `We treated the existing timesheet discipline as an asset and built around it, rather than introducing a new system for people to resist.`,

            outcome: `Partners now review contribution by project and stage at a monthly meeting, eight working days after month end.

Two service lines were repriced after the first quarter of data, and a recurring scope-creep pattern in fit-out work was caught and addressed in the engagement letter template.`,

            keyResults: `Blended cost rates established for every grade, refreshed each April
Project contribution visible monthly instead of at final invoice
Work in progress reduced by a third within two quarters
Two service lines repriced on evidence rather than instinct`,

            calloutHeading: "Curious what your projects really earn?",
            calloutText:
                "If your timesheets bill clients but never inform pricing, there is usually margin hiding in the gap.",
            calloutButtonHref: "/contact",
            calloutButtonLabel: "Talk to an adviser",

            cards: [
                { title: "Map", description: "Traced how time flowed from timesheet to invoice, and where cost information stopped being available." },
                { title: "Rate", description: "Built blended cost rates per grade from payroll data, keeping individual salaries confidential." },
                { title: "Report", description: "Created a one-page contribution report per project, produced from existing data in under an hour." },
                { title: "Review", description: "Established a monthly partner review so findings turned into pricing and scope decisions." },
            ],
            timeline: [
                { phase: "Process mapping & data review", duration: "Weeks 1–2" },
                { phase: "Cost rate build", duration: "Weeks 3–4" },
                { phase: "Reporting pack & pilot month", duration: "Weeks 5–8" },
                { phase: "Handover & first partner review", duration: "Week 9" },
            ],
            services: [
                { label: "Payroll", href: "/services/payroll" },
                { label: "Management Accounts", href: "/services/management-accounts" },
            ],
        },
        {
            slug: "hospitality-group-seasonal-cash-flow",
            heroTitle: "Surviving the shoulder season: cash flow for a hospitality group",
            heroSubtitle:
                "Four sites, one seasonal revenue curve, and a rolling forecast that replaced the January scramble.",
            heroImage: "/assets/services/solutions.png",
            industry: "Hospitality & Leisure",
            serviceAreas: ["Cash Flow Forecasting", "Tax Planning", "Advisory"],

            summary: `A four-site hospitality group traded profitably across the year but ran uncomfortably tight every January and February.

We built a thirteen-week rolling cash forecast alongside an annual tax and capital plan, so seasonal troughs became scheduled events rather than annual emergencies.`,

            situationParagraphs: `Summer trading masked the shape of the year. Decisions on refurbishment and recruitment were made in September, when cash looked strongest, and paid for in February, when it did not.

The group's bank facility was renegotiated under pressure twice in three years, both times during the trough.`,

            situationQuestions: `How much cash will each site hold twelve weeks from now?
Can we fund the refurbishment without touching the overdraft?
When exactly do the VAT and corporation tax payments land?`,

            situationClosing: "Profitability was never the problem — timing was.",

            challenge: `Weekly takings varied with weather and events, and three of the four sites used different EPOS systems with no shared reporting.

Any forecast had to be maintainable by the group's own finance assistant in an afternoon each week, using data the sites already produced.`,

            approachIntro: `We built the simplest model that could be trusted, then made updating it a fifteen-minute weekly habit rather than a monthly project.`,

            outcome: `The group entered its next shoulder season with a funded plan, and completed the refurbishment from operating cash instead of the overdraft.

Facility renegotiation moved to August, conducted from a position of strength with twelve months of forecast history to show the bank.`,

            keyResults: `Thirteen-week rolling forecast maintained weekly in under an hour
Refurbishment funded from trading cash, overdraft untouched
Bank facility renegotiated in strong season, on better terms
Tax and VAT payments scheduled into the forecast, never a surprise`,

            calloutHeading: "Is your year lumpier than your bank balance likes?",
            calloutText:
                "Seasonal businesses rarely need more profit — they need to see the trough early enough to plan around it.",
            calloutButtonHref: "/contact",
            calloutButtonLabel: "Book a discovery call",

            cards: [
                { title: "Model", description: "Built a thirteen-week rolling forecast per site, driven by weekly takings and known fixed costs." },
                { title: "Consolidate", description: "Standardised the weekly numbers each site reports, so four EPOS systems feed one sheet." },
                { title: "Schedule", description: "Mapped VAT, PAYE, and corporation tax dates into the forecast so liabilities were never a shock." },
                { title: "Plan", description: "Set capital spend and recruitment decisions against the forecast trough rather than the summer peak." },
            ],
            timeline: [
                { phase: "Site data review", duration: "Weeks 1–2" },
                { phase: "Forecast model build", duration: "Weeks 3–5" },
                { phase: "Weekly rhythm embedded", duration: "Weeks 6–10" },
                { phase: "Annual tax & capital plan", duration: "Weeks 11–12" },
            ],
            services: [
                { label: "Cash Flow Forecasting", href: "/services/cash-flow-forecasting" },
                { label: "Tax Planning", href: "/services/tax-planning" },
            ],
        },
    ];

    for (const cs of caseStudiesData) {
        const { industry, serviceAreas, cards, timeline, services, ...scalars } = cs;
        await prisma.caseStudy.create({
            data: {
                ...scalars,
                industryId: industries[industry],
                serviceAreas: connectAreas(serviceAreas),
                authorId: admin.id,
                approachCards: { create: cards.map((c, i) => ({ ...c, order: i + 1 })) },
                timeline: { create: timeline.map((t, i) => ({ ...t, order: i + 1 })) },
                relatedServices: { create: services.map((s, i) => ({ ...s, order: i + 1 })) },
            },
        });
    }
    console.log(`✔ ${caseStudiesData.length} case studies`);

    console.log("\nSeed complete. Log in at /login with the admin credentials above.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());