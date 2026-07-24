import { prisma } from "@/lib/prisma";

async function main() {
    const slug = "regional-property-group-finance-transformation";

    // Lookup tables (idempotent)
    const industry = await prisma.industry.upsert({
        where: { label: "Property & Real Estate" },
        update: {},
        create: { label: "Property & Real Estate" },
    });
    const areaLabels = ["Management Accounts", "Systems Migration", "Advisory"];
    const areas = [];
    for (const label of areaLabels) {
        areas.push(
            await prisma.serviceArea.upsert({
                where: { label }, update: {}, create: { label },
            })
        );
    }

    // Children cascade-delete with the parent, so recreate is clean.
    await prisma.caseStudy.deleteMany({ where: { slug } });

    await prisma.caseStudy.create({
        data: {
            slug,
            heroTitle: "Finance transformation for a regional property group",
            heroSubtitle:
                "How a 120-unit portfolio moved from spreadsheet chaos to monthly management accounts in ninety days.",
            heroImage: "/images/case-studies/property-group.jpg",
            industryId: industry.id,
            serviceAreas: { connect: areas.map((a) => ({ id: a.id })) },

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

            approachCards: {
                create: [
                    { order: 1, title: "Discover", description: "Mapped every entity, bank account, and data source; graded historic data quality to decide what to migrate versus archive." },
                    { order: 2, title: "Design", description: "Built a property-centric chart of accounts and reporting pack agreed with the directors before any data moved." },
                    { order: 3, title: "Migrate", description: "Moved entities in waves, reconciling each to bank and rent roll before switching it live." },
                    { order: 4, title: "Embed", description: "Trained the in-house team on the monthly close checklist and handed over a documented process." },
                ],
            },
            timeline: {
                create: [
                    { order: 1, phase: "Discovery & data audit", duration: "Weeks 1–2" },
                    { order: 2, phase: "Chart of accounts & reporting design", duration: "Weeks 3–4" },
                    { order: 3, phase: "Entity migration (waves 1–3)", duration: "Weeks 5–10" },
                    { order: 4, phase: "First full monthly close & handover", duration: "Weeks 11–13" },
                ],
            },
            relatedServices: {
                create: [
                    { order: 1, label: "Management Accounts", href: "/services/management-accounts" },
                    { order: 2, label: "Systems Advisory", href: "/services/systems-advisory" },
                ],
            },
        },
    });

    console.log(`✔ Case study seeded: /case-studies/${slug}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());