'use client'

import { ReactLenis } from 'lenis/react'
import Hero from './_components/Hero'
import ContactDetails from './_components/ContactDetail'
import { CtaSplitSection } from '@/components/common/CTA'
import ContactFollow from './_components/Follow'
import ContactCta from './_components/ContactCta'
import CtaForm from '../../../components/common/ctaForm'
import Faq from '@/components/common/Faq'
import { faqsHome } from '@/app/_constant'
import TestimonialsSection from '@/components/common/Testimonials'
import { InsightsSection } from '../../../components/common/Insights'

function Contact() {
    return (
        <div className='px-6 sm:px-12'>
            <div className='px-4'>
                <Hero />
                <ContactDetails />
                <ContactFollow />
                <InsightsSection />
                <TestimonialsSection />
                <Faq items={faqsHome} />
                {/* <ContactCta/> */}
                {/* <CtaForm/> */}
            </div>
            {/* <CtaSplitSection /> */}
        </div>
    )
}

export default Contact

