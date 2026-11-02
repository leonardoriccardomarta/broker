import { NextResponse } from "next/server";
import { isGoogleCalendarConfigured } from "@/lib/booking/config";
import { createBooking } from "@/lib/google/calendar";
import { getGoogleCalendarErrorMessage } from "@/lib/google/errors";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const { start, name, email, phone, note, privacyAccepted } = body as Record<
    string,
    unknown
  >;

  if (privacyAccepted !== true) {
    return NextResponse.json(
      { error: "Devi accettare l'informativa privacy per prenotare." },
      { status: 400 },
    );
  }

  if (typeof start !== "string" || !start) {
    return NextResponse.json({ error: "Seleziona una fascia oraria." }, { status: 400 });
  }

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Inserisci il nome." }, { status: 400 });
  }

  if (typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "Inserisci un'email valida." }, { status: 400 });
  }

  if (typeof phone !== "string" || phone.trim().length < 6) {
    return NextResponse.json({ error: "Inserisci un telefono valido." }, { status: 400 });
  }

  const noteValue =
    typeof note === "string" && note.trim() ? note.trim() : undefined;

  if (!isGoogleCalendarConfigured()) {
    console.log("[Booking Submitted - Offline/Local]", {
      start,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      note: noteValue,
    });
    return NextResponse.json({ ok: true, status: "confirmed" });
  }

  try {
    const result = await createBooking({
      start,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      note: noteValue,
    });

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("[api/book]", error);
    return NextResponse.json(
      { error: getGoogleCalendarErrorMessage(error) },
      { status: 500 },
    );
  }
}
