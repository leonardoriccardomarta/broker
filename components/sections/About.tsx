import Image from "next/image";
import { Award, Shield, HeartHandshake } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ABOUT } from "@/lib/constants";

const highlights = [
  { icon: Award, text: "Oltre 10 anni di esperienza" },
  { icon: Shield, text: "Indipendente dalle banche" },
  { icon: HeartHandshake, text: "Consulenza sempre gratuita" },
];

export function About() {
  return (
    <section id="chi-sono" className="py-20 md:py-28">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-feature">
                <Image
                  src="/images/photos/family-home.jpg"
                  alt={ABOUT.name}
                  width={560}
                  height={600}
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-midnight/10 to-transparent" />
                <blockquote className="absolute bottom-0 left-0 right-0 p-6 text-sm leading-relaxed text-white md:text-base">
                  &ldquo;{ABOUT.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Chi sono
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-midnight md:text-5xl">
              {ABOUT.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-primary">{ABOUT.role}</p>
            <p className="mt-6 text-lg leading-relaxed text-black/65">
              {ABOUT.description}
            </p>

            <ul className="mt-10 space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-midnight">{text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
