'use client'
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
        connect@nexusadvisory.uk
      </p>
    ),
    linkLabel: "",
    href: "#",
  }
];

export default function ContactDetails() {
  return (
    <section className="py-10 px-8 lg:px-18">
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

        {cards.map((card) => (
          <ContactCard key={card.title} card={card} />
        ))}

      </div>
    </section>
  );
}

function ContactCard({ card }: { card: ContactCard }) {
  return (
    <div className="flex flex-col justify-between items-center lg:items-start gap-8 p-10 border border-muted-foreground lg:min-h-80">

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