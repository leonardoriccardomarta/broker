import Link from "next/link";
import {
  BOOKING_HREF,
  NAV_LINKS,
  SECTION_IDS,
  SERVICES,
  SITE,
} from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <SectionContainer className="py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <p className="text-xl font-semibold">{SITE.name}</p>
              <p className="mt-1 text-white/60">{SITE.title}</p>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Servizi
            </p>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a
                    href={`#${SECTION_IDS.servizi}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigazione
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_HREF}
                  className="text-sm font-medium text-white transition-colors hover:text-primary-light"
                >
                  Prenota consulenza
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contatti
            </p>
            <p className="mt-4 text-sm text-white/70">
              Consulenza gratuita e senza impegno.
            </p>
            <a
              href={BOOKING_HREF}
              className="mt-4 inline-flex text-sm font-medium text-white underline-offset-4 transition-colors hover:text-primary-light hover:underline"
            >
              Richiedi una consulenza
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} {SITE.name}, {SITE.title}. Tutti i
            diritti riservati.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
