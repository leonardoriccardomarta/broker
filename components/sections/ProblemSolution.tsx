import { AlertCircle, Ban, HelpCircle, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROBLEMS, SOLUTION } from "@/lib/constants";

const icons = [Ban, AlertCircle, HelpCircle];

export function ProblemSolution() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeading
            title="Ti riconosci in una di queste situazioni?"
            subtitle="Non sei solo: molte persone affrontano le stesse difficoltà nel mondo del credito."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((problem, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={problem.title} delay={index * 100}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={200}>
          <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                  {SOLUTION.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-600">
                  {SOLUTION.description}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
