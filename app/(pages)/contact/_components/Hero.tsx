// components/contact/ContactHero.tsx

export default function Hero() {
  return (
    <section className="py-16" id="hero">
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
          <div className="flex justify-center pt-3 md:pt-12 text-center md:text-left">
            <p className="text-sm md:text-[1.75rem] text-foreground/60 leading-relaxed max-w-4xl font-serif">
              Every enquiry is reviewed by senior advisory personnel before a discussion is arranged. If you require clarity around your accounting position, tax exposure, governance structure, or cross-border alignment between UK and UAE — submit your enquiry below and we will be in touch within 1-2 working days.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}