import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const icons = [
  "/images/features/dollar.svg",
  "/images/features/time.svg",
  "/images/features/signal.svg",
  "/images/features/dollar.svg",
];

export function Services() {
  return (
    <section id="servizi" className="bg-slate-50/80 py-20 md:py-28">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Servizi"
            title="Soluzioni finanziarie su misura"
            subtitle="Dalla prima consulenza all'approvazione: ti accompagno in ogni fase."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 80}>
              <article className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-feature transition-all duration-300 hover:-translate-y-1">
                <Image
                  src={icons[index]}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <h3 className="mt-5 text-xl font-semibold text-midnight">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-black/55">
                  {service.description}
                </p>
                <p className="mt-5 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
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
