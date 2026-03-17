import type { Metadata } from 'next'
import { DM_Sans, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'nltickethub – Vergelijk kaartprijzen voor concerten, theater en meer in Nederland',
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
  description:
    'Onafhankelijke prijsvergelijker voor kaartjes. Vergelijk prijzen van Ticketmaster, Eventim, StubHub en andere partners – kies het beste aanbod. Wij verkopen geen kaartjes.',
  keywords: 'kaartjes, evenementen, concert, theater, festival, prijsvergelijking, Nederland, Amsterdam, nltickethub',
  authors: [{ name: 'nltickethub', url: 'https://nltickethub.com' }],
  metadataBase: new URL('https://nltickethub.com'),
  openGraph: {
    title: 'nltickethub – Kaartprijzen vergelijken in Nederland',
    description: 'Vergelijk kaartprijzen van meerdere betrouwbare partners. Gratis, transparant en onafhankelijk. Wij verkopen geen kaartjes.',
    url: 'https://nltickethub.com',
    siteName: 'nltickethub',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${dmSans.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
