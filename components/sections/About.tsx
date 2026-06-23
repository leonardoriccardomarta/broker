import { HeartHandshake, MapPin, Target, Users } from "lucide-react";
import { ConsultantIntro } from "@/components/ui/ConsultantIntro";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ABOUT, ABOUT_HIGHLIGHTS } from "@/lib/constants";

const HIGHLIGHT_ICONS = {
  clients: Users,
  focus: Target,
  area: MapPin,
} as const;

export function About() {
  return (
    <section id="chi-sono" className="py-20 md:py-28">
      <SectionContainer>
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Chi sono
            </p>
            <ConsultantIntro photoSize="md" className="mt-4" />
            <blockquote className="mt-8 border-l-4 border-primary/30 pl-5 text-lg italic leading-relaxed text-black/70">
              &ldquo;{ABOUT.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-black/65">
              {ABOUT.description}
            </p>

            <ul className="mt-10 space-y-4">
              {ABOUT_HIGHLIGHTS.map(({ id, text }) => {
                const Icon = HIGHLIGHT_ICONS[id] ?? HeartHandshake;

                return (
                  <li key={id} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-midnight">{text}</span>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
