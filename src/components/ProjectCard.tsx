"use client";

import Link from "next/link";
import { useReveal } from "@/lib/utils";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index?: number }) {
  const ref = useReveal();
  const imageRadiusClass =
    project.imageRadius === "4px"
      ? "rounded-[4px]"
      : project.imageRadius === "5px" ||
          project.slug === "staging" ||
          project.parentSlug === "staging"
      ? "rounded-[5px]"
      : project.imageRadius === "6px"
        ? "rounded-[6px]"
      : "";
  const hasFurnishingRoundedImage =
    project.slug === "furnishing-styling" ||
    project.parentSlug === "furnishing-styling";
  const roundedImageClass = imageRadiusClass || (hasFurnishingRoundedImage ? "rounded-[6px]" : "");

  const layoutClass =
    index === undefined
      ? ""
      : index === 0
      ? "md:col-span-8"
      : index === 1
        ? "md:col-span-4 md:pt-24"
        : index === 2
          ? "md:col-span-5 md:pt-10"
          : "md:col-span-7";

  const aspectClass =
    index === undefined
      ? "aspect-[4/3]"
      : index === 0
      ? "aspect-[4/3] md:aspect-[16/11]"
      : index === 1
        ? "aspect-[4/5]"
        : index === 2
          ? "aspect-[4/5]"
          : "aspect-[4/3] md:aspect-[16/11]";

  return (
    <article ref={ref} className={`fade-in group ${layoutClass}`}>
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
      >
        <div
          className={`img-zoom relative ${aspectClass} overflow-hidden rounded-[0.9rem] bg-light-gray transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_rgba(16,40,36,0.18)] ${
            roundedImageClass
          }`}
        >
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(181,131,105,0.22),_transparent_55%),linear-gradient(135deg,_#f6f0e7,_#ebe1d3)] p-8 text-center transition-transform duration-700 group-hover:scale-[1.02]">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
                  {project.placeholderLabel ?? "Coming Soon"}
                </p>
                <p className="mt-4 font-serif text-2xl text-charcoal/80">
                  {project.title}
                </p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-studio-green/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-warm-white text-lg text-studio-green opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">
            ↗
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <p className="text-xs font-medium uppercase leading-none tracking-[0.18em] text-accent">
              {project.category}
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-[-0.02em] text-charcoal transition-colors group-hover:text-studio-green md:text-3xl">
              {project.title}
            </h3>
          </div>
          <p className="text-xs font-medium uppercase leading-none tracking-[0.18em] text-muted sm:text-right">
            {project.location}
          </p>
        </div>
        <p className="mt-3 max-w-xl text-sm font-light leading-6 text-charcoal/60 transition-colors duration-500 group-hover:text-charcoal/75">
          {project.summary}
        </p>
      </Link>
    </article>
  );
}
