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
  headline: "Il mutuo giusto per la casa che desideri",
  subheadline:
    "Consulenza gratuita su mutui in Lombardia, soprattutto in provincia di Bergamo e Milano. Confronto le migliori banche per trovare tasso e rata più adatti a te.",
  cta: "Prenota una consulenza gratuita",
  trust: "+500 clienti aiutati",
  imageCaption: "Consulenza mutui gratuita",
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
  title: "Ti aiuto a trovare il mutuo migliore",
  description:
    "Analizzo la tua situazione, confronto le offerte sul mercato e ti accompagno fino all'approvazione in banca. Trasparenza su costi e tempi, senza impegno.",
} as const;

export const PRIMARY_SERVICE = {
  title: "Mutui",
  description:
    "Prima casa, surroga o ristrutturazione: confronto le principali banche per trovare il tasso e la rata più adatti al tuo budget.",
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
    title: "Confronto banche",
    description: "Seleziono le offerte mutuo più vantaggiose per il tuo profilo.",
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
    text: "Avevo un rifiuto in banca e rischiavo di perdere la casa. Filippo ha ripianificato la pratica e trovato un mutuo migliore di quanto sperassi.",
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
    text: "Dovevamo ristrutturare casa e il mutuo in banca sembrava troppo caro. Filippo ha trovato condizioni migliori e ci ha seguito fino alla firma.",
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
    label: "Cliente · Monza",
    text: "Prima casa, tanti dubbi su tassi e spese. Mi ha guidato passo passo fino all'approvazione, sempre chiaro e disponibile.",
    service: "Mutuo prima casa",
  },
] as const;

export const ABOUT = {
  name: "Filippo Carriero",
  description:
    "Mi occupo soprattutto di mutui per famiglie e professionisti in Lombardia, con particolare presenza in provincia di Bergamo e Milano. Confronto le offerte sul mercato per individuare la soluzione più vantaggiosa. La prima consulenza è gratuita e senza impegno.",
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
  { value: "BG · MI", label: "Bergamo e Milano" },
  { value: "24h", label: "Prima risposta" },
  { value: "0€", label: "Consulenza gratuita" },
] as const;
