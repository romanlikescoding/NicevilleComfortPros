import { ShieldCheck, Clock4, BadgeDollarSign, Sun } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Florida-licensed technicians and full insurance on every job." },
  { icon: Clock4, title: "Same-Day Service", desc: "Rapid response across Niceville and surrounding Okaloosa County." },
  { icon: BadgeDollarSign, title: "Transparent Pricing", desc: "Flat-rate quotes up front — no surprises after the work is done." },
  { icon: Sun, title: "Florida Climate Experts", desc: "We design every system for Gulf Coast heat and humidity." },
];

export function WhyUs() {
  return (
    <section className="bg-primary-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why homeowners choose us</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Built on trust. Backed by results.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white p-6 text-center shadow-[var(--shadow-card)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-deep text-white shadow-md">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}