'use client'
import { CtaSplitSection } from "@/components/common/CTA"
import Hero from "./_components/Hero"
import Posts from "./_components/posts"
import ReactLenis from "lenis/react"
import CtaForm from "@/components/common/ctaForm"

function Blogs() {
    return (
        <div>
            <ReactLenis root>
                <div className="px-7 md:px-12">
                    <Hero />
                    <Posts />
                    <CtaForm />
                </div>
                <CtaSplitSection />
            </ReactLenis>
        </div>
    )
}

export default Blogs