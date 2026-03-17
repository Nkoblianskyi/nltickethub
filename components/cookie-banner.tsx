'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Check } from 'lucide-react'

const CONSENT_KEY = 'nltickethub_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie toestemming"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-end md:justify-center"
    >
      <div className="w-full max-w-2xl rounded-t-[var(--radius-card)] md:rounded-[var(--radius-card)] bg-card border-2 border-border shadow-2xl overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5">
          <div className="w-10 h-10 rounded-[var(--radius)] bg-accent-muted flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 text-accent" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-foreground text-sm mb-1">Cookies</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              nltickethub gebruikt cookies voor het functioneren van de site en voor statistieken. Meer info:{' '}
              <Link href="/cookies" className="text-accent hover:underline font-medium" onClick={() => setVisible(false)}>
                Cookieverklaring
              </Link>
              {' · '}
              <Link href="/privacy" className="text-accent hover:underline font-medium" onClick={() => setVisible(false)}>
                Privacy
              </Link>
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={decline}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-[var(--radius)] border border-border text-muted-foreground hover:bg-muted text-sm font-medium transition-colors"
              aria-label="Alleen noodzakelijke cookies"
            >
              <X className="w-4 h-4 inline sm:mr-1" aria-hidden="true" />
              <span className="hidden sm:inline">Alleen noodzakelijk</span>
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-[var(--radius-pill)] bg-primary hover:opacity-90 text-primary-foreground text-sm font-semibold transition-opacity"
              aria-label="Alle cookies accepteren"
            >
              <Check className="w-4 h-4" aria-hidden="true" />
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
