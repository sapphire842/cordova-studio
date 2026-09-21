"use client";

import { useReveal } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

const principles = ["Natural aesthetics", "Purposeful planning", "Enduring comfort"];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="overflow-hidden bg-warm-white py-24 md:py-32 lg:py-40">
      <div ref={ref} className="section-shell fade-in">
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="relative lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-light-gray shadow-[0_32px_90px_rgba(16,40,36,0.12)]">
              <img
                src={withBasePath("/images/headshot.jpg")}
                alt="Omar Córdova García, founder and interior designer"
                className="aspect-[16/11] h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-studio-green/70 to-transparent px-6 pb-5 pt-16 text-warm-white">
                <p className="text-xs uppercase tracking-[0.2em] text-warm-white/65">Founder &amp; Designer</p>
                <p className="mt-1 font-serif text-xl">Omar Córdova García</p>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-7 hidden h-28 w-28 rounded-full border border-accent/50 lg:block" aria-hidden="true" />
          </div>

          <div className="lg:pt-8">
            <p className="eyebrow text-accent">The Studio</p>
            <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2.7rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.035em] text-charcoal">
              Design that feels considered,
              <span className="italic text-studio-green/75"> never overworked.</span>
            </h2>

            <blockquote className="mt-10 border-l border-accent/70 pl-6 font-serif text-xl italic leading-8 text-charcoal/78 md:text-2xl md:leading-9">
              “My inspiration is deeply rooted in timeless design and the
              principles of natural aesthetics.”
            </blockquote>

            <div className="mt-10 grid gap-6 text-base font-light leading-7 text-charcoal/70 sm:grid-cols-2">
              <p>
                With a BFA in Interior Architecture &amp; Design from the Academy
                of Art University, Omar brings academic rigor and practical
                experience to residential and commercial interiors across the
                Bay Area.
              </p>
              <p>
                Every project begins with listening: understanding the people,
                the space, and how it needs to support daily life. The result is
                an interior that feels personal, functional, and quietly
                distinctive.
              </p>
            </div>

            <div className="mt-12 border-y border-charcoal/12 py-2">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-center justify-between border-b border-charcoal/10 py-4 last:border-b-0"
                >
                  <span className="font-serif text-lg text-charcoal">{principle}</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">0{index + 1}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Work with the studio
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
