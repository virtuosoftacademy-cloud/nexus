'use client'

function Hero() {
    return (
        <>
            <section id="hero" className="relative overflow-hidden flex flex-col min-h-96 md:min-h-screen">

                <div className="absolute inset-0">
                    <img src="assets/heroabout.png" alt="about" className="h-96 md:h-screen w-full" />
                </div>
                <div className="absolute inset-0 bg-foreground/20 pointer-events-none" />

                <div className="relative top-30 md:top-40 md:left-12 bg-accent/90 text-foreground flex flex-col z-50 max-w-2xs md:max-w-lg px-3 py-4 md:px-6 md:py-10 border-b-4 border-primary">
                    <h4 className="text-primary txet-sm md:text-base">About Nexus</h4>
                    <h5 className="text-xl md:text-[2.5rem] font-semibold">What We Stand For</h5>
                    <p className="text-foreground/80 font-serif pt-5 max-w-xs text-sm md:text-base">We introduce financial structure where complexity has begun to outpace control. For businesses that intend to scale responsibly — not reactively.</p>
                </div>

            </section>

        </>
    )
}

export default Hero