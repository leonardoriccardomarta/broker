const DEFAULT_WHATSAPP_MESSAGE = "Ciao, vorrei informazioni sul mutuo.";

export type ContactLinks = {
  telHref: string;
  whatsappHref: string;
};

function normalizePhone(raw: string | undefined): string | null {
  if (!raw?.trim()) return null;

  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.length === 10 && digits.startsWith("3")) digits = `39${digits}`;

  return digits.length >= 9 ? digits : null;
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
  };
}
