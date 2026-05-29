import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function MaintenanceCta() {
  return (
    <section className="relative overflow-hidden py-20 text-white sm:py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent" /> Seasonal Maintenance Plan
        </span>
        <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">Protect Your System Year-Round</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
          Florida's heat and humidity push HVAC systems harder than almost anywhere in the country.
          Our seasonal plan keeps your equipment running efficiently, prevents costly breakdowns,
          and extends the life of your system.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="cta" size="xl">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/services">View Plan Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}