import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookieverklaring | nltickethub',
  description: 'De cookieverklaring van nltickethub – welke cookies we gebruiken en hoe je ze beheert.',
}

export default function CookiesPage() {
  return (
    <>
      <section className="bg-primary py-14 md:py-16 overflow-hidden" aria-label="Cookieverklaring">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Cookieverklaring</h1>
          <p className="text-primary-foreground/85 text-sm">Laatst bijgewerkt: 2026</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-2xl border border-border bg-card shadow-lg p-6 md:p-8 flex flex-col gap-8 text-muted-foreground leading-relaxed text-sm">

            <section aria-labelledby="what-title">
              <h2 id="what-title" className="font-serif text-xl font-bold text-foreground mb-3">1. Wat is een cookie?</h2>
              <p>
                Een cookie is een klein tekstbestand dat bij een bezoek aan de website door je browser op je computer
                of apparaat wordt geplaatst. Cookies helpen de website goed te functioneren en bieden een betere gebruikerservaring.
              </p>
            </section>

            <section aria-labelledby="types-title">
              <h2 id="types-title" className="font-serif text-xl font-bold text-foreground mb-4">2. Cookies die we gebruiken</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse" aria-label="Cookie-overzicht">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-xs font-semibold text-foreground border border-border">Cookienaam</th>
                      <th className="px-4 py-3 text-xs font-semibold text-foreground border border-border">Type</th>
                      <th className="px-4 py-3 text-xs font-semibold text-foreground border border-border">Doel</th>
                      <th className="px-4 py-3 text-xs font-semibold text-foreground border border-border">Looptijd</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '_session', type: 'Noodzakelijk', goal: 'Sessie beheren', expiry: 'Einde sessie' },
                      { name: '_analytics', type: 'Analytisch', goal: 'Bezoekersstatistieken', expiry: '2 jaar' },
                      { name: '_preferences', type: 'Functioneel', goal: 'Gebruikersvoorkeuren', expiry: '1 jaar' },
                    ].map((row) => (
                      <tr key={row.name}>
                        <td className="px-4 py-3 border border-border font-mono text-xs text-foreground">{row.name}</td>
                        <td className="px-4 py-3 border border-border">{row.type}</td>
                        <td className="px-4 py-3 border border-border">{row.goal}</td>
                        <td className="px-4 py-3 border border-border">{row.expiry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="essential-title">
              <h2 id="essential-title" className="font-serif text-xl font-bold text-foreground mb-3">3. Noodzakelijke cookies</h2>
              <p>
                Noodzakelijke cookies zijn essentieel voor de basisfunctionaliteit van de website. Ze verzamelen geen
                persoonsgegevens voor identificatie en worden niet gedeeld met derden. Zonder deze cookies werken sommige functies niet goed.
              </p>
            </section>

            <section aria-labelledby="analytics-title">
              <h2 id="analytics-title" className="font-serif text-xl font-bold text-foreground mb-3">4. Analytische cookies</h2>
              <p>
                Met analytische cookies verzamelen we anonieme statistieken over het gebruik van de website
                (bijv. welke pagina&apos;s worden bezocht, hoe lang). We gebruiken deze uitsluitend om de dienst te verbeteren.
              </p>
              <p className="mt-3">
                Voor analytics gebruiken we <strong className="text-foreground">Vercel Analytics</strong>,
                AVG-vriendelijk en zonder doorverkoop van data aan derden.
              </p>
            </section>

            <section aria-labelledby="control-title">
              <h2 id="control-title" className="font-serif text-xl font-bold text-foreground mb-3">5. Cookies beheren</h2>
              <p>
                De meeste browsers accepteren cookies standaard; je kunt instellen dat ze geweigerd worden of
                dat je elke keer een melding krijgt. In de belangrijkste browsers:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>Google Chrome: Instellingen → Privacy en beveiliging → Cookies</li>
                <li>Mozilla Firefox: Instellingen → Privacy en beveiliging</li>
                <li>Safari: Voorkeuren → Privacy</li>
                <li>Microsoft Edge: Instellingen → Cookies en sitegegevens</li>
              </ul>
            </section>

            <section aria-labelledby="more-title">
              <h2 id="more-title" className="font-serif text-xl font-bold text-foreground mb-3">6. Meer informatie</h2>
              <p>
                Voor details over gegevensverwerking zie ons{' '}
                <Link href="/privacy" className="text-primary hover:underline font-medium">
                  Privacybeleid
                </Link>.
                Vragen? Mail naar{' '}
                <a href="mailto:info@nltickethub.com" className="text-primary hover:underline font-medium">
                  info@nltickethub.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
