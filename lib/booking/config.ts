export const bookingConfig = {
  timezone: process.env.BOOKING_TIMEZONE ?? "Europe/Rome",
  slotDurationMinutes: Number(process.env.SLOT_DURATION_MINUTES ?? 30),
  businessStartHour: Number(process.env.BUSINESS_START_HOUR ?? 9),
  businessEndHour: Number(process.env.BUSINESS_END_HOUR ?? 18),
  /** 1 = Monday, 5 = Friday */
  workingDays: [1, 2, 3, 4, 5] as number[],
  daysAhead: Number(process.env.BOOKING_DAYS_AHEAD ?? 30),
  minNoticeHours: Number(process.env.BOOKING_MIN_NOTICE_HOURS ?? 2),
} as const;

export function isGoogleCalendarConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET &&
      process.env.GOOGLE_REFRESH_TOKEN &&
      process.env.GOOGLE_CALENDAR_ID,
  );
}
