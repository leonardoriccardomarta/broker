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
  headline: "Ottieni il miglior finanziamento per le tue esigenze",
  subheadline: "Consulenza gratuita, veloce e senza impegno",
  cta: "Prenota una consulenza",
  trust: "+100 clienti soddisfatti",
} as const;

export const PROBLEMS = [
  {
    title: "Difficoltà con le banche",
    description:
      "Procedure complesse, tempi lunghi e poca trasparenza nelle risposte.",
  },
  {
    title: "Rifiuto dei finanziamenti",
    description:
      "Un diniego non significa la fine: esistono alternative su misura per te.",
  },
  {
    title: "Confusione tra le offerte",
    description:
      "Troppe proposte diverse rendono difficile capire quale conviene davvero.",
  },
] as const;

export const SOLUTION = {
  title: "La soluzione è più semplice di quanto pensi",
  description:
    "Ti guido passo dopo passo nella scelta del finanziamento più adatto alle tue esigenze. Confronto le migliori offerte sul mercato e ti accompagno fino all'approvazione, senza costi e senza impegno.",
} as const;

export const SERVICES = [
  {
    title: "Mutui",
    description: "Tassi competitivi con confronto tra le principali banche.",
    benefit: "Risparmi sulle rate",
  },
  {
    title: "Prestiti personali",
    description: "Risposta rapida e condizioni chiare fin dall'inizio.",
    benefit: "Liquidità quando serve",
  },
  {
    title: "Cessione del quinto",
    description: "Soluzione dedicata a dipendenti pubblici, privati e pensionati.",
    benefit: "Rate gestibili",
  },
  {
    title: "Consolidamento debiti",
    description: "Unisci più finanziamenti in un'unica rata più leggera.",
    benefit: "Meno stress, più controllo",
  },
] as const;

export const STEPS = [
  {
    step: 1,
    title: "Inserisci richiesta",
    description: "Scegli giorno e ora dal calendario in pochi minuti.",
  },
  {
    step: 2,
    title: "Vieni contattato",
    description: "Ti richiamo per una consulenza personalizzata e gratuita.",
  },
  {
    step: 3,
    title: "Ottieni soluzione",
    description: "Ricevi la proposta migliore e ti accompagno fino all'approvazione.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Laura Bianchi",
    location: "Milano",
    text: "Avevo ricevuto un rifiuto dalla banca. Filippo ha trovato un mutuo con condizioni migliori di quanto sperassi. Professionale e sempre disponibile.",
    service: "Mutuo prima casa",
  },
  {
    name: "Giuseppe Verdi",
    location: "Roma",
    text: "Servizio rapido e chiaro. In una settimana avevo già le risposte su più prestiti personali. Consulenza davvero gratuita, come promesso.",
    service: "Prestito personale",
  },
  {
    name: "Anna Colombo",
    location: "Torino",
    text: "La cessione del quinto mi sembrava complicata, ma Filippo ha spiegato tutto in modo semplice. Ora ho una rata che posso permettermi.",
    service: "Cessione del quinto",
  },
] as const;

export const ABOUT = {
  name: "Filippo Carriero",
  role: "Mediatore creditizio",
  description:
    "Da oltre 10 anni aiuto famiglie e professionisti a trovare il finanziamento giusto. Lavoro in modo indipendente dalle banche per offrirti sempre la soluzione più vantaggiosa. La prima consulenza è gratuita e senza alcun impegno.",
} as const;

export const FINAL_CTA = {
  headline: "Inizia oggi, senza impegno",
  subheadline:
    "Prenota la tua consulenza gratuita e scopri le migliori opzioni per te.",
  cta: "Prenota ora",
} as const;
