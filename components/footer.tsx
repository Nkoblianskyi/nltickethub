import Link from 'next/link'
import { Mail, MapPin, Scale } from 'lucide-react'
import { Logo } from '@/components/logo'

const partnerNames = [
  'Ticketmaster NL',
  'Eventim NL',
  'StubHub',
  'Viagogo',
  'See Tickets',
  'Mojoconcert',
]

const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Evenementen', href: '/evenementen' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
]

const legalNav = [
  { label: 'Privacybeleid', href: '/privacy' },
  { label: 'Cookieverklaring', href: '/cookies' },
]

const ADDRESS = 'Strawinskylaan 1, 1077 XW Amsterdam'
const ADDRESS_NOTE = 'WTC Amsterdam'

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground" aria-label="Footer">
      {/* Top accent line */}
      <div className="h-1 w-full bg-accent" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        {/* Main row: logo + tagline | nav | contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-8 border-b border-white/15">
          <div>
            <Logo variant="footer" href="/" className="mb-3" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Vergelijk kaartprijzen voor concerten, theater en evenementen. Gratis en onafhankelijk.
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Footer navigatie">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">Navigatie</span>
            {footerNav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-primary-foreground/85 hover:text-accent-warm text-sm font-medium transition-colors w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">Contact</span>
            <a
              href="mailto:info@nltickethub.com"
              className="inline-flex items-center gap-2 text-accent-warm hover:text-accent-light text-sm font-medium transition-colors w-fit"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              info@nltickethub.com
            </a>
            <div className="inline-flex items-start gap-2 text-primary-foreground/75 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                {ADDRESS}
                <br />
                <span className="text-primary-foreground/55">{ADDRESS_NOTE}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex flex-wrap items-start gap-3 py-6 border-b border-white/15">
          <span className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5 text-accent-warm" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-sm mb-1">Wij verkopen geen kaartjes</p>
            <p className="text-primary-foreground/75 text-xs leading-relaxed">
              nltickethub is een onafhankelijk vergelijkingsplatform. Wij vergelijken alleen prijzen van partners; de aankoop gebeurt bij de partner. Partners: {partnerNames.join(', ')}. Prijzen kunnen boven de nominale waarde liggen.
            </p>
          </div>
        </div>

        {/* Partners + legal row */}
        <div className="pt-6 flex flex-col gap-6">
          <div>
            <p className="text-primary-foreground/50 text-xs uppercase tracking-wider mb-2">Vergelijkingspartners</p>
            <div className="flex flex-wrap gap-2">
              {partnerNames.map((p) => (
                <span
                  key={p}
                  className="inline-block px-3 py-1.5 rounded-lg bg-white/10 text-primary-foreground/90 text-xs font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <nav className="flex items-center gap-6 text-xs" aria-label="Juridische documenten">
              {legalNav.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-primary-foreground/60 hover:text-accent-warm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-primary-foreground/50">
              &copy; {new Date().getFullYear()} nltickethub · nltickethub.com · Prijzen indicatief
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
