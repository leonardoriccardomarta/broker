import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeading
            title="Come funziona"
            subtitle="Tre semplici passi per ottenere il finanziamento che cerchi."
          />
        </FadeIn>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:left-1/2 md:block md:-translate-x-px" />

          <div className="flex flex-col gap-10 md:gap-16">
            {STEPS.map((step, index) => (
              <FadeIn key={step.step} delay={index * 120}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center md:gap-8 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 md:w-1/2 md:justify-end">
                    {index % 2 === 0 && (
                      <div className="hidden text-right md:block">
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-slate-600">{step.description}</p>
                      </div>
                    )}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg shadow-primary/30">
                      {step.step}
                    </div>
                    {index % 2 === 1 && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-slate-600">{step.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/2 md:hidden">
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{step.description}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
