import Image from "next/image";
import { Phone, MessageCircle, Shield } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BOOKING_HREF, SECTION_IDS, TEAM_MEMBERS } from "@/lib/constants";
import { getAdvisorContactLinks } from "@/lib/contact";

export function Team() {
  return (
    <section id={SECTION_IDS.team} className="bg-slate-50/70 py-16 md:py-24 border-b border-slate-200/80">
      <SectionContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="I Nostri Mediatori"
            title="I Tuoi Consulenti sul Territorio"
            subtitle="I nostri Mediatori Creditizi a Inzago: contattaci direttamente o prenota un colloquio senza impegno."
          />
        </FadeIn>

        {/* Symmetric cards: 1 column on mobile, 2 columns on desktop */}
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => {
            const advisorContact = getAdvisorContactLinks(member.id);

            return (
              <FadeIn key={member.id} delay={index * 80}>
                <article className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-soft transition-all hover:border-primary/40 hover:shadow-card">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                        <Image
                          src={member.photo}
                          alt={`${member.name} - ${member.role}`}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold tracking-tight text-midnight">
                          {member.name}
                        </h3>
                        <p className="mt-0.5 text-sm font-semibold text-primary">
                          {member.role}
                        </p>
                        <p className="mt-1 text-xs text-slate-500 flex items-center gap-1">
                          <Shield className="h-3 w-3 text-emerald-600 shrink-0" />
                          <span>{member.company} · {member.oamNumber}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Advisor CTA Buttons: [Chiama] e [WhatsApp] */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex gap-2.5">
                    {advisorContact?.telHref ? (
                      <a
                        href={advisorContact.telHref}
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-xs font-bold text-midnight hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        <Phone className="h-3.5 w-3.5 text-primary" />
                        <span>Chiama</span>
                      </a>
                    ) : (
                      <a
                        href={BOOKING_HREF}
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-xs font-bold text-midnight hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        <Phone className="h-3.5 w-3.5 text-primary" />
                        <span>Richiedi Chiamata</span>
                      </a>
                    )}

                    {advisorContact?.whatsappHref ? (
                      <a
                        href={advisorContact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-600 bg-emerald-600 py-2.5 px-3 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-soft"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    ) : (
                      <a
                        href={BOOKING_HREF}
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-600 bg-emerald-600 py-2.5 px-3 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-soft"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>Contattami</span>
                      </a>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
