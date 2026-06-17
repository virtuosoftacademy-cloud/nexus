'use client'
import { CtaSplitSection } from "@/components/common/CTA"
import Hero from "./_components/Hero"
import Posts from "./_components/posts"
import ReactLenis from "lenis/react"
import CtaForm from "@/components/common/ctaForm"

function Blogs() {
    return (
        <div>
                <div className="px-7 md:px-12 pb-10">
                    <Hero />
                    <Posts />
                    {/* <CtaForm /> */}
                </div>
                {/* <CtaSplitSection /> */}
        </div>
    )
}

export default Blogs