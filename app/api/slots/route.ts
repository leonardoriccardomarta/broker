import { NextResponse } from "next/server";
import { isGoogleCalendarConfigured } from "@/lib/booking/config";
import { isValidBookingDate } from "@/lib/booking/slots";
import { getAvailableSlots } from "@/lib/google/calendar";

export async function GET(request: Request) {
  if (!isGoogleCalendarConfigured()) {
    return NextResponse.json(
      { error: "Prenotazioni non ancora configurate." },
      { status: 503 },
    );
  }

  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date || !isValidBookingDate(date)) {
    return NextResponse.json(
      { error: "Data non valida o non disponibile." },
      { status: 400 },
    );
  }

  try {
    const slots = await getAvailableSlots(date);
    return NextResponse.json({ date, slots });
  } catch (error) {
    console.error("[api/slots]", error);
    return NextResponse.json(
      { error: "Impossibile caricare le fasce orarie." },
      { status: 500 },
    );
  }
}
