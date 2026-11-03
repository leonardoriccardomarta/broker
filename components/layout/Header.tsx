"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BOOKING_HREF } from "@/lib/constants";
import { getContactLinks } from "@/lib/contact";

export function Header() {
  const contact = getContactLinks();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 py-3 shadow-soft backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Official Logo Euroansa | Ufficio di Inzago */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <Image
            src="/logo-euroansa-inzago.png"
            alt="Euroansa Ufficio di Inzago"
            width={160}
            height={40}
            className="h-9 w-auto rounded-md object-contain shadow-sm"
            priority
          />
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-base font-extrabold tracking-tight text-midnight sm:text-lg">
              Euroansa
            </span>
            <span className="text-slate-300 font-light">|</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              UFFICIO DI INZAGO
            </span>
          </div>
        </Link>

        {/* Right: Quick Contact Actions (Phone + WhatsApp + Prenota) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {contact?.telHref && (
            <a
              href={contact.telHref}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-100"
              title="Chiamaci"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span className="hidden sm:inline">Chiamaci</span>
            </a>
          )}

          {contact?.whatsappHref && (
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-600/30 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800 transition-colors hover:bg-emerald-100"
              title="Scrivici su WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          )}

          <Button
            href={BOOKING_HREF}
            variant="primary"
            className="text-xs py-2 px-3.5 sm:px-4 shadow-sm"
          >
            <Calendar className="mr-1.5 h-3.5 w-3.5" />
            <span>Prenota Consulenza</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
