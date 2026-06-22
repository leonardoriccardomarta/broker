/** Valori esposti al client (nessun segreto). */
export const clientBookingConfig = {
  slotDurationMinutes: 30,
  daysAhead: 30,
  workingDays: [1, 2, 3, 4, 5] as number[],
} as const;
