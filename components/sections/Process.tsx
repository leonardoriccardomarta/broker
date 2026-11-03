import { Calendar, FileCheck, Scale, Award } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS, SECTION_IDS } from "@/lib/constants";

const STEP_ICONS = [Calendar, FileCheck, Scale, Award];

export function Process() {
  return (
    <section id={SECTION_IDS.comeFunziona} className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Il Nostro Metodo"
            title="Come lavoriamo"
            subtitle="Un percorso lineare, trasparente e senza sorprese dalla prima valutazione fino all'atto notarile."
          />
        </FadeIn>

        {/* 4 horizontal/grid steps in the same typography */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? Calendar;

            return (
              <FadeIn key={step.number} delay={index * 70}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 shadow-soft transition-all duration-200 hover:bg-white hover:border-primary/40 hover:shadow-card">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-midnight text-xs font-bold text-white">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-midnight">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200/40 text-[11px] font-semibold text-primary">
                    Passo {step.number} di 4
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
