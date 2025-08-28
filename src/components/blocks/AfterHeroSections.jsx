import React from "react";
import { Link } from "react-router-dom";

/*
  Sections to drop directly under the hero on the Home page.
  Tailwind v4, JavaScript, minimal and conversion-focused.

  Exports:
  - <AfterHero /> composite wrapper
  - Individual blocks: TrustBar, MenuPreview, ServicesGrid, ProcessSteps, FeaturedReview, Coverage, FinalCTA
*/

// 1) Trust bar — replace text badges with logos/certifications if available
export function TrustBar() {
  const items = [
    "Food Hygiene ⭐⭐⭐⭐⭐",
    "Fully Insured",
    "Plant-forward Options",
    "Sustainable Sourcing",
  ];
  return (
    <section className="border-y bg-[color:var(--color-canvas)]/70 py-6">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 px-6 md:gap-8">
        {items.map((t) => (
          <div key={t} className="text-xs tracking-wide text-muted">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

// 2) Signature menus preview (3 cards)
export function MenuPreview() {
  const menus = [
    {
      id: "tasting-6",
      title: "Seasonal Tasting",
      blurb: "Six courses showcasing peak produce.",
      from: 95,
      href: "/menus",
    },
    {
      id: "family-style",
      title: "Family-style Feast",
      blurb: "Relaxed sharing plates for the table.",
      from: 55,
      href: "/menus",
    },
    {
      id: "canapes",
      title: "Event Canapés",
      blurb: "Elegant bites for receptions and launches.",
      from: 22,
      href: "/menus",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Signature Menus</h2>
        <p className="mt-2 text-muted">Seasonal, ingredient-led. Dietary requirements welcomed.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {menus.map((m) => (
          <article key={m.id} className="rounded-3xl border p-6">
            <h3 className="font-serif text-2xl">{m.title}</h3>
            <p className="mt-2 text-muted">{m.blurb}</p>
            <div className="mt-4 text-sm">From £{m.from} pp</div>
            <Link to={`${m.href}?menu=${m.id}`} className="mt-6 inline-block rounded-2xl bg-champagne px-4 py-2 text-white hover:bg-olive">
              View menu
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

// 3) Services snapshot (4 tiles)
export function ServicesGrid() {
  const services = [
    { k: "private", title: "Private Dining", copy: "At-home restaurant experience for 2–20 guests.", href: "/services" },
    { k: "events", title: "Corporate & Events", copy: "Launches, press dinners, away days.", href: "/events" },
    { k: "weekly", title: "Weekly Meal Prep", copy: "Balanced, bespoke menus cooked in your kitchen.", href: "/services" },
    { k: "retreats", title: "Retreats & Weekends", copy: "Multi-day cooking with seasonal produce.", href: "/services" },
  ];
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Services</h2>
        <p className="mt-2 text-muted">Tailored to your occasion and kitchen.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link key={s.k} to={s.href} className="group rounded-3xl border p-6 transition hover:bg-ink hover:text-white">
            <h3 className="font-serif text-xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted group-hover:text-[color:var(--color-canvas)]/80">{s.copy}</p>
            <span className="mt-4 inline-block text-sm underline">Learn more</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// 4) Simple 4-step process
export function ProcessSteps() {
  const steps = [
    { n: 1, t: "Enquiry", d: "Share date, location, guests, preferences." },
    { n: 2, t: "Menu Design", d: "We propose a seasonal menu to suit your brief." },
    { n: 3, t: "On the Day", d: "Cooking, service, and spotless cleanup." },
    { n: 4, t: "Aftercare", d: "Leftovers boxed, reheating notes provided." },
  ];
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">How it works</h2>
      </header>
      <ol className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="rounded-3xl border p-6">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm">{s.n}</div>
            <h3 className="mt-3 font-serif text-xl">{s.t}</h3>
            <p className="mt-2 text-sm text-muted">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// 5) Featured review
export function FeaturedReview() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="rounded-3xl border p-8 md:p-12">
        <p className="text-lg md:text-xl">“An unforgettable evening — every dish was immaculate and the kitchen was cleaner than when they arrived.”</p>
        <div className="mt-4 text-sm text-muted">— Alexandra M., Birthday dinner for 10</div>
      </div>
    </section>
  );
}

// 6) Coverage / Areas served
export function Coverage() {
  const areas = ["London", "Surrey", "Buckinghamshire", "Berkshire", "Oxfordshire"];
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <header className="mb-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Areas Served</h2>
        <p className="mt-2 text-muted">Travel beyond on request.</p>
      </header>
      <div className="flex flex-wrap justify-center gap-2">
        {areas.map((a) => (
          <span key={a} className="rounded-full border px-4 py-2 text-sm">{a}</span>
        ))}
      </div>
    </section>
  );
}

// 7) Final call-to-action
export function FinalCTA() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-28">
      <div className="rounded-3xl border p-10 text-center md:p-14">
        <h2 className="font-serif text-3xl md:text-4xl">Check availability</h2>
        <p className="mt-2 text-muted">Tell me your date, location and guest count — I’ll reply promptly.</p>
        <Link to="/contact" className="mt-6 inline-block rounded-2xl bg-champagne px-6 py-3 font-medium text-white hover:bg-olive">
          Enquire now
        </Link>
      </div>
    </section>
  );
}

// Composite wrapper for convenience
export default function AfterHero() {
  return (
    <>
      <TrustBar />
      <MenuPreview />
      <ServicesGrid />
      <ProcessSteps />
      <FeaturedReview />
      <Coverage />
      <FinalCTA />
    </>
  );
}
