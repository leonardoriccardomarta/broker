import type { calendar_v3 } from "googleapis";
import { bookingConfig } from "@/lib/booking/config";

export type BusyBlock = {
  start: string;
  end: string;
};

export async function getBusyBlocks(
  calendar: calendar_v3.Calendar,
  calendarId: string,
  timeMin: string,
  timeMax: string,
): Promise<BusyBlock[]> {
  const response = await calendar.events.list({
    calendarId,
    timeMin,
    timeMax,
    singleEvents: true,
    orderBy: "startTime",
    maxResults: 250,
  });

  const blocks: BusyBlock[] = [];

  for (const event of response.data.items ?? []) {
    if (event.transparency === "transparent") continue;

    const start = event.start?.dateTime ?? event.start?.date;
    const end = event.end?.dateTime ?? event.end?.date;
    if (!start || !end) continue;

    blocks.push({ start, end });
  }

  return blocks;
}

export async function verifyCalendarAccess(
  calendar: calendar_v3.Calendar,
  calendarId: string,
): Promise<{ ok: boolean; summary?: string }> {
  const meta = await calendar.calendars.get({ calendarId });
  return { ok: true, summary: meta.data.summary ?? undefined };
}

export async function listAccessibleCalendars(
  calendar: calendar_v3.Calendar,
): Promise<{ id: string; summary: string; accessRole?: string }[]> {
  const response = await calendar.calendarList.list({ maxResults: 20 });

  return (response.data.items ?? []).map((item) => ({
    id: item.id ?? "",
    summary: item.summary ?? "",
    accessRole: item.accessRole ?? undefined,
  }));
}

export { bookingConfig };
