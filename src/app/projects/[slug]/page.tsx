import {
  getAllSlugs,
  getChildProjects,
  getPortfolioProjects,
  getProject,
} from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import PortfolioBookViewer from "@/components/PortfolioBookViewer";
import ProjectCard from "@/components/ProjectCard";
import { siteUrl, withBasePath } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | The Córdova Studio`,
    description: project.summary,
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} | The Córdova Studio`,
      description: project.summary,
      url: `${siteUrl}/projects/${project.slug}/`,
      siteName: "The Córdova Studio",
      type: "article",
      images: project.coverImage
        ? [
            {
              url: project.coverImage,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const hasCoverImage = Boolean(project.coverImage);

  // Find adjacent projects for navigation
  const portfolioProjects = getPortfolioProjects();
  const idx = portfolioProjects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? portfolioProjects[idx - 1] : null;
  const next =
    idx >= 0 && idx < portfolioProjects.length - 1
      ? portfolioProjects[idx + 1]
      : null;
  const childProjects = getChildProjects(project.slug);

  return (
    <>
      {/* Hero banner with cover image */}
      <section className="relative flex min-h-[60vh] items-end pb-16 pt-32">
        <div className="absolute inset-0 z-0">
          {project.coverImage ? (
            <>
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
            </>
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(181,131,105,0.25),_transparent_45%),linear-gradient(135deg,_#f4ede3,_#e6dac9)]" />
          )}
        </div>
        <div className="section-shell relative z-10">
          <div className="mb-3 flex items-center gap-3">
            <img
              src={withBasePath("/images/studio-room-mark.svg")}
              alt=""
              aria-hidden="true"
              className="h-7 w-7 opacity-90"
            />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {project.category} · {project.location}
            </p>
          </div>
          <div className="flex items-end gap-6">
            <h1
              className={`font-serif text-4xl leading-tight md:text-6xl ${
                hasCoverImage ? "text-warm-white" : "text-charcoal"
              }`}
            >
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="section-shell">
          {/* Overview */}
          <p className="mb-16 font-serif text-xl leading-relaxed text-charcoal/80 md:text-2xl">
            {project.description}
          </p>

          <div className="mb-20 overflow-hidden border-y border-charcoal/15 bg-[#e4dbcf]">
            <div className="grid lg:grid-cols-2">
              <section className="border-b border-charcoal/15 p-8 md:p-12 lg:border-b-0 lg:border-r lg:p-16">
                <h2 className="content-heading content-heading--plain text-accent">Concept</h2>
                <p className="mt-12 max-w-xl font-serif text-2xl leading-[1.18] tracking-[-0.025em] text-charcoal/82 md:text-3xl">{project.concept}</p>
                <p className="mt-10 max-w-md text-sm font-light leading-7 text-charcoal/58">The first move is to understand what the existing space can become.</p>
              </section>
              <section className="bg-studio-green p-8 text-warm-white md:p-12 lg:p-16">
                <h2 className="content-heading content-heading--plain text-accent-light">Design Approach</h2>
                <p className="mt-12 max-w-xl font-serif text-2xl leading-[1.18] tracking-[-0.025em] text-warm-white/82 md:text-3xl">{project.approach}</p>
                <p className="mt-10 border-t border-warm-white/18 pt-5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-warm-white/48">Material · proportion · use</p>
              </section>
            </div>
          </div>

          {project.isCollection ? (
            <div className="mb-16">
              <h2 className="content-heading mb-10 text-accent">
                Projects
              </h2>
              <div className="grid gap-12 md:grid-cols-2">
                {childProjects.map((childProject) => (
                  <ProjectCard key={childProject.slug} project={childProject} />
                ))}
              </div>
            </div>
          ) : project.pdfUrl ? (
            <PortfolioBookViewer
              title={project.title}
              coverImage={project.coverImage}
              pdfUrl={project.pdfUrl}
            />
          ) : (
            <ProjectGallery
              title={project.title}
              images={project.images}
              captions={project.imageCaptions}
              imageRadius={
                project.imageRadius ??
                (project.parentSlug === "staging"
                  ? "5px"
                  : project.parentSlug === "furnishing-styling"
                    ? "6px"
                    : undefined)
              }
            />
          )}

        </div>
      </section>

      {/* Project navigation */}
      <section className="border-t border-charcoal/10 bg-warm-white py-12">
        <div className="section-shell flex items-center justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group text-left"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted">
                ← Previous
              </p>
              <p className="mt-1 font-serif text-lg text-charcoal transition-colors group-hover:text-accent">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group text-right"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted">
                Next →
              </p>
              <p className="mt-1 font-serif text-lg text-charcoal transition-colors group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}
