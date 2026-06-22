import { google } from "googleapis";

const CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar.events";

export function getGoogleAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();

  if (!email || !privateKey) {
    throw new Error("Service Account Google non configurato");
  }

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: [CALENDAR_SCOPE],
  });
}

export function getCalendarClient() {
  const auth = getGoogleAuth();
  return google.calendar({ version: "v3", auth });
}
