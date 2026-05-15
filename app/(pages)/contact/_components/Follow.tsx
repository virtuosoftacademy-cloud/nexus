// components/contact/ContactFollow.tsx

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactFollow() {
    return (
        <section className="bg-background py-20 px-6 sm:px-12">
            <div className="mx-auto max-w-171 text-center md:text-left">

                {/* Eyebrow */}
                <p
                    className="text-sm md:text-base text-primary font-semibold tracking-widest text-center"
                >
                    Follow
                </p>

                {/* Body */}
                <p className="text-xl md:text-[1.9rem] text-foreground leading-relaxed hover:text-primary transition">
                    Follow Nexus on LinkedIn for regular insights on UK and UAE
                    accounting, tax, and governance. We publish briefings on regulatory
                    changes, sector-specific advisory, and financial discipline for
                    property, construction, and founder-led businesses — written for
                    decision-makers, not accountants.
                </p>

                {/* Arrow link */}
                <div className="flex justify-center">

                    <Link
                        href="#"
                    >
                        <Image src="assets/arrowrightblack.svg" alt="" className="transition delay-100 hover:translate-x-2 w-6" width={50} height={50} />
                        {/* <ArrowRight className="h-5 w-5" /> */}
                    </Link>

                </div>
            </div>
        </section>
    );
}