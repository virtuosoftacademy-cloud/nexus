
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyDetail from "../_components/casestudydetails";
import { prisma } from "@/lib/prisma";
import { caseStudyInclude, toDetailProps } from "@/app/(admin)/admin/case-study/types";

// Pre-render every existing case study at build time.
export async function generateStaticParams() {
    try {
        const rows = await prisma.caseStudy.findMany({ select: { slug: true } });
        return rows.map((r) => ({ slug: r.slug }));
    } catch {
        return []
    }
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    try {
        const row = await prisma.caseStudy.findUnique({
            where: { slug },
            select: { heroTitle: true, heroSubtitle: true },
        });
        if (!row) return { title: "Case Study Not Found | Nexus" };
        return {
            title: `${row.heroTitle} | Nexus Advisory`,
            description: row.heroSubtitle,
        };
    } catch {
        return { title: "Nexus Advisory" }
    }
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