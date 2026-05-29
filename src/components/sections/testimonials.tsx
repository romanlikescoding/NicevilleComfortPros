import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Jessica", text: "Came out same day, fixed our AC in under an hour, and the price matched the quote exactly. Best HVAC experience we've had in Niceville.", rating: 5 },
  { name: "Marcus", text: "Professional, on time, and respectful of our home. Replaced our system and we've already seen lower power bills.", rating: 5 },
  { name: "Diana", text: "Honest team — they could have sold us a whole new unit but fixed the issue instead. Customers for life.", rating: 5 },
  { name: "Tyler", text: "Tune-up plan is worth every penny. They catch small things before they become Florida-summer disasters.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Reviews</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Loved by Emerald Coast homeowners</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">5.0 from 46 Google reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl border border-border bg-primary-soft/40 p-6 shadow-[var(--shadow-card)]">
              <Quote className="h-6 w-6 text-primary/40" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">"{r.text}"</blockquote>
              <figcaption className="mt-5">
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-1 text-sm font-semibold text-primary-deep">— {r.name}, Niceville</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}