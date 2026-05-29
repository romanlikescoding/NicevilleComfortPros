import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const serviceTypes = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "Heating Installation",
  "Maintenance & Tune-Up",
  "Indoor Air Quality",
  "Other",
];

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-primary-soft/60 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Book a visit</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Request service in minutes</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us what's going on and we'll be in touch fast. For emergencies, call us directly.
          </p>

          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white"><MapPin className="h-5 w-5" /></span>
              <div>
                <p className="font-semibold text-foreground">Visit us</p>
                <p className="text-muted-foreground">{BUSINESS.fullAddress}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white"><Phone className="h-5 w-5" /></span>
              <div>
                <p className="font-semibold text-foreground">Call us</p>
                <a href={BUSINESS.phoneHref} className="text-primary hover:underline">{BUSINESS.phone}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white"><Clock className="h-5 w-5" /></span>
              <div>
                <p className="font-semibold text-foreground">Hours</p>
                {BUSINESS.hours.map((h) => (
                  <p key={h.d} className="text-muted-foreground">{h.d}: {h.t}</p>
                ))}
              </div>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Map to Heating and Air Conditioning Services in Niceville, FL"
              src="https://www.google.com/maps?q=1157+E+John+Sims+Pkwy,+Niceville,+FL+32578&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Request received</h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Thanks! We'll reach out within the hour during business hours. Need it sooner? Call {BUSINESS.phone}.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" required placeholder="Jane Doe" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required placeholder="(850) 555-0100" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="service">Service type</Label>
                <select
                  id="service"
                  required
                  defaultValue=""
                  className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="" disabled>Select a service…</option>
                  {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" rows={4} placeholder="Tell us about the issue or service you need…" className="mt-1.5" />
              </div>
              <Button type="submit" variant="cta" size="xl" className="w-full">
                Request Appointment
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your request.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}