import { Scale, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { partners } from '@/lib/events-data'

const partnerTypes: Record<string, 'Officieel' | 'Wederverkoper'> = {
  'Ticketmaster NL': 'Officieel',
  'Eventim NL': 'Officieel',
  'StubHub': 'Wederverkoper',
  'Viagogo': 'Wederverkoper',
  'See Tickets': 'Officieel',
  'Mojoconcert': 'Officieel',
}

export function PartnersSection() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden bg-card border-y border-border"
      aria-labelledby="partner-sources-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Vergelijkingspartners
          </p>
          <h2 id="partner-sources-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
            Onze partners
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Prijzen van gecontroleerde platforms op één plek. Aankoop altijd bij de partner.
          </p>
        </header>

        <div className="flex flex-col gap-3">
          {partners.map((p) => {
            const type = partnerTypes[p.name] ?? 'Officieel'
            const isOfficial = type === 'Officieel'
            return (
              <article
                key={p.name}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 rounded-2xl border border-border bg-background hover:border-primary/25 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary text-accent-light flex items-center justify-center font-bold text-lg shrink-0">
                    {p.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-foreground">{p.name}</h3>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isOfficial ? 'bg-primary/10 text-primary' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {type}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {p.description}
                    </p>
                  </div>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors shrink-0 py-2 px-4 rounded-xl hover:bg-accent-muted/50"
                  aria-label={`${p.name} – naar website`}
                >
                  Naar website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Alle partners bekijken
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
