export const SITE = {
  name: "Euroansa Ufficio di Inzago",
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
  situazioni: "situazioni",
  comeFunziona: "come-lavoriamo",
  recensioni: "recensioni",
  faq: "faq",
  prenota: "prenota",
} as const;

export const BOOKING_HREF = `#${SECTION_IDS.prenota}`;
export const PRIVACY_PATH = "/privacy" as const;

export const HERO = {
  eyebrow: "Euroansa S.p.A. · Ufficio di Inzago",
  headline: "Consulenza Mutui a Inzago: troviamo il mutuo migliore tra oltre 25 banche",
  subheadline:
    "Confronto gratuito e indipendente delle offerte bancarie, analisi di prefattibilità immediata e assistenza dedicata fino al rogito.",
  badges: [
    "Oltre 25 banche partner",
    "Consulenza 100% Gratuita",
    "Ufficio a Inzago (MI)",
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

export const PAIN_POINTS = [
  {
    id: "rifiuto",
    title: "Rifiuto in banca",
    description:
      "Una risposta negativa non preclude altre strade. Analizziamo i motivi e troviamo l'istituto compatibile con il tuo profilo reddituale.",
  },
  {
    id: "tassi",
    title: "Tassi e condizioni poco chiare",
    description:
      "Orientarsi tra fisso, variabile, spese accessorie e promozioni è complesso. Confrontiamo oltre 25 banche per te con la massima trasparenza.",
  },
  {
    id: "burocrazia",
    title: "Burocrazia e tempi lunghi",
    description:
      "Gestiamo l'intera documentazione, i rapporti con i periti e i contatti con la filiale fino al rogito notarile, evitandoti inutili attese.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "1",
    title: "Prenotazione online",
    description: "Scegli giorno e ora direttamente nel calendario qui sotto, in meno di un minuto.",
  },
  {
    number: "2",
    title: "Analisi di fattibilità",
    description: "Consulenza gratuita per valutare la rata ideale e la capienza reddituale del nucleo.",
  },
  {
    number: "3",
    title: "Confronto offerte",
    description: "Presentiamo le migliori soluzioni sul mercato selezionate tra oltre 25 banche convenzionate.",
  },
  {
    number: "4",
    title: "Delibera e rogito",
    description: "Ti affianchiamo passo dopo passo fino alla delibera definitiva e alla firma dal notaio.",
  },
] as const;

export const REVIEWS = [
  {
    initials: "M.R.",
    name: "Marco R.",
    town: "Inzago",
    text: "Avevamo una situazione particolare per il nostro primo mutuo. Ci hanno guidato con estrema chiarezza e abbiamo ottenuto la delibera in tempi rapidi.",
    service: "Mutuo Prima Casa",
  },
  {
    initials: "A.B.",
    name: "Andrea B.",
    town: "Cassano d'Adda",
    text: "Grazie al confronto tra banche abbiamo abbassato la rata mensile di oltre 140€ con la surroga a costo zero. Servizio serio e impeccabile.",
    service: "Surroga Mutuo",
  },
  {
    initials: "S.T.",
    name: "Silvia T.",
    town: "Gorgonzola",
    text: "Consulenza chiara, zero perdite di tempo e risposte sempre puntuali anche su WhatsApp. Consigliatissimi per chi acquista casa in Martesana.",
    service: "Mutuo Acquisto",
  },
  {
    initials: "P.M.",
    name: "Paolo M.",
    town: "Treviglio",
    text: "Consolidamento prestiti eseguito con precisione: adesso abbiamo una sola rata sostenibile al posto di tre finanziamenti separati.",
    service: "Consolidamento Debiti",
  },
  {
    initials: "E.C.",
    name: "Elena C.",
    town: "Milano",
    text: "Hanno individuato l'istituto perfetto per le nostre agevolazioni under 36 con garanzia CONSAP. Assistenza preziosa fino al rogito.",
    service: "Agevolazioni Under 36",
  },
] as const;

export const FAQS = [
  {
    id: "gratuita",
    question: "La prima consulenza di fattibilità è davvero gratuita e senza impegno?",
    answer:
      "Sì, al 100%. Il primo colloquio conoscitivo e l'analisi di prefattibilità reddituale non comportano alcun costo né vincolo contrattuale. Serve a capire con certezza quanto la banca può concederti prima di fare proposte d'acquisto.",
  },
  {
    id: "tempi-fattibilita",
    question: "Quanto tempo occorre per sapere se il mutuo è fattibile?",
    answer:
      "Grazie al nostro accesso diretto ai canali deliberanti di oltre 25 istituti bancari, siamo in grado di darti un riscontro di prefattibilità preliminare entro 24-48 ore dalla consegna dei documenti reddituali.",
  },
  {
    id: "perche-euroansa",
    question: "Perché conviene rivolgersi a Euroansa invece che andare direttamente in filiale?",
    answer:
      "Una singola banca può proporti esclusivamente i propri prodotti. Come Mediatori Creditizi indipendenti, confrontiamo simultaneamente oltre 25 istituti bancari convenzionati per trovare il tasso (fisso, variabile, green) e le condizioni più vantaggiose per il tuo profilo, azzerando le code e gestendo noi tutta la burocrazia fino al rogito.",
  },
  {
    id: "under-36-consap",
    question: "Posso ottenere un mutuo al 100% o con agevolazioni per giovani under 36?",
    answer:
      "Certamente. Monitoriamo costantemente le misure del Fondo Garanzia Prima Casa (CONSAP) e le convenzioni dedicate ai giovani under 36 e lavoratori atipici, individuando gli istituti che offrono copertura fino al 100% del valore dell'immobile.",
  },
  {
    id: "rifiuto-banca",
    question: "Cosa succede se ho già ricevuto un rifiuto da una banca?",
    answer:
      "Una bocciatura non preclude l'accesso al credito. Ogni istituto adotta parametri di calcolo della capacità reddituale differenti (rapporto rata/reddito, tipologia contrattuale). Analizziamo le motivazioni del rifiuto e riposizioniamo la pratica sulla banca idonea ai tuoi requisiti.",
  },
] as const;

export const FINAL_CTA = {
  headline: "Prenota la tua consulenza mutui gratuita",
  subheadline:
    "Scegli giorno e orario nel calendario per un incontro di persona nel nostro ufficio a Inzago o per una prima consulenza telefonica senza impegno.",
} as const;
