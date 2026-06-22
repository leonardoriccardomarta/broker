import { Home, Wallet, Briefcase, Layers } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const icons = [Home, Wallet, Briefcase, Layers];

export function Services() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <SectionHeading
            title="I nostri servizi"
            subtitle="Soluzioni finanziarie su misura per ogni esigenza."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={service.title} delay={index * 80}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-accent">
                    {service.benefit}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
