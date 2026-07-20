import { caseStudies } from "../constant"
import { CaseStudyCard } from "./ui/CaseStudyCard"

function CaseStudies() {
    return (
        <div className="max-w-full mx-auto py-9 md:py-18 px-4 sm:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-8">

                {
                    caseStudies.map((caseStudy) => (
                        <CaseStudyCard key={caseStudy.id} {...caseStudy} />
                    ))
                }
            </div>
        </div>
    )
}

export default CaseStudies