import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-14 text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,200,120,0.4), transparent 40%)" }} />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Service Area</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Proudly serving the Emerald Coast</h2>
        </div>
        <ul className="flex flex-wrap justify-center gap-3">
          {BUSINESS.areas.map((a) => (
            <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <MapPin className="h-4 w-4 text-accent" /> {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}