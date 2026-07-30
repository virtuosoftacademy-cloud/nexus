"use client";

import { Dot } from "lucide-react";
import { AboutServiceData } from "../constant";
import { cn } from "@/lib/utils";

export default function AboutService({ introParagraph, listIntro, optionalParagraph, introClassName, serviceAreasTitle, serviceTitleClassName, serviceAreas, closingParagraph, className }: AboutServiceData) {
  return (
    <div className="mx-auto max-w-240 space-y-6 py-10 md:py-20 px-8 text-foreground text-sm md:text-[1.75rem] leading-tight">
      <h2 className="whitespace-pre-line">
        {introParagraph}
      </h2>
      <p className={cn("max-w-full font-heading whitespace-pre-line", introClassName)}>{listIntro}</p>
      <h2 className={cn("whitespace-pre-line", serviceTitleClassName)}>{serviceAreasTitle}</h2>
      <div>
        <ul className="space-y-4 font-serif whitespace-pre-line">
          {serviceAreas?.map((area) => (
            <li key={area.id} className="flex items-center gap-2 text-sm md:text-[1.75rem] leading-px">
              <Dot />{" "}
              {area.description}
            </li>
          ))}
        </ul>
      </div>
      <p className="font-serif">{optionalParagraph}</p>
      <h3 className={cn("text-sm md:text-[1.75rem] whitespace-pre-line", className)}>{closingParagraph}</h3>
    </div>
  );
}