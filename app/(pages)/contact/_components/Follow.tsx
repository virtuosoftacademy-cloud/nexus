
import Image from "next/image";

export default function ContactFollow() {
    return (
        <section className="py-16">
                <div className="flex flex-col pt-3 md:pt-12 text-lg md:text-2xl lg:text-[1.75rem] text-foreground/90 font-heading space-y-3 text-left z-10">
                    <h2 className="text-primary font-bold text-xl md:text-2xl">Enquiry Process</h2>
                    <div>
                        <ul className="list-decimal list-inside">
                            <li>Submission of structured enquiry</li>
                            <li>Preliminary review within 1-2 working days</li>
                            <li>Introductory discussion to assess scope</li>
                            <li>Defined proposal outlining deliverables and engagement parameters</li>
                        </ul>
                    </div>

                    <div className="">
                        <p>
                            We operate with intention.
                        </p>
                        <p className="max-w-5xl pt-5">
                            Not every enquiry becomes an engagement.<br />
                            This ensures that when we do engage, the relationship is focused and proportionate.
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block -z-10">
                    <Image
                        src={"/assets/icon/signal-contact.svg"}
                        alt="Enquiry Process"
                        width={20}
                        height={20}
                        className="absolute right-0 -bottom-12/8 lg:size-64 xl:size-[40rem] pointer-events-none"
                    />
                </div>
        </section>
    );
}