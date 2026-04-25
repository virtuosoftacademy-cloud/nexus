import { UserPlus, Settings2, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Create your account", desc: "Sign up" },
  { icon: Settings2, title: "Add your properties", desc: "add units." },
  { icon: Rocket, title: "Go live", desc: "Invite tenants, automate rent and start growing your portfolio." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Up and running in minutes
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple three-step process to migrate your entire workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden />

          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center flex flex-col items-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border shadow-soft mb-5">
                <Icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;