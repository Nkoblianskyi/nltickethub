const stats = [
  { value: '6', label: 'Partners', sub: 'o.a. Ticketmaster, Eventim' },
  { value: '15+', label: 'Evenementen', sub: 'regelmatig uitgebreid' },
  { value: '0', label: 'Kosten', sub: 'altijd gratis vergelijken' },
  { value: '24/7', label: 'Beschikbaar', sub: 'actuele prijzen' },
]

export function StatsBento() {
  return (
    <section className="relative py-12 md:py-16 bg-background" aria-label="Cijfers">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-card border border-border/80 p-5 md:p-6 text-center shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-200"
            >
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground tabular-nums">{s.value}</p>
              <p className="text-sm font-semibold text-foreground mt-1">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
