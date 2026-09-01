"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS, SECTION_IDS } from "@/lib/constants";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id={SECTION_IDS.faq} className="bg-slate-50 py-20 md:py-28">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Domande frequenti"
            title="Hai dubbi sul mutuo?"
            subtitle="Risposte chiare alle domande che ricevo più spesso. Per il tuo caso specifico, scrivimi su WhatsApp o prenota una consulenza."
          />
        </FadeIn>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <FadeIn key={item.id} delay={index * 60}>
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenId((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                  >
                    <span className="text-base font-semibold text-midnight md:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-black/65 md:px-6 md:pb-6 md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
