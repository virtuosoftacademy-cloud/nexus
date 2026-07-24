// ============================================================================
// File: app/(admin)/case-studies/helpers.ts
// Purpose: Shared helpers for the case-study create + edit actions:
//            - CaseStudyFormState: shape returned to useActionState
//            - Row types for the three repeatable groups
//            - parseCaseStudyForm(): reads FormData (scalar fields as-is,
//              industryId from a select, serviceAreaIds from checkboxes,
//              repeatable groups as JSON strings from hidden inputs),
//              validates required fields, returns typed values or errors
// Type: Plain module (importable from actions and the form)
// ============================================================================

export type CaseStudyFormState = {
    error?: string;
    fieldErrors?: Partial<Record<string, string>>;
};

export type CardRow = { title: string; description: string };
export type TimelineRow = { phase: string; duration: string };
export type ServiceRow = { label: string; href: string };

export type ParsedCaseStudy = {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    industryId: number | null;
    serviceAreaIds: number[];
    summary: string;
    situationParagraphs: string;
    situationQuestions: string;
    situationClosing: string | null;
    challenge: string;
    approachIntro: string;
    outcome: string;
    keyResults: string;
    calloutHeading: string | null;
    calloutText: string | null;
    calloutButtonHref: string | null;
    calloutButtonLabel: string | null;
    cards: CardRow[];
    timeline: TimelineRow[];
    services: ServiceRow[];
};

const REQUIRED: [key: string, label: string][] = [
    ["heroTitle", "Hero title"],
    ["heroSubtitle", "Hero subtitle"],
    ["heroImage", "Hero image"],
    ["summary", "Executive summary"],
    ["situationParagraphs", "Situation"],
    ["situationQuestions", "Situation questions"],
    ["challenge", "Challenge"],
    ["approachIntro", "Approach intro"],
    ["outcome", "Outcome"],
    ["keyResults", "Key results"],
];

function json<T>(raw: FormDataEntryValue | null, fallback: T): T {
    if (typeof raw !== "string" || !raw) return fallback;
    try {
        return JSON.parse(raw) as T;
    } catch {
        return fallback;
    }
}

export function parseCaseStudyForm(formData: FormData): {
    values?: ParsedCaseStudy;
    fieldErrors?: Record<string, string>;
} {
    const get = (k: string) => String(formData.get(k) ?? "").trim();
    const opt = (k: string) => {
        const v = get(k);
        return v ? v : null;
    };

    const fieldErrors: Record<string, string> = {};
    for (const [key, label] of REQUIRED) {
        if (!get(key)) fieldErrors[key] = `${label} is required.`;
    }

    // Repeatable groups arrive as JSON from the form's hidden inputs.
    const cards = json<CardRow[]>(formData.get("cardsJson"), []).filter(
        (c) => c.title.trim() || c.description.trim()
    );
    const timeline = json<TimelineRow[]>(formData.get("timelineJson"), []).filter(
        (t) => t.phase.trim() || t.duration.trim()
    );
    const services = json<ServiceRow[]>(formData.get("servicesJson"), []).filter(
        (s) => s.label.trim() || s.href.trim()
    );

    // A service with a label needs an internal href (guards javascript: etc.)
    for (const s of services) {
        if (s.href && !s.href.startsWith("/")) {
            fieldErrors.services = "Service links must be internal paths starting with /.";
            break;
        }
    }

    if (Object.keys(fieldErrors).length > 0) return { fieldErrors };

    const industryIdRaw = get("industryId");
    const serviceAreaIds = formData
        .getAll("serviceAreaIds")
        .map((v) => Number(v))
        .filter((n) => Number.isInteger(n) && n > 0);

    return {
        values: {
            heroTitle: get("heroTitle"),
            heroSubtitle: get("heroSubtitle"),
            heroImage: get("heroImage"),
            industryId: industryIdRaw ? Number(industryIdRaw) : null,
            serviceAreaIds,
            summary: get("summary"),
            situationParagraphs: get("situationParagraphs"),
            situationQuestions: get("situationQuestions"),
            situationClosing: opt("situationClosing"),
            challenge: get("challenge"),
            approachIntro: get("approachIntro"),
            outcome: get("outcome"),
            keyResults: get("keyResults"),
            calloutHeading: opt("calloutHeading"),
            calloutText: opt("calloutText"),
            calloutButtonHref: opt("calloutButtonHref"),
            calloutButtonLabel: opt("calloutButtonLabel"),
            cards: cards.map((c) => ({ title: c.title.trim(), description: c.description.trim() })),
            timeline: timeline.map((t) => ({ phase: t.phase.trim(), duration: t.duration.trim() })),
            services: services.map((s) => ({ label: s.label.trim(), href: s.href.trim() })),
        },
    };
}