import { NextResponse } from "next/server";
import { bookingConfig } from "@/lib/booking/config";

export async function GET() {
  return NextResponse.json({
    slotDurationMinutes: bookingConfig.slotDurationMinutes,
    daysAhead: bookingConfig.daysAhead,
    workingDays: bookingConfig.workingDays,
    timezone: bookingConfig.timezone,
    businessStartHour: bookingConfig.businessStartHour,
    businessEndHour: bookingConfig.businessEndHour,
  });
}
