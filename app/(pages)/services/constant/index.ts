
// UK Accounting & Tax
// Hero
export interface HeroData {
    title: string;
    description: string;
    width:string;
    image: string;
}

export const heroAccount: HeroData = {
    title: "UK Accounting & Tax That Goes Beyond the Filing Deadline",
    description: "Structured accounting, defensible tax positions, and financial discipline — for owner-managed businesses, property groups, and construction enterprises that need more than routine compliance.",
    width:"max-w-6xl",
    image: "/assets/bg-img-service1.png"
}
// Stats
export interface StatsData {
    id: string;
    value: string;
    label: string;
    size: string;
    icon?: string;
}

export const statusAccount: StatsData[] = [
    { id: "s-1", size: "md:mr-25", value: "UK & UAE", icon: "", label: "Cross-Border Coverage" },
    { id: "s-3", size: "md:mr-25", value: "100", icon: "%", label: "Partner-Led Engagements" },
    { id: "s-2", size: "md:mr-25", value: "15", icon: "+", label: "Years of Sector Experience" },
];

// About Service
export interface ServiceArea {
    id: string;
    title: string;
    description: string;
}

export interface AboutServiceData {
    introParagraph: string;
    listIntro: string;
    serviceAreas: ServiceArea[];
    closingParagraph: string;
}

export const UKAccountingAbout: AboutServiceData = {
    introParagraph:
        `For growing businesses, accounting begins as compliance and gradually becomes complexity. Multiple entities, intercompany balances, property structures, construction contracts, VAT exposure, and corporation tax considerations accumulate quietly — and without structure, reporting becomes reactive while risk builds unnoticed.\n\nNexus provides UK accounting and tax support built around control, clarity, and defensible technical positioning. We work with owner-managed businesses, property groups, construction enterprises, and growth-stage companies that require more than routine year-end processing. Our objective is not simply to file accounts and returns — it is to strengthen the financial discipline underneath them.`,
    listIntro: "We support end-to-end delivery across the following core service areas:",
    serviceAreas: [
        { id: "sa-1", title: "Statutory Accounts Preparation", description: "Companies House-compliant accounts prepared under FRS 102 or FRS 105, with management commentary and supporting working papers." },
        { id: "sa-2", title: "Corporation Tax", description: "CT600 preparation, capital allowances claims, R&D relief, group relief, and HMRC correspondence." },
        { id: "sa-3", title: "VAT Compliance & Advisory", description: "Quarterly VAT returns, partial exemption calculations, option to tax advice, and HMRC VAT enquiry support." },
        { id: "sa-4", title: "Payroll & PAYE", description: "RTI submissions, P60s, P11Ds, employee benefits reporting, and PAYE settlement agreements." },
        { id: "sa-5", title: "Bookkeeping & Management Accounts", description: "Monthly or quarterly management accounts, cashflow statements, and board-ready reporting packs." },
    ],
    closingParagraph:
        "Our engagements are partner-led at every stage. We begin with a structured diagnostic review — assessing where reporting is failing, where tax exposure exists, and where financial discipline needs to be embedded. From there, scope is defined clearly, deliverables are documented, and the relationship is built around long-term financial integrity rather than short-term filing efficiency.",
};
// CTAaccount

export interface CtaData {
    heading: string;
    href: string;
    image: string;
    width: string;
    arrowPosition:string;
}

export const AccountingCta: CtaData = {
    heading:
        "Your reporting should work for your business, not against it. Let's build that structure together",
    width:"max-w-3xl",
    arrowPosition:"bottom-14 left-[110] md:bottom-16 md:left-[710]",
    href: "/contact",
    image: "/assets/bg-img-service1.png",
};
// Result

export interface ResultsData {
    label: string;
    accent: string;
    results: Array<{
        id: string;
        slug: string;
        category: string;
        title: string;
        excerpt: string;
        image: string;
        type: string;
        date: string;
    }>
}

export const AccountingResult: ResultsData = {
    label: "UK Accounting & Tax",
    accent: "Client Results",
    results: [
        {
            id: "r-1",
            slug: "multi-spv-property-group-year-end",
            category: "Property & SPV",
            title: "Multi-SPV Property Group Eliminates Year-End Delays and Strengthens Lender Confidence",
            excerpt:
                "A property group operating 14 SPVs had inconsistent accounting treatment, intercompany mismatches, and repeated year-end delays. We standardized policies, built reconciliation discipline, and reduced completion time materially.",
            image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-2",
            slug: "multi-entity-group-loss-relief",
            category: "Corporation Tax",
            title: "Multi-Entity Group Reduces Tax Payable Through Structured Loss Relief Alignment",
            excerpt:
                "An entity held unutilised losses while a sister company was profitable. We reviewed the group structure, calculated surrenderable losses, and aligned reporting — maintaining full documentation throughout.",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-3",
            slug: "property-group-partial-exemption-vat",
            category: "VAT",
            title: "Property Group Corrects Partial Exemption Miscalculation Before HMRC Scrutiny",
            excerpt:
                "Unclear VAT treatment of council supply, 28-day rule application, and partial exemption recovery created pricing and compliance uncertainty. We reviewed contractual structures and modelled VAT impact scenarios.",
            image:
                "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-4",
            slug: "contractor-margin-visibility-turnover",
            category: "Construction",
            title: "Contractor Restores Margin Visibility After Turnover Growth Masks Profit Decline",
            excerpt:
                "Increasing revenue masked declining net margins due to inconsistent overhead allocation and informal project reporting. We introduced project-level P&L tracking and monthly cost-to-complete reviews.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-5",
            slug: "contractor-subcontractor-cis-verification",
            category: "CIS Compliance",
            title: "Contractor Avoids Penalty Exposure After Subcontractor Verification Failures Identified",
            excerpt:
                "Multiple subcontractors had not been correctly verified, risking higher deduction rates and enforcement action. We reviewed status, corrected the verification process, and structured a documentation framework.",
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-6",
            slug: "founder-sme-monthly-reporting-discipline",
            category: "Statutory Accounting",
            title: "Founder-Led SME Moves From Reactive Year-End Scramble to Monthly Reporting Discipline",
            excerpt:
                "A growing SME rebuilt from scratch at year-end every cycle. We introduced monthly close discipline, reconciled balance sheets, and delivered audit-ready working papers as standard.",
            image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
    ]
};

// Property Accounting & Tax

export const heroProperty: HeroData = {
    title: "Specialist Accounting & Tax for Property Businesses That Operate at Scale",
    description: "From portfolio landlords and SPV structures to temporary accommodation operators and property developers — structured financial and tax support for the full complexity of UK property ownership.",
    width:"max-w-7xl",
    image: "/assets/bg-img-service2.png"
}
export const statusProperty: StatsData[] = [
    { id: "s-1", size: "md:mr-15", value: "SPV & Portfolio", icon: "", label: "Specialist Structuring Experience" },
    { id: "s-3", size: "md:mr-15", value: "100", icon: "%", label: "Partner-Led Engagements" },
    { id: "s-2", size: "md:mr-15", value: "15", icon: "+", label: "Years of Sector Experience" },
];

export const PropertyAbout: AboutServiceData = {
    introParagraph: `Property businesses operate within a uniquely complex financial and tax environment. Rental portfolios, SPVs, refurbishment programmes, development cycles, VAT exposure, SDLT implications, and capital allowances all intersect in ways that generic accounting rarely addresses adequately. Without specialist oversight, these complexities accumulate quietly — and surface at the worst possible moment: during lender review, HMRC enquiry, or transaction preparation.\n\nNexus provides structured property-focused accounting and tax support that is technical, commercially aware, and defensible. We work with portfolio landlords operating through multiple entities, temporary accommodation providers, council-linked operators, property developers, and mixed-use businesses navigating partial exemption. Our objective is not simply to file returns — it is to ensure your property structure is correctly reflected, your VAT position is documented, and your reporting holds up under scrutiny.`,
    listIntro: "We support end-to-end delivery across the following core service areas:",
    serviceAreas: [
        { id: "sa-1", title: "Rental Portfolios & SPV Accounting", description: "Standardized accounting policies across multiple entities, monthly reconciliation discipline, intercompany alignment, dividend documentation clarity, and lender-ready financial reporting built 	into the monthly cycle." },
        { id: "sa-2", title: "Property VAT & Partial Exemption", description: "Partial exemption calculations, VAT option-to-tax assessment, input 	tax recovery modelling, and scenario planning for development-to-rental transitions — documented to withstand HMRC review." },
        { id: "sa-3", title: "Temporary	Accommodation & Council Leasing", description: "Specialist VAT analysis for council supply structures, 28-day rule 	application, service-level agreement classification, and pricing 	impact modelling for operators working within local authority frameworks." },
        { id: "sa-4", title: "Property Development & Refurbishment Accounting", description: "Development cost capitalization frameworks, WIP treatment, revenue 	recognition timing, stage-of-completion reviews, and capital vs revenue classification — ensuring balance sheet accuracy and tax defensibility." },
        { id: "sa-5", title: "Resident 	& Non-Resident Landlord Structures", description: "Cross-border property ownership compliance, UK withholding 	considerations, non-resident landlord registration, and reporting 	alignment for overseas investors operating UK portfolios." },
        { id: "sa-6", title: "Capital Allowances & SDLT Support", description: "Capital allowances identification and review, coordination with	specialist surveyors where required, SDLT structuring alignment, and	transaction-ready documentation prepared to professional standards." },
    ],
    closingParagraph:
        "Our engagements begin with a structured review of your property portfolio, entity arrangements, and current reporting discipline. We identify where VAT exposure exists, where capitalization decisions require stronger documentation, and where intercompany positions need to be formalized. From there, we implement structured reporting and maintain ongoing oversight aligned to your portfolio scale and complexity.",
};

export const PropertyCta: CtaData = {
    heading:
        "Structure that protects. Not structure that costs. Let's review yours.",
    width: "max-w-xl",
    arrowPosition: "bottom-14 left-[110] md:bottom-16 md:left-[510]",
    href: "/contact",
    image: "/assets/bg-img-service1.png",
};

export const PropertyResult: ResultsData = {
    label: "Property Accounting & Tax",
    accent: "Client Results",
    results: [
        {
            id: "r-1",
            slug: "multi-spv-property-group-year-end",
            category: "SPV Portfolio",
            title: "Property Group With 14 SPVs Achieves Consistent Reporting and Stronger Lender Position",
            excerpt:
                "Inconsistent accounting treatment and intercompany mismatches created year-end delays and lender friction. We standardised policies, built monthly reconciliation discipline, and reduced year-end completion time materially.",
            image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-2",
            slug: "multi-entity-group-loss-relief",
            category: "Corporation Tax",
            title: "Multi-Entity Group Reduces Tax Payable Through Structured Loss Relief Alignment",
            excerpt:
                "An entity held unutilised losses while a sister company was profitable. We reviewed the group structure, calculated surrenderable losses, and aligned reporting — maintaining full documentation throughout.",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-3",
            slug: "property-group-partial-exemption-vat",
            category: "VAT",
            title: "Property Group Corrects Partial Exemption Miscalculation Before HMRC Scrutiny",
            excerpt:
                "Unclear VAT treatment of council supply, 28-day rule application, and partial exemption recovery created pricing and compliance uncertainty. We reviewed contractual structures and modelled VAT impact scenarios.",
            image:
                "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-4",
            slug: "contractor-margin-visibility-turnover",
            category: "Construction",
            title: "Contractor Restores Margin Visibility After Turnover Growth Masks Profit Decline",
            excerpt:
                "Increasing revenue masked declining net margins due to inconsistent overhead allocation and informal project reporting. We introduced project-level P&L tracking and monthly cost-to-complete reviews.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-5",
            slug: "contractor-subcontractor-cis-verification",
            category: "CIS Compliance",
            title: "Contractor Avoids Penalty Exposure After Subcontractor Verification Failures Identified",
            excerpt:
                "Multiple subcontractors had not been correctly verified, risking higher deduction rates and enforcement action. We reviewed status, corrected the verification process, and structured a documentation framework.",
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-6",
            slug: "founder-sme-monthly-reporting-discipline",
            category: "Statutory Accounting",
            title: "Founder-Led SME Moves From Reactive Year-End Scramble to Monthly Reporting Discipline",
            excerpt:
                "A growing SME rebuilt from scratch at year-end every cycle. We introduced monthly close discipline, reconciled balance sheets, and delivered audit-ready working papers as standard.",
            image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
    ]
};

// Advisory Services

export const heroAdvisory: HeroData = {
    title: "Financial Clarity for Leaders Who Need More Than a Compliance Report",
    description: "CFO-level financial interpretation, governance design, cashflow planning, and strategic structuring — for founders, directors, and management teams who require disciplined financial oversight without building a full in-house finance function.",
    width:"max-w-7xl",
    image: "/assets/bg-img-service3.png"
}
export const statusAdvisory: StatsData[] = [
    { id: "s-1", size: "md:mr-15", value: "CFO-Level", icon: "", label: "Advisory Without the Overhead" },
    { id: "s-3", size: "md:mr-15", value: "100", icon: "%", label: "Partner-Led Engagements" },
    { id: "s-2", size: "md:mr-15", value: "15", icon: "+", label: "Years of Sector Experience" },
];

export const AdvisoryAbout: AboutServiceData = {
    introParagraph:`Compliance reports what happened. Advisory explains what it means — and what to do next. As businesses grow, financial complexity increases faster than reporting maturity. Revenue expands, cost structures diversify, teams scale, and decision-making accelerates. Yet financial visibility often remains fragmented — management reports that don’t support real decisions, cashflow forecasts prepared informally, and governance processes that haven’t evolved with the business.
\nNexus provides structured, partner-led advisory support to founders, directors, and management teams who require disciplined financial interpretation without the cost of a full-time CFO. Our role is not to produce more reports. Our role is to improve financial judgement — by interpreting what the numbers mean, identifying structural risk before it materialises, and helping leadership make decisions with clarity and confidence.`,
listIntro: "We support end-to-end delivery across the following core service areas:",
    serviceAreas: [
        { id: "sa-1", title: "CFO-Style Strategic Financial Advisory", description: "Financial performance analysis, margin and profitability review by 	segment or project, cost structure rationalization, KPI framework 	design, variance interpretation, board reporting, and pricing and 	cost modelling — bridging the gap between accounting output and strategic decision-making." },
        { id: "sa-2", title: "Cashflow & Financial Planning Advisory", description: "Rolling 3, 6, and 12-month cashflow forecasts, sensitivity modelling 	under stress scenarios, working capital optimization reviews, 	retention and milestone modelling for construction and property 	businesses, debt covenant readiness, and funding readiness support — 	conservative, assumption-driven, and fully documented." },
        { id: "sa-3", title: "Governance & Financial Control Advisory", description: "Financial controls review, segregation of duties mapping, 	authorization matrix design, month-end close discipline frameworks, 	policy and procedure documentation, and reporting governance 	structure — embedding financial repeatability and reducing 	operational risk before scale increases." },
        { id: "sa-4", title: "Strategic Structuring & Growth Advisory", description: "Group structuring advisory across UK and UAE, entity	rationalization, cross-border expansion alignment, financial 	feasibility modelling, and risk exposure identification — ensuring 	structural decisions align with long-term financial sustainability 	rather than short-term convenience." },
    ],
    closingParagraph:
        "Our advisory engagements are structured, deliberate, and proportionate. We begin with a diagnostic review of your financial reporting, governance, and risk exposure — before recommending anything. From there, we deliver a clear advisory roadmap, support implementation of agreed changes, and provide ongoing strategic oversight at a cadence matched to your growth stage. We do not pursue complexity for its own sake. We pursue clarity.",
};

export const AdvisoryCta: CtaData = {
    heading:
        "Every decision shapes your business. Make sure it's shaped by the numbers.",
    width: "max-w-2xl",
    arrowPosition: "bottom-14 left-[110] md:bottom-16 md:left-[550]",
    href: "/contact",
    image: "/assets/bg-img-service1.png",
};

export const AdvisoryResult: ResultsData = {
    label: "Advisory Services",
    accent: "Client Results",
    results: [
        {
            id: "r-1",
            slug: "multi-spv-property-group-year-end",
            category: "SPV Portfolio",
            title: "Property Group With 14 SPVs Achieves Consistent Reporting and Stronger Lender Position",
            excerpt:
                "Inconsistent accounting treatment and intercompany mismatches created year-end delays and lender friction. We standardised policies, built monthly reconciliation discipline, and reduced year-end completion time materially.",
            image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-2",
            slug: "multi-entity-group-loss-relief",
            category: "Corporation Tax",
            title: "Multi-Entity Group Reduces Tax Payable Through Structured Loss Relief Alignment",
            excerpt:
                "An entity held unutilised losses while a sister company was profitable. We reviewed the group structure, calculated surrenderable losses, and aligned reporting — maintaining full documentation throughout.",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-3",
            slug: "property-group-partial-exemption-vat",
            category: "VAT",
            title: "Property Group Corrects Partial Exemption Miscalculation Before HMRC Scrutiny",
            excerpt:
                "Unclear VAT treatment of council supply, 28-day rule application, and partial exemption recovery created pricing and compliance uncertainty. We reviewed contractual structures and modelled VAT impact scenarios.",
            image:
                "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-4",
            slug: "contractor-margin-visibility-turnover",
            category: "Construction",
            title: "Contractor Restores Margin Visibility After Turnover Growth Masks Profit Decline",
            excerpt:
                "Increasing revenue masked declining net margins due to inconsistent overhead allocation and informal project reporting. We introduced project-level P&L tracking and monthly cost-to-complete reviews.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-5",
            slug: "contractor-subcontractor-cis-verification",
            category: "CIS Compliance",
            title: "Contractor Avoids Penalty Exposure After Subcontractor Verification Failures Identified",
            excerpt:
                "Multiple subcontractors had not been correctly verified, risking higher deduction rates and enforcement action. We reviewed status, corrected the verification process, and structured a documentation framework.",
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-6",
            slug: "founder-sme-monthly-reporting-discipline",
            category: "Statutory Accounting",
            title: "Founder-Led SME Moves From Reactive Year-End Scramble to Monthly Reporting Discipline",
            excerpt:
                "A growing SME rebuilt from scratch at year-end every cycle. We introduced monthly close discipline, reconciled balance sheets, and delivered audit-ready working papers as standard.",
            image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
    ]
};

// Construction Accounting

export const heroConstruction: HeroData = {
    title: "Financial Control for Construction Businesses Where Margin & Cashflow Are Always at Stake",
    description: "Specialist accounting for contractors, subcontractors, and project-led businesses — covering project cost tracking, CIS compliance, VAT on construction activities, and working capital discipline across the full contract lifecycle.",
    width:"",
    image: "/assets/bg-img-service4.png"
}
export const statusConstruction: StatsData[] = [
    { id: "s-1", size: "md:mr-15", value: "CIS & DRC", icon: "", label: "Compliance Specialist Experience" },
    { id: "s-3", size: "md:mr-15", value: "100", icon: "%", label: "Partner-Led Engagements" },
    { id: "s-2", size: "md:mr-15", value: "15", icon: "+", label: "Years of Sector Experience" },
];

export const ConstructionAbout: AboutServiceData = {
    introParagraph: `Construction and project-based businesses operate in a financially demanding environment. Revenue is milestone-driven, costs fluctuate across phases, margins can be narrow, and working capital pressure is constant. Standard accounting processes are rarely sufficient for contract-led operations — and without disciplined cost tracking, revenue recognition clarity, and structured cashflow planning, profitability can erode long before it becomes visible in statutory accounts.\n
Nexus provides specialist construction accounting and tax support tailored to main contractors, subcontractors, refurbishment-led businesses, and project-based service providers. Our objective is straightforward: to ensure every project remains financially visible, commercially viable, and structurally compliant throughout its lifecycle. We combine accounting precision with practical understanding of how construction businesses actually operate.`,
listIntro: "We support end-to-end delivery across the following core service areas:",
    serviceAreas: [
        { id: "sa-1", title: "Project Cost Reporting & Profitability Analysis", description: " Project-level P&L tracking, cost-to-complete modelling, overhead	allocation frameworks, margin variance reporting, and contract 	performance dashboards — focused on ongoing financial monitoring, 	not retrospective review." },
        { id: "sa-2", title: "Revenue Recognition & WIP Management", description: "Stage-of-completion reporting frameworks, WIP calculation 	methodology, contract asset and liability analysis, revenue deferral 	where required, and documentation of accounting judgements — 	ensuring statutory accounts reflect commercial reality." },
        { id: "sa-3", title: "VAT on Construction Activities", description: "Domestic reverse charge assessment, mixed residential and commercial 	supply treatment, subcontractor invoicing review, reduced-rate 	eligibility, and HMRC correspondence support — reducing avoidable 	VAT risk exposure across all contract structures." },
        { id: "sa-4", title: "CIS Compliance", description: " CIS registration, subcontractor verification processes, monthly 	return preparation, deduction statement alignment, and compliance 	review prior to HMRC enquiry — structured to prevent enforcement 	action before it arises." },
        { id: "sa-5", title: "Budgeting & Working Capital Planning", description: "Rolling cashflow forecasts, retention tracking models, 	milestone-based forecasting, supplier payment scheduling support, 	and scenario modelling — aligning operational planning with financial sustainability." },
        { id: "sa-6", title: "Multi-Currency Accounting", description: "Foreign currency transaction tracking, FX gain/loss monitoring,	multi-currency reporting alignment, and cashflow impact modelling 	for contractors sourcing materials internationally or operating cross-border." },
    ],
    closingParagraph:
        "Construction profitability depends on real-time cost awareness — not year-end reconstruction. Our engagements begin with a financial process review to identify reporting gaps, margin leakage, and compliance exposure. From there, we implement structured project reporting and maintain ongoing oversight scaled to your project size and complexity.",
};

export const ConstructionCta: CtaData = {
    heading:
        "Construction profits fade project by project. Stay ahead before the numbers catch up",
    width: "max-w-2xl",
    arrowPosition: "bottom-14 left-[110] md:bottom-16 md:left-[670]",
    href: "/contact",
    image: "/assets/bg-img-service1.png",
};

export const ConstructionResult: ResultsData = {
    label: "Construction Accounting",
    accent: "Client Results",
    results: [
        {
            id: "r-1",
            slug: "multi-spv-property-group-year-end",
            category: "SPV Portfolio",
            title: "Property Group With 14 SPVs Achieves Consistent Reporting and Stronger Lender Position",
            excerpt:
                "Inconsistent accounting treatment and intercompany mismatches created year-end delays and lender friction. We standardised policies, built monthly reconciliation discipline, and reduced year-end completion time materially.",
            image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-2",
            slug: "multi-entity-group-loss-relief",
            category: "Corporation Tax",
            title: "Multi-Entity Group Reduces Tax Payable Through Structured Loss Relief Alignment",
            excerpt:
                "An entity held unutilised losses while a sister company was profitable. We reviewed the group structure, calculated surrenderable losses, and aligned reporting — maintaining full documentation throughout.",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-3",
            slug: "property-group-partial-exemption-vat",
            category: "VAT",
            title: "Property Group Corrects Partial Exemption Miscalculation Before HMRC Scrutiny",
            excerpt:
                "Unclear VAT treatment of council supply, 28-day rule application, and partial exemption recovery created pricing and compliance uncertainty. We reviewed contractual structures and modelled VAT impact scenarios.",
            image:
                "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-4",
            slug: "contractor-margin-visibility-turnover",
            category: "Construction",
            title: "Contractor Restores Margin Visibility After Turnover Growth Masks Profit Decline",
            excerpt:
                "Increasing revenue masked declining net margins due to inconsistent overhead allocation and informal project reporting. We introduced project-level P&L tracking and monthly cost-to-complete reviews.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-5",
            slug: "contractor-subcontractor-cis-verification",
            category: "CIS Compliance",
            title: "Contractor Avoids Penalty Exposure After Subcontractor Verification Failures Identified",
            excerpt:
                "Multiple subcontractors had not been correctly verified, risking higher deduction rates and enforcement action. We reviewed status, corrected the verification process, and structured a documentation framework.",
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-6",
            slug: "founder-sme-monthly-reporting-discipline",
            category: "Statutory Accounting",
            title: "Founder-Led SME Moves From Reactive Year-End Scramble to Monthly Reporting Discipline",
            excerpt:
                "A growing SME rebuilt from scratch at year-end every cycle. We introduced monthly close discipline, reconciled balance sheets, and delivered audit-ready working papers as standard.",
            image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
    ]
};

// Technology & Solutions

export const heroTech: HeroData = {
    title: "Technology Should Strengthen Financial Control. Not Complicate It",
    description: "Governance-led oversight for ERP implementation, accounting platform migration, reporting automation, and bespoke financial tool design — ensuring every system decision is driven by financial requirements, not vendor preference.",
    width:"max-w-7xl",
    image: "/assets/bg-img-service5.png"
}
export const statusTech: StatsData[] = [
    { id: "s-1", size: "md:mr-15", value: "Finance-First", icon: "", label: "System Design & Governance" },
    { id: "s-3", size: "md:mr-15", value: "100", icon: "%", label: "Partner-Led Engagements" },
    { id: "s-2", size: "md:mr-15", value: "15", icon: "+", label: "Years of Sector Experience" },
];

export const TechAbout: AboutServiceData = {
    introParagraph:` Technology promises efficiency. Poorly implemented systems create complexity. As businesses grow, accounting software, ERP platforms, reporting dashboards, and workflow automation become essential — but system implementation without financial governance frequently results in misaligned reporting structures, poor data integrity, overcomplicated workflows, weak internal controls, and expensive post-implementation corrections that could have been avoided entirely.\n
Nexus provides governance-led digital and systems advisory for businesses implementing or upgrading financial systems. We design, oversee, and validate systems from a finance and control perspective. We do not operate as a software development house — we operate as a financial governance partner. Technical development and system build are delivered through approved technology partners under Nexus oversight, ensuring independent financial governance throughout every stage of implementation.`,
listIntro: "We support end-to-end delivery across the following core service areas:",
    serviceAreas: [
        { id: "sa-1", title: "Accounting Systems Advisory", description: " Requirements definition, platform comparison, chart of accounts 	design, data migration planning, and post-migration validation 	across platforms including Xero, QuickBooks, Sage, Free Agent, and 	cloud-based accounting suites — ensuring financial outputs remain reliable during transition." },
        { id: "sa-2", title: "ERP & Finance Systems Advisory", description: "ERP requirements specification, vendor evaluation support, financial 	module configuration review, implementation milestone monitoring, acceptance testing and sign-off, and internal control alignment — ensuring ERP implementation is finance-led, not vendor-led." },
        { id: "sa-3", title: "Reporting & Automation Oversight", description: "Management reporting automation design, dashboard requirement 	specification, KPI definition alignment, workflow automation 	planning, and control environment validation — ensuring automation	enhances clarity without compromising audit trail or weakening 	financial oversight." },
        { id: "sa-4", title: "Bespoke Financial Tools & Solutions", description: "Custom reporting dashboards, budgeting and forecasting models, 	reconciliation control templates, project-level profitability tools, 	intercompany tracking models, and multi-entity consolidation tools —	designed around accounting integrity and commercial reality, delivered through approved specialist partners." },
    ],
    closingParagraph:
        "Technology rarely fails because of coding errors. It fails due to poor governance. Our engagements follow a four-phase model: Define requirements before platform selection, Design architecture aligned to governance needs, Oversee implementation milestones and configuration, and Validate system functionality from a finance integrity perspective before sign-off. This ensures systems strengthen — rather than dilute — financial clarity.",
};

export const TechCta: CtaData = {
    heading:
        "Poor governance doesn't hide in better software — it shows up louder.",
    width: "max-w-2xl",
    arrowPosition: "bottom-14 left-[110] md:bottom-16 md:left-[520]",
    href: "/contact",
    image: "/assets/bg-img-service1.png",
};

export const TechResult: ResultsData = {
    label: "Technology & Solutions",
    accent: "Client Results",
    results: [
        {
            id: "r-1",
            slug: "multi-spv-property-group-year-end",
            category: "SPV Portfolio",
            title: "Property Group With 14 SPVs Achieves Consistent Reporting and Stronger Lender Position",
            excerpt:
                "Inconsistent accounting treatment and intercompany mismatches created year-end delays and lender friction. We standardised policies, built monthly reconciliation discipline, and reduced year-end completion time materially.",
            image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-2",
            slug: "multi-entity-group-loss-relief",
            category: "Corporation Tax",
            title: "Multi-Entity Group Reduces Tax Payable Through Structured Loss Relief Alignment",
            excerpt:
                "An entity held unutilised losses while a sister company was profitable. We reviewed the group structure, calculated surrenderable losses, and aligned reporting — maintaining full documentation throughout.",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-3",
            slug: "property-group-partial-exemption-vat",
            category: "VAT",
            title: "Property Group Corrects Partial Exemption Miscalculation Before HMRC Scrutiny",
            excerpt:
                "Unclear VAT treatment of council supply, 28-day rule application, and partial exemption recovery created pricing and compliance uncertainty. We reviewed contractual structures and modelled VAT impact scenarios.",
            image:
                "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-4",
            slug: "contractor-margin-visibility-turnover",
            category: "Construction",
            title: "Contractor Restores Margin Visibility After Turnover Growth Masks Profit Decline",
            excerpt:
                "Increasing revenue masked declining net margins due to inconsistent overhead allocation and informal project reporting. We introduced project-level P&L tracking and monthly cost-to-complete reviews.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-5",
            slug: "contractor-subcontractor-cis-verification",
            category: "CIS Compliance",
            title: "Contractor Avoids Penalty Exposure After Subcontractor Verification Failures Identified",
            excerpt:
                "Multiple subcontractors had not been correctly verified, risking higher deduction rates and enforcement action. We reviewed status, corrected the verification process, and structured a documentation framework.",
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-6",
            slug: "founder-sme-monthly-reporting-discipline",
            category: "Statutory Accounting",
            title: "Founder-Led SME Moves From Reactive Year-End Scramble to Monthly Reporting Discipline",
            excerpt:
                "A growing SME rebuilt from scratch at year-end every cycle. We introduced monthly close discipline, reconciled balance sheets, and delivered audit-ready working papers as standard.",
            image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
    ]
};


// Tax Authority Support

export const heroTax: HeroData = {
    title: "When HMRC contacts you, a clear & correct response matters most",
    description: "Documentation-led support for businesses facing VAT compliance checks, corporation tax enquiries, CIS reviews, and HMRC correspondence — focused on measured response, not escalation.",
    width:"max-w-7xl",
    image: "/assets/bg-img-service6.png"
}
export const statusTax: StatsData[] = [
    { id: "s-1", size: "md:mr-15", value: "HMRC & Authority", icon: "", label: "Cross-Border Coverage" },
    { id: "s-3", size: "md:mr-15", value: "100", icon: "%", label: "Partner-Led Engagements" },
    { id: "s-2", size: "md:mr-15", value: "15", icon: "+", label: "Years of Sector Experience" },
];

export const TaxAbout: AboutServiceData = {
    introParagraph:` Engagement with HMRC can be disruptive — particularly where documentation is incomplete, reporting lacks structure, or responses are reactive and inconsistent. Most enquiries do not escalate because of deliberate error. They escalate because responses are poorly presented, technically imprecise, or emotionally framed. The way you respond to HMRC matters as much as the underlying position itself.\n
    Nexus provides disciplined, technically grounded support for managing HMRC and authority correspondence. Our approach is structured, proportionate, and documentation-led. We assess the scope of enquiry, review the underlying accounting and tax treatment, prepare reconciliations and supporting schedules, and draft responses that are calm, professional, and technically accurate. Our focus is resolution — not confrontation.`,
listIntro: "We support end-to-end delivery across the following core service areas:",
    serviceAreas: [
        { id: "sa-1", title: "HMRC Correspondence Handling", description: "Structured management of VAT compliance checks, corporation tax 	enquiries, PAYE reviews, CIS compliance queries, and information 	requests — ensuring every response is timely, documented, 	technically accurate, and professionally framed." },
        { id: "sa-2", title: "Enquiry & Compliance Support", description: "Scope clarification, risk assessment, accounting treatment review, 	schedule preparation, and documentation alignment for formal 	enquiries — reducing uncertainty and preventing scope expansion 	through early structured intervention." },
        { id: "sa-3", title: "Penalty	Mitigation & Appeals Support", description: "Behavioural position analysis, reasonable care documentation, 	mitigation submissions, and structured appeal preparation — 	focused on demonstrating proportionality and documented effort where 	exposure exists." },
        { id: "sa-4", title: "Dispute Preparation (Non-Tribunal)", description: "Technical position papers, evidence collation, schedule 	reconciliation, and structured dispute documentation prepared to 	professional standards — ensuring your position is clearly and	defensibly presented before any escalation." },
    ],
    closingParagraph:
        "Our sector familiarity in property and construction means we frequently support authority matters involving partial exemption disputes, temporary accommodation VAT treatment, domestic reverse charge confusion, CIS verification exposure, and capital vs revenue classification. This reduces response preparation time and improves technical clarity — giving HMRC a well-structured, professionally presented case to engage with rather than an opening to expand the enquiry.",
};

export const TaxCta: CtaData = {
    heading:
        "Early action and the right response can change the outcome with HMRC.",
    width: "max-w-2xl",
    arrowPosition: "bottom-14 left-[110] md:bottom-16 md:left-[550]",
    href: "/contact",
    image: "/assets/bg-img-service1.png",
};

export const TaxResult: ResultsData = {
    label: "Tax Authority Support",
    accent: "Client Results",
    results: [
        {
            id: "r-1",
            slug: "multi-spv-property-group-year-end",
            category: "SPV Portfolio",
            title: "Property Group With 14 SPVs Achieves Consistent Reporting and Stronger Lender Position",
            excerpt:
                "Inconsistent accounting treatment and intercompany mismatches created year-end delays and lender friction. We standardised policies, built monthly reconciliation discipline, and reduced year-end completion time materially.",
            image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-2",
            slug: "multi-entity-group-loss-relief",
            category: "Corporation Tax",
            title: "Multi-Entity Group Reduces Tax Payable Through Structured Loss Relief Alignment",
            excerpt:
                "An entity held unutilised losses while a sister company was profitable. We reviewed the group structure, calculated surrenderable losses, and aligned reporting — maintaining full documentation throughout.",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-3",
            slug: "property-group-partial-exemption-vat",
            category: "VAT",
            title: "Property Group Corrects Partial Exemption Miscalculation Before HMRC Scrutiny",
            excerpt:
                "Unclear VAT treatment of council supply, 28-day rule application, and partial exemption recovery created pricing and compliance uncertainty. We reviewed contractual structures and modelled VAT impact scenarios.",
            image:
                "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-4",
            slug: "contractor-margin-visibility-turnover",
            category: "Construction",
            title: "Contractor Restores Margin Visibility After Turnover Growth Masks Profit Decline",
            excerpt:
                "Increasing revenue masked declining net margins due to inconsistent overhead allocation and informal project reporting. We introduced project-level P&L tracking and monthly cost-to-complete reviews.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-5",
            slug: "contractor-subcontractor-cis-verification",
            category: "CIS Compliance",
            title: "Contractor Avoids Penalty Exposure After Subcontractor Verification Failures Identified",
            excerpt:
                "Multiple subcontractors had not been correctly verified, risking higher deduction rates and enforcement action. We reviewed status, corrected the verification process, and structured a documentation framework.",
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
        {
            id: "r-6",
            slug: "founder-sme-monthly-reporting-discipline",
            category: "Statutory Accounting",
            title: "Founder-Led SME Moves From Reactive Year-End Scramble to Monthly Reporting Discipline",
            excerpt:
                "A growing SME rebuilt from scratch at year-end every cycle. We introduced monthly close discipline, reconciled balance sheets, and delivered audit-ready working papers as standard.",
            image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
            type: "Brief",
            date: "Apr 22, 2026",
        },
    ]
};
