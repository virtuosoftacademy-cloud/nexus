// ============================================================================
// File: app/case-studies/[slug]/page.tsx
// Purpose: Case study page — UPDATED from one hardcoded page per case study
//          (spreading a constant like caseStudyPropertyPortfolio) to a single
//          dynamic route serving every case study from Prisma:
//            /case-studies/<slug> -> findUnique + toDetailProps -> component
//          New case studies published in the admin get a page automatically;
//          per-case-study folders and constants can be deleted.
// Type: Server Component (async)
// ============================================================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyDetail from "../_components/casestudydetails";
import { prisma } from "@/lib/prisma";
import { caseStudyInclude, toDetailProps } from "@/app/(admin)/admin/case-study/types";

// Pre-render every existing case study at build time.
export async function generateStaticParams() {
    const rows = await prisma.caseStudy.findMany({ select: { slug: true } });
    return rows.map((r) => ({ slug: r.slug }));
}

// Case studies published via the admin after the build render on demand.
export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const row = await prisma.caseStudy.findUnique({
        where: { slug },
        select: { heroTitle: true, heroSubtitle: true },
    });
    if (!row) return { title: "Case Study Not Found | Nexus" };
    return {
        title: `${row.heroTitle} | Nexus Advisory`,
        description: row.heroSubtitle,
    };
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const row = await prisma.caseStudy.findUnique({
        where: { slug },
        include: caseStudyInclude,
    });
    if (!row) notFound();

    return (
        <main>
            <CaseStudyDetail {...toDetailProps(row)} />
        </main>
    );
}