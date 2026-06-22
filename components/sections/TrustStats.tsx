import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";

const stats = [
  { value: "+100", label: "Clienti soddisfatti" },
  { value: "10+", label: "Anni di esperienza" },
  { value: "24h", label: "Risposta garantita" },
  { value: "0€", label: "Consulenza gratuita" },
];

export function TrustStats() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-10 md:py-12">
      <SectionContainer>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 80}>
              <div className="text-center md:text-left">
                <p className="text-3xl font-semibold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-black/55 md:text-base">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
