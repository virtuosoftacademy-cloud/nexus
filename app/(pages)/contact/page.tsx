
import Hero from './_components/Hero'
import ContactDetails from './_components/ContactDetail'
import ContactFollow from './_components/Follow'
import Faq from '@/components/common/Faq'
import TestimonialsSection from '@/components/common/Testimonials'
import { faqsHome } from '@/app/_constant'
import { InsightsSection } from '../../../components/common/Insights'
import { getBlogData } from '@/lib/blogActions'

export default async function Contact() {
    const { blogPosts } = await getBlogData();

    return (
        <div>
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


