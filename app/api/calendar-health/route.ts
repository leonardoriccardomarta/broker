import { NextResponse } from "next/server";
import { isGoogleCalendarConfigured } from "@/lib/booking/config";
import {
  listAccessibleCalendars,
  verifyCalendarAccess,
} from "@/lib/google/busy-times";
import { getAuthorizedCalendarClient } from "@/lib/google/auth";

function getGoogleErrorDetail(error: unknown): string | undefined {
  const err = error as { message?: string; errors?: { message?: string }[] };
  return err.errors?.[0]?.message ?? err.message;
}

export async function GET() {
  if (!isGoogleCalendarConfigured()) {
    return NextResponse.json({
      ok: false,
      hint: "Mancano GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY o GOOGLE_CALENDAR_ID su Vercel.",
    });
  }

  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
  const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();

  let accessible: Awaited<ReturnType<typeof listAccessibleCalendars>> = [];

  try {
    const calendar = await getAuthorizedCalendarClient();
    accessible = await listAccessibleCalendars(calendar);

    const target = accessible.find((item) => item.id === calendarId);

    if (!target) {
      return NextResponse.json({
        ok: false,
        calendarId,
        serviceAccount,
        accessibleCalendars: accessible,
        hint:
          accessible.length === 0
            ? "Il service account non vede nessun calendario. Condividi il calendario con l'email del service account."
            : "GOOGLE_CALENDAR_ID non corrisponde a nessun calendario condiviso. Usa uno degli ID in accessibleCalendars.",
      });
    }

    const meta = await verifyCalendarAccess(calendar, calendarId!);

    return NextResponse.json({
      ok: true,
      calendarId,
      serviceAccount,
      calendarName: meta.summary,
      accessRole: target.accessRole,
      accessibleCalendars: accessible,
      hint: "Connessione al calendario riuscita.",
    });
  } catch (error) {
    console.error("[api/calendar-health]", error);

    return NextResponse.json({
      ok: false,
      calendarId,
      serviceAccount,
      accessibleCalendars: accessible,
      googleError: getGoogleErrorDetail(error),
      hint:
        accessible.length === 0
          ? "Condividi il calendario con il service account (modifica eventi), poi attendi 1-2 minuti."
          : "Controlla che GOOGLE_CALENDAR_ID corrisponda esattamente all'ID del calendario condiviso.",
    });
  }
}
