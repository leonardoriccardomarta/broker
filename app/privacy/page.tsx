import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SITE } from "@/lib/constants";
import { getContactLinks } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Informativa Privacy",
  description:
    "Informativa sul trattamento dei dati personali per le prenotazioni e le richieste di consulenza mutui.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function getPrivacyEmail(): string {
  return (
    process.env.PRIVACY_CONTACT_EMAIL?.trim() || "info.inzago@euroansa.it"
  );
}

export default function PrivacyPage() {
  const contact = getContactLinks();
  const privacyEmail = getPrivacyEmail();

  return (
    <div className="bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <SectionContainer>
        <article className="mx-auto max-w-3xl text-midnight">
          <Link
            href="/"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            ← Torna alla home
          </Link>

          <h1 className="mt-6 text-3xl font-semibold md:text-4xl">
            Informativa Privacy
          </h1>
          <p className="mt-3 text-sm text-black/50">
            Ultimo aggiornamento: giugno 2026
          </p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-black/70">
            <section>
              <h2 className="text-xl font-semibold text-midnight">
                1. Titolare del trattamento
              </h2>
              <p className="mt-3">
                Il titolare del trattamento dei dati personali è{" "}
                <strong>{SITE.name}</strong>, {SITE.legalLine}. Area operativa:{" "}
                {SITE.areaLine}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-midnight">
                2. Dati raccolti
              </h2>
              <p className="mt-3">
                Attraverso il modulo di prenotazione sul sito possono essere
                raccolti i seguenti dati:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>nome e cognome</li>
                <li>indirizzo email</li>
                <li>numero di telefono</li>
                <li>eventuali note sulla richiesta (es. tipo di mutuo)</li>
                <li>giorno e orario scelti per la consulenza</li>
              </ul>
              <p className="mt-3">
                Se utilizzi i pulsanti &ldquo;Chiamami&rdquo; o
                &ldquo;WhatsApp&rdquo;, il trattamento dei dati avviene secondo
                le modalità del tuo operatore telefonico o di WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-midnight">
                3. Finalità e base giuridica
              </h2>
              <p className="mt-3">I dati sono trattati per:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>gestire la prenotazione di una consulenza gratuita</li>
                <li>ricontattarti all&apos;orario concordato</li>
                <li>valutare la tua richiesta di consulenza su mutui e finanziamenti</li>
              </ul>
              <p className="mt-3">
                La base giuridica del trattamento è l&apos;esecuzione di misure
                precontrattuali su tua richiesta (art. 6, par. 1, lett. b GDPR)
                e, ove applicabile, il tuo consenso espresso tramite il modulo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-midnight">
                4. Conservazione dei dati
              </h2>
              <p className="mt-3">
                I dati sono conservati per il tempo necessario a gestire la
                richiesta e l&apos;eventuale rapporto professionale, e comunque
                nei limiti previsti dalla legge.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-midnight">
                5. Comunicazione a terzi
              </h2>
              <p className="mt-3">
                I dati possono essere trattati da fornitori tecnici che supportano
                il funzionamento del sito e del sistema di prenotazione (es.
                hosting e calendario), nominati responsabili del trattamento
                ove necessario. Non vendiamo i tuoi dati a terzi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-midnight">
                6. I tuoi diritti
              </h2>
              <p className="mt-3">
                Puoi esercitare in qualsiasi momento i diritti previsti dagli
                artt. 15-22 GDPR (accesso, rettifica, cancellazione, limitazione,
                opposizione, portabilità) scrivendo al titolare.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-midnight">7. Contatti</h2>
              <p className="mt-3">
                Per richieste relative alla privacy puoi contattare {SITE.name}:
              </p>
              <ul className="mt-3 space-y-1">
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${privacyEmail}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {privacyEmail}
                  </a>
                </li>
                {contact ? (
                  <li>
                    Telefono:{" "}
                    <a
                      href={contact.telHref}
                      className="font-medium text-primary hover:underline"
                    >
                      {contact.phoneDisplay || contact.telHref.replace("tel:", "")}
                    </a>
                  </li>
                ) : null}
              </ul>
            </section>
          </div>
        </article>
      </SectionContainer>
    </div>
  );
}
