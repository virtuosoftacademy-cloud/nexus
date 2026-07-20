// components/contact/ContactDetails.tsx

import Link from "next/link";
import { ArrowRight, Building, Building2 } from "lucide-react";
import Image from "next/image";

interface ContactCard {
  src?: string;
  title: string;
  body: React.ReactNode;
  linkLabel: string;
  href: string;
}

const cards: ContactCard[] = [
  {
    src:"/assets/icon/headquarters.svg",
    title: "Headquarters",
    body: (
      <>
        <p>7 Joshua Close, Coventry, CV4 9DB, United Kingdom</p>
      </>
    ),
    linkLabel: "",
    href: "#",
  },
  {
    src:"/assets/icon/telephone.svg",
    title: "Telephone",
    body: (
      <>
        <p>
          +44 333 344 6686
        </p>
        <p className="text-foreground/50">Mon-Fri, 9:00 AM - 5:30
          PM GMT</p>
      </>
    ),
    linkLabel: "",
    href: "#",
  },
  {
    src: "assets/icon/email.svg",
    title: "Email",
    body: (
      <p>
        info@nexusadvisory.uk
      </p>
    ),
    linkLabel: "",
    href: "#",
  },
  // {
  //   title: "Careers",
  //   body: (
  //     <p>
  //       We seek professionals who demonstrate analytical precision, understand
  //       the importance of documentation, and value long-term advisory
  //       relationships. Opportunities are offered selectively with clear role
  //       definition.
  //     </p>
  //   ),
  //   linkLabel: "View Open Positions",
  //   href: "#",
  // },
  // {
  //   title: "Insights & Blog",
  //   body: (
  //     <p>
  //       Questions or comments about our published insights on UK accounting, UAE
  //       tax, property VAT, or construction compliance? We welcome feedback and
  //       topic suggestions from our readers.
  //     </p>
  //   ),
  //   linkLabel: "Email Us",
  //   href: "#",
  // },
  // {
  //   title: "Advisory Enquiries",
  //   body: (
  //     <p>
  //       If you require structured financial advisory, governance design, or cross-border UK–UAE alignment — submit a detailed enquiry and a senior advisor will review and respond within 1–2 working days.
  //     </p>
  //   ),
  //   linkLabel: "Submit an Enquiry",
  //   href: "#",
  // },
];

export default function ContactDetails() {
  return (
    <section className="py-10">
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
    <div className="flex flex-col justify-between gap-8 p-10 border border-muted-foreground md:min-h-80">

      {/* Top */}
      <div className="flex flex-col gap-5">

        <h4 className="flex gap-2 items-center text-xl md:text-[2rem] font-medium text-foreground">
          <Image src={card.src || ""} alt={card.title} width={24} height={24} className="md:size-8"/>
          {card.title}
        </h4>
        <div className="text-base md:text-2xl text-foreground leading-relaxed font-heading max-w-[17rem]">
          {card.body}
        </div>
      </div>

      {/* Link */}
      {/* <Link
        href={card.href}
        className="inline-flex items-center gap-1.5 text-sm md:text-base font-medium transition-opacity hover:opacity-75 text-primary"
      >
        {card.linkLabel}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link> */}

    </div>
  );
}