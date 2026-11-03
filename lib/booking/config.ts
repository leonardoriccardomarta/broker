export type LunchBreak = {
  start: string;
  end: string;
};

/** date-fns getDay(): 0 = domenica, 1 = lunedì, … 6 = sabato */
const DAY_ALIASES: Record<string, number> = {
  SUN: 0,
  DOM: 0,
  MON: 1,
  LUN: 1,
  TUE: 2,
  MAR: 2,
  WED: 3,
  MER: 3,
  THU: 4,
  GIO: 4,
  FRI: 5,
  VEN: 5,
  SAT: 6,
  SAB: 6,
};

const DEFAULT_WORKING_DAYS = [1, 2, 3, 4, 5] as number[];

function parseDayToken(token: string): number | null {
  const upper = token.trim().toUpperCase();
  if (upper in DAY_ALIASES) return DAY_ALIASES[upper];

  const num = Number(upper);
  if (Number.isInteger(num) && num >= 0 && num <= 6) return num;

  return null;
}

function expandDayRange(start: number, end: number): number[] {
  const days: number[] = [];

  if (start <= end) {
    for (let day = start; day <= end; day++) days.push(day);
    return days;
  }

  for (let day = start; day <= 6; day++) days.push(day);
  for (let day = 0; day <= end; day++) days.push(day);

  return days;
}

function parseWorkingDays(): number[] {
  const raw = process.env.BOOKING_WORKING_DAYS?.trim();
  if (!raw) return DEFAULT_WORKING_DAYS;

  const normalized = raw.toUpperCase().replace(/\s+/g, "");
  const rangeMatch = /^([A-Z]{3}|\d)-([A-Z]{3}|\d)$/.exec(normalized);

  if (rangeMatch) {
    const start = parseDayToken(rangeMatch[1]);
    const end = parseDayToken(rangeMatch[2]);

    if (start === null || end === null) {
      console.warn(
        `[booking] BOOKING_WORKING_DAYS non valido: "${raw}" (atteso MON-FRI, LUN-SAB, ecc.)`,
      );
      return DEFAULT_WORKING_DAYS;
    }

    return [...new Set(expandDayRange(start, end))].sort((a, b) => a - b);
  }

  const days = normalized
    .split(",")
    .map(parseDayToken)
    .filter((day): day is number => day !== null);

  if (days.length === 0) {
    console.warn(
      `[booking] BOOKING_WORKING_DAYS non valido: "${raw}" (atteso MON-FRI o MON,TUE,WED,... )`,
    );
    return DEFAULT_WORKING_DAYS;
  }

  return [...new Set(days)].sort((a, b) => a - b);
}

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
  /** 0 = domenica, 1 = lunedì, … 6 = sabato (date-fns getDay) */
  workingDays: parseWorkingDays(),
  daysAhead: Number(process.env.BOOKING_DAYS_AHEAD ?? 30),
  minNoticeHours: Number(process.env.BOOKING_MIN_NOTICE_HOURS ?? 2),
  lunchBreak: parseLunchBreak(),
} as const;

export function isGoogleCalendarConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim() &&
      (process.env.GOOGLE_CALENDAR_ID?.trim() ||
        process.env.GOOGLE_CALENDAR_ID_FILIPPO?.trim() ||
        process.env.GOOGLE_CALENDAR_ID_MARCO?.trim() ||
        process.env.GOOGLE_CALENDAR_IDS?.trim()),
  );
}
