import { Shield, Scale, Users } from 'lucide-react'

const points = [
  { icon: Shield, title: 'Onafhankelijk', text: 'We bevoordelen geen platform. Iedereen krijgt dezelfde weergave.' },
  { icon: Scale, title: 'Alleen vergelijken', text: 'Geen verkoop via ons. Jij koopt direct bij de partner.' },
  { icon: Users, title: 'Betrouwbare partners', text: 'Alleen gecontroleerde, officiële en secundaire aanbieders.' },
]

export function WhyUs() {
  return (
    <section className="py-14 md:py-20 bg-background-warm" aria-labelledby="why-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <h2 id="why-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Waarom nltickethub?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wij kiezen geen partij. Je ziet objectief alle aanbiedingen en kiest zelf waar je koopt.
            </p>
            <p className="text-foreground font-medium">
              Met vergelijken bespaar je vaak <span className="text-accent font-semibold">15–30%</span>. Wij verkopen geen kaartjes — alleen vergelijken.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 order-1 lg:order-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-primary/15 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-muted flex items-center justify-center mb-3">
                  <p.icon className="w-5 h-5 text-accent" aria-hidden />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
