import Image from "next/image";
import { CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { BOOKING_HREF, HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-28 pb-16 md:pt-36 md:pb-24">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="relative lg:col-span-7">
            <Image
              src="/images/hero/star.svg"
              alt=""
              width={80}
              height={80}
              className="absolute -top-8 right-8 hidden opacity-80 md:block"
              aria-hidden
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-soft backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4" />
              {HERO.badge}
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-midnight text-balance sm:text-5xl lg:text-6xl">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/65 md:text-xl">
              {HERO.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={BOOKING_HREF} variant="primary" size="lg">
                {HERO.cta}
              </Button>
              <div className="flex items-center gap-2 text-sm font-medium text-black/60">
                <Users className="h-5 w-5 text-accent" />
                {HERO.trust}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:mr-0 lg:ml-auto">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-feature">
                <Image
                  src="/images/photos/hero-keys.jpg"
                  alt="Consulenza per mutui e finanziamenti"
                  width={640}
                  height={520}
                  priority
                  className="h-[320px] w-full object-cover md:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium text-white/80">Consulenza gratuita</p>
                  <p className="text-lg font-semibold">Mutui, prestiti e cessione del quinto</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
