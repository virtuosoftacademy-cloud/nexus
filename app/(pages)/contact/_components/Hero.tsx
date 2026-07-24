// components/contact/ContactHero.tsx

import { ArrowList } from "@/components/ui/ArrowList";
import Image from "next/image";

export default function Hero() {
  const requirements = [
    "Clarity around accounting and tax position",
    "Structured property or construction oversight",
    "Cross-border alignment between UK and UAE",
    "Governance-led digital oversight",
    "Financial advisory beyond compliance"
  ]
  return (
    <section className="px-8 sm:px-18 py-16 mt-12 md:mt-24" id="hero">
      <div>
        <div className="flex flex-col md:gap-8">
          <div className="flex gap-5 justify-center md:justify-between items-center flex-wrap text-center md:text-left">
            <h4 className="text-4xl md:text-[3.5rem] font-medium text-foreground leading-tight">
              Contact Us
            </h4>
            <p className="text-base md:text-[2.75rem] font-serif text-foreground/70 leading-snug">
              Ready to start a structured conversation?
            </p>
          </div>
          <div className="flex flex-col pt-8 md:pt-12 text-lg md:text-[1.75rem] text-foreground/90 font-heading space-y-3">
            <h2 className="text-primary font-bold text-xl md:text-[1.75rem]">If your organisation requires:</h2>
            <ArrowList items={requirements} markerclassName="text-xl text-primary" itemsClassName="md:text-[1.75rem]! flex items-start md:items-center" />
            <p>
              We welcome an initial structured discussion.
            </p>
            <p className="max-w-5xl pt-5">
              All enquiries are reviewed by senior advisory personnel to ensure appropriate alignment before engagement.
            </p>
          </div>
          <div className="hidden lg:block absolute right-0 top-1/3">
            <Image src={"/assets/icon/search-contact.svg"} alt={"image"} width={20} height={20} className="size-[29.25rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}