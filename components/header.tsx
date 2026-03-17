'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const navLinks = [
  { href: '/evenementen', label: 'Evenementen' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 min-h-[4.5rem] gap-6">
          <Logo variant="header" href="/" />

          <nav
            className="hidden md:flex flex-1 justify-center items-center gap-1"
            aria-label="Hoofdmenu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2.5 text-sm font-medium rounded-[var(--radius)] transition-all',
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/evenementen"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-[var(--radius-pill)] hover:opacity-90 transition-opacity"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Zoeken
            </Link>
            <button
              className="md:hidden p-2.5 text-muted-foreground rounded-[var(--radius)] hover:bg-muted transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-lg py-4 px-4 section-rounded-bottom"
          role="navigation"
          aria-label="Mobiel menu"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-[var(--radius)] text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-accent-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/evenementen"
              onClick={() => setMobileOpen(false)}
              className="mt-2 mx-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-4 py-3 rounded-[var(--radius-pill)]"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Kaartjes zoeken
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
