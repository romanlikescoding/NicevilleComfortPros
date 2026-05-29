import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function FloatingCall() {
  return (
    <a
      href={BUSINESS.phoneHref}
      aria-label={`Call ${BUSINESS.phone}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] transition-transform hover:scale-105 active:scale-95 md:hidden"
    >
      <Phone className="h-4 w-4" />
      Call Now
    </a>
  );
}