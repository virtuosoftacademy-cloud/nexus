import CaseStudyDetail from "../_components/casestudydetails";
import { caseStudyPropertyPortfolio } from "../constant";

export default function CaseStudyPage() {
    return (
        <main>
            <CaseStudyDetail {...caseStudyPropertyPortfolio} />
        </main>
    );
}