
import Hero from './_components/Hero'
import ContactDetails from './_components/ContactDetail'
import ContactFollow from './_components/Follow'
import Faq from '@/components/common/Faq'
import { faqsHome } from '@/app/_constant'
import TestimonialsSection from '@/components/common/Testimonials'
import { InsightsSection } from '../../../components/common/Insights'
import { blogPosts } from '@/lib/blogActions'

function Contact() {
    return (
        <div className=''>
            <div>
                <Hero />
                <ContactDetails />
                <ContactFollow />
                <InsightsSection posts={blogPosts}/>
                <TestimonialsSection />
                <Faq items={faqsHome} />
            </div>
        </div>
    )
}

export default Contact

