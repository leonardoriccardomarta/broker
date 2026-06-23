import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { InitialsAvatar } from "@/components/ui/InitialsAvatar";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full w-[300px] shrink-0 flex-col rounded-2xl bg-white p-5 shadow-soft sm:w-[340px] md:p-6">
      <div className="flex items-center gap-3">
        <InitialsAvatar initials={testimonial.initials} size="md" />
        <div className="min-w-0">
          <p className="font-medium text-midnight">{testimonial.label}</p>
          <p className="text-xs text-black/50">{testimonial.service}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-black/65">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </article>
  );
}

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="recensioni" className="overflow-hidden bg-slate-50/80 py-16 md:py-24">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Recensioni"
            title="Cosa dicono i clienti"
            subtitle="Feedback di clienti dopo consulenze e pratiche mutuo concluse con successo."
          />
        </FadeIn>
      </SectionContainer>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50/95 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50/95 to-transparent sm:w-20" />

        <div className="overflow-hidden">
          <div className="testimonial-track flex gap-4 px-4 sm:gap-6 sm:px-6">
            {loop.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.initials}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
