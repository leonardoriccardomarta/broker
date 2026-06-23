import Link from "next/link";
import {
  NAV_LINKS,
  PRIVACY_PATH,
  SECTION_IDS,
  SERVICES,
  SITE,
} from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-40 text-midnight md:pb-0">
      <SectionContainer className="py-6 md:py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <p className="font-semibold">{SITE.name}</p>
              <p className="text-sm text-black/55">{SITE.title}</p>
            </Link>
            <p className="mt-2 text-sm text-black/50">{SITE.areaLine}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
              Servizi
            </p>
            <ul className="mt-3 space-y-1.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a
                    href={`#${SECTION_IDS.servizi}`}
                    className="text-sm text-black/65 transition-colors hover:text-primary"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
              Navigazione
            </p>
            <ul className="mt-3 space-y-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-black/65 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4 text-center">
          <Link
            href={PRIVACY_PATH}
            className="relative z-10 inline-block py-1 text-sm font-medium text-black/60 transition-colors hover:text-primary"
          >
            Informativa Privacy
          </Link>
          <p className="mt-3 text-xs leading-relaxed text-black/40">
            © {new Date().getFullYear()} {SITE.name}. Tutti i diritti riservati.
            <span className="mx-auto mt-2 block max-w-2xl">{SITE.legalLine}</span>
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
