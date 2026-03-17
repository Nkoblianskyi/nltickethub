'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { events, type EventCategory } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'

const ALL_CATS: EventCategory[] = ['Concert', 'Sport', 'Theater', 'Festival', 'Comedy']

export default function EvenementenPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<EventCategory | null>(null)

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchCat = activeCategory ? e.category === activeCategory : true
      const q = query.toLowerCase()
      const matchQ = !q || e.title.toLowerCase().includes(q) || e.city.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q) || (e.artist?.toLowerCase().includes(q) ?? false)
      return matchCat && matchQ
    })
  }, [query, activeCategory])

  return (
    <>
      <section className="relative bg-primary py-14 pb-20 overflow-hidden" aria-label="Pagina evenementen">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Alle evenementen</h1>
          <p className="text-primary-foreground/85 max-w-xl">
            Vergelijk kaartprijzen voor {events.length} evenementen. Wij verkopen geen kaartjes.
          </p>
        </div>
      </section>

      <section className="sticky top-[4.5rem] z-40 bg-card border-b border-border shadow-sm" aria-label="Filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek evenement, artiest of locatie..."
                className="w-full pl-10 pr-10 py-2.5 border border-input rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                aria-label="Zoeken"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted"
                  aria-label="Wissen"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Categorie">
              <Filter className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === null ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'
                }`}
                aria-pressed={activeCategory === null}
              >
                Alles
              </button>
              {ALL_CATS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-warm py-10 min-h-[50vh]" aria-live="polite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-6">
            <strong className="text-foreground">{filtered.length}</strong> evenementen
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} variant="default" />
              ))}
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center py-20 rounded-2xl bg-card border border-border shadow-sm px-6">
              <p className="font-bold text-foreground text-lg mb-2">Geen resultaten</p>
              <p className="text-muted-foreground text-sm mb-5">Pas je zoekterm of filter aan.</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory(null) }}
                className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Filters wissen
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
