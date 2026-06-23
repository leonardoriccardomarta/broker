import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BOOKING_HREF } from "@/lib/constants";
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
      className={`${actionBase} border border-primary bg-white text-primary hover:bg-primary/5 ${
        layout === "hero" ? "px-5 py-3.5 text-base" : "px-4 py-3 text-sm"
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
      className={`${actionBase} bg-[#25D366] text-white hover:bg-[#1fb855] ${
        layout === "hero" ? "px-5 py-3.5 text-base" : "px-4 py-3 text-sm"
      }`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      WhatsApp
    </a>
  );

  if (layout === "sticky") {
    return (
      <div className="mx-auto w-full max-w-lg space-y-2">
        <Button href={BOOKING_HREF} variant="primary" className="w-full py-3 text-sm">
          Prenota consulenza
        </Button>
        <div className="grid grid-cols-2 gap-2">
          {callButton}
          {whatsappButton}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid w-full gap-3 ${
        layout === "hero"
          ? "max-w-lg grid-cols-1 sm:grid-cols-2"
          : "max-w-md grid-cols-2 sm:w-auto"
      }`}
    >
      {callButton}
      {whatsappButton}
    </div>
  );
}
