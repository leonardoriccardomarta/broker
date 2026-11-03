import { Star, MapPin } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REVIEWS, SECTION_IDS } from "@/lib/constants";

export function LocalReviews() {
  // Duplicate reviews array for seamless continuous infinite marquee
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id={SECTION_IDS.recensioni} className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80 overflow-hidden">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Esperienze Reali"
            title="Cosa dicono i nostri clienti sul territorio"
            subtitle="Storie di famiglie e professionisti accompagnati all'acquisto casa tra Inzago e la Martesana."
          />
        </FadeIn>
      </SectionContainer>

      {/* Animated Scrolling Carousel / Marquee */}
      <div className="mt-10 relative w-full overflow-hidden">
        {/* Soft gradient masks on left and right for seamless edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

        <div className="animate-marquee flex gap-5 px-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {duplicatedReviews.map((review, index) => (
            <article
              key={`${review.town}-${index}`}
              className="w-[290px] sm:w-[330px] shrink-0 flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-soft transition-all duration-200 hover:border-primary/40 hover:shadow-card"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 rounded bg-slate-100 px-2 py-0.5">
                    {review.service}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-midnight">{review.name}</p>
                    <p className="text-[11px] text-slate-500 flex items-center gap-0.5">
                      <MapPin className="h-3 w-3 text-primary shrink-0" />
                      <span>{review.town}</span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
