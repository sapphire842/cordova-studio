import Link from "next/link";
import { withBasePath } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Instagram", href: "https://www.instagram.com/thecordovastudio" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-cordova-garcia/" },
    { label: "Email", href: "mailto:omar@thecordovastudio.com" },
    { label: "Client Portal", href: "https://invoice.zohosecure.com/portal/cordovastudio/signin" },
  ];

  return (
    <footer className="relative overflow-hidden bg-studio-green text-warm-white">
      <img
        src={withBasePath("/images/footer-floor-plan.svg")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-10"
      />
      <div className="section-shell relative py-12 md:py-16">
        <div className="grid gap-10 border-b border-warm-white/15 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Link href="/" className="inline-block font-serif text-3xl tracking-[-0.03em] transition-colors hover:text-accent-light">
              The Córdova Studio<sup className="ml-0.5 align-top text-[0.42em] font-sans font-medium">™</sup>
            </Link>
            <p className="mt-3 max-w-sm text-sm font-light leading-6 text-warm-white/55">
              Interior architecture and design shaped around natural materials,
              enduring comfort, and everyday life.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-warm-white/65">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-accent-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-warm-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} The Córdova Studio™. All rights reserved.</p>
          <p>Walnut Creek · San Francisco Bay Area</p>
        </div>
      </div>
    </footer>
  );
}
