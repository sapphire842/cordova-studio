"use client";

import { useReveal } from "@/lib/utils";
import { getPortfolioProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const ref = useReveal();
  const projects = getPortfolioProjects();

  return (
    <section id="portfolio" className="bg-[#ebe5dc] py-24 md:py-32 lg:py-40">
      <div className="section-shell">
        <div ref={ref} className="fade-in mb-14 grid items-end gap-8 border-b border-charcoal/15 pb-10 md:grid-cols-[1fr_auto] lg:mb-20">
          <div>
            <p className="eyebrow text-accent">Selected Work</p>
            <h2 className="mt-6 font-serif text-[clamp(3rem,6vw,5.8rem)] leading-none tracking-[-0.04em] text-charcoal">
              A portfolio of
              <span className="block italic text-studio-green/72">lived-in ideas.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base font-light leading-7 text-charcoal/65 md:text-right">
            Residential transformations, space planning, furnishing, and
            concept work—each shaped around how a space should feel and function.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-20 lg:gap-x-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
