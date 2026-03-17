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
    <footer className="relative bg-primary overflow-hidden" aria-label="Footer">
      {/* Декоративний фон */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Верхній блок: лого + навігація + контакт в один ряд */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12 pb-10 border-b border-white/15">
          <div className="lg:max-w-xs">
            <Logo variant="footer" href="/" className="inline-flex items-center gap-2 mb-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Vergelijk kaartprijzen voor concerten, theater en evenementen. Gratis en onafhankelijk.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-1 lg:gap-x-8" aria-label="Footer navigatie">
            {footerNav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-primary-foreground/75 hover:text-white text-sm font-medium transition-colors py-1"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:info@nltickethub.com"
              className="inline-flex items-center gap-2 text-accent-light hover:text-accent-warm text-sm font-medium transition-colors w-fit"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </span>
              info@nltickethub.com
            </a>
            <div className="inline-flex items-start gap-2 text-primary-foreground/70 text-sm">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </span>
              <span>
                {ADDRESS}
                <br />
                <span className="text-primary-foreground/50">{ADDRESS_NOTE}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer – компактна смуга з іконкою */}
        <div className="flex flex-wrap items-start gap-3 py-6 border-b border-white/15">
          <span className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5 text-accent-light" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-white font-semibold text-sm mb-0.5">Wij verkopen geen kaartjes</p>
            <p className="text-primary-foreground/75 text-xs leading-relaxed">
              nltickethub (nltickethub.com) is een onafhankelijk vergelijkingsplatform. Wij vergelijken alleen prijzen van partners; de aankoop gebeurt bij de partner. Partners: {partnerNames.join(', ')}. Prijzen kunnen boven de nominale waarde liggen.
            </p>
          </div>
        </div>

        {/* Партнери – теги */}
        <div className="py-5">
          <p className="text-primary-foreground/50 text-xs uppercase tracking-wider mb-3">Vergelijkingspartners</p>
          <div className="flex flex-wrap gap-2">
            {partnerNames.map((p) => (
              <span
                key={p}
                className="inline-block px-3 py-1.5 rounded-full bg-white/5 text-primary-foreground/80 text-xs border border-white/10"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Нижній ряд: юридичні посилання + копірайт */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
          <nav className="flex items-center gap-5 text-xs" aria-label="Juridische documenten">
            {legalNav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-primary-foreground/55 hover:text-white transition-colors"
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
    </footer>
  )
}
