import { CaseStudyCard } from "./ui/CaseStudyCard";
import { getCaseStudyCards, toCard } from "@/lib/casestudy-actions/actions";

export default async function CaseStudies() {
    const rows = await getCaseStudyCards();

    if (!rows.length) return null;

    return (
        <div className="max-w-full mx-auto py-9 md:py-18 px-4 sm:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-8">
                {rows.map((row) => (
                    <CaseStudyCard key={row.id} {...toCard(row)} />
                ))}
            </div>
        </div>
    );
}