import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FINAL_CTA } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light px-8 py-14 text-center md:px-16 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white md:text-4xl">
                {FINAL_CTA.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
                {FINAL_CTA.subheadline}
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="mt-8 border-0 bg-white text-primary hover:bg-blue-50"
              >
                {FINAL_CTA.cta}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
