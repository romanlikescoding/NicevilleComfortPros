import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Award, Heart } from "lucide-react";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Niceville's Local HVAC Contractor" },
      { name: "description", content: "Locally owned HVAC contractor serving Niceville, FL and the Emerald Coast with honest pricing, expert technicians and a five-star reputation." },
      { property: "og:title", content: "About — Heating and Air Conditioning Services" },
      { property: "og:description", content: "Family-trusted HVAC pros, built for Florida's climate." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity first", desc: "We recommend what your system actually needs — never more." },
  { icon: Users, title: "Local & personal", desc: "Niceville-based, family-run, and proud of our neighbors." },
  { icon: Award, title: "Trained experts", desc: "Continual training on the latest high-efficiency systems." },
  { icon: Heart, title: "Comfort obsessed", desc: "Your home comfort is the only result that matters to us." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft to-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Your neighbors in comfort</h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Heating and Air Conditioning Services has kept Niceville and the Emerald Coast cool through
            Florida summers and warm through chilly Gulf mornings. Our team blends old-school craftsmanship
            with modern, energy-efficient equipment — and prices everything up front.
          </p>
          <div className="mt-8">
            <Button asChild variant="cta" size="xl"><Link to="/contact">Book a Visit</Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary"><v.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyUs />
      <Testimonials />
    </>
  );
}