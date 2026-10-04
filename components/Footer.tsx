import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

const PAGES = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/engagement", label: "Engagement" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12">
          <div className="sm:col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={22} />
              <span className="display text-sm font-bold">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Industrial robotics, PLC engineering, and Industry 4.0 services
              for India&apos;s manufacturing leaders.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold">Supported platforms</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Robots: FANUC, ABB, KUKA, Yaskawa</li>
              <li>PLCs: Siemens, Allen-Bradley, Mitsubishi, Schneider</li>
              <li>Drives: SEW, Lenze, Yaskawa</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={SITE.phoneHref} className="text-muted hover:text-graphite">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="text-muted hover:text-graphite">{SITE.email}</a></li>
              <li className="text-muted">{SITE.base}</li>
            </ul>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="text-sm font-semibold">Pages</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-muted hover:text-graphite">{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-rule pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {SITE.legalName}</div>
          {SITE.gstin && <div>GSTIN {SITE.gstin}</div>}
        </div>
      </div>
    </footer>
  );
}
