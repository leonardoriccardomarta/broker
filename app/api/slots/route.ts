import { NextResponse } from "next/server";
import { isGoogleCalendarConfigured } from "@/lib/booking/config";
import { isValidBookingDate, generateSlotsForDate } from "@/lib/booking/slots";
import { getAvailableSlots } from "@/lib/google/calendar";
import { getGoogleCalendarErrorMessage } from "@/lib/google/errors";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date || !isValidBookingDate(date)) {
    return NextResponse.json(
      { error: "Data non valida o non disponibile." },
      { status: 400 },
    );
  }

  if (!isGoogleCalendarConfigured()) {
    const slots = generateSlotsForDate(date);
    return NextResponse.json({ date, slots });
  }

  try {
    const slots = await getAvailableSlots(date);
    return NextResponse.json({ date, slots });
  } catch (error) {
    console.error("[api/slots]", error);
    const fallbackSlots = generateSlotsForDate(date);
    return NextResponse.json({ date, slots: fallbackSlots });
  }
}
