import { AlertCircle, Ban, Building2, HelpCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROBLEMS, SOLUTION } from "@/lib/constants";

const icons = [Ban, AlertCircle, HelpCircle, Building2];

export function ProblemSolution() {
  return (
    <section className="py-20 md:py-28">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Il problema"
            title="Ti riconosci in una di queste situazioni?"
            subtitle="Molte persone affrontano le stesse difficoltà. La differenza è avere qualcuno che lavora solo per te."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={problem.title} delay={index * 80}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-feature transition-transform duration-300 hover:-translate-y-1 md:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-midnight">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">
                    {problem.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={200}>
          <div className="mt-16 grid items-center gap-10 overflow-hidden rounded-3xl bg-success-light p-8 md:grid-cols-2 md:p-12">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold text-midnight md:text-3xl">
                {SOLUTION.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-black/65">
                {SOLUTION.description}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-feature">
              <Image
                src="/images/photos/consulting.jpg"
                alt="Consulenza finanziaria personalizzata"
                width={720}
                height={480}
                className="h-64 w-full object-cover md:h-80"
              />
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
