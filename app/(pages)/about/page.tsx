'use client'

import { ReactLenis } from 'lenis/react'
import Hero from './_components/Hero'
import { CtaSplitSection } from '@/components/common/CTA'
import CtaForm from '../../../components/common/ctaForm'
import AboutParagraph from './_components/AboutPara'
import AboutStats from './_components/aboutstats'
import Visionandmission from './_components/visionandmission'
import Different from './_components/Different'
import Aboutcta from './_components/aboutcta'

function About() {
    return (
        <div>
            <ReactLenis root>
                <Hero />
                <AboutParagraph />
                <AboutStats />
                <div className='mx-auto max-w-350 px-10 md:px-0'>
                    <Visionandmission />
                    <Different />
                    <Aboutcta/>
                    <CtaForm />
                </div>
                <CtaSplitSection />
                {/* <ContactForm /> */}
            </ReactLenis>
        </div>
    )
}

export default About;

