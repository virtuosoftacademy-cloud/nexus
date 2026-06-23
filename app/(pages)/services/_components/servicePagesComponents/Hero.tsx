import { HeroData } from "../../constant";

interface HeroSectionProps {
  data: HeroData;
}

export default function Hero({ data }: HeroSectionProps) {
  if (!data) return null;

  const { title, description, image, width } = data;

  return (
    <section className="relative overflow-hidden -z-20 flex items-center -mt-26">

      {/* Background image — dynamic per service */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className={`relative w-full px-6 sm:px-14 pb-20 pt-30 md:pt-40 ${width}`}>
        <div className="flex flex-col text-center md:text-left">

          {/* Heading */}
          <h4 className="text-4xl md:text-[3.5rem] font-medium text-white md:leading-tight">
            {title}
          </h4>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-accent leading-tight max-w-5xl">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
}