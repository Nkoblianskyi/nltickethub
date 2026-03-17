import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Scale, Building2, Globe, Calendar, Quote } from 'lucide-react'
import { partners } from '@/lib/events-data'

export const metadata: Metadata = {
  title: 'Onze partners | nltickethub',
  description: 'Maak kennis met de partners van nltickethub: betrouwbare kaartverkoopplatforms waar we prijzen van vergelijken. Wij verkopen geen kaartjes.',
}

type PartnerType = 'Officieel' | 'Wederverkoper'

const partnerInfo: Record<
  string,
  {
    type: PartnerType
    country: string
    founded?: string
    description: string
    highlight?: string
  }
> = {
  'Ticketmaster NL': {
    type: 'Officieel',
    country: 'Nederland',
    founded: '1976',
    description: 'Wereldwijd de grootste aanbieder van kaartverkoop voor concerten, sport, theater en festivals. Ticketmaster NL is de officiële verkoopkanalen voor veel grote evenementen in Nederland en biedt zowel primaire verkoop als (waar toegestaan) secundaire markt.',
    highlight: 'Grootste kaartverkoop ter wereld',
  },
  'Eventim NL': {
    type: 'Officieel',
    country: 'Nederland / Europa',
    founded: '1989',
    description: 'Onderdeel van het Europese Eventim-netwerk. Officiële kaartverkoop voor duizenden evenementen in Nederland en daarbuiten. Sterk in concerten, theater en festivals. Werkt samen met veel grote venues en organisatoren.',
    highlight: 'Europees netwerk',
  },
  'StubHub': {
    type: 'Wederverkoper',
    country: 'USA / Internationaal',
    founded: '2000',
    description: 'Een van de grootste secundaire marktplaatsen voor tickets. Kopers en verkopers komen hier samen. StubHub biedt bescherming en garanties en is actief in Nederland voor internationale en lokale evenementen.',
    highlight: 'Veilige secundaire markt',
  },
  'Viagogo': {
    type: 'Wederverkoper',
    country: 'Zwitserland / Internationaal',
    founded: '2006',
    description: 'Internationaal ticketplatform voor de doorverkoop van kaartjes. Actief in veel landen, waaronder Nederland. Handig wanneer officiële verkoop uitverkocht is of je op zoek bent naar een specifiek aanbod.',
    highlight: 'Internationaal ticketplatform',
  },
  'See Tickets': {
    type: 'Officieel',
    country: 'VK / Europa',
    founded: '1982',
    description: 'Groot Brits en Europees platform voor officiële kaartverkoop. Sterk in festivals, concerten en clubshows. See Tickets verkoopt onder meer voor bekende festivals en evenementen die ook in Nederland toegankelijk zijn.',
    highlight: 'Festivals en concerten',
  },
  'Mojoconcert': {
    type: 'Officieel',
    country: 'Nederland',
    founded: '2000',
    description: 'Nederlands platform gespecialiseerd in concert- en festivalkaartjes. Richt zich op de Nederlandse markt en werkt samen met organisatoren en venues. Populair onder muziekliefhebbers voor binnen- en buitenlandse acts.',
    highlight: 'Concert en festival in NL',
  },
}

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-16 md:py-20 overflow-hidden" aria-label="Partners">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Onze partners
          </h1>
          <p className="text-primary-foreground/85 text-lg max-w-2xl leading-relaxed">
            nltickethub vergelijkt prijzen van gecontroleerde kaartverkoopplatforms. Hieronder vind je wie we tonen: officiële bronnen en betrouwbare secundaire aanbieders. Wij verkopen geen kaartjes – wij vergelijken.
          </p>
        </div>
      </section>

      {/* Disclaimer – kaart met citaat-stijl */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 mb-14" aria-label="Verklaring">
        <div className="rounded-2xl border-2 border-accent/40 bg-card shadow-lg p-5 md:p-6 flex gap-4">
          <span className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6 text-accent" aria-hidden />
          </span>
          <div>
            <p className="font-bold text-foreground mb-1">Wij verkopen geen kaartjes</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              nltickethub is een onafhankelijk vergelijkingsplatform. We tonen alleen prijzen; de aankoop gebeurt altijd op de site van de gekozen partner. Prijzen kunnen boven de nominale waarde liggen.
            </p>
          </div>
        </div>
      </section>

      {/* Lijst partners – horizontale kaarten, genummerd */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" aria-label="Partnerlijst">
        <ul className="space-y-6">
          {partners.map((partner, index) => {
            const info = partnerInfo[partner.name]
            const isOfficial = info?.type === 'Officieel'
            return (
              <li key={partner.name}>
                <article className="rounded-2xl border-2 border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-stretch">
                    {/* Links: nummer + avatar + type */}
                    <div className="md:w-44 shrink-0 p-5 md:py-6 md:pl-6 md:pr-4 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 border-b md:border-b-0 md:border-r border-border bg-muted/30">
                      <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-primary text-accent-light flex items-center justify-center font-bold text-xl shrink-0 md:self-center">
                        {partner.name.charAt(0)}
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                          isOfficial ? 'bg-primary/15 text-primary' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {info?.type ?? 'Partner'}
                      </span>
                    </div>

                    {/* Rechts: naam, beschrijving, meta, CTA */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                          {partner.name}
                        </h2>
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors shrink-0"
                          aria-label={`${partner.name} – naar website`}
                        >
                          Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      {info?.highlight && (
                        <p className="text-accent font-medium text-sm mb-2 flex items-center gap-1.5">
                          <Quote className="w-4 h-4 opacity-70" aria-hidden />
                          {info.highlight}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {info?.description ?? partner.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-muted-foreground mt-auto">
                        <span className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5" aria-hidden />
                          {info?.country ?? '–'}
                        </span>
                        {info?.founded && (
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" aria-hidden />
                            Opgericht {info.founded}
                          </span>
                        )}
                      </div>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-2.5 px-5 rounded-xl hover:opacity-90 transition-opacity w-full sm:w-auto"
                        aria-label={`Naar ${partner.name}`}
                      >
                        Naar website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        {/* CTA – platform worden */}
        <div className="mt-16 rounded-2xl bg-primary p-8 md:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-accent-light" aria-hidden />
            </span>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-1">
                Kaartverkoopplatform?
              </h2>
              <p className="text-primary-foreground/85 text-sm">
                Wil je in de nltickethub-vergelijking? Neem contact op.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary font-bold px-6 py-3 rounded-xl transition-colors shrink-0"
          >
            Contact opnemen
          </Link>
        </div>
      </section>
    </>
  )
}
