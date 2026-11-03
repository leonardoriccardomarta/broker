import type { calendar_v3 } from "googleapis";
import { fromZonedTime } from "date-fns-tz";
import { bookingConfig } from "@/lib/booking/config";

export type BusyBlock = {
  start: string;
  end: string;
};

export function getAggregatedCalendarIds(): string[] {
  const ids: string[] = [];

  const primary = process.env.GOOGLE_CALENDAR_ID?.trim();
  const filippo = process.env.GOOGLE_CALENDAR_ID_FILIPPO?.trim();
  const marco = process.env.GOOGLE_CALENDAR_ID_MARCO?.trim();
  const commaSeparated = process.env.GOOGLE_CALENDAR_IDS?.trim();

  if (primary) ids.push(primary);
  if (filippo) ids.push(filippo);
  if (marco) ids.push(marco);

  if (commaSeparated) {
    const split = commaSeparated
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    ids.push(...split);
  }

  return Array.from(new Set(ids.filter(Boolean)));
}

function normalizeEventBlock(start: string, end: string): BusyBlock {
  const { timezone } = bookingConfig;

  if (start.includes("T")) {
    return { start, end };
  }

  const dayStart = fromZonedTime(`${start}T00:00:00`, timezone);
  const dayEnd = fromZonedTime(`${end}T00:00:00`, timezone);

  return {
    start: dayStart.toISOString(),
    end: dayEnd.toISOString(),
  };
}

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

    blocks.push(normalizeEventBlock(start, end));
  }

  return blocks;
}

/**
 * Queries freebusy across multiple calendar IDs simultaneously (Euroansa Inzago, Filippo, Marco)
 * and flattens/merges all busy intervals into a single unified array.
 */
export async function getMultiCalendarBusyBlocks(
  calendar: calendar_v3.Calendar,
  calendarIds: string[],
  timeMin: string,
  timeMax: string,
): Promise<BusyBlock[]> {
  if (calendarIds.length === 0) return [];

  try {
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        items: calendarIds.map((id) => ({ id })),
      },
    });

    const busyBlocks: BusyBlock[] = [];
    const calendarsData = response.data.calendars ?? {};

    for (const calId of Object.keys(calendarsData)) {
      const cal = calendarsData[calId];
      if (cal?.busy && Array.isArray(cal.busy)) {
        for (const busy of cal.busy) {
          if (busy.start && busy.end) {
            busyBlocks.push(normalizeEventBlock(busy.start, busy.end));
          }
        }
      }
    }

    return busyBlocks;
  } catch (err) {
    console.warn(
      "[freebusy.query error, falling back to events.list per calendar]:",
      err,
    );

    const fallbackBlocks: BusyBlock[] = [];
    for (const id of calendarIds) {
      try {
        const blocks = await getBusyBlocks(calendar, id, timeMin, timeMax);
        fallbackBlocks.push(...blocks);
      } catch (e) {
        console.warn(`[events.list fallback failed for calendar ${id}]:`, e);
      }
    }
    return fallbackBlocks;
  }
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
