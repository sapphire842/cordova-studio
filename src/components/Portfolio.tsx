"use client";

import { getPortfolioProjects } from "@/data/projects";
import Link from "next/link";

export default function Portfolio() {
  const projects = getPortfolioProjects();
  const [featuredProject, ...studies] = projects;

  return (
    <section id="portfolio" className="bg-[#ddd5c8] py-24 md:py-32 lg:py-40">
      <div className="section-shell">
        <div className="mb-14 grid items-end gap-8 border-b border-charcoal/20 pb-10 md:grid-cols-[1fr_19rem] lg:mb-20">
          <div>
            <p className="eyebrow text-accent">Selected Work</p>
            <h2 className="mt-7 max-w-3xl font-serif text-[clamp(3.4rem,6.6vw,6.5rem)] leading-[0.88] tracking-[-0.05em] text-charcoal">
              Studies in
              <span className="block pl-[0.32em] italic text-studio-green/75">living well.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base font-light leading-7 text-charcoal/68 md:pb-1">
            A working archive of residential transformations, spatial studies,
            furnishing, and interior architecture.
          </p>
        </div>

        {featuredProject && (
          <article className="group overflow-hidden rounded-[1.75rem] bg-studio-green shadow-[0_24px_60px_rgba(16,40,36,0.16)] md:grid md:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="relative block overflow-hidden bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <img
                src={featuredProject.coverImage}
                alt={featuredProject.title}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] md:aspect-[16/11]"
              />
              <span className="absolute inset-0 bg-studio-green/18 transition-colors duration-700 group-hover:bg-studio-green/0" />
            </Link>
            <div className="flex flex-col justify-between p-8 text-warm-white md:p-10 lg:p-12">
              <div>
                <p className="font-serif text-xl italic text-accent-light/95">Featured project</p>
                <p className="mt-7 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-accent-light/65">{featuredProject.category} · {featuredProject.location}</p>
                <h3 className="mt-4 font-serif text-4xl leading-[0.96] tracking-[-0.04em] text-warm-white md:text-5xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-6 max-w-sm text-base font-light leading-7 text-warm-white/66">
                  {featuredProject.summary}
                </p>
              </div>
              <Link href={`/projects/${featuredProject.slug}`} className="mt-10 inline-flex w-fit items-center gap-4 border-b border-accent-light/65 pb-3 text-xs font-medium uppercase tracking-[0.2em] text-warm-white transition-colors hover:border-warm-white hover:text-accent-light">
                Enter the project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        )}

        <div className="mt-14 border-t border-charcoal/20 lg:mt-20">
          <p className="pt-5 font-serif text-xl italic text-studio-green/75">More from the archive</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
          {studies.map((project) => {
            return (
              <article key={project.slug} className="group">
                <Link href={`/projects/${project.slug}`} className="block rounded-[1.25rem] bg-warm-white/45 p-3 transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[0.85rem] bg-light-gray">
                    <img src={project.coverImage} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]" />
                    <span className="absolute inset-0 bg-studio-green/0 transition-colors duration-500 group-hover:bg-studio-green/12" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4 px-1 pb-1">
                    <div>
                      <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-accent">{project.category}</p>
                      <h3 className="mt-2 font-serif text-2xl leading-[0.98] tracking-[-0.03em] text-charcoal transition-colors group-hover:text-studio-green md:text-3xl">{project.title}</h3>
                    </div>
                    <span className="text-lg text-charcoal/55 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </div>
                </Link>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
