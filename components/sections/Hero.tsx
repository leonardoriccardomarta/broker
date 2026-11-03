import Image from "next/image";
import { MessageCircle, Calendar, Phone, CheckCircle2, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { BOOKING_HREF, HERO } from "@/lib/constants";
import { getContactLinks } from "@/lib/contact";

export function Hero() {
  const contact = getContactLinks();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200/80">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Direct High-Converting Copy */}
          <FadeIn className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1 shadow-soft">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-midnight">
                {HERO.eyebrow}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.18] tracking-tight text-midnight text-balance sm:text-4xl lg:text-5xl">
              {HERO.headline}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {HERO.subheadline}
            </p>

            {/* Badges Required */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-medium text-slate-800">
              {HERO.badges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-soft"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Direct High-Converting CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={BOOKING_HREF}
                variant="primary"
                className="py-3.5 px-6 shadow-sm text-sm font-bold text-center"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {HERO.bookingCta}
              </Button>

              {contact?.whatsappHref && (
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  {HERO.whatsappCta}
                </a>
              )}

              {contact?.telHref && (
                <a
                  href={contact.telHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-midnight shadow-soft transition-colors hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  Chiama
                </a>
              )}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Filippo Carriero e Marco Gorla · Mediatori Creditizi (Euroansa S.p.A. · OAM M191)
            </p>
          </FadeIn>

          {/* Right Column: Exact clean model house with keys from 6a22f90 */}
          <FadeIn delay={80} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-card">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <Image
                    src="/images/photos/hero-keys.jpg"
                    alt="Acquisto casa e chiavi dell'immobile a Inzago"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/65 via-midnight/15 to-transparent" />

                  <div className="absolute top-4 left-4 rounded-lg bg-midnight/85 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                    <span>Inzago e Martesana</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-slate-200 font-semibold">
                      Ufficio di Inzago
                    </p>
                    <p className="text-base font-bold leading-tight">
                      La serenità del mutuo giusto per la tua casa
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-midnight">
                    Oltre 25 banche partner
                  </span>
                  <span className="font-bold text-emerald-600">
                    Consulenza 0€
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
