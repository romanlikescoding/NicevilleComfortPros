import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/sections/booking";
import { ServiceArea } from "@/components/sections/service-area";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Schedule HVAC Service in Niceville, FL" },
      { name: "description", content: "Schedule HVAC service in Niceville, FL. Call (850) 634-1179 or request an appointment online. Serving Niceville, Crestview, Fort Walton Beach and Destin." },
      { property: "og:title", content: "Schedule HVAC Service in Niceville, FL" },
      { property: "og:description", content: "Same-day appointments. Honest pricing. Call (850) 634-1179." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft to-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Let's get your comfort back</h1>
          <p className="mt-4 text-muted-foreground">
            Reach out for fast service across Niceville and the Emerald Coast.
          </p>
        </div>
      </section>
      <Booking />
      <ServiceArea />
    </>
  );
}