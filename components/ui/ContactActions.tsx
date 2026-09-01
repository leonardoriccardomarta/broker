"use client";

import { Calendar, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BOOKING_HREF, HERO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { getContactLinks } from "@/lib/contact";

type ContactActionsProps = {
  layout: "hero" | "sticky";
};

const actionBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.98]";

export function ContactActions({ layout }: ContactActionsProps) {
  const contact = getContactLinks();
  if (!contact) return null;

  const callButton = (
    <a
      href={contact.telHref}
      onClick={() => trackEvent("call_click", { location: layout })}
      aria-label="Chiamami"
      className={`${actionBase} border border-slate-200 bg-white text-midnight hover:bg-slate-50 ${
        layout === "hero"
          ? "px-5 py-3 text-sm"
          : "h-11 w-11 shrink-0 p-0"
      }`}
    >
      <Phone className="h-4 w-4 shrink-0" />
      {layout === "hero" ? "Chiamami" : null}
    </a>
  );

  const whatsappButton = (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: layout })}
      className={`${actionBase} bg-[#25D366] text-white shadow-soft hover:bg-[#1fb855] ${
        layout === "hero"
          ? "w-full px-6 py-4 text-base sm:text-lg"
          : "h-11 min-w-0 flex-1 px-4 text-sm"
      }`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      <span className={layout === "sticky" ? "truncate" : undefined}>
        {layout === "hero" ? HERO.whatsappCta : "WhatsApp"}
      </span>
    </a>
  );

  const bookingButton =
    layout === "hero" ? (
      <Button
        href={BOOKING_HREF}
        variant="secondary"
        className="w-full sm:w-auto"
        onClick={() => trackEvent("booking_cta_click", { location: layout })}
      >
        {HERO.bookingCta}
      </Button>
    ) : (
      <Button
        href={BOOKING_HREF}
        variant="secondary"
        className="h-11 shrink-0 gap-1.5 px-4 py-0 text-sm"
        onClick={() => trackEvent("booking_cta_click", { location: layout })}
      >
        <Calendar className="h-4 w-4 shrink-0" />
        Prenota
      </Button>
    );

  if (layout === "sticky") {
    return (
      <div className="mx-auto flex w-full max-w-lg items-center gap-2">
        {whatsappButton}
        {callButton}
        {bookingButton}
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      {whatsappButton}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {bookingButton}
        {callButton}
      </div>
    </div>
  );
}
