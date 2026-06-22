import { Quote, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeading
            title="Cosa dicono i nostri clienti"
            subtitle="Storie reali di persone che hanno trovato la soluzione giusta."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 flex-1 leading-relaxed text-slate-600">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.location} · {testimonial.service}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
