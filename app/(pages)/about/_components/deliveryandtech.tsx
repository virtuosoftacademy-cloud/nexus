

import Info from './ui/Info'
import { TeamCard, TeamMember } from './ui/TeamCard'

function DeliveryAndTech() {
    const deliveryandtech = {
        title: 'Delivery & Technology Leadership',
        subTitle: 'Structured Capability, Delivered Through Partnership',
        intro: "Nexus Advisory & Services retains full advisory responsibility across every engagement. Where specialist technology delivery, digital implementation, or systems capability is required, this is provided through our strategic partnership with Virtuosoft under clearly defined scope and governance parameters.",
        listTitle: "The following professionals lead Virtuosoft's delivery and strategic functions, extending structured technology capability to Nexus clients alongside our advisory oversight.",
        listItems: []
        ,
        outro: ``
    }


    const teamAbout: TeamMember[] =
        [
            {
                id: 
                "shoaib-ur-rehman",
                name: 
                "Shoaib Ur Rehman",
                role: 
                "Chief Executive Officer – Virtuosoft",
                image: 
                "/assets/about/shoaiburrehman.png",
                bio: 
            "Shoaib ur Rehman brings over 20 years of experience delivering large-scale digital solutions across Pakistan, the UAE, the MENA region, and global markets. His expertise spans software engineering, solution architecture, cloud computing, and enterprise system design. He leads Virtuosoft's strategic vision, technology roadmap, and delivery operations – guiding organisations through cloud modernisation, data-driven transformation, and human-centred system design. He holds a Masters in Computer Science from IBA and a BE in Computer & Information Systems from NED University."
            },
            {
                id: 
                "amir-jamili",
                name: 
                "Amir Jamili",
                role: 
                "Director, Cybersecurity & IT Governance – Virtuosoft",
                image: 
                "/assets/about/amirjamili.png",
                bio: 
                "Amir Jamili is a senior cybersecurity executive with 18 years of experience building national-grade security programmes across financial and regulated sectors. His expertise covers cybersecurity strategy, IT governance, business continuity, disaster recovery, and AI-driven security automation. He is a Certified Lead Risk Manager (PECB), Cloud Architecture Solution Advisor (IBM), and Certified Technology Specialist (Microsoft), and is currently pursuing a PhD in Cyber Security. His contributions include establishing information security as a core organisational function, achieving ISO 22301 and ISO 20000 certifications, and receiving recognition through the CISO Cyber Sentinels Award and CXO Excellence Award.",
            },
            {
                id: 
                "azher-rizvi",
                name: 
                "Azher Rizvi",
                role: 
                "Chief Operating Officer – Virtuosoft",
                image: 
                "/assets/about/azherrizvi.png",
                bio: 
            "Mr. Azher, an MBA graduate from SZABIST University, Dubai, is a seasoned Regional Marketing Manager with a strong background in market segmentation, channel development, and revenue optimisation. His leadership spans successful engagements across Far East Asia and West Africa, focusing on customer relations, sales growth, compliance, and strategic project alignment for impactful business outcomes."
            },
            {
                id: 
                "wasif-shariq",
                name: 
                "Wasif Shariq",
                role: 
                "Head of Growth – Virtuosoft",
                image: 
                "/assets/about/wasifshariq.png",
                bio: 
            "Wasif Shariq leads growth strategy and marketing operations at Virtuosoft, bringing extensive experience in commercial development, market positioning, and client acquisition across technology-led businesses. His focus is on building structured growth frameworks that align marketing execution with long-term commercial objectives."
            },
        ]



    return (
        <div>
            <Info data={deliveryandtech} />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 max-w-4xl mx-auto pt-5 md:pt-10 px-8 md:px-0'>

                {
                    teamAbout.map((memeber) => (
                        <TeamCard key={memeber.id} {...memeber}/>
                    ))
                }

            </div>

            <div className='max-w-6xl mx-auto px-8 space-y-3 md:space-y-6 py-5 md:py-10 font-heading text-foreground/80'>
                <h3 className='text-2xl md:text-4xl font-semibold'>Governance</h3>
                <p className='text-lg md:text-[1.75rem]'>All technology and delivery services are provided by Virtuosoft under structured partnership agreements. Nexus Advisory & Services retains advisory responsibility, scope definition, financial governance oversight, and acceptance validation across all engagements.</p>
                <p className='text-lg md:text-[1.75rem]'>
                    <strong>
                        <em>
                            We do not outsource judgement. We govern delivery.
                        </em>
                    </strong>
                </p>
            </div>
        </div>
    )
}

export default DeliveryAndTech