import Image from "next/image";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const featured = TESTIMONIALS[0];
  const others = TESTIMONIALS.slice(1);

  return (
    <section id="recensioni" className="bg-slate-50/80 py-20 md:py-28">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-success-light p-8 md:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <Image
                  src="/images/people/user.png"
                  alt={featured.name}
                  width={72}
                  height={72}
                  className="rounded-full ring-4 ring-white"
                />
                <div>
                  <p className="text-lg font-semibold text-midnight">
                    {featured.name}
                  </p>
                  <p className="text-sm text-black/55">
                    {featured.location}, {featured.service}
                  </p>
                </div>
              </div>
              <p className="relative mt-6 text-xl font-medium leading-relaxed text-midnight md:text-2xl">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="mt-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-6">
            <SectionHeading
              align="left"
              eyebrow="Recensioni"
              title="Cosa dicono i nostri clienti"
              subtitle="Storie reali di persone che hanno trovato la soluzione giusta."
              className="mb-8 md:mb-10"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {others.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-2xl bg-white p-6 shadow-soft"
                >
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-black/65">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="mt-4 font-semibold text-midnight">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-black/50">
                    {testimonial.location}, {testimonial.service}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
