const DEFAULT_WHATSAPP_MESSAGE =
  "Buongiorno, vorrei richiedere informazioni per una consulenza mutui con l'Ufficio Euroansa di Inzago.";

export type ContactLinks = {
  telHref: string;
  whatsappHref: string;
  phoneDisplay: string;
};

function normalizePhone(raw: string | undefined): string | null {
  if (!raw?.trim()) return null;

  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.length === 10 && digits.startsWith("3")) digits = `39${digits}`;

  return digits.length >= 9 ? digits : null;
}

function formatPhoneDisplay(phone: string): string {
  if (phone.startsWith("39") && phone.length === 12) {
    return `+39 ${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8)}`;
  }
  return `+${phone}`;
}

export function getContactLinks(): ContactLinks | null {
  const phone = normalizePhone(
    process.env.NEXT_PUBLIC_CONTACT_PHONE ?? process.env.CONTACT_PHONE,
  );
  if (!phone) return null;

  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ??
    process.env.WHATSAPP_MESSAGE?.trim() ??
    DEFAULT_WHATSAPP_MESSAGE;

  return {
    telHref: `tel:+${phone}`,
    whatsappHref: `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    phoneDisplay: formatPhoneDisplay(phone),
  };
}

export function getAdvisorContactLinks(
  advisorId: "filippo-carriero" | "marco-gorla" | string,
): ContactLinks | null {
  let rawPhone: string | undefined;

  if (advisorId === "filippo-carriero") {
    rawPhone =
      process.env.NEXT_PUBLIC_CONTACT_PHONE_FILIPPO ||
      process.env.NEXT_PUBLIC_CONTACT_PHONE ||
      process.env.CONTACT_PHONE;
  } else if (advisorId === "marco-gorla") {
    rawPhone =
      process.env.NEXT_PUBLIC_CONTACT_PHONE_MARCO ||
      process.env.NEXT_PUBLIC_CONTACT_PHONE ||
      process.env.CONTACT_PHONE;
  } else {
    rawPhone =
      process.env.NEXT_PUBLIC_CONTACT_PHONE || process.env.CONTACT_PHONE;
  }

  const phone = normalizePhone(rawPhone);
  if (!phone) return getContactLinks();

  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ??
    process.env.WHATSAPP_MESSAGE?.trim() ??
    DEFAULT_WHATSAPP_MESSAGE;

  return {
    telHref: `tel:+${phone}`,
    whatsappHref: `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    phoneDisplay: formatPhoneDisplay(phone),
  };
}
