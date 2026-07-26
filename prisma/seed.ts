
// ============================================================================
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

// ── Config ──────────────────────────────────────────────────────────
const DEV_ADMIN_EMAIL = "admin@example.com";
const DEV_ADMIN_PASSWORD = "change-me-locally-123";

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

// Reserved example domains — these can never reach a real inbox.
const SUBSCRIBERS = [
    "hannah.wright@example.co.uk",
    "d.okafor@example.com",
    "priya.raman@example.co.uk",
    "tom.fletcher@example.com",
    "s.alkhalil@example.co.uk",
    "marta.nowak@example.com",
    "james.mcgregor@example.co.uk",
    "aisha.begum@example.com",
    "l.dubois@example.co.uk",
    "chris.hollis@example.com",
    "n.pereira@example.co.uk",
    "rachel.stone@example.com",
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
    // Uses ADMIN_EMAIL / ADMIN_PASSWORD when provided (production, or any
    // time you want a real login); otherwise falls back to dev credentials.
    const adminEmail = (process.env.ADMIN_EMAIL ?? DEV_ADMIN_EMAIL).toLowerCase().trim();
    const adminPassword = process.env.ADMIN_PASSWORD ?? DEV_ADMIN_PASSWORD;
    const usingFallback = !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD;

    if (!usingFallback && adminPassword.length < 12) {
        console.error("✖ ADMIN_PASSWORD must be at least 12 characters.");
        process.exit(1);
    }

    const admin = await prisma.user.create({
        data: {
            name: process.env.ADMIN_NAME?.trim() || "Admin",
            email: adminEmail,
            password: await hash(adminPassword, 12),
            role: "ADMIN",
        },
    });

    if (usingFallback) {
        console.log(`✔ Admin user: ${admin.email} / ${DEV_ADMIN_PASSWORD}`);
        console.log("  ⚠ Dev credentials — set ADMIN_EMAIL and ADMIN_PASSWORD for anything public.");
    } else {
        console.log(`✔ Admin user: ${admin.email} (password from ADMIN_PASSWORD)`);
    }


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
            title: "The complete first-time renter's checklist",
            accent: "checklist",
            category: "Renting",
            date: "2026-07-18",
            image: "/images/posts/first-time-renter.jpg",
            isFeatured: true,
            isSidebar: false,
            excerpt:
                "From viewing to move-in day: the documents, questions, and small print every first-time tenant should have covered before signing.",
            content: `Renting your first home is equal parts exciting and confusing. Between referencing checks, deposits, and a tenancy agreement full of unfamiliar terms, it's easy to say yes to things you don't fully understand.

Start with the viewing: check water pressure, test every window, ask about council tax banding and average utility bills, and look for damp in corners and behind furniture. A ten-minute inspection now saves months of complaints later.

Before signing, confirm the deposit will be protected in a government-approved scheme, get the inventory in writing with photos, and read the break clause twice. If anything is promised verbally — repairs, redecoration, included appliances — get it added to the agreement before you sign, not after.`,
        },
        {
            title: "How much rent can you actually afford",
            accent: "actually afford",
            category: "Renting",
            date: "2026-07-12",
            image: "/images/posts/rent-affordability.jpg",
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
            image: "/images/posts/deposit-rights.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Where your deposit must be held, what can legally be deducted, and how to dispute a deduction that doesn't add up.",
            content: `In most jurisdictions, a residential deposit can't simply sit in your landlord's bank account. It must be protected in an approved scheme within a set window, and you must be told which one.

Deductions at the end of a tenancy have to reflect actual loss: unpaid rent, damage beyond fair wear and tear, or missing items from the inventory. Faded paint and worn carpet after three years of normal living are not damage — they're depreciation.

If you disagree with a deduction, don't accept a partial refund as final. Every protection scheme includes a free dispute resolution service, and the burden of evidence sits with the landlord, which is exactly why your dated move-in photos matter.`,
        },
        {
            title: "Rent increases: what's fair and what's negotiable",
            accent: "negotiable",
            category: "Renting",
            date: "2026-06-27",
            image: "/images/posts/rent-increase.jpg",
            isFeatured: false,
            isSidebar: true,
            excerpt:
                "A rise isn't automatically enforceable just because it arrived in writing. How increases work, and how to push back well.",
            content: `A rent increase has to follow the route your tenancy allows: a renewal, a rent review clause, or the formal statutory notice process. An email announcing a new figure mid-term, on its own, often isn't enforceable.

Whether an increase is fair is a market question. Pull comparable listings for your street and property type. If similar homes rent for less, that's your negotiating evidence — landlords with good tenants rarely want a void period over a modest difference.

Counter-offering is normal and expected. A reasonable response acknowledges the market, proposes a smaller step, and reminds the landlord what they keep: on-time payments, a cared-for property, and no re-letting fees.`,
        },
        {
            title: "Joint tenancies explained for flatmates",
            accent: "for flatmates",
            category: "Renting",
            date: "2026-06-18",
            image: "/images/posts/joint-tenancy.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "One agreement, several names, shared liability. What joint and several liability really means when a flatmate leaves early.",
            content: `Most flatshares sit on a single joint tenancy, and the phrase that matters in it is "joint and several liability". It means each tenant is responsible for all of the rent — not just their room's share.

If one flatmate leaves early or stops paying, the landlord can pursue the remaining tenants for the full amount. The departing tenant usually stays liable too until the tenancy is formally varied or replaced.

Before signing with others, agree the exit rules among yourselves in writing: notice to each other, how a replacement is found and approved, and how the deposit is split. A one-page flatmate agreement prevents most of the disputes we see.`,
        },
        {
            title: "A landlord's guide to tenant referencing",
            accent: "referencing",
            category: "Landlords",
            date: "2026-07-15",
            image: "/images/posts/tenant-referencing.jpg",
            isFeatured: false,
            isSidebar: true,
            excerpt:
                "Good referencing is the cheapest insurance a landlord can buy. What to check, what you can't ask, and the red flags that matter.",
            content: `Almost every serious arrears case we've handled traces back to the same origin: referencing that was rushed or skipped because the applicant "seemed fine".

A proper check covers identity, right to rent where required, credit history, income verification against the affordability ratio, and a previous landlord reference — ideally the one before the current landlord, who has no incentive to offload a difficult tenant.

Stay inside the law while you do it: questions about protected characteristics, or blanket bans on benefits recipients, expose you to discrimination claims. Assess the individual application on affordability and history, and document how you decided.`,
        },
        {
            title: "The maintenance responsibilities every landlord carries",
            accent: "responsibilities",
            category: "Landlords",
            date: "2026-07-08",
            image: "/images/posts/landlord-maintenance.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Structure, heating, water, gas and electrical safety: the repairs that are always yours, whatever the tenancy says.",
            content: `Certain obligations can't be contracted away. The structure and exterior, heating and hot water systems, sanitation, and gas and electrical safety sit with the landlord in nearly every residential letting, regardless of what the agreement says.

The operational side matters as much as the legal side: respond to repair reports quickly, use qualified contractors for gas and electrics, and keep the certificates — annual gas safety, periodic electrical inspection, and working alarms on every floor.

A repairs log is your best friend in a dispute. Date the report, the response, the contractor visit, and the fix. Deposit adjudicators and tribunals reward landlords who can show a paper trail.`,
        },
        {
            title: "Void periods: the silent profit killer",
            accent: "profit killer",
            category: "Landlords",
            date: "2026-06-30",
            image: "/images/posts/void-periods.jpg",
            isFeatured: true,
            isSidebar: false,
            excerpt:
                "One empty month wipes out more return than most rent negotiations ever will. How to keep the gap between tenancies near zero.",
            content: `Landlords negotiate hard over a small rent difference and then lose an entire month to an avoidable void. One vacant month on a typical tenancy costs more than most rent concessions would over a whole year.

The fix is process. Start marketing the moment notice is served, not the day keys come back. Pre-book the clean, the inventory, and any touch-up work for the changeover week so the property is view-ready immediately.

Retention beats re-letting. A responsive landlord who deals with repairs and offers sensible renewal terms keeps tenants for years — and every renewal is a void that never happened, a fee never paid, and a reference check never needed.`,
        },
        {
            title: "Furnished or unfurnished: which lets faster",
            accent: "lets faster",
            category: "Landlords",
            date: "2026-06-21",
            image: "/images/posts/furnished-unfurnished.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "It depends on who your property attracts. Matching the furnishing decision to your tenant profile instead of your instincts.",
            content: `There's no universal answer — there's a right answer for your specific property. City-centre one-beds aimed at young professionals and students typically let faster furnished; family houses in the suburbs usually let faster unfurnished, because families arrive with a home's worth of belongings.

Furnished commands a modest rent premium but adds cost and liability: furniture must meet fire safety standards, appears on the inventory, and becomes your problem when it wears out.

Look at your last three tenancies. Who actually rented from you, and what did they ask for at viewings? Your letting history is better market research than any national statistic.`,
        },
        {
            title: "Rental yield: how to calculate it properly",
            accent: "properly",
            category: "Property Investment",
            date: "2026-07-16",
            image: "/images/posts/rental-yield.jpg",
            isFeatured: false,
            isSidebar: true,
            excerpt:
                "Gross yield sells properties; net yield pays your bills. The full calculation, including the costs listings never mention.",
            content: `Gross yield — annual rent divided by purchase price — is the number in every listing because it's the flattering one. It ignores everything that actually determines whether an investment works.

Net yield subtracts the real running costs: management fees, insurance, maintenance allowance, compliance certificates, ground rent and service charges on leaseholds, and a realistic void assumption. On many properties, that turns a headline 7% into a real 4.5%.

Run the net calculation before viewing, not after falling for the kitchen. And stress-test it: if the mortgage rate rose two points and the property sat empty for six weeks, would the numbers survive? If not, it's a speculation, not an investment.`,
        },
        {
            title: "Buy-to-let in 2026: is it still worth it",
            accent: "still worth it",
            category: "Property Investment",
            date: "2026-07-02",
            image: "/images/posts/buy-to-let-2026.jpg",
            isFeatured: true,
            isSidebar: true,
            excerpt:
                "Higher rates, tighter regulation, thinner margins — and still, for the right property and structure, a case that stacks up.",
            content: `The easy era of buy-to-let is over: mortgage interest relief has been restructured, compliance standards keep rising, and financing costs are far above the levels many landlords built their sums on.

What remains is a professional's market. Investors who buy the right property type in the right location, structure ownership tax-efficiently, and run their lettings like a business are still generating dependable income and long-term growth.

The decision is no longer "property or not" — it's whether you'll treat it as a managed enterprise. If you want passive, look elsewhere. If you'll do the work or pay professionals who will, the case can still be made to stack up.`,
        },
        {
            title: "Reading a rental market before you invest",
            accent: "before you invest",
            category: "Property Investment",
            date: "2026-06-24",
            image: "/images/posts/rental-market-research.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Days-on-market, tenant demographics, planned infrastructure: the local signals that predict rental demand better than price charts.",
            content: `National house price headlines tell you almost nothing about whether a specific street will rent well. Rental demand is stubbornly local, and the signals that matter are all visible if you know where to look.

Watch days-on-market for comparable rentals: under two weeks signals genuine demand, over six signals oversupply. Check the tenant demographics the area serves — students need transport links, families need school catchments, professionals need commute times.

Then look forward: planned transport improvements, employer relocations, university expansion, and regeneration schemes all shift demand years before prices react. The best investments are bought where demand is heading, not where it already peaked.`,
        },
        {
            title: "The hidden costs of buying your first home",
            accent: "hidden costs",
            category: "Buying & Selling",
            date: "2026-07-10",
            image: "/images/posts/hidden-costs.jpg",
            isFeatured: false,
            isSidebar: true,
            excerpt:
                "The deposit is just the entry fee. Surveys, legal work, taxes, moving, and the first-year repair fund nobody budgets for.",
            content: `First-time buyers fixate on the deposit because it's the biggest single number — and then get blindsided by the long tail of costs that follow it.

Budget beyond the deposit for: property taxes on completion, legal fees and searches, a proper survey (not just the lender's valuation), mortgage arrangement fees, buildings insurance from exchange, and the move itself.

Then hold back a first-year fund. Every new home reveals its quirks in the first twelve months — the boiler service, the fence panel, the mystery leak. Owners we advise to keep a repair buffer settle in calmly; those who spend to the last penny live their first year on edge.`,
        },
        {
            title: "How to price your home to sell",
            accent: "to sell",
            category: "Buying & Selling",
            date: "2026-06-15",
            image: "/images/posts/pricing-to-sell.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Overpricing costs more than it protects. Why the first two weeks of a listing decide everything, and how to use them.",
            content: `The most expensive pricing mistake is the flattering one. An overpriced home misses its moment: the first two weeks, when portal alerts fire to every matched buyer and viewing interest peaks.

Miss that window and the listing goes stale. Buyers watch the days-on-market counter, assume something is wrong, and wait for the reduction — which usually ends below where an honest initial price would have landed.

Price against sold comparables, not asking prices; asking prices are opinions, sold prices are evidence. If three agents suggest wildly different figures, ask each for the sold data behind theirs. The one with evidence is the one to trust.`,
        },
        {
            title: "Leasehold vs freehold: what buyers must check",
            accent: "must check",
            category: "Buying & Selling",
            date: "2026-06-08",
            image: "/images/posts/leasehold-freehold.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Lease length, ground rent, service charges, and consent clauses — the four leasehold questions to answer before you offer.",
            content: `Freehold means you own the building and the land beneath it. Leasehold means you own the right to occupy for the remaining lease term — and the difference shows up in cost, control, and resale value.

Four checks before offering on a leasehold: the remaining term (short leases hit mortgageability and value hard), the ground rent and whether it escalates, the service charge history and any planned major works, and consent clauses covering alterations, pets, or subletting.

None of these are necessarily deal-breakers, but every one belongs in your negotiation. A short lease or a looming major-works bill is a price conversation — have it before exchange, because afterward it's simply your bill.`,
        },
        {
            title: "Selling a tenanted property without the drama",
            accent: "without the drama",
            category: "Buying & Selling",
            date: "2026-05-28",
            image: "/images/posts/selling-tenanted.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Sell with the tenant in place or with vacant possession? The trade-offs, the notice rules, and keeping everyone cooperative.",
            content: `A tenanted property can be sold two ways: with the tenant in place to another landlord, or with vacant possession to the open market. Each has a distinct buyer pool and a distinct price.

Selling with a good tenant in situ suits investors — income from day one, no void, and the tenancy simply transfers. Vacant possession usually achieves more from owner-occupiers but requires valid notice served correctly and time built into the plan.

Whichever route, the tenant's cooperation shapes everything: viewing access, presentation, and timing. Be transparent early, respect notice rules for visits, and consider goodwill gestures. A tenant treated well shows the property well.`,
        },
        {
            title: "Energy efficiency rules every landlord should know",
            accent: "should know",
            category: "Landlords",
            date: "2026-05-20",
            image: "/images/posts/energy-efficiency.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Minimum standards are rising, and the cheapest time to upgrade is before the deadline. What counts, what it costs, what it returns.",
            content: `Minimum energy standards for rental property keep tightening, and the direction of travel is unmistakable: less efficient homes are being priced and regulated out of the rental market.

The commercial case has caught up with the legal one. Efficient homes let faster, tenants stay longer when bills are manageable, and upgrade costs are lowest when planned — not when forced by an enforcement deadline or a failed re-let.

Sequence the work sensibly: insulation and draught-proofing first, heating controls second, then glazing and system upgrades. Get a current energy assessment, cost the recommendations, and schedule them across tenancy changeovers to avoid disruption.`,
        },
        {
            title: "What rising interest rates mean for renters",
            accent: "for renters",
            category: "Renting",
            date: "2026-05-12",
            image: "/images/posts/rates-renters.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "You don't have a mortgage, but you feel the rate cycle anyway. How landlord costs travel into rents, and what tenants can do.",
            content: `Interest rates look like a homeowner's problem, but the rental market transmits them quickly. Landlords refinancing at higher rates face bigger payments, and some of that pressure arrives in renewal letters.

The effect isn't uniform. Landlords with small mortgages or none absorb rate rises easily; heavily leveraged landlords can't. That variation is why researching your specific renewal against local comparables still works even in a rising market.

For tenants, the practical playbook: know your local comparables before any renewal conversation, offer longer terms in exchange for rent certainty, and if your landlord sells, remember that a valid tenancy generally survives the sale.`,
        },
        {
            title: "Building a property portfolio from your first flat",
            accent: "first flat",
            category: "Property Investment",
            date: "2026-05-05",
            image: "/images/posts/first-portfolio.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Portfolios are built one refinance at a time. The equity cycle, the leverage discipline, and the boring habits that compound.",
            content: `Most portfolios don't start with a fortune. They start with one property, patience, and the discipline to recycle equity: buy well, add value, refinance, and use the released capital as the next deposit.

Leverage is the engine and the risk. Each mortgage multiplies both your growth and your exposure, so the discipline is holding cash reserves per property and stress-testing the whole portfolio, not just the newest purchase, against higher rates and longer voids.

The habits that compound are boring: accurate records from day one, tax planning before purchases rather than after, and treating every property's performance review as seriously as a business would. Portfolios fail on administration far more often than on market timing.`,
        },
        {
            title: "Red flags to spot at a property viewing",
            accent: "red flags",
            category: "Buying & Selling",
            date: "2026-04-26",
            image: "/images/posts/viewing-red-flags.jpg",
            isFeatured: false,
            isSidebar: false,
            excerpt:
                "Fresh paint on one wall, a dehumidifier in the corner, sloping floors: the tells that deserve a second look before you offer.",
            content: `Sellers present; buyers investigate. A good viewing is a polite inspection, and the tells are usually visible if you slow down enough to notice them.

Watch for: fresh paint on a single wall (often covering damp), a dehumidifier quietly running, doors that don't close cleanly (movement), sloping floors, new sealant in odd places, and any room you're subtly steered past. Outside, check gutters, roofline, and where the ground meets the walls.

None of these kill a purchase on their own — they direct your survey. Tell your surveyor exactly what you noticed and ask them to focus there. The few hundred spent on a thorough survey is the cheapest renegotiation tool you'll ever buy.`,
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
            heroImage: "/images/case-studies/property-group.jpg",
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
            heroImage: "/images/case-studies/architecture-practice.jpg",
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
            heroImage: "/images/case-studies/hospitality-group.jpg",
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

    // ════════════════════════════════════════════════════════════════
    // 6. Newsletter subscribers
    // ════════════════════════════════════════════════════════════════
    await prisma.newsletterSubscriber.createMany({
        data: SUBSCRIBERS.map((email, i) => ({
            email: email.toLowerCase(),
            // Staggered over ~6 weeks so "newest first" ordering is visible.
            createdAt: new Date(Date.now() - i * 3.5 * 24 * 60 * 60 * 1000),
        })),
        skipDuplicates: true,
    });
    console.log(`✔ ${SUBSCRIBERS.length} newsletter subscribers`);

    console.log("\nSeed complete. Log in at /login with the admin credentials above.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());