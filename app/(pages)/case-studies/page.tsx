import CaseStudies from './_components/CaseStudies'
import Hero from './_components/Hero'

export const dynamic = "force-dynamic"
export default function CaseStudiesPage() {

    return (
        <div className='min-h-screen'>
            <Hero />
            <CaseStudies />
        </div>
    )
}
