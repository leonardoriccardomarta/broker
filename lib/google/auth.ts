import { google } from "googleapis";

const CALENDAR_SCOPES = ["https://www.googleapis.com/auth/calendar"];

export function normalizePrivateKey(raw: string): string {
  let key = raw.trim();

  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }

  return key.replace(/\\n/g, "\n").trim();
}

export function getGoogleAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
    ? normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY)
    : undefined;

  if (!email || !privateKey) {
    throw new Error("Service Account Google non configurato");
  }

  if (!privateKey.includes("BEGIN PRIVATE KEY")) {
    throw new Error("GOOGLE_PRIVATE_KEY non valida");
  }

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: CALENDAR_SCOPES,
  });
}

export async function getAuthorizedCalendarClient() {
  const auth = getGoogleAuth();
  await auth.authorize();
  return google.calendar({ version: "v3", auth });
}

export function getCalendarClient() {
  const auth = getGoogleAuth();
  return google.calendar({ version: "v3", auth });
}
