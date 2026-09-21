"use client";

import { useReveal } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-studio-green">
      <img
        src={withBasePath("/images/hero-bg.jpg")}
        alt="A warmly styled living room by The Córdova Studio"
        className="absolute inset-0 h-full w-full object-cover object-center animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,24,0.94)_0%,rgba(8,28,24,0.78)_38%,rgba(8,28,24,0.22)_72%,rgba(8,28,24,0.08)_100%)] max-md:bg-[linear-gradient(180deg,rgba(8,28,24,0.78)_0%,rgba(8,28,24,0.48)_42%,rgba(8,28,24,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,16,0.05),rgba(7,18,16,0.42))]" />

      <div className="section-shell relative z-10 flex min-h-[calc(100svh-76px)] items-end pb-28 pt-24 md:items-center md:pb-28 md:pt-28">
        <div ref={ref} className="fade-in max-w-[47rem]">
          <p className="eyebrow text-accent-light">
            Interior Architecture &amp; Design
          </p>
          <h1 className="mt-7 font-serif text-[clamp(3.6rem,8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.045em] text-warm-white">
            Spaces shaped
            <span className="block pl-[0.6em] italic text-accent-light">
              for living well.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-base font-light leading-7 text-warm-white/76 md:text-lg">
            Thoughtful interiors grounded in natural materials, intuitive
            function, and a quiet sense of place.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-warm-white px-6 text-xs font-medium uppercase tracking-[0.18em] text-studio-green transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-white"
            >
              Explore selected work
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-full border border-warm-white/35 px-6 text-xs font-medium uppercase tracking-[0.18em] text-warm-white transition-all duration-300 hover:-translate-y-0.5 hover:border-warm-white hover:bg-warm-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-white"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-warm-white/15 bg-studio-green/45 backdrop-blur-md">
        <div className="section-shell flex min-h-16 items-center justify-between gap-6 text-[0.68rem] uppercase tracking-[0.2em] text-warm-white/60">
          <span>Walnut Creek, California</span>
          <span className="hidden sm:inline">Serving the San Francisco Bay Area</span>
          <a href="#about" className="transition-colors hover:text-accent-light">
            Discover the studio ↓
          </a>
        </div>
      </div>
    </section>
  );
}
