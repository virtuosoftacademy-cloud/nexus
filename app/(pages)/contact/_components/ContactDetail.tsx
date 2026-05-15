// components/contact/ContactDetails.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ContactCard {
  title: string;
  body: React.ReactNode;
  linkLabel: string;
  href: string;
}

const cards: ContactCard[] = [
  {
    title: "Headquarters",
    body: (
      <>
        <p>7 Joshua Close, Coventry, CV4 9DB, United Kingdom</p>
        <p className="mt-3">Phone: +44 333 344 6686</p>
        <p>Email: info@nexusadvisory.uk</p>
      </>
    ),
    linkLabel: "Get in Touch",
    href: "#",
  },
  {
    title: "New Business",
    body: (
      <p>
        If you are considering engaging Nexus for accounting, tax, advisory, or
        governance support — we welcome a structured initial enquiry. All new
        business discussions begin with a diagnostic conversation, not a sales
        pitch.
      </p>
    ),
    linkLabel: "Tell Us What You Need",
    href: "#",
  },
  {
    title: "Social Media",
    body: (
      <p>
        Follow us on LinkedIn for insights on UK and UAE accounting, tax,
        governance, and financial advisory. We publish regular briefings on
        regulatory developments affecting property, construction, and
        founder-led businesses.
      </p>
    ),
    linkLabel: "Follow Us",
    href: "#",
  },
  {
    title: "Careers",
    body: (
      <p>
        We seek professionals who demonstrate analytical precision, understand
        the importance of documentation, and value long-term advisory
        relationships. Opportunities are offered selectively with clear role
        definition.
      </p>
    ),
    linkLabel: "View Open Positions",
    href: "#",
  },
  {
    title: "Insights & Blog",
    body: (
      <p>
        Questions or comments about our published insights on UK accounting, UAE
        tax, property VAT, or construction compliance? We welcome feedback and
        topic suggestions from our readers.
      </p>
    ),
    linkLabel: "Email Us",
    href: "#",
  },
  {
    title: "Advisory Enquiries",
    body: (
      <p>
        If you require structured financial advisory, governance design, or cross-border UK–UAE alignment — submit a detailed enquiry and a senior advisor will review and respond within 1–2 working days.
      </p>
    ),
    linkLabel: "Submit an Enquiry",
    href: "#",
  },
];

export default function ContactDetails() {
  return (
    <section className="py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

        {/* Row 1 — 3 cards */}
        {cards.slice(0, 3).map((card) => (
          <ContactCard key={card.title} card={card} />
        ))}

        {/* Row 2 — 2 cards + empty cell */}
        {cards.slice(3).map((card) => (
          <ContactCard key={card.title} card={card} />
        ))}
        {/* Empty placeholder to keep the grid balanced */}
        <div className="hidden md:block border-t border-white/10" />

      </div>
    </section>
  );
}

function ContactCard({ card }: { card: ContactCard }) {
  return (
    <div className="flex flex-col justify-between gap-8 p-10 border border-muted-foreground min-h-80">

      {/* Top */}
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl md:text-[2rem] font-medium text-foreground">
          {card.title}
        </h4>
        <div className="text-base md:text-lg text-foreground/60 leading-relaxed font-serif">
          {card.body}
        </div>
      </div>

      {/* Link */}
      <Link
        href={card.href}
        className="inline-flex items-center gap-1.5 text-sm md:text-base font-medium transition-opacity hover:opacity-75 text-primary"
      >
        {card.linkLabel}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>

    </div>
  );
}