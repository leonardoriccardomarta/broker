import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { BookingForm } from "@/components/booking/BookingForm";
import { FINAL_CTA } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="prenota" className="border-t border-slate-200/80 bg-white py-12 md:py-16">
      <SectionContainer>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-midnight text-balance sm:text-3xl md:text-4xl">
              {FINAL_CTA.headline}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-black/60 md:mt-4 md:text-lg">
              {FINAL_CTA.subheadline}
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl md:mt-10">
            <BookingForm />
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
