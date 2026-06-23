import Image from "next/image";
import { Users } from "lucide-react";
import { ConsultantIntro } from "@/components/ui/ConsultantIntro";
import { ContactActions } from "@/components/ui/ContactActions";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { HERO } from "@/lib/constants";
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
            <ConsultantIntro photoSize="sm" className="max-w-xl" />
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-midnight text-balance sm:text-5xl lg:text-6xl">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/65 md:text-xl">
              {HERO.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <ContactActions layout="hero" />
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
                  alt="Consulenza per mutui"
                  width={640}
                  height={520}
                  priority
                  className="h-[320px] w-full object-cover md:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium text-white/80">
                    {HERO.imageCaption}
                  </p>
                  <p className="text-lg font-semibold">
                    Prima casa, surroga e ristrutturazione
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
