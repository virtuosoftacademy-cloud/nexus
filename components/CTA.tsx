import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-16 sm:py-24 text-center">
          {/* glow accents */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" aria-hidden />

          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Ready to transform how you manage property?
            </h2>
            <p className="text-lg text-dark-foreground/70 mb-10 max-w-xl mx-auto">
              Join thousands of property managers who switched to Nexus. Free 14-day trial. No credit card needed.
            </p>
            <Button size="xl">
              Start your free trial <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;