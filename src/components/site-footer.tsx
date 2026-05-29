import { Link } from "@tanstack/react-router";
import { Snowflake, Phone, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
              <Snowflake className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold">{BUSINESS.name}</p>
              <p className="text-xs uppercase tracking-wider text-white/60">Emerald Coast HVAC</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Family-trusted heating and air conditioning service across Niceville and the
            Emerald Coast. Built for Florida's climate, priced with honesty.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{BUSINESS.fullAddress}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href={BUSINESS.phoneHref} className="hover:text-white">{BUSINESS.phone}</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>
              {BUSINESS.hours.map((h) => (
                <span key={h.d} className="block">{h.d}: {h.t}</span>
              ))}
            </span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Licensed &amp; Insured in Florida.</p>
          <p>Serving Okaloosa County and the Emerald Coast.</p>
        </div>
      </div>
    </footer>
  );
}