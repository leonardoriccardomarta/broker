export type LunchBreak = {
  start: string;
  end: string;
};

function normalizeTime(value: string): string | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(value.trim());
  if (!match) return null;

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function parseLunchBreak(): LunchBreak | null {
  const raw = process.env.BOOKING_LUNCH_BREAK?.trim();
  if (!raw) return null;

  const match = /^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/.exec(raw);
  if (!match) {
    console.warn(
      `[booking] BOOKING_LUNCH_BREAK non valido: "${raw}" (atteso HH:mm-HH:mm, es. 13:00-14:00)`,
    );
    return null;
  }

  const start = normalizeTime(match[1]);
  const end = normalizeTime(match[2]);
  if (!start || !end) {
    console.warn(`[booking] BOOKING_LUNCH_BREAK: orari non validi in "${raw}"`);
    return null;
  }

  if (start >= end) {
    console.warn(
      `[booking] BOOKING_LUNCH_BREAK: l'orario di inizio deve essere prima della fine (${start} >= ${end})`,
    );
    return null;
  }

  return { start, end };
}

export const bookingConfig = {
  timezone: process.env.BOOKING_TIMEZONE ?? "Europe/Rome",
  slotDurationMinutes: Number(process.env.SLOT_DURATION_MINUTES ?? 30),
  businessStartHour: Number(process.env.BUSINESS_START_HOUR ?? 9),
  businessEndHour: Number(process.env.BUSINESS_END_HOUR ?? 18),
  /** 1 = Monday, 5 = Friday */
  workingDays: [1, 2, 3, 4, 5] as number[],
  daysAhead: Number(process.env.BOOKING_DAYS_AHEAD ?? 30),
  minNoticeHours: Number(process.env.BOOKING_MIN_NOTICE_HOURS ?? 2),
  lunchBreak: parseLunchBreak(),
} as const;

export function isGoogleCalendarConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim() &&
      process.env.GOOGLE_CALENDAR_ID?.trim(),
  );
}
