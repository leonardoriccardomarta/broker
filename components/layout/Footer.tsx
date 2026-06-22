import { SITE } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <SectionContainer className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">{SITE.name}</p>
            <p className="mt-1 text-white/60">{SITE.title}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {SITE.tagline}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Servizi
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Mutui</li>
              <li>Prestiti personali</li>
              <li>Cessione del quinto</li>
              <li>Consolidamento debiti</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contatti
            </p>
            <p className="mt-4 text-sm text-white/70">
              Consulenza gratuita e senza impegno.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.title}. Tutti i
            diritti riservati.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
