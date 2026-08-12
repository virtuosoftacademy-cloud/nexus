'use client'

import Hero from './_components/Hero'
import AboutParagraph from './_components/AboutPara'
import Different from './_components/Different'
import Principles from './_components/principles'
import Founder from './_components/Founder'
import Info from './_components/ui/Info'
import DeliveryAndTech from './_components/deliveryandtech'
import Careers from './_components/Careers'

function About() {
    const Strategy = {
        title: 'Strategic Partners',
        subTitle: 'Structured Collaboration Without Compromising Independence',
        intro: 'Nexus operates within a defined advisory framework. Where specialist technical development or operational execution is required, we work alongside selected strategic partners under clearly defined scope and governance parameters.',
        listTitle: 'Partnerships are established to:',
        listItems:
            [
                "Extend capability without diluting oversight",
                "Preserve advisory independence",
                "Ensure delivery discipline",
                "Maintain accountability"
            ]
        ,
        outro:
            `Technical delivery partners operate under structured agreements. Nexus retains advisory responsibility, scope definition, financial governance oversight, and acceptance validation. 
        We do not outsource judgement. 
        We govern delivery.`
    }



    return (
        <div>
            <Hero />
            <AboutParagraph />
            <Different />
            <Principles />
            <Founder />
            <Info data={Strategy} />
            {/* <DeliveryAndTech /> */}
            <Careers />
        </div>
    )
}

export default About;

