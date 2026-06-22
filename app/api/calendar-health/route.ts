import { NextResponse } from "next/server";
import { isGoogleCalendarConfigured } from "@/lib/booking/config";
import {
  getBusyBlocks,
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

  try {
    const calendar = await getAuthorizedCalendarClient();

    const meta = await verifyCalendarAccess(calendar, calendarId!);

    const now = new Date();
    const later = new Date(now.getTime() + 60 * 60 * 1000);
    await getBusyBlocks(calendar, calendarId!, now.toISOString(), later.toISOString());

    const accessible = await listAccessibleCalendars(calendar).catch(() => []);

    return NextResponse.json({
      ok: true,
      calendarId,
      serviceAccount,
      calendarName: meta.summary,
      accessibleCalendars: accessible,
      note:
        accessible.length === 0
          ? "Normale per i service account: calendarList è spesso vuoto anche con accesso funzionante."
          : undefined,
      hint: "Connessione al calendario riuscita.",
    });
  } catch (error) {
    console.error("[api/calendar-health]", error);

    let accessible: Awaited<ReturnType<typeof listAccessibleCalendars>> = [];
    try {
      const calendar = await getAuthorizedCalendarClient();
      accessible = await listAccessibleCalendars(calendar);
    } catch {
      // ignore secondary failure
    }

    return NextResponse.json({
      ok: false,
      calendarId,
      serviceAccount,
      accessibleCalendars: accessible,
      googleError: getGoogleErrorDetail(error),
      hint: "Impossibile accedere al calendario configurato. Verifica GOOGLE_CALENDAR_ID e la condivisione col service account.",
    });
  }
}
