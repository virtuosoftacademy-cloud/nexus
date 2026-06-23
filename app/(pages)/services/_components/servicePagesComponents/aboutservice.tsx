"use client";

import { ServiceArea, AboutServiceData } from "../../constant";

interface AboutServiceProps {
  data: AboutServiceData;
}

export default function AboutService({ data }: AboutServiceProps) {
  if (!data) return null;

  const { introParagraph, listIntro, serviceAreas, closingParagraph } = data;

  return (
    <div className="mx-auto max-w-240 space-y-6 py-10 md:py-18 px-8 text-foreground text-sm md:text-[1.75rem] leading-relaxed font-serif">

      <p className="whitespace-pre-line">
        {introParagraph}
      </p>

      <p>{listIntro}</p>

      <div>
        <ul className="list-disc space-y-4">
          {serviceAreas.map((area: ServiceArea) => (
            <li key={area.id} className="md:ml-8 text-sm md:text-[1.75rem] leading-relaxed">
              <strong>{area.title}.</strong>{" "}
              {area.description}
            </li>
          ))}
        </ul>
      </div>

      <p>{closingParagraph}</p>
    </div>
  );
}