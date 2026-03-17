import { Search, LayoutList, ExternalLink } from 'lucide-react'

const steps = [
  { nr: '01', icon: Search, title: 'Zoek', text: 'Vind je evenement op categorie, datum of locatie.' },
  { nr: '02', icon: LayoutList, title: 'Vergelijk', text: 'Bekijk alle partnerprijzen op één pagina.' },
  { nr: '03', icon: ExternalLink, title: 'Koop', text: 'Ga naar de partner met de beste prijs.' },
]

export function HowItWorks() {
  return (
    <section className="py-14 md:py-20 bg-card border-y border-border" aria-labelledby="steps-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="steps-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Zo werkt het
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((s) => (
            <div key={s.nr} className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary-foreground" aria-hidden />
              </div>
              <span className="absolute top-0 right-1/2 translate-x-8 md:translate-x-12 text-2xl font-serif font-bold text-muted-foreground/40">{s.nr}</span>
              <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
