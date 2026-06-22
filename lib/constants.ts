export const SITE = {
  name: "Filippo Carriero",
  title: "Mediatore Creditizio",
  tagline: "Consulenza finanziaria indipendente",
} as const;

export const SECTION_IDS = {
  servizi: "servizi",
  comeFunziona: "come-funziona",
  recensioni: "recensioni",
  chiSono: "chi-sono",
  prenota: "prenota",
} as const;

export const NAV_LINKS = [
  { label: "Servizi", href: `#${SECTION_IDS.servizi}` },
  { label: "Come funziona", href: `#${SECTION_IDS.comeFunziona}` },
  { label: "Recensioni", href: `#${SECTION_IDS.recensioni}` },
  { label: "Chi sono", href: `#${SECTION_IDS.chiSono}` },
] as const;

export const BOOKING_HREF = `#${SECTION_IDS.prenota}`;

export const HERO = {
  headline: "Il finanziamento giusto per la casa che desideri",
  subheadline:
    "Consulenza gratuita e indipendente su mutui, prestiti e cessione del quinto. Confronto le migliori banche per te, senza conflitto di interessi.",
  cta: "Prenota una consulenza gratuita",
  trust: "+100 famiglie accompagnate",
} as const;

export const PROBLEMS = [
  {
    title: "Rischio di segnalazione in CRIF",
    description:
      "Una richiesta respinta può compromettere le prossime trattative. Serve una strategia prima di presentarsi in banca.",
  },
  {
    title: "Costi e condizioni poco chiare",
    description:
      "Spese nascoste, tassi e commissioni difficili da confrontare tra un istituto e l'altro.",
  },
  {
    title: "Burocrazia che rallenta tutto",
    description:
      "Documenti, iter bancari e tempi lunghi: senza guida rischi di perdere l'immobile o la liquidità che ti serve.",
  },
  {
    title: "Conflitto di interessi con le banche",
    description:
      "Non tutti i consulenti lavorano per te. Io scelgo sempre la soluzione più conveniente per le tue esigenze.",
  },
] as const;

export const SOLUTION = {
  title: "Prima la pianificazione, poi il finanziamento",
  description:
    "Analizzo la tua situazione, confronto le offerte sul mercato e ti accompagno fino all'approvazione. Trasparenza totale su costi e tempi, senza impegno e senza sorprese.",
} as const;

export const SERVICES = [
  {
    title: "Mutui",
    description:
      "Confronto tra le principali banche per trovare il tasso e la rata più adatti al tuo budget.",
    benefit: "Risparmi sulle rate",
    icon: "/images/features/mutuo.svg",
  },
  {
    title: "Prestiti personali",
    description:
      "Liquidità rapida con condizioni chiare fin dall'inizio, anche se hai già ricevuto un rifiuto.",
    benefit: "Risposta in tempi brevi",
    icon: "/images/features/prestito.svg",
  },
  {
    title: "Cessione del quinto",
    description:
      "Soluzione dedicata a dipendenti pubblici, privati e pensionati con rate gestibili e tasso fisso.",
    benefit: "Rate sotto controllo",
    icon: "/images/features/cessione.svg",
  },
  {
    title: "Consolidamento debiti",
    description:
      "Unisci più finanziamenti in un'unica rata più leggera e riprendi il controllo delle tue finanze.",
    benefit: "Una sola rata",
    icon: "/images/features/consolidamento.svg",
  },
] as const;

export const STEPS = [
  {
    step: 1,
    title: "Prenota online",
    description: "Scegli giorno e ora dal calendario in meno di un minuto.",
  },
  {
    step: 2,
    title: "Analisi gratuita",
    description:
      "Valutiamo insieme la tua situazione e individuiamo la strada migliore.",
  },
  {
    step: 3,
    title: "Confronto banche",
    description:
      "Seleziono le offerte più vantaggiose senza legami con gli istituti.",
  },
  {
    step: 4,
    title: "Approvazione",
    description:
      "Ti seguo nella pratica fino alla delibera e alla firma in banca.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Laura Bianchi",
    location: "Milano",
    text: "Avevo un rifiuto in banca e rischiavo di perdere la casa. Filippo ha ripianificato la pratica e trovato un mutuo migliore di quanto sperassi.",
    service: "Mutuo prima casa",
  },
  {
    name: "Giuseppe Verdi",
    location: "Roma",
    text: "Lavoro a partita IVA e nessuna banca mi dava retta. In una settimana avevo più proposte chiare, senza costi nascosti.",
    service: "Prestito personale",
  },
  {
    name: "Anna Colombo",
    location: "Torino",
    text: "La cessione del quinto mi spaventava. Filippo ha spiegato tutto in modo semplice e oggi ho una rata che posso permettermi.",
    service: "Cessione del quinto",
  },
] as const;

export const ABOUT = {
  name: "Filippo Carriero",
  role: "Mediatore creditizio",
  description:
    "Da oltre 10 anni aiuto famiglie e professionisti a scegliere il finanziamento giusto. Lavoro in modo indipendente dalle banche: il mio unico obiettivo è la soluzione più vantaggiosa per te. La prima consulenza è gratuita e senza alcun impegno.",
  quote:
    "Acquistare casa o richiedere un prestito è una decisione importante. Con la giusta pianificazione diventa un investimento sicuro, non un rischio.",
} as const;

export const FINAL_CTA = {
  headline: "Prenota la tua consulenza gratuita",
  subheadline:
    "Scegli il giorno e l'orario che preferisci. Ti richiamo senza impegno per capire come aiutarti.",
  cta: "Scegli data e ora",
} as const;

export const TRUST_STATS = [
  { value: "+100", label: "Clienti accompagnati" },
  { value: "10+", label: "Anni di esperienza" },
  { value: "24h", label: "Prima risposta" },
  { value: "0€", label: "Consulenza gratuita" },
] as const;
