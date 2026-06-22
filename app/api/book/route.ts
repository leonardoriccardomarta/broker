import { NextResponse } from "next/server";
import { isGoogleCalendarConfigured } from "@/lib/booking/config";
import { createBooking } from "@/lib/google/calendar";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!isGoogleCalendarConfigured()) {
    return NextResponse.json(
      { error: "Prenotazioni non ancora configurate." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const { start, name, email, phone, note } = body as Record<string, unknown>;

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

  try {
    const result = await createBooking({
      start,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      note: noteValue,
    });

    return NextResponse.json({
      ok: true,
      eventId: result.eventId,
      message: "Prenotazione confermata. Riceverai un'email di conferma.",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Prenotazione non riuscita. Riprova.";

    const status = message.includes("non è più disponibile") ? 409 : 500;
    console.error("[api/book]", error);
    return NextResponse.json({ error: message }, { status });
  }
}
