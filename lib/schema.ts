import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { getContactLinks } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";

export function getStructuredData() {
  const siteUrl = getSiteUrl().toString();
  const contact = getContactLinks();
  const privacyEmail = process.env.PRIVACY_CONTACT_EMAIL?.trim();

  const person: Record<string, unknown> = {
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    name: SITE.name,
    jobTitle: SITE.title,
    url: siteUrl,
    worksFor: { "@id": `${siteUrl}#business` },
    knowsAbout: ["Mutui", "Consulenza creditizia", "Surroga mutuo"],
    areaServed: ["Provincia di Bergamo", "Provincia di Milano", "Lombardia"],
  };

  if (privacyEmail) {
    person.email = privacyEmail;
  }

  const business: Record<string, unknown> = {
    "@type": "FinancialService",
    "@id": `${siteUrl}#business`,
    name: `${SITE.name} - Consulenza Mutui`,
    description:
      "Consulenza gratuita su mutui in Lombardia, provincia di Bergamo e Milano. Confronto tra istituti convenzionati.",
    url: siteUrl,
    image: `${getSiteUrl().origin}/images/photos/hero-keys.jpg`,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Lombardia",
      },
      {
        "@type": "City",
        name: "Bergamo",
      },
      {
        "@type": "City",
        name: "Milano",
      },
    ],
    employee: { "@id": `${siteUrl}#person` },
    provider: {
      "@type": "Organization",
      name: "Euroansa S.p.A.",
      description: SITE.legalLine,
    },
    serviceType: "Mediazione creditizia",
  };

  if (contact) {
    const telephone = contact.telHref.replace("tel:", "");
    person.telephone = telephone;
    business.telephone = telephone;
  }

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteUrl}#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, business, faqPage],
  };
}
