
export default function Hero() {

  return (
    <section className="relative overflow-hidden -z-20 flex items-center">

      {/* Background image — dynamic per service */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/assets/bg-img-service6.png)` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className={`relative w-full px-6 sm:px-12 pb-14 md:pb-24 pt-30 md:pt-80`}>
        <div className="flex flex-col text-center md:text-left px-4">

          {/* Heading */}
          <h4 className="text-2xl md:text-[3.5rem] font-medium text-white md:-mt-30">
            Case Studies
          </h4>

        </div>
      </div>
    </section>
  );
}