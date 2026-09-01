export const SITE = {
  name: "Filippo Carriero",
  title: "Consulente Creditizio",
  legalLine:
    "Consulente Creditizio di Euroansa S.p.A., Società di mediazione creditizia OAM M191",
  areaLine: "Lombardia, provincia di Bergamo e Milano",
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
  { label: "Recensioni", href: `#${SECTION_IDS.recensioni}` },
  { label: "Chi sono", href: `#${SECTION_IDS.chiSono}` },
] as const;

export const BOOKING_HREF = `#${SECTION_IDS.prenota}`;

export const PRIVACY_PATH = "/privacy" as const;

export const HERO = {
  headline: "Trova il mutuo più adatto a te, senza girare banca per banca.",
  subheadline:
    "Analizzo la tua situazione e confronto le soluzioni disponibili tra gli istituti convenzionati, seguendoti dalla prima valutazione fino al rogito.",
  whatsappCta: "Verifica il tuo mutuo su WhatsApp",
  bookingCta: "Prenota una consulenza gratuita",
  imageCaption: "Consulenza mutui gratuita",
} as const;

export const HERO_TRUST_ITEMS = [
  "+500 clienti aiutati",
  "130+ convenzioni",
  "Bergamo e Milano",
  "Prima consulenza senza impegno",
] as const;

export const WHY_ME = {
  title: "Perché affidarti a me?",
  subtitle:
    "Un supporto diretto e trasparente, con confronto tra gli istituti convenzionati per la tua situazione.",
  points: [
    {
      id: "referente",
      title: "Un unico referente",
      description:
        "Hai sempre la stessa persona al tuo fianco, dalla prima analisi alla firma.",
    },
    {
      id: "confronto",
      title: "Confronto tra più istituti",
      description:
        "Valuto le condizioni disponibili tra gli istituti convenzionati, senza dover andare di banca in banca.",
    },
    {
      id: "pratica",
      title: "Gestione della pratica fino al rogito",
      description:
        "Ti accompagno in ogni fase: documenti, perizia, delibera e chiusura del mutuo.",
    },
    {
      id: "analisi",
      title: "Analisi iniziale senza impegno",
      description:
        "La prima valutazione è gratuita: capiamo insieme cosa è realistico per il tuo profilo.",
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
  title: "Ti aiuto a trovare la soluzione più adatta al tuo profilo",
  description:
    "Analizzo la tua situazione, confronto le condizioni disponibili tra gli istituti convenzionati e ti accompagno fino all'approvazione. Trasparenza su costi e tempi, senza impegno.",
} as const;

export const PRIMARY_SERVICE = {
  title: "Mutui",
  description:
    "Prima casa, surroga o ristrutturazione: confronto le soluzioni disponibili tra gli istituti convenzionati per trovare tasso e rata adatti al tuo budget.",
  benefit: "Il mio focus principale",
  icon: "/images/features/mutuo.svg",
} as const;

export const SECONDARY_SERVICES = [
  {
    title: "Prestiti personali",
    description:
      "Liquidità con condizioni chiare, anche in casi più complessi.",
    benefit: "Su richiesta",
    icon: "/images/features/prestito.svg",
  },
  {
    title: "Cessione del quinto",
    description:
      "Per dipendenti e pensionati che cercano una rata gestibile e tasso fisso.",
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
      "Confronto le condizioni disponibili tra gli istituti convenzionati per il tuo profilo.",
  },
  {
    step: 4,
    title: "Approvazione",
    description: "Ti seguo nella pratica fino alla delibera e alla firma.",
  },
] as const;

export const TESTIMONIALS = [
  {
    initials: "M.R.",
    label: "Cliente · Milano",
    text: "Avevo un rifiuto in banca e rischiavo di perdere la casa. Filippo ha ripianificato la pratica e trovato una soluzione più adatta di quanto sperassi.",
    service: "Mutuo prima casa",
  },
  {
    initials: "A.B.",
    label: "Cliente · Bergamo",
    text: "Volevo la surroga per abbassare la rata. In pochi giorni avevo un confronto chiaro tra più banche, senza costi nascosti.",
    service: "Surroga mutuo",
  },
  {
    initials: "S.T.",
    label: "Cliente · Treviglio",
    text: "Dovevamo ristrutturare casa e il mutuo in banca sembrava troppo caro. Filippo ha trovato condizioni più favorevoli e ci ha seguito fino alla firma.",
    service: "Mutuo ristrutturazione",
  },
  {
    initials: "G.F.",
    label: "Cliente · Seriate",
    text: "Per la seconda casa avevamo paura di non farcela. Filippo ha confrontato più banche e trovato una soluzione con rata sostenibile.",
    service: "Mutuo seconda casa",
  },
  {
    initials: "P.M.",
    label: "Cliente · Dalmine",
    text: "Prima casa, tanti dubbi su tassi e spese. Mi ha guidato passo passo fino all'approvazione, sempre chiaro e disponibile.",
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
      "Il finanziamento integrale è meno frequente e di solito richiede garanzie aggiuntive o profili specifici. In alcuni casi, con agevolazioni o fondi di garanzia, si possono valutare soluzioni più vicine al 100%. Dipende dalla tua situazione: analizziamo insieme cosa è fattibile.",
  },
  {
    id: "fondo-consap",
    question: "Come funziona il Fondo CONSAP?",
    answer:
      "Il Fondo CONSAP è una garanzia pubblica riservata a categorie particolari (ad esempio personale delle Forze Armate, Polizia e altri enti convenzionati). Può facilitare l'accesso al credito, anche con anticipo ridotto o nullo, secondo i requisiti previsti. Verifico se rientri nei casi coperti e come strutturare la pratica.",
  },
  {
    id: "autonomo",
    question: "Posso ottenere un mutuo se sono autonomo?",
    answer:
      "Sì, ma le banche richiedono in genere più anni di attività, documentazione fiscale in ordine e reddito dimostrabile. I criteri cambiano da istituto a istituto: confronto le opzioni disponibili per la tua situazione e ti indico la documentazione necessaria.",
  },
  {
    id: "tempi-delibera",
    question: "Quanto tempo serve per ottenere una delibera?",
    answer:
      "I tempi variano in base a completezza dei documenti, perizia e iter della banca scelta. In media, con pratica completa, la delibera può arrivare in circa 2–4 settimane. Ti tengo aggiornato su ogni passaggio per evitare ritardi evitabili.",
  },
] as const;

export const ABOUT = {
  name: "Filippo Carriero",
  description:
    "Mi occupo soprattutto di mutui per famiglie e professionisti in Lombardia, con particolare presenza in provincia di Bergamo e Milano. Confronto le condizioni disponibili tra gli istituti convenzionati per individuare la soluzione più adatta al tuo profilo. La prima consulenza è gratuita e senza impegno.",
  quote:
    "Comprare casa è una decisione importante. Con il mutuo giusto diventa un investimento sicuro, non un rischio.",
} as const;

export const ABOUT_HIGHLIGHTS = [
  { id: "clients", text: "+500 clienti aiutati" },
  { id: "focus", text: "Specializzato sui mutui" },
  { id: "area", text: "Lombardia: Bergamo e Milano" },
] as const;

export const FINAL_CTA = {
  headline: "Prenota la tua consulenza mutui gratuita",
  subheadline:
    "Scegli il giorno e l'orario che preferisci. Ti richiamo senza impegno per capire come aiutarti.",
  cta: "Scegli data e ora",
} as const;

export const TRUST_STATS = [
  { value: "+500", label: "Clienti aiutati" },
  { value: "130+", label: "Convenzioni" },
  { value: "BG · MI", label: "Bergamo e Milano" },
  { value: "0€", label: "Prima consulenza senza impegno" },
] as const;
