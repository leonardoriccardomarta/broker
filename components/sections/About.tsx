import Image from "next/image";
import { Phone, MessageCircle, Shield } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TEAM_MEMBERS } from "@/lib/constants";
import { getContactLinks } from "@/lib/contact";

export function About() {
  const contact = getContactLinks();

  return (
    <section id="chi-sono" className="bg-slate-50/60 py-20 md:py-28 border-t border-slate-200/80">
      <SectionContainer>
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                I Tuoi Consulenti sul Territorio
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-midnight sm:text-4xl">
                I Mediatori Creditizi a Inzago
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
                Contattaci direttamente o prenota un colloquio senza impegno presso il nostro ufficio a Inzago.
              </p>
            </div>

            {/* Clean 2-card layout representing the two brokers */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              {TEAM_MEMBERS.map((member, index) => (
                <div
                  key={member.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                        <Image
                          src={member.photo}
                          alt={`${member.name} — ${member.role}`}
                          fill
                          sizes="88px"
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
                          <span>{member.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Buttons: Chiama & WhatsApp */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex gap-2">
                    {contact?.telHref ? (
                      <a
                        href={contact.telHref}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-xs font-bold text-midnight hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        <Phone className="h-3.5 w-3.5 text-primary" />
                        <span>Chiama</span>
                      </a>
                    ) : (
                      <a
                        href="#prenota"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-xs font-bold text-midnight hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        <Phone className="h-3.5 w-3.5 text-primary" />
                        <span>Contatta</span>
                      </a>
                    )}

                    {contact?.whatsappHref ? (
                      <a
                        href={contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-600 bg-emerald-600 py-2.5 px-3 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-soft"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    ) : (
                      <a
                        href="#prenota"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-600 bg-emerald-600 py-2.5 px-3 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-soft"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
