'use client'

import { ReactLenis } from 'lenis/react'
import Hero from './_components/Hero'
import ContactDetails from './_components/ContactDetail'
import { CtaSplitSection } from '@/components/common/CTA'
import ContactFollow from './_components/Follow'
import ContactCta from './_components/ContactCta'
import CtaForm from '../../../components/common/ctaForm'

function Contact() {
    return (
        <div>
                <div className='px-8 sm:px-8 xl:px-18'>
                    <Hero />
                    <ContactDetails />
                    <ContactFollow />
                    <ContactCta/>
                    <CtaForm/>
                </div>
                <CtaSplitSection />
                {/* <ContactForm /> */}
        </div>
    )
}

export default Contact

