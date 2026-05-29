import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Snowflake } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <Snowflake className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-primary-deep sm:text-base">Heating &amp; Air</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Niceville, FL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <Button asChild variant="cta" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Schedule Service</Link>
          </Button>
          <a
            href={BUSINESS.phoneHref}
            aria-label="Call now"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground sm:hidden"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="lg" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Schedule Service</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}