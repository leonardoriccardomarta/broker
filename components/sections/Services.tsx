import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRIMARY_SERVICE, SECONDARY_SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="servizi" className="bg-slate-50/80 py-20 md:py-28">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Servizi"
            title="Mutui al centro, altre soluzioni su richiesta"
            subtitle="Il mio lavoro principale è trovare il mutuo giusto. Valuto anche prestiti e cessione del quinto quando servono."
          />
        </FadeIn>

        <FadeIn delay={80}>
          <article className="rounded-2xl bg-white p-6 shadow-feature md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <Image
                src={PRIMARY_SERVICE.icon}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Focus principale
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-midnight md:text-3xl">
                  {PRIMARY_SERVICE.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-black/60">
                  {PRIMARY_SERVICE.description}
                </p>
              </div>
              <p className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {PRIMARY_SERVICE.benefit}
              </p>
            </div>
          </article>
        </FadeIn>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {SECONDARY_SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={120 + index * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-6">
                <Image
                  src={service.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 opacity-80"
                />
                <h3 className="mt-4 text-lg font-semibold text-midnight">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-black/55">
                  {service.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-black/40">
                  {service.benefit}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
