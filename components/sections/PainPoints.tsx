import { AlertCircle, SlidersHorizontal, Clock, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BOOKING_HREF, PAIN_POINTS, SECTION_IDS } from "@/lib/constants";

const ICONS = [AlertCircle, SlidersHorizontal, Clock];

export function PainPoints() {
  return (
    <section id={SECTION_IDS.situazioni} className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Difficoltà Comuni"
            title="Ti riconosci in una di queste situazioni?"
            subtitle="Ottenere un mutuo può sembrare complicato. Ti aiutiamo a superare gli ostacoli bancari più frequenti."
          />
        </FadeIn>

        {/* 3 clean white cards matching the services styling */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {PAIN_POINTS.map((item, index) => {
            const Icon = ICONS[index] ?? AlertCircle;

            return (
              <FadeIn key={item.id} delay={index * 80}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-soft transition-all duration-200 hover:border-primary/40 hover:shadow-card">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-midnight leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={BOOKING_HREF}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-midnight transition-colors"
                    >
                      <span>Parla con un consulente</span>
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
