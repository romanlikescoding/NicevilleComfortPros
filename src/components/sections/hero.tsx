import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Phone, Star, ShieldCheck, Clock4 } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import heroImg from "@/assets/hero-technician.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="HVAC technician servicing an outdoor AC unit at a Florida home"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(110deg, oklch(0.22 0.12 255 / 0.92) 0%, oklch(0.30 0.14 255 / 0.78) 45%, oklch(0.22 0.12 255 / 0.40) 100%)" }} />

      <div className="mx-auto flex max-w-7xl flex-col px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8 lg:pb-40 lg:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/95 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-md">
            <Star className="h-3.5 w-3.5 fill-current" /> {BUSINESS.reviews} Five-Star Reviews
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Niceville's Trusted <span className="text-accent">Heating &amp; Air</span> Experts
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">
            Same-day AC repair, expert installations and honest pricing across the Emerald Coast.
            Comfort built for Florida heat &mdash; from your neighbors in Niceville.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
              <Link to="/contact">Schedule Service</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <a href={BUSINESS.phoneHref}>
                <Phone className="h-5 w-5" /> Call Now: {BUSINESS.phone}
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
            <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Licensed &amp; Insured</li>
            <li className="inline-flex items-center gap-2"><Clock4 className="h-4 w-4 text-accent" /> Same-Day Appointments</li>
            <li className="inline-flex items-center gap-2"><Star className="h-4 w-4 fill-accent text-accent" /> 5.0 Google Rating</li>
          </ul>
        </div>
      </div>
    </section>
  );
}