type GoogleApiError = {
  code?: number;
  message?: string;
  errors?: { reason?: string; message?: string }[];
};

export function getGoogleCalendarErrorMessage(error: unknown): string {
  const err = error as GoogleApiError;
  const message = err.message ?? "";
  const reason = err.errors?.[0]?.reason ?? "";
  const code = err.code;

  if (
    message.includes("invalid_grant") ||
    message.includes("Invalid JWT") ||
    message.includes("DECODER routines") ||
    reason === "authError"
  ) {
    return "Credenziali Google non valide. Controlla GOOGLE_PRIVATE_KEY e GOOGLE_SERVICE_ACCOUNT_EMAIL su Vercel.";
  }

  if (code === 403 || reason === "forbidden" || message.includes("Forbidden")) {
    return "Accesso negato al calendario. Condividi il calendario con l'email del service account (modifica eventi).";
  }

  if (code === 404 || reason === "notFound") {
    return "Calendario non trovato. Verifica GOOGLE_CALENDAR_ID (email Google del calendario).";
  }

  if (message.includes("API has not been used") || message.includes("accessNotConfigured")) {
    return "Google Calendar API non abilitata nel progetto Google Cloud.";
  }

  return "Impossibile caricare le fasce orarie.";
}
