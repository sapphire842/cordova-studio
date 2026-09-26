"use client";

import { useReveal } from "@/lib/utils";
import { withBasePath } from "@/lib/site";
import Link from "next/link";

const principles = ["Natural aesthetics", "Purposeful planning", "Enduring comfort"];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="overflow-hidden bg-warm-white py-24 md:py-32 lg:py-40">
      <div ref={ref} className="section-shell fade-in">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="relative lg:sticky lg:top-28">
            <div aria-hidden="true" className="absolute -bottom-6 -right-5 h-32 w-32 rounded-full bg-accent/35 blur-[1px] lg:-bottom-8 lg:-right-8 lg:h-44 lg:w-44" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-light-gray shadow-[0_32px_90px_rgba(16,40,36,0.12)]">
              <img
                src={withBasePath("/images/headshot-retouched.png")}
                alt="Omar Córdova García, founder and interior designer"
                className="aspect-[16/11] h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-studio-green/70 to-transparent px-6 pb-5 pt-16 text-warm-white">
                <p className="text-xs uppercase tracking-[0.2em] text-warm-white/65">Founder &amp; Designer</p>
                <p className="mt-1 font-serif text-xl">Omar Córdova García</p>
              </div>
            </div>
          </div>

          <div className="lg:pt-8">
            <p className="eyebrow text-accent">The Studio</p>
            <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2.7rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.035em] text-charcoal">
              Every room begins with
              <span className="italic text-studio-green/75"> how it will be lived in.</span>
            </h2>

            <blockquote className="mt-10 border-l border-accent/70 pl-6 font-serif text-xl italic leading-8 text-charcoal/78 md:text-2xl md:leading-9">
              “The most lasting interiors are the ones that make daily life feel
              a little more effortless.”
            </blockquote>

            <div className="mt-10 grid gap-6 text-base font-light leading-7 text-charcoal/70 sm:grid-cols-2">
              <p>
                Omar Córdova is an interior architectural designer whose work
                balances thoughtful space planning with a deep appreciation for
                materials, furniture, and the details that give a room its
                character.
              </p>
              <p>
                His aesthetic is warm, refined, and inviting—grounded in natural
                woods, stone, tactile textiles, and moments of contrast. Every
                project begins with how a space will actually be lived in,
                resulting in interiors that feel intentional without feeling
                overly designed.
              </p>
            </div>

            <aside className="mt-12" aria-labelledby="studio-principles">
              <h3 id="studio-principles" className="font-serif text-xl italic text-studio-green/75">
                A few principles that guide the work
              </h3>
              <ul className="mt-5 grid gap-5 sm:grid-cols-3 sm:gap-4">
                {principles.map((principle) => (
                  <li key={principle} className="border-l-2 border-accent/65 pl-4">
                    <span className="font-serif text-xl leading-tight text-charcoal">{principle}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Work with the studio
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <Link
              href="/designer"
              className="group mt-6 flex w-fit items-center gap-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal/60 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Meet the designer
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
