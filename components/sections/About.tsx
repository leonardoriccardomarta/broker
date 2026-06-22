import Image from "next/image";
import { Award, Shield, HeartHandshake } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ABOUT } from "@/lib/constants";

const highlights = [
  { icon: Award, text: "Oltre 10 anni di esperienza" },
  { icon: Shield, text: "Indipendente dalle banche" },
  { icon: HeartHandshake, text: "Consulenza sempre gratuita" },
];

export function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <div className="relative mx-auto w-full max-w-sm">
              <Image
                src="/consultant-placeholder.svg"
                alt={ABOUT.name}
                width={400}
                height={480}
                className="rounded-2xl shadow-lg ring-1 ring-slate-200"
              />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Chi sono
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-4xl">
              {ABOUT.name}
            </h2>
            <p className="mt-1 text-lg text-primary font-medium">{ABOUT.role}</p>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {ABOUT.description}
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
