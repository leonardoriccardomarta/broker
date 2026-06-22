const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function isValidBookingDate(date: string): boolean {
  if (!DATE_RE.test(date)) return false;
  const [y, m, d] = date.split("-").map(Number);
  const parsed = new Date(y, m - 1, d);
  return (
    parsed.getFullYear() === y &&
    parsed.getMonth() === m - 1 &&
    parsed.getDate() === d
  );
}

export function getRomeWeekday(date: string): number {
  const [y, m, d] = date.split("-").map(Number);
  const utc = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Rome",
    weekday: "short",
  }).format(utc);

  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return map[weekday] ?? 0;
}

export function formatDateInRome(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const utc = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  return new Intl.DateTimeFormat("it-IT", {
    timeZone: "Europe/Rome",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(utc);
}

export function formatTimeInRome(iso: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    timeZone: "Europe/Rome",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(iso));
}

export function getMinBookingDate(): string {
  return formatDateOnly(new Date());
}

export function getMaxBookingDate(daysAhead: number): string {
  const max = new Date();
  max.setDate(max.getDate() + daysAhead);
  return formatDateOnly(max);
}

export function formatDateOnly(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function buildRomeDateTime(date: string, hours: number, minutes: number): Date {
  const [y, m, d] = date.split("-").map(Number);

  for (let utcHour = 0; utcHour < 24; utcHour++) {
    for (const utcMinute of [0, 30]) {
      const candidate = new Date(Date.UTC(y, m - 1, d, utcHour, utcMinute));
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Rome",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).formatToParts(candidate);

      const get = (type: string) =>
        Number(parts.find((p) => p.type === type)?.value ?? 0);

      if (
        get("year") === y &&
        get("month") === m &&
        get("day") === d &&
        get("hour") === hours &&
        get("minute") === minutes
      ) {
        return candidate;
      }
    }
  }

  throw new Error("Impossibile costruire la data in Europe/Rome");
}

export function toRomeDayBounds(date: string): { start: Date; end: Date } {
  return {
    start: buildRomeDateTime(date, 0, 0),
    end: buildRomeDateTime(date, 23, 30),
  };
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}
