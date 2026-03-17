import Link from 'next/link'
import { Ticket } from 'lucide-react'

export function CTABlock() {
  return (
    <section className="relative py-16 md:py-20 bg-primary overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} aria-hidden />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Ticket className="w-12 h-12 text-accent-light mx-auto mb-4" aria-hidden />
        <h2 id="cta-heading" className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
          Klaar om te vergelijken?
        </h2>
        <p className="text-primary-foreground/85 mb-8 text-sm md:text-base">
          Bekijk evenementen en vergelijk prijzen. Gratis. Wij verkopen geen kaartjes.
        </p>
        <Link
          href="/evenementen"
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-black/20"
        >
          Naar evenementen
        </Link>
      </div>
    </section>
  )
}
