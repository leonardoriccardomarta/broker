import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { BookingForm } from "@/components/booking/BookingForm";
import { FINAL_CTA, SECTION_IDS } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id={SECTION_IDS.prenota} className="bg-slate-50/70 py-16 md:py-24 border-t border-slate-200/80">
      <SectionContainer>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-midnight text-balance sm:text-3xl md:text-4xl">
              {FINAL_CTA.headline}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
              {FINAL_CTA.subheadline}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl md:mt-10">
            <BookingForm />
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
