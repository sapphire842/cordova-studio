"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/utils";
import { services } from "@/data/services";
import type { Service } from "@/data/services";

function ServiceIcon({ type }: { type: Service["icon"] }) {
  const iconPaths: Record<Service["icon"], ReactNode> = {
    consultation: (
      <>
        <path d="M6 9.5h12" />
        <path d="M6 14.5h7" />
        <path d="M4.5 5.5h15v12h-8L7 21v-3.5H4.5z" />
      </>
    ),
    planning: (
      <>
        <path d="M4.5 6.5h15v11h-15z" />
        <path d="M9.5 6.5v11" />
        <path d="M14.5 6.5v5h5" />
        <path d="M4.5 12h5" />
      </>
    ),
    palette: (
      <>
        <path d="M5 18.5 18.5 5" />
        <path d="M8 18.5h11" />
        <path d="M5 15.5v3h3" />
        <path d="M14.5 6.5l3 3" />
      </>
    ),
    furniture: (
      <>
        <path d="M6.5 11.5h11a2 2 0 0 1 2 2v4h-15v-4a2 2 0 0 1 2-2z" />
        <path d="M7 11.5V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3.5" />
        <path d="M6.5 17.5v2" />
        <path d="M17.5 17.5v2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
    >
      {iconPaths[type]}
    </svg>
  );
}

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="services-texture services-inset py-24 md:py-32 lg:py-40">
      <div className="section-shell">
        <div ref={ref} className="fade-in grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-accent-light">Design support, without a prescribed path</p>
            <h2 className="mt-7 font-serif text-[clamp(3rem,5vw,5.2rem)] leading-[0.98] tracking-[-0.04em] text-warm-white">
              A considered role,
              <span className="block italic text-accent-light">at any scale.</span>
            </h2>
            <p className="mt-7 max-w-md text-base font-light leading-7 text-warm-white/62">
              Choose a focused consultation, an entire furnishing plan, or the
              spatial direction that gives a larger project its footing.
            </p>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-4 rounded-full border border-warm-white/30 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-warm-white transition-all duration-300 hover:border-accent-light hover:bg-warm-white/6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Discuss your project
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="border-t border-warm-white/18">
          {services.map((service) => (
            <div
              key={service.title}
              className="group grid grid-cols-[3.25rem_1fr] gap-4 border-b border-warm-white/18 py-8 transition-colors duration-500 hover:bg-warm-white/[0.035] sm:gap-5 sm:px-4 sm:py-10"
            >
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/35 text-accent-light transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-studio-green">
                  <ServiceIcon type={service.icon} />
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-warm-white transition-colors duration-500 group-hover:text-accent-light md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm font-light leading-6 text-warm-white/58 transition-colors duration-500 group-hover:text-warm-white/76 md:text-base md:leading-7">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
