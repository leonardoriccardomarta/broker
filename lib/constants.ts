export const SITE = {
  name: "Euroansa — Ufficio di Inzago",
  title: "Consulenza Mutui e Mediazione Creditizia",
  legalLine:
    "Filippo Carriero e Marco Gorla · Mediatori Creditizi di Euroansa S.p.A. (Iscrizione OAM M191)",
  areaLine: "Inzago, Martesana, provincia di Milano e Bergamo",
} as const;

export const SECTION_IDS = {
  servizi: "servizi",
  comeFunziona: "come-funziona",
  recensioni: "recensioni",
  chiSono: "chi-sono",
  percheAffidarti: "perche-affidarti",
  faq: "faq",
  prenota: "prenota",
} as const;

export const NAV_LINKS = [
  { label: "Mutui", href: `#${SECTION_IDS.servizi}` },
  { label: "Come funziona", href: `#${SECTION_IDS.comeFunziona}` },
  { label: "I Mediatori", href: `#${SECTION_IDS.chiSono}` },
  { label: "FAQ", href: `#${SECTION_IDS.faq}` },
] as const;

export const BOOKING_HREF = `#${SECTION_IDS.prenota}`;

export const PRIVACY_PATH = "/privacy" as const;

export const HERO = {
  headline:
    "Consulenza Mutui a Inzago — Troviamo il mutuo migliore tra oltre 25 banche",
  subheadline:
    "Confronto gratuito e indipendente delle offerte bancarie, analisi di prefattibilità e assistenza dedicata fino al rogito.",
  whatsappCta: "Verifica il tuo mutuo su WhatsApp",
  bookingCta: "Prenota una consulenza gratuita",
  imageCaption: "Consulenza mutui a Inzago",
} as const;

export const HERO_TRUST_ITEMS = [
  "Oltre 25 banche convenzionate",
  "Consulenza 100% gratuita",
  "Presidio a Inzago",
  "Assistenza fino al rogito",
] as const;

export const TEAM_MEMBERS = [
  {
    id: "filippo-carriero",
    name: "Filippo Carriero",
    role: "Mediatore Creditizio",
    company: "Euroansa S.p.A.",
    photo: "/team/filippo-carriero.jpg",
  },
  {
    id: "marco-gorla",
    name: "Marco Gorla",
    role: "Mediatore Creditizio",
    company: "Euroansa S.p.A.",
    photo: "/team/marco-gorla.jpg",
  },
] as const;

export const WHY_ME = {
  title: "Perché affidarti al nostro ufficio?",
  subtitle:
    "Un supporto diretto e trasparente a Inzago, con confronto tra oltre 25 istituti bancari convenzionati per la tua situazione.",
  points: [
    {
      id: "referente",
      title: "Consulenti dedicati",
      description:
        "Hai professionisti qualificati al tuo fianco, dalla prima analisi fino al giorno della stipula del rogito.",
    },
    {
      id: "confronto",
      title: "Confronto tra oltre 25 istituti",
      description:
        "Valutiamo le migliori condizioni di tasso e durata disponibili sul mercato, senza farti perdere tempo in filiale.",
    },
    {
      id: "pratica",
      title: "Gestione completa della pratica",
      description:
        "Ti accompagniamo in ogni fase: raccolta documenti, perizia, delibera reddituale e rogito notarile.",
    },
    {
      id: "analisi",
      title: "Analisi di prefattibilità gratuita",
      description:
        "La prima valutazione è 100% gratuita e senza impegno: capiamo insieme la fattibilità concreta del mutuo.",
    },
  ],
} as const;

export const PROBLEMS = [
  {
    title: "Rifiuto in banca",
    description:
      "Un mutuo respinto può compromettere le prossime richieste. Serve una strategia prima di ripresentarsi.",
  },
  {
    title: "Tassi difficili da confrontare",
    description:
      "Spese, tassi e condizioni cambiano tra un istituto e l'altro. Senza un confronto chiaro rischi di pagare di più.",
  },
  {
    title: "Burocrazia e tempi stretti",
    description:
      "Documenti, perizie e iter bancari: senza guida rischi di perdere l'immobile o di allungare i tempi.",
  },
] as const;

export const SOLUTION = {
  title: "Ti aiutiamo a trovare la soluzione più adatta al tuo profilo",
  description:
    "Analizziamo la tua situazione, confrontiamo le condizioni disponibili tra oltre 25 banche convenzionate e ti accompagniamo fino all'approvazione. Trasparenza su costi e tempi, senza impegno.",
} as const;

export const PRIMARY_SERVICE = {
  title: "Mutui",
  description:
    "Prima casa, surroga o ristrutturazione: confronto le soluzioni disponibili tra gli istituti convenzionati per trovare tasso e rata adatti al tuo budget.",
  benefit: "Il nostro focus principale",
  icon: "/images/features/mutuo.svg",
} as const;

export const SECONDARY_SERVICES = [
  {
    title: "Prestiti personali & Consolidamento",
    description:
      "Liquidità con condizioni chiare e accorpamento rate per ridurre l'esborso mensile.",
    benefit: "Su richiesta",
    icon: "/images/features/prestito.svg",
  },
  {
    title: "Cessione del quinto",
    description:
      "Per dipendenti e pensionati che cercano una rata gestibile e tasso fisso garantito.",
    benefit: "Su richiesta",
    icon: "/images/features/cessione.svg",
  },
] as const;

export const SERVICES = [PRIMARY_SERVICE, ...SECONDARY_SERVICES] as const;

export const STEPS = [
  {
    step: 1,
    title: "Prenota online",
    description: "Scegli giorno e ora dal calendario in meno di un minuto.",
  },
  {
    step: 2,
    title: "Analisi gratuita",
    description: "Valutiamo insieme importo, reddito e obiettivo del mutuo.",
  },
  {
    step: 3,
    title: "Confronto istituti",
    description:
      "Confrontiamo le condizioni disponibili tra oltre 25 istituti convenzionati per il tuo profilo.",
  },
  {
    step: 4,
    title: "Approvazione",
    description: "Ti seguiamo nella pratica fino alla delibera e alla firma dal notaio.",
  },
] as const;

export const TESTIMONIALS = [
  {
    initials: "M.R.",
    label: "Cliente · Milano",
    text: "Avevo un rifiuto in banca e rischiavo di perdere la casa. Il team di Inzago ha ripianificato la pratica e trovato una soluzione ottimale.",
    service: "Mutuo prima casa",
  },
  {
    initials: "A.B.",
    label: "Cliente · Inzago",
    text: "Volevo la surroga per abbassare la rata. In pochi giorni avevo un confronto chiaro tra più banche, senza costi.",
    service: "Surroga mutuo",
  },
  {
    initials: "S.T.",
    label: "Cliente · Treviglio",
    text: "Dovevamo ristrutturare casa: ci hanno seguito con grande professionalità fino alla stipula notarile.",
    service: "Mutuo ristrutturazione",
  },
  {
    initials: "G.F.",
    label: "Cliente · Cassano d'Adda",
    text: "Disponibili e chiari in ogni momento. Abbiamo trovato un mutuo a tasso fisso eccellente.",
    service: "Mutuo acquisto",
  },
  {
    initials: "P.M.",
    label: "Cliente · Gorgonzola",
    text: "Prima casa, tanti dubbi su tassi e perizia. Ci hanno guidato passo passo fino all'approvazione.",
    service: "Mutuo prima casa",
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: "quanto-mutuo",
    question: "Quanto mutuo posso ottenere?",
    answer:
      "L'importo finanziabile dipende da reddito, uscite mensili, altri finanziamenti in corso e valore dell'immobile. In genere le banche valutano la rata sostenibile e il rapporto tra mutuo e valore della casa. In una prima analisi gratuita possiamo stimare una fascia realistica per il tuo profilo.",
  },
  {
    id: "mutuo-100",
    question: "Posso ottenere un mutuo al 100%?",
    answer:
      "Il finanziamento integrale è meno frequente e di solito richiede garanzie aggiuntive o profili specifici. In alcuni casi, con agevolazioni o fondi di garanzia (es. Fondo Garanzia Prima Casa), si possono valutare soluzioni vicine al 100%.",
  },
  {
    id: "fondo-consap",
    question: "Come funziona il Fondo Garanzia Prima Casa?",
    answer:
      "È una garanzia pubblica che facilita l'accesso al mutuo, particolarmente vantaggiosa per giovani under 36. Verifichiamo se rientri nei requisiti e gestiamo noi la documentazione con la banca scelta.",
  },
  {
    id: "autonomo",
    question: "Posso ottenere un mutuo se sono lavoratore autonomo?",
    answer:
      "Sì, con documentazione fiscale in ordine e reddito dimostrabile. I criteri cambiano tra istituti: confrontiamo le banche più favorevoli al tuo inquadramento professionale.",
  },
  {
    id: "tempi-delibera",
    question: "Quanto tempo serve per ottenere la delibera?",
    answer:
      "I tempi variano in base a documentazione, perizia e banca scelta. In media circa 2–4 settimane. Ti teniamo costantemente aggiornato per evitare qualsiasi ritardo.",
  },
] as const;

export const ABOUT = {
  name: "Filippo Carriero e Marco Gorla",
  title: "Mediatori Creditizi",
  office: "Euroansa — Ufficio di Inzago",
  description:
    "Operiamo presso il presidio di Inzago per assistere famiglie e professionisti nella scelta del mutuo più vantaggioso. Confrontiamo le offerte tra oltre 25 banche convenzionate con assistenza continuativa fino al rogito.",
  quote:
    "Comprare casa è una scelta fondamentale. Con la giusta guida diventa un percorso trasparente, sicuro e senza sorprese.",
} as const;

export const ABOUT_HIGHLIGHTS = [
  { id: "clients", text: "Oltre 25 banche convenzionate" },
  { id: "focus", text: "Specializzati in mutui e surroga" },
  { id: "area", text: "Presidio a Inzago (Martesana, MI e BG)" },
] as const;

export const FINAL_CTA = {
  headline: "Prenota la tua consulenza mutui gratuita",
  subheadline:
    "Scegli il giorno e l'orario che preferisci. Ci incontriamo di persona nel nostro ufficio a Inzago o per una prima valutazione telefonica senza impegno.",
  cta: "Scegli data e ora",
} as const;

export const TRUST_STATS = [
  { value: "25+", label: "Banche convenzionate" },
  { value: "100%", label: "Consulenza gratuita" },
  { value: "Inzago", label: "Presidio territoriale" },
  { value: "0€", label: "Analisi di prefattibilità" },
] as const;
