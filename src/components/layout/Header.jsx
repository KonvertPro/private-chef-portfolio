import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkCls = ({ isActive }) =>
    `relative transition ${
      isActive
        ? "text-champagne after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-champagne"
        : "text-ink hover:text-champagne"
    }`

  return (
    <header className={`sticky top-0 z-50 border-b bg-canvas/80 backdrop-blur ${scrolled ? "shadow-sm" : ""}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="font-serif text-xl font-semibold" aria-label="Go to homepage">
          ChefName
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-xl border px-3 py-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {["Menus", "Services", "About", "Gallery", "Reviews"].map((item) => (
            <NavLink key={item} to={`/${item.toLowerCase()}`} className={linkCls}>
              {item}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-2xl bg-champagne px-4 py-2 font-medium text-white hover:bg-olive"
          >
            Book
          </NavLink>
        </nav>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav id="mobile-nav" className="md:hidden border-t bg-canvas px-6 py-3">
          <div className="flex flex-col gap-3 text-base">
            {["Menus", "Services", "About", "Gallery", "Reviews"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => (isActive ? "text-champagne" : "text-ink")}
                onClick={() => setOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-2 rounded-2xl bg-champagne px-4 py-2 font-medium text-white hover:bg-olive"
              onClick={() => setOpen(false)}
            >
              Book
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
