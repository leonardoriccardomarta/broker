import { getStructuredData } from "@/lib/schema";

export function JsonLd() {
  const data = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
