export const SITE = {
  name: "Euroansa — Ufficio di Inzago",
  title: "Consulenza Mutui e Mediazione Creditizia",
  legalLine:
    "Euroansa S.p.A. — Società di mediazione creditizia iscritta all'elenco OAM al n. M191.",
  subLegalLine:
    "Filippo Carriero e Marco Gorla · Mediatori Creditizi (Euroansa S.p.A.) · Inzago (MI)",
  areaLine: "Inzago, Martesana, provincia di Milano e Bergamo",
} as const;

export const SECTION_IDS = {
  team: "team",
  servizi: "servizi",
  prenota: "prenota",
} as const;

export const BOOKING_HREF = `#${SECTION_IDS.prenota}`;
export const PRIVACY_PATH = "/privacy" as const;

export const HERO = {
  eyebrow: "Euroansa S.p.A. · Ufficio di Inzago",
  headline:
    "Consulenza Mutui a Inzago — Troviamo il mutuo migliore tra oltre 25 banche",
  subheadline:
    "Confronto gratuito e indipendente delle offerte bancarie, analisi di prefattibilità e assistenza dedicata fino al rogito.",
  badges: [
    "Oltre 25 banche partner",
    "Consulenza 100% Gratuita",
    "Presidio sul territorio di Inzago",
  ],
  bookingCta: "Prenota Consulenza Gratuita",
  whatsappCta: "Scrivici su WhatsApp",
} as const;

export const TEAM_MEMBERS = [
  {
    id: "filippo-carriero",
    name: "Filippo Carriero",
    role: "Mediatore Creditizio",
    company: "Euroansa S.p.A.",
    photo: "/team/filippo-carriero.jpg",
    oamNumber: "OAM M191",
  },
  {
    id: "marco-gorla",
    name: "Marco Gorla",
    role: "Mediatore Creditizio",
    company: "Euroansa S.p.A.",
    photo: "/team/marco-gorla.jpg",
    oamNumber: "OAM M191",
  },
] as const;

export const SERVICES = [
  {
    id: "prima-casa",
    title: "Mutuo Acquisto & Prima Casa",
    badge: "Acquisto Casa",
    description:
      "Analisi del tasso migliore (fisso, variabile, green) tra oltre 25 banche. Supporto dedicato per agevolazioni Under 36 e Fondo Garanzia CONSAP.",
  },
  {
    id: "surroga",
    title: "Surroga a Costo Zero",
    badge: "Abbattimento Rata",
    description:
      "Trasferisci il tuo mutuo attuale a costo zero per abbassare la rata mensile o accorciare la durata residua del piano di ammortamento.",
  },
  {
    id: "consolidamento",
    title: "Consolidamento Debiti & Liquidità",
    badge: "Rata Unica Più Leggera",
    description:
      "Unifica finanziamenti e rate in corso in un'unica rata più leggera e sostenibile, restituendo serenità e respiro al bilancio familiare.",
  },
  {
    id: "cessione",
    title: "Prestiti Personali & Cessione del Quinto",
    badge: "Dipendenti & Pensionati",
    description:
      "Liquidità rapida per ogni progetto personale o familiare, dedicata a dipendenti (pubblici e privati) e pensionati a tasso fisso garantito.",
  },
] as const;

export const FINAL_CTA = {
  headline: "Prenota la tua consulenza mutui gratuita",
  subheadline:
    "Scegli giorno e orario nel calendario per un incontro di persona nel nostro ufficio a Inzago o per una prima consulenza telefonica senza impegno.",
} as const;

export const FAQ_ITEMS = [
  {
    id: "costo",
    question: "La prima consulenza ha un costo?",
    answer:
      "No, la prima consulenza e l'analisi di fattibilità sono totalmente gratuite e senza impegno.",
  },
  {
    id: "documenti",
    question: "Quali documenti servono per iniziare?",
    answer:
      "Bastano i documenti di identità, le ultime buste paga o il modello unico e le informazioni sull'immobile che desideri acquistare.",
  },
] as const;
