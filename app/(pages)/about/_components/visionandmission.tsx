'use client'
import Image from "next/image"

function Visionandmission() {

    return (
        <section className="flex justify-center flex-wrap gap-12 md:gap-6 py-10 md:py-20 px-4 md:px-0">
            <div className="flex flex-col justify-center items-center gap-y-5 text-center">
                <h4 className="text-2xl md:text-4xl font-semibold">Our{" "}
                    <span className="text-primary">
                        Mission
                    </span>
                </h4>
                <p className="font-serif text-foreground/70 text-base md:text-lg max-w-xl">
                    To introduce financial structure, discipline, and governance into businesses where complexity has begun to outpace control — so that growth is built on a foundation that holds up under scrutiny, not one that collapses under it.
                </p>
                <div className="overflow-hidden">
                <Image src={"assets/mission.png"} className="max-w-2xl w-xs md:w-2xl hover:scale-110 transition-transform duration-300 ease-in-out" alt="Our Mission" width={"40"} height={"40"} />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5 text-center">
                <h4 className="text-2xl md:text-4xl font-semibold">Our{" "}
                    <span className="text-primary">
                        Vision
                    </span>
                </h4>
                <p className="font-serif text-foreground/70 text-base md:text-lg max-w-xl">
                    To be the advisory firm that growing businesses in the UK and UAE turn to when they need more than compliance — when they need financial clarity, structural integrity, and a long-term partner who operates with the same discipline they aspire to.
                </p>
                <div className="overflow-hidden">
                <Image src={"assets/vision.png"} className="max-w-2xl w-xs md:w-2xl hover:scale-110 transition-transform duration-300 ease-in-out" alt="Our Mission" width={"40"} height={"40"} />
                </div>
            </div>
        </section>
    )
}

export default Visionandmission