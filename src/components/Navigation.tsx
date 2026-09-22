"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { withBasePath } from "@/lib/site";

const navLinks = [
  { label: "Studio", href: withBasePath("/#about") },
  { label: "Work", href: withBasePath("/#portfolio") },
  { label: "Services", href: withBasePath("/#services") },
  { label: "Contact", href: withBasePath("/#contact") },
];

// Next's Link component applies the configured basePath automatically.
const clientAccessHref = "/client-access";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/" || pathname === withBasePath("/");
  const isSolid = !isHome || scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {!isHome && <div aria-hidden="true" className="h-[116px]" />}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          isSolid
            ? "border-charcoal/10 bg-warm-white shadow-[0_10px_40px_rgba(16,40,36,0.07)]"
            : "border-warm-white/18 bg-transparent"
        }`}
      >
      <nav className="section-shell flex min-h-[116px] items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="The Córdova Studio home"
        >
          <span className="flex h-[62px] w-[84px] items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-[86px] sm:w-[120px]">
            <Image
              src={withBasePath("/images/logo.png")}
              alt=""
              width={637}
              height={480}
              priority
              className={`h-full w-full object-contain ${isSolid ? "" : "logo-on-hero drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"}`}
            />
          </span>
          <span>
            <span className={`block font-serif text-[1.12rem] leading-none tracking-[-0.025em] transition-colors duration-500 sm:text-[1.45rem] md:text-[1.65rem] ${isSolid ? "text-charcoal" : "text-warm-white"}`}>
              The Córdova Studio
            </span>
            <span className={`mt-2 hidden whitespace-nowrap text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-500 sm:block ${isSolid ? "text-muted" : "text-warm-white/68"}`}>
              Interior Architecture &amp; Design
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${isSolid ? "text-charcoal/72 hover:text-charcoal" : "text-warm-white/78 hover:text-warm-white"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href={clientAccessHref}
              className={`rounded-full border px-4 py-3 text-[0.62rem] font-medium uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${isSolid ? "border-studio-green/35 text-studio-green hover:border-studio-green hover:bg-studio-green hover:text-warm-white" : "border-warm-white/50 text-warm-white hover:border-warm-white hover:bg-warm-white hover:text-studio-green"}`}
            >
              Client Access
            </Link>
            <a
              href={withBasePath("/#contact")}
              className={`rounded-full px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${isSolid ? "bg-studio-green text-warm-white hover:bg-charcoal" : "bg-warm-white text-studio-green hover:bg-accent-light"}`}
            >
              Inquire
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border transition-colors duration-500 md:hidden ${isSolid ? "border-charcoal/15 text-charcoal" : "border-warm-white/45 text-warm-white"}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-5 bg-current transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-current transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-charcoal/10 bg-warm-white shadow-[0_24px_60px_rgba(16,40,36,0.12)] transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-[calc(100svh-116px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell py-8">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-charcoal/10 py-5 font-serif text-2xl text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-6 text-muted">
            Walnut Creek, California<br />
            Serving the San Francisco Bay Area
          </p>
          <Link
            href={clientAccessHref}
            onClick={() => setMenuOpen(false)}
            className="mt-7 inline-flex rounded-full border border-studio-green/25 px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-studio-green"
          >
            Client Access
          </Link>
        </div>
      </div>
      </header>
    </>
  );
}
