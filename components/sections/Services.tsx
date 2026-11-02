import { Home, RefreshCw, Layers, Banknote, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BOOKING_HREF, SECTION_IDS, SERVICES } from "@/lib/constants";

const ICONS = [Home, RefreshCw, Layers, Banknote];

export function Services() {
  return (
    <section id={SECTION_IDS.servizi} className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Cosa Facciamo"
            title="I Nostri Servizi di Credito"
            subtitle="Confrontiamo per te le migliori condizioni di mercato tra oltre 25 banche convenzionate."
          />
        </FadeIn>

        {/* Essential 4-Card Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index] ?? Home;

            return (
              <FadeIn key={service.id} delay={index * 60}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 shadow-soft transition-all duration-200 hover:bg-white hover:border-primary/40 hover:shadow-card">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 rounded-md bg-white px-2 py-0.5 border border-slate-200">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-midnight leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200/60">
                    <a
                      href={BOOKING_HREF}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-midnight transition-colors"
                    >
                      <span>Verifica fattibilità</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
