import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// Minimal, production-friendly Menus page for Tailwind v4 (JavaScript)
// - Filter tabs (Tasting / Canapés / Family-style / All)
// - Menu cards with dish highlights + dietary badges
// - "From £X pp" price anchors
// - CTA routes to /contact with prefilled query
// - Accessibility + keyboard support

const CATEGORIES = ["All", "Tasting", "Canapés", "Family-style"];

const BADGE_STYLES = {
  V: "bg-olive/10 text-olive border-olive/30",
  Ve: "bg-olive/10 text-olive border-olive/30",
  GF: "bg-champagne/10 text-ink border-champagne/30",
  DF: "bg-champagne/10 text-ink border-champagne/30",
  NF: "bg-line text-ink border-line",
};

function DietaryBadge({ label }) {
  const cls = BADGE_STYLES[label] || "bg-line text-ink border-line";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${cls}`}>
      {label}
    </span>
  );
}

const MENUS = [
  {
    id: "tasting-6",
    category: "Tasting",
    title: "Seasonal Tasting — Six Courses",
    priceFrom: 95,
    dishes: [
      "Hand-dived scallop, brown butter, lemon",
      "Wild garlic gnudi, parmesan custard",
      "Aged beef, charred leek, red wine jus",
    ],
    badges: ["GF"],
  },
  {
    id: "tasting-4",
    category: "Tasting",
    title: "Tasting — Four Courses",
    priceFrom: 75,
    dishes: [
      "Beetroot tartare, horseradish, rye",
      "Corn-fed chicken, confit potato, salsa verde",
      "Dark chocolate delice, crème fraîche",
    ],
    badges: ["V", "GF"],
  },
  {
    id: "canapes-classic",
    category: "Canapés",
    title: "Classic Canapés (8 per guest)",
    priceFrom: 22,
    dishes: [
      "Smoked salmon blini, crème fraîche",
      "Goat's cheese tartlet, caramelised onion",
      "Truffle arancini, pecorino",
    ],
    badges: ["Ve"],
  },
  {
    id: "canapes-luxe",
    category: "Canapés",
    title: "Luxe Canapés (12 per guest)",
    priceFrom: 32,
    dishes: [
      "Lobster roll bite, dill mayo",
      "Beef tartare on toast, cured yolk",
      "Caviar, potato crisp, crème fraîche",
    ],
    badges: ["GF"],
  },
  {
    id: "family-comfort",
    category: "Family-style",
    title: "Family-style Comfort Feast",
    priceFrom: 55,
    dishes: [
      "Whole roasted chicken, lemon & thyme",
      "Seasonal greens, almond pangrattato",
      "Vanilla panna cotta, macerated berries",
    ],
    badges: ["GF"],
  },
  {
    id: "family-veg",
    category: "Family-style",
    title: "Plant-forward Shared Menu",
    priceFrom: 49,
    dishes: [
      "Roasted squash, miso glaze, sesame",
      "Charred broccoli, romesco, almonds",
      "Olive oil cake, citrus, pistachio",
    ],
    badges: ["Ve", "DF"],
  },
];

function useFilteredMenus(category) {
  return useMemo(() => {
    if (!category || category === "All") return MENUS;
    return MENUS.filter((m) => m.category === category);
  }, [category]);
}

function MenuCard({ menu }) {
  return (
    <article className="group rounded-3xl border p-6 transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-2xl">{menu.title}</h3>
        <div className="shrink-0 rounded-full border px-3 py-1 text-sm">From £{menu.priceFrom} pp</div>
      </div>
      <ul className="mt-4 space-y-2 text-muted">
        {menu.dishes.map((d, i) => (
          <li key={i} className="list-disc pl-5">{d}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {menu.badges.map((b) => (
          <DietaryBadge key={b} label={b} />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-muted">{menu.category}</span>
        <Link
          to={`/contact?menu=${encodeURIComponent(menu.id)}&title=${encodeURIComponent(menu.title)}`}
          className="rounded-2xl bg-champagne px-4 py-2 text-white hover:bg-olive"
          aria-label={`Request ${menu.title}`}
        >
          Request this menu
        </Link>
      </div>
    </article>
  );
}

export default function Menus() {
  const [active, setActive] = useState("All");
  const list = useFilteredMenus(active);

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <header className="mb-10 md:mb-14">
        <h1 className="font-serif text-4xl md:text-5xl">Menus</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Seasonal, ingredient-led menus designed for private dining, events, and relaxed family-style service. Dietary requirements happily accommodated.
        </p>

        {/* Filters */}
        <div role="tablist" aria-label="Menu categories" className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === cat ? "bg-ink text-white" : "bg-canvas text-ink hover:bg-ink/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-3xl border p-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl">Looking for something bespoke?</h2>
        <p className="mt-2 text-muted">Share your brief and I’ll craft a custom menu for your occasion.</p>
        <Link to="/contact" className="mt-6 inline-block rounded-2xl border border-ink px-6 py-3 font-medium hover:bg-ink hover:text-white">
          Start a custom brief
        </Link>
      </div>
    </section>
  );
}
