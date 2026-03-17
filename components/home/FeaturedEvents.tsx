import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getHomePreviewEvents } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'

export function FeaturedEvents() {
  const preview = getHomePreviewEvents()
  const [spotlight, ...rest] = preview

  return (
    <section className="py-14 md:py-20 bg-background-warm" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Uitgelicht</p>
            <h2 id="featured-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Populaire evenementen
            </h2>
            <p className="text-muted-foreground text-sm mt-1">Vergelijk prijzen bij meerdere aanbieders</p>
          </div>
          <Link
            href="/evenementen"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors py-2 px-3 rounded-xl hover:bg-accent-muted/50"
          >
            Alles bekijken
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento: 1 grote kaart links (2 rijen), rechts 2+2 kleine */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-5">
          {spotlight && (
            <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-[420px]">
              <EventCard event={spotlight} priority variant="spotlight" />
            </div>
          )}
          {rest.slice(0, 2).map((event, i) => (
            <div key={event.id} className={i === 0 ? 'lg:col-start-2 lg:row-start-1' : 'lg:col-start-3 lg:row-start-1'}>
              <EventCard event={event} priority={i === 0} variant="compact" />
            </div>
          ))}
          {rest.slice(2, 4).map((event, i) => (
            <div key={event.id} className={i === 0 ? 'lg:col-start-2 lg:row-start-2' : 'lg:col-start-3 lg:row-start-2'}>
              <EventCard event={event} variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
