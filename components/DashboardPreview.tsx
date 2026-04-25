import { Check } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const points = [
  "Real-time occupancy and revenue insights",
  "One-click rent collection with auto reminders",
  "Tenant portal & maintenance requests built in",
  "Bank-grade security and full audit trail",
];

const DashboardPreview = () => {
  return (
    <section id="preview" className="py-20 lg:py-28">
      <div className="max-w-7xl m-auto px-6 md:px-0 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <DashboardMockup />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Product preview</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            One dashboard. <br className="hidden sm:block" />
            <span className="text-gradient-primary">Everything in view.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Stop juggling spreadsheets and disconnected tools. Nexus brings every property, tenant and payment together in a single, beautiful workspace.
          </p>
          <ul className="space-y-3 pt-2">
            {points.map(p => (
              <li key={p} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;