// components/industries/IndustriesSection.tsx

import IndustryCard from "@/components/ui/IndustryCard";
import { Industries } from "@/app/_constant";

export default function IndustriesSection() {
  return (
    <section className="bg-background py-12 px-6 sm:px-12">
      <div className="mx-auto max-w-350">

        {/* ── Heading ── */}
        <h4 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Industries{" "}
          <span className="text-primary">We Serve</span>
        </h4>

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>

      </div>
    </section>
  );
}