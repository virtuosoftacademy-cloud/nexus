'use client'

import { memberships } from "@/app/_constant";
import Image from "next/image";


export default function ProfessionalMemberships() {
  return (
    <section className="bg-primary/8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-8 sm:px-8 xl:px-18">
        {/* Heading */}
        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
          Professional{" "}
          <span className="text-primary">Memberships</span>
        </h4>

        {/* Description */}
        <p className="font-serif text-sm sm:text-base text-foreground/70 leading-relaxed mb-10 sm:mb-12">
          We uphold the highest professional standards in every aspect of our
          work. Guided by recognized industry bodies and regulatory requirements,
          we deliver services with integrity, accuracy, and accountability. Our
          commitment to compliance, governance, and continuous professional
          development ensures clients receive trusted advice and dependable
          support. Every engagement is approached with professionalism,
          transparency, and a focus on long-term success.
        </p>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {memberships.map((membership) => (
            <div
              key={membership.id}
              className="flex flex-col items-center justify-center gap-4 bg-card border border-border px-6 py-8 sm:py-10 shadow"
            >
              <div className="relative h-14 w-28 sm:h-16 sm:w-32">
                <Image
                  src={membership.logo}
                  alt={membership.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm sm:text-sm text-foreground/80 text-center">
                {membership.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}