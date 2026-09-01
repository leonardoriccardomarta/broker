import { Handshake, Route, Search, UserRound } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS, WHY_ME } from "@/lib/constants";

const icons = {
  referente: UserRound,
  confronto: Search,
  pratica: Route,
  analisi: Handshake,
} as const;

export function WhyMe() {
  return (
    <section id={SECTION_IDS.percheAffidarti} className="py-20 md:py-28">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Il mio approccio"
            title={WHY_ME.title}
            subtitle={WHY_ME.subtitle}
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {WHY_ME.points.map((point, index) => {
            const Icon = icons[point.id as keyof typeof icons];
            return (
              <FadeIn key={point.id} delay={index * 80}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-midnight">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">
                    {point.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
