
// components/platforms/PlatformsSection.tsx

import PlatformCard from "@/components/ui/PlatformCard";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { bulletPoints, PlatForm } from "@/app/_constant";

export default function PlatformsSection() {
  return (
    <section className="bg-muted py-20 px-6 sm:px-12">
      <div className="mx-auto max-w-350">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text content ── */}
          <div className="flex flex-col gap-6">

            {/* Heading */}
            <h4 className="text-3xl md:text-[42px] font-bold text-foreground leading-tight">
              We Work Across Every Major{" "}
              <span style={{ color: "var(--primary)" }}>
                Accounting Platform
              </span>
            </h4>

            {/* Body copy */}
            <p className="text-sm text-foreground/70 font-serif leading-relaxed max-w-lg">
              We don&apos;t sell software. We govern it.
              <br />
              Whether you&apos;re migrating to Xero, implementing Sage, or
              evaluating QuickBooks — our role is to ensure the platform serves
              your financial structure, not the other way around. We define the
              requirements, oversee implementation, and validate outputs before
              sign-off.
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 font-serif">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/70">
                  <Check
                    className="h-4 w-4 mt-0.5 shrink-0"
                    style={{ color: "var(--primary)" }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA — secondary variant, p-6 */}
            <div>
              <Button variant="secondary" className="p-6 font-semibold text-sm">
                Speak to an Advisor
              </Button>
            </div>
          </div>

          {/* ── Right: 3×2 platform logo grid ── */}
          <div className="grid grid-cols-3 gap-6">
            {PlatForm.map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}