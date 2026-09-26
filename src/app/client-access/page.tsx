import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/site";

const portalUrl = "https://invoice.zohosecure.com/portal/cordovastudio/signin";

export const metadata: Metadata = {
  title: "Client Access | The Córdova Studio",
  description:
    "Secure client access for estimates, invoices, payments, project updates, and studio conversations.",
  alternates: { canonical: `${siteUrl}/client-access/` },
};

const portalFeatures = [
  { title: "Review & approve", text: "Keep estimates and project decisions moving in one place." },
  { title: "View & pay invoices", text: "See open balances, payment history, receipts, and statements." },
  { title: "Stay connected", text: "Leave comments and share project notes without losing the thread." },
];

export default function ClientAccessPage() {
  return (
    <div className="bg-warm-white text-charcoal">
      <section className="relative overflow-hidden bg-studio-green px-6 pb-20 pt-36 text-warm-white md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full border border-accent-light/20 md:h-96 md:w-96" aria-hidden="true" />
        <div className="section-shell relative max-w-4xl">
          <h1 className="max-w-3xl font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.055em]">Your project workspace.</h1>
          <p className="mt-9 max-w-xl text-lg font-light leading-8 text-warm-white/72 md:text-xl">
            Estimates, invoices, approvals, and project conversations—kept together in one secure workspace.
          </p>
          <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-4 rounded-full bg-warm-white px-6 py-4 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-studio-green transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            Sign in to client portal <span aria-hidden="true" className="text-lg leading-none">↗</span>
          </a>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-28">
        <div>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-accent">Your studio workspace</p>
          <h2 className="mt-5 max-w-sm font-serif text-4xl leading-tight tracking-[-0.04em] md:text-5xl">Everything in its place.</h2>
        </div>
        <div className="grid gap-8 border-t border-charcoal/15 pt-7">
          {portalFeatures.map((feature) => (
            <article key={feature.title} className="grid gap-2 border-b border-charcoal/12 pb-8 sm:grid-cols-[0.8fr_1.2fr] sm:gap-8">
              <h3 className="font-serif text-2xl tracking-[-0.025em]">{feature.title}</h3>
              <p className="max-w-md text-sm leading-7 text-muted">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e4dbcf] px-6 py-16 md:py-20">
        <div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-studio-green/65">New to the portal?</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-studio-green/75">Omar will send a secure invitation when your project begins. Use the same email address each time you sign in.</p>
          </div>
          <Link href="/#contact" className="inline-flex shrink-0 items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-studio-green transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Need an invitation? <span aria-hidden="true" className="text-lg">→</span></Link>
        </div>
      </section>
    </div>
  );
}
