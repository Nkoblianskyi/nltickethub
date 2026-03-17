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
    <header className="sticky top-0 z-50 bg-card/98 backdrop-blur-md border-b-2 border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 min-h-16 gap-4">
          <Logo variant="header" href="/" />

          <nav
            className="hidden md:flex flex-1 justify-center items-center gap-0.5"
            aria-label="Hoofdmenu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  pathname === link.href && 'text-foreground'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-accent" aria-hidden />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/evenementen"
              className="hidden sm:inline-flex items-center gap-2 border-2 border-primary text-primary text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Zoeken
            </Link>
            <button
              className="md:hidden p-2.5 text-foreground rounded-lg hover:bg-muted transition-colors"
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
          className="md:hidden absolute top-full left-0 right-0 bg-card border-t border-border py-4 px-4"
          role="navigation"
          aria-label="Mobiel menu"
        >
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                  pathname === link.href
                    ? 'bg-accent-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/evenementen"
              onClick={() => setMobileOpen(false)}
              className="mt-3 mx-4 flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold text-sm px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
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
