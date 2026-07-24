import { Building2, Users, DollarSign, TrendingUp, Home, Wrench, Bell, Search } from "lucide-react";

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto animate-float">
      {/* glow */}
      <div className="absolute -inset-4 bg-gradient-accent opacity-30 blur-3xl rounded-[2rem]" aria-hidden />

      <div className="relative bg-card rounded-2xl border border-border shadow-elegant overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-secondary/70" />
            <span className="w-3 h-3 rounded-full bg-accent" />
          </div>
          <div className="flex-1 mx-4 flex items-center gap-2 px-3 py-1 rounded-md bg-background text-xs text-muted-foreground">
            <Search className="w-3 h-3" />
            <span>nexus.app/dashboard</span>
          </div>
          <Bell className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden sm:flex flex-col gap-1 w-44 p-3 border-r border-border bg-muted/20">
            <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-xs font-medium">
              <Home className="w-3.5 h-3.5" /> Dashboard
            </div>
            {[
              { i: Building2, l: "Properties" },
              { i: Users, l: "Tenants" },
              { i: DollarSign, l: "Payments" },
              { i: Wrench, l: "Maintenance" },
            ].map(({ i: Icon, l }) => (
              <div key={l} className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs text-muted-foreground hover:text-foreground">
                <Icon className="w-3.5 h-3.5" /> {l}
              </div>
            ))}
          </aside>

          {/* Main */}
          <main className="flex-1 p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Overview</h3>
                <p className="text-[10px] text-muted-foreground">April 2026</p>
              </div>
              <div className="text-[10px] px-2 py-1 rounded-full bg-accent/30 text-foreground font-medium">Live</div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "Properties", v: "248", c: "+12%", icon: Building2 },
                { l: "Occupancy", v: "94%", c: "+3%", icon: TrendingUp },
                { l: "Revenue", v: "$82K", c: "+18%", icon: DollarSign },
              ].map(({ l, v, c, icon: Icon }) => (
                <div key={l} className="p-3 rounded-xl bg-background border border-border">
                  <Icon className="w-4 h-4 text-primary mb-2" />
                  <div className="text-base font-bold">{v}</div>
                  <div className="flex items-center justify-between text-[10px] mt-0.5">
                    <span className="text-muted-foreground">{l}</span>
                    <span className="text-primary font-medium">{c}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* chart */}
            <div className="p-3 rounded-xl bg-background border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium">Rent Collection</span>
                <span className="text-[10px] text-muted-foreground">Last 7 months</span>
              </div>
              <div className="flex items-end gap-2 h-20">
                {[40, 65, 50, 80, 70, 95, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-primary-glow" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;