'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Ticket, ArrowRight } from 'lucide-react'

export function HeroBlock() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Welkom">
      {/* Achtergrond: full-bleed beeld */}
      <div className="absolute inset-0">
        <Image
          src="/0071_HighRes-PressSelection_ED-SHEERAN-MATHEMATIC-CARDIFF-2022_Photo-Ralph-Larmann__27A1599-1.jpg.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-primary/90" aria-hidden />
      </div>

      {/* Decoratieve elementen */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-primary-light/30 blur-3xl pointer-events-none" aria-hidden />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white/95 mb-6">
            <Ticket className="w-4 h-4 text-accent-light" aria-hidden />
            Vergelijken alleen — geen verkoop door ons
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            De beste kaartprijs, op één plek
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
            Concert, theater, sport of festival. Vergelijk prijzen van alle grote aanbieders — gratis en in één overzicht.
          </p>

          {/* Zoekbalk: glasachtige kaart */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center gap-3 pl-4 pr-4 py-3.5">
              <Search className="w-5 h-5 text-accent-light shrink-0" aria-hidden />
              <input
                type="text"
                placeholder="Zoek evenement of artiest..."
                className="w-full bg-transparent text-white placeholder:text-white/60 text-sm md:text-base outline-none"
                aria-label="Zoek evenement"
              />
            </div>
            <Link
              href="/evenementen"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary font-bold px-6 py-3.5 rounded-xl transition-colors shrink-0"
            >
              Zoeken
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Snelkoppelingen */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['Concert', 'Sport', 'Theater', 'Festival'].map((cat) => (
              <Link
                key={cat}
                href="/evenementen"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white/95 text-sm font-medium transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
