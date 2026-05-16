// components/contact/ContactHero.tsx

export default function Hero() {
  return (
    <section className="bg-background py-16 px-4" id="hero">
      <div>
        <div className="flex flex-col gap-8">

          {/* Left: heading */}

          {/* Right: sub-heading + body */}
          <div className="flex justify-between items-center">
            <h4 className="text-4xl md:text-[3.5rem] font-medium text-foreground leading-tight">
              Contact Us
            </h4>
            <h4 className="text-2xl md:text-[2.75rem] font-serif text-foreground/70 leading-snug">
              Ready to start a structured conversation?
            </h4>
          </div>
          <div className="flex justify-center pt-12">
            <p className="text-sm md:text-[1.75rem] text-foreground/60 leading-relaxed max-w-4xl font-serif">
              Every enquiry is reviewed by senior advisory personnel before a discussion is arranged. If you require clarity around your accounting position, tax exposure, governance structure, or cross-border alignment between UK and UAE — submit your enquiry below and we will be in touch within 1-2 working days.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}