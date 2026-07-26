
import { prisma } from "@/lib/prisma";
import { CaseStudyCard, type CaseStudyCardProps } from "./ui/CaseStudyCard";

function toCard(row: {
    id: string;
    slug: string;
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    industry: { label: string } | null;
    serviceAreas: { label: string }[];
}): CaseStudyCardProps {
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

async function CaseStudies() {
    const rows = await prisma.caseStudy.findMany({
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

    return (
        <div className="max-w-full mx-auto py-9 md:py-18 px-4 sm:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-8">

                {
                    rows.map((row) => (
                        <CaseStudyCard key={row.id} {...toCard(row)} />
                    ))
                }
            </div>
        </div>
    )
}

export default CaseStudies