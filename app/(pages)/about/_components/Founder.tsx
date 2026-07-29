import { Separator } from "@/components/ui/separator"
import Image from "next/image"



function Founder() {
    return (
        <div className="pt-6 md:pt-18 mx-auto max-w-6xl px-8">
            <div className='flex items-center justify-between pb-6'>
                <Separator className='min-w-4 max-w-12 sm:max-w-24 lg:max-w-3xs!' />
                <h4 className='text-2xl md:text-4xl font-semibold text-center shrink-0 max-w-[80vw] sm:max-w-none'>About The Founder</h4>
                <Separator className='min-w-4 max-w-12 sm:max-w-24 lg:max-w-3xs!' />
            </div>
            <div className="flex justify-center py-5 md:py-10">
                <Image src={"/assets/founder.png"} alt="" className="size-5/5" width={400} height={700}/>
            </div>
            <div className="py-6 md:py-10 text-lg md:text-[1.75rem] font-heading space-y-3 md:space-y-6">
                <p>Nexus Advisory & Services is led by Syed Toseef Ali, whose professional background spans statutory accounting, property and construction structures, VAT advisory, financial governance, and cross-border operational alignment.</p>
                <p>His work has focused on environments where:
                </p>
                <ul className="list-disc list-inside">
                    <li>

                        Property portfolios operate through multiple SPVs
                    </li>
                    <li>

                        Construction businesses manage margin volatility
                    </li>
                    <li>

                        VAT treatment requires technical modelling
                    </li>
                    <li>

                        Governance frameworks must evolve with growth
                    </li>
                    <li>

                        Cross-border reporting requires structured alignment
                    </li>
                </ul>
                <p>
                    The firm reflects this experience: technically disciplined, commercially aware, and governance-led.
                </p>
                <p>
                    Rather than positioning the firm around personality, Nexus is structured around professional standards and documented methodology.
                </p>
                <div className="py-6 space-y-3 md:space-y-6">
                    <h2 className="text-primary font-bold text-2xl md:text-[1.75rem]">How We Operate</h2>
                    <p>We engage selectively.</p>
                    <p>
                        Each engagement begins with structured assessment, not assumption.
                    </p>
                    <p>

                        Our work is documented, reconciled, and aligned with clearly defined deliverables. We avoid ambiguity in scope and maintain disciplined communication throughout advisory relationships.
                    </p>
                    <p>
                        Clients choose Nexus when they require:

                    </p>
                    <ul className="list-disc list-inside">
                        <li>
                            Financial clarity
                        </li>
                        <li>
                            Structured intervention
                        </li>
                        <li>
                            Technical defensibility
                        </li>
                        <li>
                            Commercial awareness

                        </li>
                        <li>
                            Measured judgement
                        </li>
                    </ul>
                    {/* Repeats lines 44–47 verbatim — confirm this is intentional closing emphasis, not a copy-paste leftover */}
                    <p>The firm reflects this experience: technically disciplined, commercially aware, and governance-led.</p>
                    <p>Rather than positioning the firm around personality, Nexus is structured around professional standards and documented methodology.</p>
                </div>
            </div>

        </div>
    )
}

export default Founder