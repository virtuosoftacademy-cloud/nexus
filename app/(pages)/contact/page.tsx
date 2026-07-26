
import Hero from './_components/Hero'
import ContactDetails from './_components/ContactDetail'
import ContactFollow from './_components/Follow'
import Faq from '@/components/common/Faq'
import TestimonialsSection from '@/components/common/Testimonials'
import { faqsHome } from '@/app/_constant'

export default function Contact() {
    return (
        <div>
            <div>
                <Hero />
                <ContactDetails />
                <ContactFollow />
                <TestimonialsSection />
                <Faq items={faqsHome} />
            </div>
        </div>
    )
}


