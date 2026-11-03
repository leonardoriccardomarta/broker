import { addDays } from "date-fns";
import { fromZonedTime } from "date-fns-tz";
import { bookingConfig } from "@/lib/booking/config";
import {
  generateSlotsForDate,
  isValidBookingDate,
  slotsOverlap,
  type TimeSlot,
} from "@/lib/booking/slots";
import {
  getAggregatedCalendarIds,
  getMultiCalendarBusyBlocks,
} from "@/lib/google/busy-times";
import { getAuthorizedCalendarClient } from "@/lib/google/auth";

export async function getAvailableSlots(date: string): Promise<TimeSlot[]> {
  if (!isValidBookingDate(date)) return [];

  const slots = generateSlotsForDate(date);
  if (slots.length === 0) return [];

  const calendarIds = getAggregatedCalendarIds();
  if (calendarIds.length === 0) {
    // If no calendars are configured, return default available slots
    return slots;
  }

  const calendar = await getAuthorizedCalendarClient();

  const { timezone } = bookingConfig;
  const timeMin = fromZonedTime(`${date}T00:00:00`, timezone).toISOString();
  const timeMax = addDays(
    fromZonedTime(`${date}T00:00:00`, timezone),
    1,
  ).toISOString();

  // Query all 3 calendars (Euroansa Inzago, Filippo, Marco) simultaneously
  const busyBlocks = await getMultiCalendarBusyBlocks(
    calendar,
    calendarIds,
    timeMin,
    timeMax,
  );

  // If a slot is occupied in ANY of the calendars, mark it unavailable
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
  const calendarIds = getAggregatedCalendarIds();
  const primaryCalendarId =
    process.env.GOOGLE_CALENDAR_ID?.trim() || calendarIds[0];

  if (!primaryCalendarId) {
    throw new Error("GOOGLE_CALENDAR_ID mancante per la registrazione.");
  }

  const description = [
    `Cliente: ${name}`,
    `Telefono: ${phone}`,
    `Email: ${email}`,
    note ? `Note: ${note}` : null,
    "",
    "Prenotazione consulenza mutui dal sito web (Ufficio Euroansa di Inzago).",
  ]
    .filter(Boolean)
    .join("\n");

  const attendees: { email: string; displayName?: string }[] = [];
  if (email?.includes("@")) {
    attendees.push({ email, displayName: name });
  }

  // Invite both advisors if their calendar ID is an email address
  const filippoId = process.env.GOOGLE_CALENDAR_ID_FILIPPO?.trim();
  const marcoId = process.env.GOOGLE_CALENDAR_ID_MARCO?.trim();
  if (filippoId && filippoId.includes("@") && filippoId !== primaryCalendarId) {
    attendees.push({ email: filippoId, displayName: "Filippo Carriero" });
  }
  if (marcoId && marcoId.includes("@") && marcoId !== primaryCalendarId) {
    attendees.push({ email: marcoId, displayName: "Marco Gorla" });
  }

  const event = await calendar.events.insert({
    calendarId: primaryCalendarId,
    requestBody: {
      summary: `Consulenza Mutuo: ${name}`,
      description,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: bookingConfig.timezone,
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: bookingConfig.timezone,
      },
      attendees: attendees.length > 0 ? attendees : undefined,
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
