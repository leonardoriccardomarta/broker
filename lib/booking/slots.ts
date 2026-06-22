import {
  addDays,
  addMinutes,
  format,
  getDay,
  isBefore,
  parseISO,
  startOfDay,
} from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import { bookingConfig } from "@/lib/booking/config";

export type TimeSlot = {
  start: string;
  end: string;
  label: string;
};

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function overlapsLunchBreak(
  slotStart: Date,
  slotEnd: Date,
  date: string,
  timezone: string,
): boolean {
  const { lunchBreak } = bookingConfig;
  if (!lunchBreak) return false;

  const lunchStart = fromZonedTime(
    `${date}T${lunchBreak.start}:00`,
    timezone,
  );
  const lunchEnd = fromZonedTime(`${date}T${lunchBreak.end}:00`, timezone);

  return slotsOverlap(slotStart, slotEnd, lunchStart, lunchEnd);
}

export function isValidBookingDate(date: string): boolean {
  if (!DATE_PATTERN.test(date)) return false;

  const parsed = parseISO(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return false;

  const { timezone, workingDays, daysAhead } = bookingConfig;
  const zoned = toZonedTime(parsed, timezone);
  const dayOfWeek = getDay(zoned);
  if (!workingDays.includes(dayOfWeek)) {
    return false;
  }

  const today = toZonedTime(new Date(), timezone);
  const minDate = startOfDay(today);
  const maxExclusive = addDays(minDate, daysAhead + 1);

  return !isBefore(zoned, minDate) && isBefore(zoned, maxExclusive);
}

export function generateSlotsForDate(date: string): TimeSlot[] {
  const {
    timezone,
    slotDurationMinutes,
    businessStartHour,
    businessEndHour,
    minNoticeHours,
  } = bookingConfig;

  const slots: TimeSlot[] = [];
  const now = new Date();
  const minStart = addMinutes(now, minNoticeHours * 60);

  let cursor = fromZonedTime(
    `${date}T${String(businessStartHour).padStart(2, "0")}:00:00`,
    timezone,
  );
  const dayEnd = fromZonedTime(
    `${date}T${String(businessEndHour).padStart(2, "0")}:00:00`,
    timezone,
  );

  while (isBefore(cursor, dayEnd)) {
    const end = addMinutes(cursor, slotDurationMinutes);
    if (isBefore(dayEnd, end)) break;

    if (!isBefore(cursor, minStart) && !overlapsLunchBreak(cursor, end, date, timezone)) {
      const zonedStart = toZonedTime(cursor, timezone);
      slots.push({
        start: cursor.toISOString(),
        end: end.toISOString(),
        label: format(zonedStart, "HH:mm"),
      });
    }

    cursor = end;
  }

  return slots;
}

export function slotsOverlap(
  slotStart: Date,
  slotEnd: Date,
  busyStart: Date,
  busyEnd: Date,
): boolean {
  return slotStart < busyEnd && slotEnd > busyStart;
}

export function getDefaultBookingDate(): string {
  const { timezone } = bookingConfig;
  let zoned = toZonedTime(new Date(), timezone);

  for (let i = 0; i < 14; i++) {
    const key = format(zoned, "yyyy-MM-dd");
    if (isValidBookingDate(key)) return key;
    zoned = addDays(zoned, 1);
  }

  return format(zoned, "yyyy-MM-dd");
}
