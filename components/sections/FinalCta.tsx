import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { BookingForm } from "@/components/booking/BookingForm";
import { FINAL_CTA } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="prenota" className="py-20 md:py-28">
      <SectionContainer>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-cta px-6 py-12 md:px-12 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_55%)]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-white md:text-5xl text-balance">
                {FINAL_CTA.headline}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 md:text-xl">
                {FINAL_CTA.subheadline}
              </p>
            </div>
            <div className="relative mx-auto mt-10 max-w-xl">
              <BookingForm />
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
