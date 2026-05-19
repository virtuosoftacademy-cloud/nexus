import { StatsData } from "../constant";

interface StatsSectionProps {
  data: StatsData[];
}

export default function ServicesStats({ data }: StatsSectionProps) {
  if (!data?.length) return null;

  return (
    <section className="bg-muted py-8 px-6 sm:px-12">
      <div className="mx-auto max-w-350">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-center md:justify-between">
          {data.map((stat, index) => (
            <div key={stat.id} className="flex flex-col md:flex-row items-center gap-3 py-2">

              {/* Divider — only between items, not before the first */}
              {index !== 0 && (
                <div className={`h-16 w-px bg-primary ${stat.size} hidden sm:block`} />
              )}

              {/* Value + icon */}
              <div className="flex items-end leading-none">
                <span className="text-4xl md:text-[4rem] font-bold text-primary md:whitespace-pre">
                  {stat.value}
                </span>
                {stat.icon && (
                  <span className="text-3xl md:text-4xl font-bold mb-1 ml-0.5 text-primary">
                    {stat.icon}
                  </span>
                )}
              </div>

              {/* Label */}
              <div>
                <h4 className="text-sm md:text-base text-foreground/70 leading-snug max-w-30">
                  {stat.label}
                </h4>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}