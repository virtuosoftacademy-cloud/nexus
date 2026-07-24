'use client'
import { CoreServices } from "@/app/_constant";
import CoreServiceCard from "@/components/ui/CoreServiceCard";
import { Button } from "@/components/ui/button";

export default function CoreServicesSection() {
  return (
    <section
      className="py-16 px-6 sm:px-12 bg-primary"
      id="coreservices"
    >
      <div className="mx-auto px-4">

        {/* Heading */}
        <h4 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Core Services
        </h4>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CoreServices.map((service) => (
            <CoreServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <Button variant="secondary">
          View All Services
        </Button>

      </div>
    </section>
  );
}