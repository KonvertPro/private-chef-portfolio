import React from "react"
import AfterHero, { TrustBar } from "@/components/blocks/AfterHeroSections"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-4xl md:text-6xl">
          Private Dining, Perfected
        </h1>
        <p className="mt-4 text-lg text-muted">
          Michelin-trained private chef for homes & events.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/contact"
            className="rounded-2xl bg-champagne px-6 py-3 font-semibold text-white hover:bg-olive"
          >
            Check availability
          </a>
          <a
            href="/menus"
            className="rounded-2xl border border-ink px-6 py-3 font-semibold text-ink hover:bg-ink hover:text-white"
          >
            View menus
          </a>
        </div>
      </section>

      {/* The rest: Signature Menus, Services, Process, Review, Areas, Final CTA */}
      <AfterHero />
    </>
  )
}
