import { ChevronDown } from 'lucide-react'

const faq = [
  { q: 'Hoe werkt nltickethub?', a: 'We halen kaartprijzen op van meerdere partners en tonen ze op één plek. Zo hoef je niet overal apart te kijken — wij vergelijken voor je.' },
  { q: 'Kan ik hier kaartjes kopen?', a: 'Nee. nltickethub is alleen een vergelijker. De verkoop gebeurt altijd op de site van de gekozen partner.' },
  { q: 'Zijn de prijzen betrouwbaar?', a: 'We updaten regelmatig. Prijzen zijn indicatief; de definitieve prijs zie je op de partner-site.' },
  { q: 'Waarom verschillende prijzen?', a: 'Elke partner heeft eigen tarieven. Daarom is vergelijken zinvol.' },
  { q: 'Is het gratis?', a: 'Ja. Geen registratie of extra kosten.' },
]

export function FAQBlock() {
  return (
    <section className="py-14 md:py-20 bg-card border-t border-border" aria-labelledby="faq-heading">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Veelgestelde vragen
        </h2>
        <div className="space-y-2">
          {faq.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-muted/30 overflow-hidden hover:bg-muted/40 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none px-4 py-3.5 font-medium text-foreground">
                {item.q}
                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 ml-2 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-4 pb-4 pt-0 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
