import { withBasePath } from "@/lib/site";

export const metadata = {
  title: "Style Guide | The Córdova Studio",
  description: "Internal visual language reference for The Córdova Studio redesign.",
};

export default function StyleGuidePage() {
  return (
    <div className="bg-warm-white text-charcoal">
      <section className="bg-studio-green py-28 text-warm-white md:py-40">
        <div className="section-shell">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-light">Internal design system</p>
          <h1 className="mt-8 max-w-4xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] tracking-[-0.065em]">The Córdova Studio</h1>
          <p className="mt-8 max-w-xl text-lg font-light leading-8 text-warm-white/70">A visual reference for the typography, spacing, marks, controls, and surfaces used across the site.</p>
        </div>
      </section>

      <main className="section-shell space-y-24 py-24 md:space-y-32 md:py-32">
        <section>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">01 · Type hierarchy</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h2 className="eyebrow eyebrow--plain text-studio-green">Editorial scale</h2>
              <p className="mt-8 max-w-xl text-base font-light leading-8 text-charcoal/70 md:text-lg md:leading-9">Headings are expressive and spacious. Supporting copy stays calm, readable, and never smaller than the heading it explains.</p>
            </div>
            <div className="space-y-6 border-l border-charcoal/15 pl-6 md:pl-8">
              <p className="font-serif text-4xl tracking-[-0.04em]">Display heading</p>
              <p className="font-serif text-2xl tracking-[-0.03em]">Content heading</p>
              <p className="text-xl font-medium">Panel heading</p>
              <p className="text-base font-light leading-7 text-charcoal/70">Body copy for considered reading.</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Metadata label</p>
            </div>
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">02 · Section markers</p>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <div><p className="eyebrow text-studio-green">Corner rule</p><p className="mt-6 text-base font-light leading-7 text-charcoal/65">Used for page-level editorial headings.</p></div>
            <div><p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">Quiet label</p><p className="mt-6 text-base font-light leading-7 text-charcoal/65">Used for contained sections and project metadata.</p></div>
          </div>
          <div className="mt-12 border-t border-charcoal/20 pt-5 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50">Subtle separator</div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">03 · Marks and identity</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="flex min-h-36 items-center justify-center bg-studio-green p-8"><img src={withBasePath("/images/logo.png")} alt="The Córdova Studio logo" className="logo-on-hero h-auto w-44" /></div>
            <div className="flex min-h-36 items-center justify-center border border-charcoal/15 bg-[#e4dbcf] p-8"><img src={withBasePath("/images/studio-room-mark.svg")} alt="Studio room mark" className="h-16 w-16" /></div>
            <div className="flex min-h-36 items-center justify-center bg-charcoal p-8"><span className="font-serif text-3xl text-accent-light">Córdova™</span></div>
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">04 · Buttons and links</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#" className="center-fill-button inline-flex border border-studio-green px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-studio-green transition-colors hover:text-warm-white">Primary action <span className="ml-4">↗</span></a>
            <a href="#" className="inline-flex border-b border-accent pb-3 text-xs font-medium uppercase tracking-[0.2em] text-studio-green">Text link <span className="ml-4">↗</span></a>
            <button type="button" className="rounded-full bg-studio-green px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-warm-white">Compact control</button>
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">05 · Surfaces and content</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="border border-charcoal/15 bg-[#e4dbcf] p-8"><h2 className="text-xl font-medium text-accent md:text-2xl">Warm panel</h2><p className="mt-5 text-base font-light leading-8 text-charcoal/70">A tonal surface for project narratives and quiet information.</p></article>
            <article className="bg-studio-green p-8 text-warm-white"><h2 className="text-xl font-medium text-accent-light md:text-2xl">Studio panel</h2><p className="mt-5 text-base font-light leading-8 text-warm-white/70">A grounded contrast for calls to action and focused content.</p></article>
          </div>
        </section>
      </main>
    </div>
  );
}
