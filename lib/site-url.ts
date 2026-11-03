const FALLBACK_SITE_URL = "https://euroansainzago.it";

export function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ??
    process.env.SITE_URL?.trim() ??
    FALLBACK_SITE_URL;

  const normalized = raw.endsWith("/") ? raw.slice(0, -1) : raw;
  return new URL(normalized);
}

export function getSiteOrigin(): string {
  return getSiteUrl().origin;
}
