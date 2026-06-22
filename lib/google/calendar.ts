import { bookingConfig } from "@/lib/booking/config";
import {
  generateSlotsForDate,
  isValidBookingDate,
  slotsOverlap,
  type TimeSlot,
} from "@/lib/booking/slots";
import { getBusyBlocks } from "@/lib/google/busy-times";
import { getAuthorizedCalendarClient } from "@/lib/google/auth";

function getCalendarId(): string {
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
  if (!calendarId) {
    throw new Error("GOOGLE_CALENDAR_ID mancante");
  }
  return calendarId;
}

export async function getAvailableSlots(date: string): Promise<TimeSlot[]> {
  if (!isValidBookingDate(date)) return [];

  const slots = generateSlotsForDate(date);
  if (slots.length === 0) return [];

  const calendar = await getAuthorizedCalendarClient();
  const calendarId = getCalendarId();

  const timeMin = slots[0].start;
  const timeMax = slots[slots.length - 1].end;

  const busyBlocks = await getBusyBlocks(calendar, calendarId, timeMin, timeMax);

  return slots.filter((slot) => {
    const slotStart = new Date(slot.start);
    const slotEnd = new Date(slot.end);

    return !busyBlocks.some((block) =>
      slotsOverlap(
        slotStart,
        slotEnd,
        new Date(block.start),
        new Date(block.end),
      ),
    );
  });
}

export type BookingPayload = {
  start: string;
  name: string;
  email: string;
  phone: string;
  note?: string;
};

export async function createBooking(
  payload: BookingPayload,
): Promise<{ eventId: string; htmlLink?: string | null }> {
  const { start, name, email, phone, note } = payload;
  const startDate = new Date(start);

  if (Number.isNaN(startDate.getTime())) {
    throw new Error("Orario non valido");
  }

  const dateKey = startDate.toISOString().slice(0, 10);
  if (!isValidBookingDate(dateKey)) {
    throw new Error("Data non disponibile");
  }

  const available = await getAvailableSlots(dateKey);
  const stillFree = available.some((slot) => slot.start === start);

  if (!stillFree) {
    throw new Error("Questa fascia non è più disponibile. Scegline un'altra.");
  }

  const endDate = new Date(
    startDate.getTime() + bookingConfig.slotDurationMinutes * 60 * 1000,
  );

  const calendar = await getAuthorizedCalendarClient();

  const description = [
    `Cliente: ${name}`,
    `Telefono: ${phone}`,
    `Email: ${email}`,
    note ? `Note: ${note}` : null,
    "",
    "Prenotazione dal sito web.",
  ]
    .filter(Boolean)
    .join("\n");

  const event = await calendar.events.insert({
    calendarId: getCalendarId(),
    requestBody: {
      summary: `Consulenza - ${name}`,
      description,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: bookingConfig.timezone,
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: bookingConfig.timezone,
      },
      reminders: {
        useDefault: true,
      },
    },
    sendUpdates: "none",
  });

  return {
    eventId: event.data.id ?? "",
    htmlLink: event.data.htmlLink,
  };
}
