'use client'

import CaseStudies from './_components/CaseStudies'
import Hero from './_components/Hero'

function CaseStudiesPage() {
    return (
        <div className='min-h-screen'>
            <Hero />
            <CaseStudies />
        </div>
    )
}

export default CaseStudiesPage