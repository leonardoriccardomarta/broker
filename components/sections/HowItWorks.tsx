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
            subtitle="Tre semplici passi per ottenere il finanziamento che cerchi."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <FadeIn key={step.step} delay={index * 120}>
              <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white p-8 shadow-soft">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-soft">
                  {step.step}
                </div>
                {index < STEPS.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-slate-200 md:block" />
                )}
                <h3 className="text-xl font-semibold text-midnight">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-black/60">
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
