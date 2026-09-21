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
            <p className="eyebrow text-accent">A selection from the studio archive</p>
            <h2 className="mt-7 max-w-3xl font-serif text-[clamp(3.4rem,6.6vw,6.5rem)] leading-[0.88] tracking-[-0.05em] text-charcoal">
              A record of rooms,
              <span className="block pl-[0.32em] italic text-studio-green/75">reimagined.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base font-light leading-7 text-charcoal/68 md:pb-1">
            A working archive of residential transformations, spatial studies,
            furnishing, and interior architecture.
          </p>
        </div>

        {featuredProject && (
          <article className="group grid border-y border-charcoal/20 py-6 md:grid-cols-[minmax(0,1.32fr)_minmax(16rem,0.68fr)] md:py-8">
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="relative block overflow-hidden bg-studio-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <img
                src={featuredProject.coverImage}
                alt={featuredProject.title}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] md:aspect-[16/11]"
              />
              <span className="absolute inset-0 bg-studio-green/10 transition-colors duration-700 group-hover:bg-studio-green/0" />
              <span className="absolute bottom-5 left-5 border border-warm-white/55 bg-studio-green/65 px-3 py-2 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-warm-white backdrop-blur-sm">Featured study</span>
            </Link>
            <div className="flex flex-col justify-between border-charcoal/20 py-8 md:border-l md:px-10 md:py-5 lg:px-14">
              <div>
                <p className="text-[0.64rem] font-medium uppercase tracking-[0.22em] text-accent">{featuredProject.category} · {featuredProject.location}</p>
                <h3 className="mt-5 font-serif text-4xl leading-[0.96] tracking-[-0.04em] text-charcoal md:text-5xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-6 max-w-sm text-base font-light leading-7 text-charcoal/67">
                  {featuredProject.summary}
                </p>
              </div>
              <Link href={`/projects/${featuredProject.slug}`} className="mt-10 inline-flex items-center gap-4 border-b border-charcoal/35 pb-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:border-accent hover:text-accent">
                Enter the project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        )}

        <div className="mt-14 grid gap-x-7 gap-y-14 md:grid-cols-12 md:gap-y-20 lg:mt-20 lg:gap-x-10">
          {studies.map((project, index) => {
            const placement = index === 0 ? "md:col-span-5 md:pt-20" : index === 1 ? "md:col-span-7" : "md:col-span-7 md:col-start-4";
            const imageRatio = index === 0 ? "aspect-[4/5]" : "aspect-[16/10]";

            return (
              <article key={project.slug} className={`group ${placement}`}>
                <Link href={`/projects/${project.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  <div className={`relative overflow-hidden bg-light-gray ${imageRatio}`}>
                    <img src={project.coverImage} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]" />
                    <span className="absolute inset-0 bg-studio-green/0 transition-colors duration-500 group-hover:bg-studio-green/12" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-5 border-t border-charcoal/20 pt-4">
                    <div>
                      <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-accent">{project.category}</p>
                      <h3 className="mt-2 font-serif text-3xl tracking-[-0.03em] text-charcoal transition-colors group-hover:text-studio-green md:text-4xl">{project.title}</h3>
                    </div>
                    <span className="text-lg text-charcoal/55 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </div>
                  <p className="mt-3 max-w-xl text-sm font-light leading-6 text-charcoal/62">{project.summary}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
