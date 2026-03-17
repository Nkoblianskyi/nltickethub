'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Shield,
  Scale,
  TrendingDown,
  Users,
  Eye,
  ChevronDown,
  Ticket,
  Target,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

export default function OverOnsPage() {
  const [openValue, setOpenValue] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const values = [
    {
      icon: Shield,
      title: 'Onafhankelijkheid',
      short: 'Geen partij kiezen.',
      desc: 'We bevoordelen geen enkel kaartplatform. Elk partner krijgt dezelfde weergave en dezelfde kans. Zo zie jij objectief waar de beste prijs staat – zonder verborgen deals of voorrang.',
    },
    {
      icon: Scale,
      title: 'Alleen vergelijken',
      short: 'Geen verkoop door ons.',
      desc: 'nltickethub verkoopt geen kaartjes. Wij tonen alleen prijzen naast elkaar. De aankoop doe je altijd op de website van de gekozen partner. Geen tussenpartij, geen extra kosten.',
    },
    {
      icon: TrendingDown,
      title: 'Besparing',
      short: 'Vergelijken loont.',
      desc: 'Dezelfde tickets kunnen bij het ene platform 20–40% duurder zijn. Door te vergelijken bespaar je vaak flink. Wij maken het makkelijk: één overzicht, alle aanbieders.',
    },
    {
      icon: Users,
      title: 'Betrouwbare partners',
      short: 'Alleen gecontroleerde aanbieders.',
      desc: 'We werken alleen met erkende en gecontroleerde kaartverkoopplatforms. Officiële verkoop en betrouwbare secundaire markten. Geen obscure sites – alleen partners die we zelf controleren.',
    },
    {
      icon: Eye,
      title: 'Transparantie',
      short: 'Duidelijk waar je naartoe gaat.',
      desc: 'Bij elke aanbieding zie je direct naar welke partner je gaat. Geen verrassingen, geen verborgen kosten. We leggen uit dat prijzen boven de nominale waarde kunnen liggen.',
    },
  ]

  const stats = [
    { value: '6+', label: 'Partners', sub: 'Ticketmaster, Eventim, StubHub...' },
    { value: '15+', label: 'Evenementen', sub: 'Concert, sport, theater, festival' },
    { value: '100%', label: 'Gratis', sub: 'Geen registratie of kosten' },
  ]

  const faq = [
    {
      q: 'Waarom bestaat nltickethub?',
      a: 'Omdat veel mensen maar op één plek zoeken en daardoor te veel betalen. Dezelfde kaart kan bij verschillende aanbieders tientallen euros schelen. Wij brengen alle prijzen samen zodat jij de beste keuze maakt.',
    },
    {
      q: 'Kan ik bij jullie kaartjes kopen?',
      a: 'Nee. nltickethub is puur een vergelijkingssite. Wij verkopen niets. Als je op een aanbieding klikt, ga je naar de website van de partner. Daar vindt de betaling en levering plaats.',
    },
    {
      q: 'Hoe verdienen jullie geld?',
      a: 'Sommige partners betalen een vergoeding als je via ons doorklikt. Dat verandert niets aan de prijs die jij ziet – we tonen altijd dezelfde prijzen. Onze vergelijking blijft objectief.',
    },
    {
      q: 'Zijn de prijzen actueel?',
      a: 'We halen prijzen regelmatig op bij de partners. Omdat voorraad en prijzen kunnen wisselen, is wat je bij ons ziet indicatief. De definitieve prijs zie je op de site van de partner.',
    },
  ]

  return (
    <>
      {/* Hero – groter, met korte tagline en visueel element */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden" aria-label="Over ons">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} aria-hidden />
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-primary-foreground/90 text-sm mb-6">
            <Sparkles className="w-4 h-4 text-accent-light" aria-hidden />
            Over nltickethub
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            De beste kaartprijs, eerlijk vergeleken
          </h1>
          <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            Wij geloven dat iedereen recht heeft op transparante prijzen. Daarom brengen we kaartaanbiedingen van meerdere partners samen op één plek – zonder verkoop, zonder gedoe.
          </p>
          <Link
            href="/evenementen"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-bold px-6 py-3 rounded-2xl transition-colors shadow-lg"
          >
            <Ticket className="w-5 h-5" />
            Evenementen vergelijken
          </Link>
        </div>
      </section>

      {/* Ons verhaal – meer tekst, nieuwe layout */}
      <section className="py-14 md:py-20 bg-card border-y border-border" aria-labelledby="verhaal-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-12 rounded-2xl bg-primary text-accent-light flex items-center justify-center">
              <Target className="w-6 h-6" aria-hidden />
            </span>
            <h2 id="verhaal-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Ons verhaal
            </h2>
          </div>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p className="leading-relaxed">
              Kaartjes voor concerten, sport of theater kopen we allemaal wel eens. Maar wist je dat dezelfde ticket bij het ene platform 30 of 40 procent duurder kan zijn dan bij het andere? De meeste mensen kijken maar op één site – en betalen daardoor vaak te veel.
            </p>
            <p className="leading-relaxed">
              <strong className="text-foreground">nltickethub</strong> is opgericht om dat te veranderen. We vergelijken prijzen van betrouwbare partners en tonen ze op één overzichtelijke pagina. Jij zoekt je evenement, ziet in één oogopslag waar de goedkoopste aanbieding staat, en klikt door naar de partner om te kopen. <strong className="text-foreground">Wij verkopen zelf geen kaartjes</strong> – we zijn alleen de vergelijker.
            </p>
            <p className="leading-relaxed">
              Onze missie: kaartverkoop in Nederland transparanter en voordeliger maken. Voor iedereen die wil genieten van live evenementen zonder te veel te betalen.
            </p>
          </div>
        </div>
      </section>

      {/* In cijfers – interactieve kaarten met hover */}
      <section className="py-14 md:py-20 bg-background-warm" aria-labelledby="cijfers-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cijfers-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            nltickethub in cijfers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border-2 border-border bg-card p-6 text-center shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary group-hover:text-accent transition-colors tabular-nums">
                  {s.value}
                </p>
                <p className="font-semibold text-foreground mt-2">{s.label}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarden – uitklapbare kaarten (interactief) */}
      <section className="py-14 md:py-20 bg-card border-y border-border" aria-labelledby="waarden-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="waarden-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Onze waarden
          </h2>
          <div className="space-y-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border-2 border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => setOpenValue(openValue === i ? null : i)}
                  className="w-full flex items-center gap-4 p-4 md:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                  aria-expanded={openValue === i}
                  aria-controls={`value-content-${i}`}
                  id={`value-heading-${i}`}
                >
                  <span className="w-12 h-12 rounded-xl bg-primary text-accent-light flex items-center justify-center shrink-0">
                    <v.icon className="w-6 h-6" aria-hidden />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-lg">{v.title}</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">{v.short}</p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-muted-foreground shrink-0 transition-transform duration-200 ${openValue === i ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                <div
                  id={`value-content-${i}`}
                  role="region"
                  aria-labelledby={`value-heading-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${openValue === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-accent/50 pl-4 ml-12 md:ml-[4.5rem]">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zo werken we – 3 stappen met iconen */}
      <section className="py-14 md:py-20 bg-background-warm" aria-labelledby="werken-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="werken-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Zo werken we
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Zoek', text: 'Vind je evenement op categorie, datum of locatie. Concert, theater, sport of festival – alles op één plek.' },
              { step: 2, title: 'Vergelijk', text: 'Bekijk alle partnerprijzen naast elkaar. Geen gedoe met meerdere tabbladen; wij tonen het overzicht.' },
              { step: 3, title: 'Koop bij de partner', text: 'Klik op de beste aanbieding. Je gaat direct naar de website van de partner om veilig te betalen.' },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <span className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mb-4">
                  {item.step}
                </span>
                <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                {item.step < 3 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-border" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ – accordion (interactief) */}
      <section className="py-14 md:py-20 bg-card border-y border-border" aria-labelledby="faq-title">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Veelgestelde vragen
          </h2>
          <div className="space-y-2">
            {faq.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border-2 border-border overflow-hidden hover:border-primary/20 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-foreground">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer – opvallende blok met icoon */}
      <section className="py-14 md:py-20 bg-primary" aria-labelledby="disclaimer-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <span className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
              <Scale className="w-7 h-7 text-accent-light" aria-hidden />
            </span>
            <div>
              <h2 id="disclaimer-title" className="font-bold text-white text-xl mb-3">
                Wij verkopen geen kaartjes – alleen vergelijken
              </h2>
              <p className="text-primary-foreground/85 text-sm leading-relaxed mb-3">
                nltickethub is een onafhankelijk vergelijkingsplatform. We tonen prijzen van partners naast elkaar. De aankoop gebeurt altijd bij de gekozen partner (Ticketmaster NL, Eventim NL, StubHub, Viagogo, See Tickets, Mojoconcert). Prijzen kunnen boven de nominale waarde liggen.
              </p>
              <p className="text-primary-foreground/60 text-xs leading-relaxed">
                Via &quot;Aanbieding bekijken&quot; ga je naar de partner. nltickethub is geen partij bij de transactie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA – contact / vergelijken */}
      <section className="py-14 md:py-20 bg-background-warm" aria-label="Actie">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-muted/80 border border-accent/30 px-4 py-2 text-sm font-medium text-foreground mb-6">
            <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden />
            Klaar om te vergelijken?
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
            Vragen of suggesties?
          </h2>
          <p className="text-muted-foreground mb-8">
            Mis je een evenement of heb je feedback? We horen het graag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/evenementen"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity"
            >
              <Ticket className="w-5 h-5" />
              Evenementen bekijken
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contact opnemen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
