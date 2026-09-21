"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/site";

const navLinks = [
  { label: "Studio", href: withBasePath("/#about") },
  { label: "Work", href: withBasePath("/#portfolio") },
  { label: "Services", href: withBasePath("/#services") },
  { label: "Contact", href: withBasePath("/#contact") },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-charcoal/10 bg-warm-white/92 shadow-[0_10px_40px_rgba(16,40,36,0.07)] backdrop-blur-xl"
          : "border-charcoal/8 bg-warm-white"
      }`}
    >
      <nav className="section-shell flex min-h-[76px] items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="The Córdova Studio home"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-charcoal/10 bg-[#eee8df] transition-transform duration-300 group-hover:-translate-y-0.5">
            <Image
              src={withBasePath("/images/logo.png")}
              alt=""
              width={637}
              height={480}
              priority
              className="h-[30px] w-auto object-contain"
            />
          </span>
          <span>
            <span className="block font-serif text-lg leading-none tracking-[-0.02em] text-charcoal">
              The Córdova Studio
            </span>
            <span className="mt-1.5 hidden text-[0.56rem] uppercase tracking-[0.24em] text-muted sm:block">
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
                  className="relative py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-charcoal/72 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-charcoal hover:after:origin-left hover:after:scale-x-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={withBasePath("/#contact")}
            className="rounded-full bg-studio-green px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-warm-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Inquire
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-charcoal/15 text-charcoal md:hidden"
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
          menuOpen ? "max-h-[calc(100svh-76px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell py-8">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-charcoal/10 py-5 font-serif text-2xl text-charcoal"
                >
                  {link.label}
                  <span className="font-sans text-[0.65rem] tracking-[0.18em] text-muted">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-6 text-muted">
            Walnut Creek, California<br />
            Serving the San Francisco Bay Area
          </p>
        </div>
      </div>
    </header>
  );
}
