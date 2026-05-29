import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyUs } from "@/components/sections/why-us";
import { ServiceArea } from "@/components/sections/service-area";
import { Testimonials } from "@/components/sections/testimonials";
import { MaintenanceCta } from "@/components/sections/maintenance-cta";
import { Booking } from "@/components/sections/booking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HVAC Niceville FL | Heating & Air Conditioning Services" },
      { name: "description", content: "Niceville's trusted HVAC contractor. AC repair, installation, heating & maintenance across Niceville, Crestview, Fort Walton Beach & Destin. Call (850) 634-1179." },
      { property: "og:title", content: "Niceville's Trusted Heating & Air Conditioning Experts" },
      { property: "og:description", content: "Same-day AC repair, expert installs and honest pricing across the Emerald Coast." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <ServiceArea />
      <Testimonials />
      <MaintenanceCta />
      <Booking />
    </>
  );
}
