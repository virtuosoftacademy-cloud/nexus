// Server data-access — a FUNCTION, not a top-level awaited value.
import { prisma } from "@/lib/prisma";

export function getCaseStudyCards() {
    return prisma.caseStudy.findMany({
        orderBy: { updatedAt: "desc" },
        select: {
            id: true,
            slug: true,
            heroTitle: true,
            heroSubtitle: true,
            heroImage: true,
            industry: { select: { label: true } },
            serviceAreas: { select: { label: true }, orderBy: { label: "asc" } },
        },
    });
}


import { type CaseStudyCardProps } from "@/app/(pages)/case-studies/_components/ui/CaseStudyCard";

type CaseStudyCardRow = {
    id: string;
    slug: string;
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    industry: { label: string } | null;
    serviceAreas: { label: string }[];
};

export function toCard(row: CaseStudyCardRow): CaseStudyCardProps {
    return {
        id: row.id,
        image: row.heroImage,
        imageAlt: row.heroTitle,
        category: row.industry?.label ?? "",
        title: row.heroTitle,
        summary: row.heroSubtitle,
        serviceAreas: row.serviceAreas.map((a) => a.label),
        href: `/case-studies/${row.slug}`,
    };
}