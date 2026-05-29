import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/sections/services-grid";
import { MaintenanceCta } from "@/components/sections/maintenance-cta";
import { ServiceArea } from "@/components/sections/service-area";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "HVAC Services in Niceville, FL | AC Repair, Installation & Maintenance" },
      { name: "description", content: "Full-service HVAC contractor in Niceville, FL. AC & heating repair, installation, maintenance plans and indoor air quality across the Emerald Coast." },
      { property: "og:title", content: "HVAC Services in Niceville, FL" },
      { property: "og:description", content: "AC repair, installation, heating, tune-ups and indoor air quality." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">HVAC done right, the first time</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every service includes upfront pricing, factory-trained technicians and a workmanship guarantee.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <ServiceArea />
      <MaintenanceCta />
    </>
  );
}