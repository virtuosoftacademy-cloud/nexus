'use client'
import { HeroData} from "@/app/types/types";

export default function Hero({ title, description, image, width }:HeroData) {

  return (
    <section className="relative overflow-hidden -z-20 flex items-center">

      {/* Background image — dynamic per service */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className={`relative w-full px-6 lg:px-12 pb-10 md:pb-20 pt-30 md:pt-40 ${width}`}>
        <div className="flex flex-col text-center sm:text-center lg:text-left px-4 space-y-2 md:space-y-0">

          {/* Heading */}
          <h4 className="text-2xl md:text-[3.5rem] font-medium text-white leading-6 md:leading-tight">
            {title}
          </h4>

          {/* Subtitle */}
          <p className="text-xs md:text-base text-accent leading-tight max-w-[54em]">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
}