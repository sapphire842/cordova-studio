"use client";

import { useReveal } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-studio-green">
      <img
        src={withBasePath("/images/hero-bg.jpg")}
        alt="A warmly styled living room by The Córdova Studio"
        className="absolute inset-0 h-full w-full object-cover object-center animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,24,0.96)_0%,rgba(8,28,24,0.82)_34%,rgba(8,28,24,0.26)_68%,rgba(8,28,24,0.08)_100%)] max-md:bg-[linear-gradient(180deg,rgba(8,28,24,0.76)_0%,rgba(8,28,24,0.38)_38%,rgba(8,28,24,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,16,0.12),rgba(7,18,16,0.5))]" />

      <div aria-hidden="true" className="pointer-events-none absolute bottom-16 right-[12%] top-[116px] hidden w-[18rem] border-x border-warm-white/10 md:block" />

      <div className="section-shell relative z-10 grid min-h-[100svh] items-end gap-12 pb-28 pt-40 md:grid-cols-[minmax(0,1fr)_18rem] md:pb-24 md:pt-44">
        <div ref={ref} className="fade-in max-w-[60rem] self-center md:pt-14">
          <p className="eyebrow text-accent-light">
            California interiors, considered slowly
          </p>
          <h1 className="mt-8 font-serif text-[clamp(3.75rem,7vw,7rem)] font-normal leading-[0.98] tracking-[-0.018em] text-warm-white">
            Rooms with
            <span className="mt-2 block pl-[0.3em] italic leading-[0.98] text-accent-light xl:whitespace-nowrap">
              a point of view.
            </span>
          </h1>
          <p className="mt-9 max-w-lg text-base font-light leading-7 text-warm-white/78 md:text-lg md:leading-8">
            The Córdova Studio shapes expressive, livable interiors through
            material warmth, intuitive planning, and an attention to the rituals
            of everyday life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-4 border-b border-accent-light pb-3 text-xs font-medium uppercase tracking-[0.2em] text-warm-white transition-colors duration-300 hover:border-warm-white hover:text-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-white"
            >
              View selected work
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="text-xs font-medium uppercase tracking-[0.2em] text-warm-white/62 transition-colors hover:text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-white"
            >
              Begin a conversation
            </a>
          </div>
        </div>

        <aside className="hidden min-h-[16rem] self-end border-l border-t border-warm-white/30 bg-studio-green/20 p-6 text-sm font-light leading-6 text-warm-white/68 backdrop-blur-[2px] md:flex md:flex-col md:justify-end">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-accent-light">The Córdova Edit</p>
          <p className="mt-5 font-serif text-2xl leading-8 text-warm-white">A home should reveal itself slowly—and hold up to real life.</p>
          <p className="mt-6 border-t border-warm-white/20 pt-4 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-warm-white/58">Material · light · ritual</p>
        </aside>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-warm-white/15 bg-studio-green/36 backdrop-blur-md">
        <div className="section-shell flex min-h-16 items-center justify-between gap-6 text-[0.68rem] uppercase tracking-[0.2em] text-warm-white/60">
          <span>Based in Walnut Creek · California</span>
          <span className="hidden sm:inline">Serving the San Francisco Bay Area</span>
          <a href="#about" className="transition-colors hover:text-accent-light">
            Studio philosophy ↓
          </a>
        </div>
      </div>
    </section>
  );
}
