export type EventCategory = 'Concert' | 'Sport' | 'Theater' | 'Festival' | 'Comedy'

export interface TicketOffer {
  partner: string
  price: number
  url: string
  available: boolean
}

export interface Event {
  id: string
  title: string
  artist?: string
  category: EventCategory
  date: string
  time: string
  venue: string
  city: string
  image: string
  description: string
  offers: TicketOffer[]
  featured?: boolean
  /** Grote kaart op homepage (bento) */
  spotlight?: boolean
}

export const partners = [
  { name: 'Ticketmaster NL', url: 'https://www.ticketmaster.nl', description: 'Officiële kaartverkoop voor concerten en evenementen in Nederland.' },
  { name: 'Eventim NL', url: 'https://www.eventim.nl', description: 'Groot Europees netwerk voor kaartverkoop.' },
  { name: 'StubHub', url: 'https://www.stubhub.nl', description: 'Veilige secundaire markt voor kaartjes.' },
  { name: 'Viagogo', url: 'https://www.viagogo.com', description: 'Internationaal ticketplatform.' },
  { name: 'See Tickets', url: 'https://www.seetickets.com', description: 'Officiële verkoop voor festivals en concerten.' },
  { name: 'Mojoconcert', url: 'https://www.mojoconcert.nl', description: 'Concert- en festivalkaartjes in Nederland.' },
]

export const events: Event[] = [
  {
    id: '17',
    title: 'Down The Rabbit Hole 2026',
    artist: undefined,
    category: 'Festival',
    date: '2026-06-27',
    time: '12:00',
    venue: 'Beuningen',
    city: 'Beuningen',
    image: '/image2222s.jpeg',
    description: 'Down The Rabbit Hole in Beuningen: drie dagen indie, art rock en verrassende namen op de Groene Heuvels. Camping, kunstinstallaties en een intieme festivalbeleving.',
    featured: true,
    spotlight: true,
    offers: [
      { partner: 'Ticketmaster NL', price: 195, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'See Tickets', price: 200, url: 'https://www.seetickets.com', available: true },
      { partner: 'Eventim NL', price: 198, url: 'https://www.eventim.nl', available: true },
    ],
  },
  {
    id: '16',
    title: 'Sam Smith – Gloria Tour',
    artist: 'Sam Smith',
    category: 'Concert',
    date: '2026-05-15',
    time: '20:00',
    venue: 'Ziggo Dome',
    city: 'Amsterdam',
    image: '/Gloria_World_Tour.jpeg',
    description: 'Gloria Tour: Sam Smith live in de Ziggo Dome met soul, pop en de grootste hits. Een avond vol emotie en stemmige productie.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster NL', price: 75, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Eventim NL', price: 78, url: 'https://www.eventim.nl', available: true },
      { partner: 'Mojoconcert', price: 80, url: 'https://www.mojoconcert.nl', available: true },
    ],
  },
  {
    id: '11',
    title: 'Rammstein – Europe Stadium Tour',
    artist: 'Rammstein',
    category: 'Concert',
    date: '2026-09-05',
    time: '20:00',
    venue: 'GelreDome',
    city: 'Arnhem',
    image: '/p1477085.webp',
    description: 'Europe Stadium Tour: Rammstein in Arnhem. Industrieel metal, vuurwerk en een van de meest overweldigende live shows ter wereld.',
    offers: [
      { partner: 'Eventim NL', price: 125, url: 'https://www.eventim.nl', available: true },
      { partner: 'StubHub', price: 165, url: 'https://www.stubhub.nl', available: true },
      { partner: 'Viagogo', price: 175, url: 'https://www.viagogo.com', available: true },
    ],
  },
  {
    id: '2',
    title: 'Ajax – Thuiswedstrijd Eredivisie',
    artist: undefined,
    category: 'Sport',
    date: '2026-04-19',
    time: '18:45',
    venue: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
    image: '/stadion-1920.jpg',
    description: 'Eredivisie thuiswedstrijd van Ajax in de Johan Cruijff ArenA. Voetbal op het hoogste niveau in Amsterdam.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster NL', price: 35, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'See Tickets', price: 38, url: 'https://www.seetickets.com', available: true },
    ],
  },
  {
    id: '1',
    title: 'Ed Sheeran – Mathematics Tour',
    artist: 'Ed Sheeran',
    category: 'Concert',
    date: '2026-06-14',
    time: '20:00',
    venue: 'Ziggo Dome',
    city: 'Amsterdam',
    image: '/0071_HighRes-PressSelection_ED-SHEERAN-MATHEMATIC-CARDIFF-2022_Photo-Ralph-Larmann__27A1599-1.jpg.webp',
    description: 'Mathematics Tour: Ed Sheeran solo met gitaar en loopstation in de Ziggo Dome. Shape of You, Perfect en nieuw werk in één avond.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster NL', price: 89, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Eventim NL', price: 92, url: 'https://www.eventim.nl', available: true },
      { partner: 'StubHub', price: 105, url: 'https://www.stubhub.nl', available: true },
    ],
  },
  {
    id: '7',
    title: 'Coldplay – Music of the Spheres',
    artist: 'Coldplay',
    category: 'Concert',
    date: '2026-07-10',
    time: '20:30',
    venue: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
    image: '/Music_of_the_Spheres_World_Tour_Poster.png',
    description: 'Music of the Spheres World Tour: Coldplay in de ArenA met kleurrijke wristbands, duurzame opzet en hits van Yellow tot Higher Power.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster NL', price: 115, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Eventim NL', price: 118, url: 'https://www.eventim.nl', available: true },
      { partner: 'StubHub', price: 145, url: 'https://www.stubhub.nl', available: true },
      { partner: 'Viagogo', price: 155, url: 'https://www.viagogo.com', available: true },
    ],
  },
  {
    id: '4',
    title: 'Lowlands 2026',
    artist: undefined,
    category: 'Festival',
    date: '2026-08-21',
    time: '12:00',
    venue: 'Walibi Holland',
    city: 'Biddinghuizen',
    image: '/Lowlands.jpg',
    description: 'Lowlands in Biddinghuizen: drie dagen rock, elektronica en comedy op het terrein van Walibi Holland. Het vlaggenschipfestival van Nederland.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster NL', price: 285, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'See Tickets', price: 290, url: 'https://www.seetickets.com', available: true },
      { partner: 'Viagogo', price: 320, url: 'https://www.viagogo.com', available: true },
      { partner: 'StubHub', price: 335, url: 'https://www.stubhub.nl', available: true },
    ],
  },
  {
    id: '3',
    title: 'Mamma Mia! – De musical',
    artist: undefined,
    category: 'Theater',
    date: '2026-05-02',
    time: '19:30',
    venue: 'AFAS Circustheater',
    city: 'Scheveningen',
    image: '/Kunstmin-MAMMA-MIA-de-Musical-Roy-Beusker-1.jpg',
    description: 'Mamma Mia! in Scheveningen: de musical op de hits van ABBA. Een Griekse bruiloft, verwarrende vaders en Dancing Queen live in het AFAS Circustheater.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster NL', price: 52, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Eventim NL', price: 55, url: 'https://www.eventim.nl', available: true },
    ],
  },
  {
    id: '5',
    title: 'Dua Lipa – Radical Optimism Tour',
    artist: 'Dua Lipa',
    category: 'Concert',
    date: '2026-04-25',
    time: '20:00',
    venue: 'Ziggo Dome',
    city: 'Amsterdam',
    image: '/Radical_Optimism_Tour_Poster.webp',
    description: 'Radical Optimism Tour: Dua Lipa in de Ziggo Dome. Future Nostalgia en het gelijknamige album live – disco, pop en grote choreografieën.',
    offers: [
      { partner: 'Ticketmaster NL', price: 79, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Mojoconcert', price: 82, url: 'https://www.mojoconcert.nl', available: true },
    ],
  },
  {
    id: '6',
    title: 'Comedy Central Live – Stand-up avond',
    artist: undefined,
    category: 'Comedy',
    date: '2026-05-10',
    time: '20:00',
    venue: 'Paradiso',
    city: 'Amsterdam',
    image: '/6ce0895139f9afbf2804f3cfe7b3157143bd2ab7f619aad3db5995e9ac5366fe.jpg',
    description: 'Comedy Central Live in Paradiso: een avond stand-up met wisselende Nederlandse en internationale acts. Van observatie tot absurde humor.',
    offers: [
      { partner: 'Ticketmaster NL', price: 32, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Eventim NL', price: 34, url: 'https://www.eventim.nl', available: true },
    ],
  },
  {
    id: '8',
    title: 'Nederland – Oranje voetbal',
    artist: undefined,
    category: 'Sport',
    date: '2026-04-30',
    time: '20:45',
    venue: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
    image: '/240910RL10887.jpg',
    description: 'Oranje thuis in de Johan Cruijff ArenA. Internationale oefenwedstrijd of kwalificatie – sfeer en vaderlandslievende support in Amsterdam.',
    offers: [
      { partner: 'Ticketmaster NL', price: 45, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'See Tickets', price: 48, url: 'https://www.seetickets.com', available: true },
    ],
  },
  {
    id: '9',
    title: 'Les Misérables – Musical',
    artist: undefined,
    category: 'Theater',
    date: '2026-05-22',
    time: '19:30',
    venue: 'Deutsche Oper am Rhein',
    city: 'Amsterdam',
    image: '/LesMisLogo.png',
    description: 'Les Misérables: Victor Hugo’s verhaal over Jean Valjean en de opstand in Parijs. Iconische nummers als I Dreamed a Dream en One Day More op het toneel.',
    offers: [
      { partner: 'Ticketmaster NL', price: 58, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Eventim NL', price: 62, url: 'https://www.eventim.nl', available: true },
    ],
  },
  {
    id: '10',
    title: 'Pinkpop 2026',
    artist: undefined,
    category: 'Festival',
    date: '2026-06-13',
    time: '12:00',
    venue: 'Megaland',
    city: 'Landgraaf',
    image: '/images.png',
    description: 'Pinkpop in Landgraaf: het oudste pop- en rockfestival van Nederland op Megaland. Drie dagen headliners en opkomend talent in Limburg.',
    offers: [
      { partner: 'Ticketmaster NL', price: 245, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Mojoconcert', price: 250, url: 'https://www.mojoconcert.nl', available: true },
      { partner: 'Eventim NL', price: 248, url: 'https://www.eventim.nl', available: true },
    ],
  },
  {
    id: '12',
    title: 'Feyenoord – Eredivisie thuis',
    artist: undefined,
    category: 'Sport',
    date: '2026-07-22',
    time: '16:45',
    venue: 'De Kuip',
    city: 'Rotterdam',
    image: '/SuperKuip-nieuwfeyenoord-tribune-day.width-1160.jpg',
    description: 'Feyenoord thuis in De Kuip. Eredivisie-wedstrijd in Rotterdam-Zuid – legendarische tribunes en het volkslied van de stad.',
    offers: [
      { partner: 'Ticketmaster NL', price: 42, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'See Tickets', price: 45, url: 'https://www.seetickets.com', available: true },
    ],
  },
  {
    id: '13',
    title: 'Guido Weijers – Stand-up',
    artist: 'Guido Weijers',
    category: 'Comedy',
    date: '2026-06-06',
    time: '20:00',
    venue: 'Carré',
    city: 'Amsterdam',
    image: '/Guido Weijers - Ouderjaarsconference 2026 - 2300 x 830.png',
    description: 'Guido Weijers in Carré met scherpe observaties over het dagelijks leven, relaties en Nederland. Herkenbare stand-up in een iconische zaal.',
    offers: [
      { partner: 'Ticketmaster NL', price: 48, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Eventim NL', price: 50, url: 'https://www.eventim.nl', available: true },
    ],
  },
  {
    id: '14',
    title: 'North Sea Jazz 2026',
    artist: undefined,
    category: 'Festival',
    date: '2026-07-10',
    time: '14:00',
    venue: 'Ahoy',
    city: 'Rotterdam',
    image: '/nn-nsj26.jpg',
    description: 'North Sea Jazz in Ahoy Rotterdam: drie dagen jazz, soul, funk en wereldmuziek. Een van de grootste indoor jazzfestivals met een breed programma.',
    offers: [
      { partner: 'Ticketmaster NL', price: 195, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'See Tickets', price: 200, url: 'https://www.seetickets.com', available: true },
    ],
  },
  {
    id: '15',
    title: 'Het Nationale Ballet – Voorstelling',
    artist: undefined,
    category: 'Theater',
    date: '2026-05-30',
    time: '20:00',
    venue: 'Nationale Opera & Ballet',
    city: 'Amsterdam',
    image: '/NotenKraker_1920x1080_Hugo_Thomassen-web-header.jpg',
    description: 'Het Nationale Ballet in Nationale Opera & Ballet Amsterdam. Klassiek en modern repertoire met topdansers in een van de mooiste podia van Nederland.',
    offers: [
      { partner: 'Ticketmaster NL', price: 65, url: 'https://www.ticketmaster.nl', available: true },
      { partner: 'Eventim NL', price: 68, url: 'https://www.eventim.nl', available: true },
    ],
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price)
}

export function getMinPrice(offers: TicketOffer[]): number {
  const available = offers.filter((o) => o.available)
  if (available.length === 0) return 0
  return Math.min(...available.map((o) => o.price))
}

export function getCategoryColor(category: EventCategory): string {
  const map: Record<EventCategory, string> = {
    Concert: 'bg-blue-100 text-blue-800',
    Sport: 'bg-green-100 text-green-800',
    Theater: 'bg-purple-100 text-purple-800',
    Festival: 'bg-orange-100 text-orange-800',
    Comedy: 'bg-amber-100 text-amber-800',
  }
  return map[category]
}

/** Voor homepage bento: eerst spotlight, dan 4 andere featured (volgorde in array). */
export function getHomePreviewEvents(): Event[] {
  const spotlight = events.find((e) => e.spotlight)
  const rest = events.filter((e) => e.featured && e.id !== spotlight?.id).slice(0, 4)
  return spotlight ? [spotlight, ...rest] : rest
}
