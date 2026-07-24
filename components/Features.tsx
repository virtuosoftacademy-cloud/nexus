import { Building2, CreditCard, Wrench, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Property Portfolio",
    desc: "Manage hundreds of units in one place with detailed records, photos and documents.",
  },
  // {
  //   icon: CreditCard,
  //   title: "Automated Payments",
  //   desc: "Collect rent, send reminders and reconcile payments — all automatically, every month.",
  // },
  {
    icon: Wrench,
    title: "Maintenance Hub",
    desc: "Tenants submit requests in seconds. Assign vendors and track work orders in real time.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    desc: "Live occupancy, revenue and performance dashboards to grow your portfolio with data.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-muted-foreground text-lg">
            A focused toolkit built for the modern property manager.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;