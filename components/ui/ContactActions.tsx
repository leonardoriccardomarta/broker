"use client";

import { MessageCircle, Phone } from "lucide-react";
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
      className={`${actionBase} border border-slate-200 bg-white text-midnight hover:bg-slate-50 ${
        layout === "hero" ? "px-5 py-3 text-sm" : "px-4 py-3 text-sm"
      }`}
    >
      <Phone className="h-4 w-4 shrink-0" />
      Chiamami
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
          : "w-full px-4 py-3 text-sm"
      }`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      {layout === "hero" ? HERO.whatsappCta : "WhatsApp"}
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
        className="w-full py-3 text-sm"
        onClick={() => trackEvent("booking_cta_click", { location: layout })}
      >
        Prenota consulenza
      </Button>
    );

  if (layout === "sticky") {
    return (
      <div className="mx-auto w-full max-w-lg space-y-2">
        {whatsappButton}
        <div className="grid grid-cols-2 gap-2">
          {bookingButton}
          {callButton}
        </div>
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
