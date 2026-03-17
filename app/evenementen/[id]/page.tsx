import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, ChevronLeft, ExternalLink, CheckCircle, XCircle, Scale, Ticket } from 'lucide-react'
import { events, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'
import { PartnersSection } from '@/components/partners-section'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((e) => ({ id: e.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) return {}
  return {
    title: `${event.title} – Prijsvergelijking | nltickethub`,
    description: `Vergelijk kaartprijzen voor ${event.title}. Beste prijs: ${formatPrice(getMinPrice(event.offers))}`,
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) notFound()

  const minPrice = getMinPrice(event.offers)
  const sortedOffers = [...event.offers].sort((a, b) => {
    if (a.available && !b.available) return -1
    if (!a.available && b.available) return 1
    return a.price - b.price
  })
  const availableCount = sortedOffers.filter((o) => o.available).length

  const relatedEvents = events
    .filter((e) => e.id !== event.id && e.category === event.category)
    .slice(0, 4)

  const dateLong = new Date(event.date).toLocaleDateString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <nav className="bg-card border-b border-border py-2 px-4" aria-label="Breadcrumb">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/evenementen" className="hover:text-foreground transition-colors">Evenementen</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-[140px] sm:max-w-xs">{event.title}</span>
        </div>
      </nav>

      <div className="bg-background min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {/* Blok 1: Afbeelding links, titel + meta + beste prijs rechts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-10">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-primary shadow-xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                {event.title}
              </h1>
              <ul className="flex flex-col gap-2 mb-6">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary shrink-0" aria-hidden />
                  <span className="font-medium text-foreground">{dateLong}</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary shrink-0" aria-hidden />
                  <span className="font-medium text-foreground">Aanvang {event.time}</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0" aria-hidden />
                  <span className="font-medium text-foreground">{event.venue}, {event.city}</span>
                </li>
              </ul>
              {minPrice > 0 && (
                <div className="rounded-2xl bg-primary text-primary-foreground p-5 md:p-6 mt-auto">
                  <p className="text-primary-foreground/80 text-sm mb-0.5">Beste prijs vanaf</p>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-accent-light">{formatPrice(minPrice)}</p>
                  <p className="text-primary-foreground/70 text-xs mt-1">{availableCount} aanbiedingen om te vergelijken</p>
                </div>
              )}
            </div>
          </div>

          {/* Blok 2: Vergelijk aanbiedingen – prominent, volle breedte */}
          <section className="mb-10" aria-labelledby="aanbiedingen-title">
            <div className="flex items-center gap-2 mb-4">
              <Ticket className="w-5 h-5 text-accent" aria-hidden />
              <h2 id="aanbiedingen-title" className="font-bold text-foreground text-lg">
                Vergelijk aanbiedingen
              </h2>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card overflow-hidden shadow-sm">
              <ul className="divide-y divide-border">
                {sortedOffers.map((offer, i) => (
                  <li
                    key={offer.partner}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {offer.available ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" aria-label="Beschikbaar" />
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground shrink-0" aria-label="Niet beschikbaar" />
                      )}
                      <span className="font-semibold text-foreground">{offer.partner}</span>
                      {i === 0 && offer.available && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                          Beste prijs
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 pl-8 sm:pl-0">
                      <span className={`font-bold text-lg ${offer.available ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                        {formatPrice(offer.price)}
                      </span>
                      {offer.available && (
                        <a
                          href={offer.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold text-sm px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
                          aria-label={`Naar ${offer.partner}`}
                        >
                          Bekijk aanbod
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Blok 3: Beschrijving */}
          <section className="mb-10" aria-labelledby="beschrijving-title">
            <h2 id="beschrijving-title" className="font-bold text-foreground text-lg mb-3">
              Over dit evenement
            </h2>
            <div className="rounded-2xl bg-card border border-border p-5 md:p-6 shadow-sm">
              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
          </section>

          {/* Blok 4: Disclaimer */}
          <section className="mb-14 rounded-2xl border-l-4 border-accent bg-accent-muted/40 p-4 md:p-5 flex gap-3" role="note" aria-label="Verklaring">
            <Scale className="w-6 h-6 text-accent shrink-0 mt-0.5" aria-hidden />
            <div className="text-sm">
              <p className="font-bold text-foreground mb-1">Wij verkopen geen kaartjes</p>
              <p className="text-muted-foreground leading-relaxed">
                nltickethub is een onafhankelijk vergelijkingsplatform. De aankoop gebeurt altijd op de site van de gekozen partner. Prijzen kunnen boven de nominale waarde liggen. Partners: Ticketmaster NL, Eventim NL, StubHub, Viagogo, See Tickets, Mojoconcert.
              </p>
            </div>
          </section>

          <Link
            href="/evenementen"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ChevronLeft className="w-4 h-4" />
            Terug naar evenementen
          </Link>

          <PartnersSection />

          {relatedEvents.length > 0 && (
            <section className="mt-14" aria-labelledby="related-title">
              <h2 id="related-title" className="font-bold text-foreground text-lg mb-4">
                Meer {event.category.toLowerCase()}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {relatedEvents.map((e) => (
                  <EventCard key={e.id} event={e} variant="default" />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
