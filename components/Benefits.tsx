import { Clock, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 15+ hours a week",
    desc: "Automate the busywork — leases, payments, reminders — and focus on growing your portfolio.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & compliant",
    desc: "SOC 2 Type II certified with end-to-end encryption. Your data and your tenants' data stay safe.",
  },
  {
    icon: Sparkles,
    title: "Loved by tenants",
    desc: "A polished tenant portal that makes paying rent and submitting requests effortless.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Benefits</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built to make a real difference
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-8 rounded-2xl bg-card border border-border shadow-soft text-center hover:shadow-elegant transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-5">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;