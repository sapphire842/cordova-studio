import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Designer | The Córdova Studio",
  description:
    "Meet Omar Córdova García, the designer behind The Córdova Studio.",
  alternates: { canonical: `${siteUrl}/designer/` },
};

const materialLibrary = [
  { category: "Wood", name: "Walnut & oak", note: "Natural woods that bring depth, warmth, and a quiet sense of permanence." },
  { category: "Stone", name: "Stone & marble", note: "Grounded surfaces that give a room its weight and a material point of view." },
  { category: "Textile", name: "Linen & wool", note: "Tactile layers that soften architecture and make a room more inviting." },
  { category: "Leather", name: "Aged leather", note: "A living material that develops character and rewards everyday use." },
  { category: "Metal", name: "Brass & blackened steel", note: "Refined contrasts that sharpen a palette without overpowering it." },
  { category: "Earthen", name: "Plaster, tile & woven fiber", note: "Organic surfaces that connect an interior to craft, touch, and place." },
];

const studioTools = ["AutoCAD", "Revit", "SketchUp", "3D visualization", "Material specification", "Space planning"];

export default function DesignerPage() {
  return (
    <div className="bg-warm-white text-charcoal">
      <section className="relative overflow-hidden bg-[#ded5c8] px-6 pb-20 pt-36 md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full border border-accent/30 md:h-[30rem] md:w-[30rem]" aria-hidden="true" />
        <div className="section-shell relative grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-7 text-studio-green/65">The designer</p>
            <h1 className="max-w-4xl font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.86] tracking-[-0.07em] text-studio-green">Omar<br />Córdova<br />García</h1>
            <p className="mt-9 max-w-xl text-lg font-light leading-8 text-charcoal/70 md:text-xl">Interior architecture shaped by material warmth, thoughtful planning, and the way people actually live.</p>
          </div>
          <div className="relative lg:justify-self-end">
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-accent/40" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] bg-light-gray shadow-[0_28px_70px_rgba(16,40,36,0.16)]">
              <img src={withBasePath("/images/headshot-retouched.png")} alt="Omar Córdova García, founder and interior designer" className="aspect-[4/5] w-full max-w-[28rem] object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 md:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <div>
          <p className="eyebrow text-accent">A working philosophy</p>
          <h2 className="mt-5 max-w-sm font-serif text-4xl leading-[0.98] tracking-[-0.045em] md:text-5xl">Good rooms make daily life feel more possible.</h2>
        </div>
        <div className="max-w-2xl space-y-6 text-base font-light leading-8 text-charcoal/72 md:text-lg md:leading-9">
          <p>Omar Córdova is an interior architectural designer whose work is rooted in the belief that beautiful spaces should feel as good as they look. His approach combines thoughtful space planning, architectural awareness, and a strong appreciation for materials, furniture, and the details that give a space its character.</p>
          <p>His aesthetic is warm, refined, and inviting, balancing clean, timeless forms with natural materials, organic textures, and moments of contrast. Omar draws from mid-century modern, Scandinavian, California modern, transitional, and organic contemporary interiors, allowing each project to develop an identity that feels authentic to the people who inhabit it.</p>
          <p>Functionality is central to his process. He considers circulation, sightlines, seating, scale, durability, and the relationship between furniture and architecture. His interiors feel intentional without feeling overly designed. They are comfortable, approachable, and capable of evolving.</p>
        </div>
      </section>

      <section className="border-y border-charcoal/12 bg-[#e4dbcf] px-6 py-16 md:py-20">
        <div className="section-shell grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="eyebrow text-accent">Practice &amp; perspective</p>
            <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-[-0.04em] md:text-4xl">Precise enough to draw. Human enough to live in.</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="border-t border-charcoal/18 pt-5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-charcoal/55">Omar&apos;s working language</p>
              <ul className="mt-5 divide-y divide-charcoal/15">
                {studioTools.map((tool) => (
                  <li key={tool} className="py-3 font-serif text-2xl tracking-[-0.025em] text-charcoal/78 first:pt-0">{tool}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-5 border-t border-charcoal/18 pt-5 text-sm leading-7 text-charcoal/68">
              <p><span className="font-medium text-charcoal">Based in Walnut Creek.</span> Serving the San Francisco Bay Area with a collaborative, detail-minded approach.</p>
              <p><span className="font-medium text-charcoal">English &amp; Spanish.</span> Clear communication is part of the design work.</p>
              <p><span className="font-medium text-charcoal">ASID practitioner member.</span> Connected to the wider interior design community in California North.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-studio-green px-6 py-20 text-warm-white md:py-28">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-light">The material library</p>
            <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-[-0.055em]">A working palette.</h2>
            <p className="mt-7 max-w-xl text-base font-light leading-7 text-warm-white/65">A considered reference of natural, tactile materials and the furniture, lighting, and home sources Omar returns to when a project calls for something particular.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {materialLibrary.map((material, index) => (
              <article key={`${material.category}-${index}`} className="group min-h-56 border border-warm-white/18 bg-warm-white/[0.035] p-6 transition-colors hover:border-accent-light/60 hover:bg-warm-white/[0.07]">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serif text-4xl text-accent-light/80">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-warm-white/48">{material.category}</span>
                </div>
                <h3 className="mt-12 font-serif text-2xl text-warm-white">{material.name}</h3>
                <p className="mt-3 text-sm leading-6 text-warm-white/58">{material.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 border-t border-warm-white/18 pt-7">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-warm-white/48">Trade access</p>
            <p className="mt-4 max-w-4xl font-serif text-xl leading-8 text-warm-white/78">CB2 · Crate &amp; Barrel · Williams Sonoma Home · Pottery Barn · West Elm · Arhaus · RH · BenchMade Modern · Living Spaces · Lulu &amp; Georgia · Lamps Plus · Rejuvenation</p>
          </div>
        </div>
      </section>

      <section className="section-shell flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-28">
        <div>
          <p className="eyebrow text-accent">A room worth beginning</p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Bring us the room that almost works.</h2>
        </div>
        <Link href="/#contact" className="inline-flex shrink-0 items-center gap-4 border-b border-accent pb-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Start a conversation <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  );
}
