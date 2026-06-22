import Image from "next/image";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            {HERO.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            {HERO.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="accent" size="lg">
              {HERO.cta}
            </Button>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Users className="h-5 w-5 text-accent" />
              <span className="font-medium">{HERO.trust}</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
            <Image
              src="/consultant-placeholder.svg"
              alt="Marco Rossi, mediatore creditizio"
              width={400}
              height={480}
              priority
              className="relative rounded-2xl shadow-xl ring-1 ring-slate-200"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
