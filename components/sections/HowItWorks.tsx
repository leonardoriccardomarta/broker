import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="come-funziona" className="py-20 md:py-28">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Processo"
            title="Come funziona"
            subtitle="Quattro passi chiari, dalla prenotazione alla firma in banca."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <FadeIn key={step.step} delay={index * 100}>
              <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-soft">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-midnight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
