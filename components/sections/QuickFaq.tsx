"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS, SECTION_IDS } from "@/lib/constants";

export function QuickFaq() {
  const [openId, setOpenId] = useState<string | null>("gratuita");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id={SECTION_IDS.faq} className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Domande Frequenti"
            title="FAQ Rapide"
            subtitle="Tutto quello che c'è da sapere sulla consulenza e sull'iter del mutuo prima di prenotare."
          />
        </FadeIn>

        {/* 3-4 collapsible questions addressing costs, timings, and feasibility */}
        <div className="mt-10 max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <FadeIn key={faq.id} delay={index * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-primary/40 bg-slate-50/70 shadow-soft"
                      : "border-slate-200/90 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3 text-sm sm:text-base font-bold text-midnight">
                      <HelpCircle className={`h-4 w-4 shrink-0 ${isOpen ? "text-primary" : "text-slate-400"}`} />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
