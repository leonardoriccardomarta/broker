import { NextResponse } from "next/server";
import { isGoogleCalendarConfigured } from "@/lib/booking/config";
import { getAuthorizedCalendarClient } from "@/lib/google/auth";
import { getGoogleCalendarErrorMessage } from "@/lib/google/errors";

export async function GET() {
  if (!isGoogleCalendarConfigured()) {
    return NextResponse.json({
      ok: false,
      hint: "Mancano GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY o GOOGLE_CALENDAR_ID su Vercel.",
    });
  }

  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();

  try {
    const calendar = await getAuthorizedCalendarClient();
    const now = new Date();
    const later = new Date(now.getTime() + 60 * 60 * 1000);

    const freeBusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: now.toISOString(),
        timeMax: later.toISOString(),
        timeZone: "Europe/Rome",
        items: [{ id: calendarId! }],
      },
    });

    const entry = freeBusy.data.calendars?.[calendarId!];

    return NextResponse.json({
      ok: true,
      calendarId,
      shared: Boolean(entry),
      hint: entry
        ? "Connessione al calendario riuscita."
        : "Calendario non accessibile: condividilo con il service account.",
    });
  } catch (error) {
    console.error("[api/calendar-health]", error);
    return NextResponse.json({
      ok: false,
      calendarId,
      hint: getGoogleCalendarErrorMessage(error),
    });
  }
}
