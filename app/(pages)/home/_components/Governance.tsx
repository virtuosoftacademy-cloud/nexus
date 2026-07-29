'use client'

import Image from "next/image";

export default function GovernancePhilosophy() {
  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-8 xl:px-18">

        {/* Top Row — Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-0">
          {/* Text */}
          <div className="flex flex-col md:pr-28 pt-8 pb-12">
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Governance <span className="text-primary">Philosophy</span>
            </h4>
            {/* <h3 className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-6">
              This should sit on the homepage or About page. It is one of the
              core brand ideas and should not be buried.
            </h3> */}

            <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">
              Structure Before Scale
            </h4>
            <h3 className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-4">
              Most businesses outgrow their original financial structure long
              before they realise it. Reporting becomes reactive, governance
              weakens, systems become fragmented and leadership decisions are
              made without consistent financial clarity.
            </h3>
            <h3 className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Nexus was built around a different philosophy: sustainable growth
              requires structure, discipline and governance before scale. Our
              role is not simply to prepare reports or file returns. Our role is
              to help businesses build the financial architecture required to
              grow with confidence.
            </h3>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-4/3 lg:aspect-auto lg:min-h-100 overflow-hidden">
            <Image
              src="assets/governance/meeting.svg"
              alt="Professional team in a boardroom meeting"
              fill
              className="object-cover hover:scale-110 duration-500 transition"
            />
          </div>
        </div>

        {/* Bottom Row — Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-0">
          {/* Image */}
          <div className="relative w-full aspect-4/3 lg:aspect-auto lg:min-h-100 overflow-hidden order-1 lg:order-0">
            <Image
              src="assets/governance/businessman.svg"
              alt="Confident businessman at his desk"
              fill
              className="object-cover hover:scale-110 duration-500 transition"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center order-0 lg:order-0 md:px-14 pt-10 pb-10">
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Why <span className="text-primary">Nexus</span>
            </h4>
            {/* <h3 className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-6">
              This section should explain the difference between Nexus and a
              standard accounting firm without sounding boastful.
            </h3> */}

            <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">
              Why Clients Work With Nexus
            </h4>
            <h3 className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-4">
              Clients work with Nexus when they require more than routine
              compliance. They usually need clearer reporting, stronger controls,
              defensible tax positions, better systems oversight or cross border
              financial structure.
            </h3>
            <h3 className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Our work is partner led, documented and proportionate to the
              complexity of each engagement. We focus on interpretation,
              governance and disciplined implementation rather than volume
              processing.
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}