import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { InitialsAvatar } from "@/components/ui/InitialsAvatar";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="recensioni" className="bg-slate-50/80 py-16 md:py-24">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Recensioni"
            title="Cosa dicono i clienti"
            subtitle="Feedback raccolti dopo consulenze e pratiche concluse con successo."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.initials} delay={index * 80}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-soft md:p-6">
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
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
