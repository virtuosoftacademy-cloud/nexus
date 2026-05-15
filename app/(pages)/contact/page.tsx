'use client'

// import ContactForm from "./_components/ContactForm"
// import Hero from "./_components/Hero"
import { ReactLenis } from 'lenis/react'
import Hero from './_components/Hero'
import ContactDetails from './_components/ContactDetail'
import { CtaSplitSection } from '@/components/common/CTA'
import ContactFollow from './_components/Follow'
import ContactCta from './_components/ContactCta'
import CtaForm from './_components/Form'

function Contact() {
    return (
        <div>
            <ReactLenis root>
                <div className='mx-auto max-w-360'>
                    <Hero />
                    <ContactDetails />
                    <ContactFollow />
                    <ContactCta/>
                    <CtaForm/>
                </div>
                <CtaSplitSection />
                {/* <ContactForm /> */}
            </ReactLenis>
        </div>
    )
}

export default Contact

