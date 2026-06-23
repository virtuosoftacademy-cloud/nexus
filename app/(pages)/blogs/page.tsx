'use client'
import Hero from "./_components/Hero"
import Posts from "./_components/posts"

function Blogs() {
    return (
        <div>
                <div className="pb-10">
                    <Hero />
                    <Posts />
                    {/* <CtaForm /> */}
                </div>
                {/* <CtaSplitSection /> */}
        </div>
    )
}

export default Blogs