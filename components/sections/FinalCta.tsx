import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FINAL_CTA } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-cta px-8 py-14 text-center md:px-16 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_55%)]" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-white md:text-5xl text-balance">
                {FINAL_CTA.headline}
              </h2>
              <p className="mx-auto mt-5 text-lg text-white/85 md:text-xl">
                {FINAL_CTA.subheadline}
              </p>
              <Button variant="white" size="lg" className="mt-10">
                {FINAL_CTA.cta}
              </Button>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
