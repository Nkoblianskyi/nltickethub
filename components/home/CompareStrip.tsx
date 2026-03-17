import { Scale } from 'lucide-react'

export function CompareStrip() {
  return (
    <section className="py-6 bg-primary/8 border-y border-border" aria-labelledby="compare-strip">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
        <Scale className="w-5 h-5 text-accent mx-auto sm:mx-0 shrink-0" aria-hidden />
        <p id="compare-strip" className="text-sm text-muted-foreground">
          <strong className="text-foreground">nltickethub is een vergelijkingssite.</strong> Wij tonen prijzen naast elkaar en verkopen zelf geen kaartjes. Je koopt altijd bij de gekozen partner.
        </p>
      </div>
    </section>
  )
}
