import { Wrench, Wind, Flame, Snowflake, ClipboardCheck, Leaf, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  { icon: Wrench, title: "AC Repair", desc: "Fast diagnostics and lasting fixes when your system quits in the Florida heat." },
  { icon: Snowflake, title: "AC Installation", desc: "High-efficiency systems sized right for your home and the Gulf Coast humidity." },
  { icon: Flame, title: "Heating Repair", desc: "Quick winter response for heat pumps, furnaces and ductless systems." },
  { icon: Wind, title: "Heating Installation", desc: "Modern, energy-smart heating upgrades with transparent flat-rate pricing." },
  { icon: ClipboardCheck, title: "Maintenance & Tune-Ups", desc: "Seasonal tune-ups that extend system life and protect your warranty." },
  { icon: Leaf, title: "Indoor Air Quality", desc: "Filtration, UV and dehumidifier solutions for fresher, healthier Florida air." },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Complete HVAC services for the Emerald Coast</h2>
          <p className="mt-3 text-base text-muted-foreground">From emergency repairs to whole-home installations, we keep Niceville comfortable year-round.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
              >
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}