import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacybeleid | nltickethub',
  description: 'Het privacybeleid van nltickethub – hoe we omgaan met je gegevens en je rechten.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary py-14 md:py-16 overflow-hidden" aria-label="Privacybeleid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Privacybeleid</h1>
          <p className="text-primary-foreground/85 text-sm">Laatst bijgewerkt: 2026</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-2xl border border-border bg-card shadow-lg p-6 md:p-8 flex flex-col gap-8 text-muted-foreground leading-relaxed text-sm">

            <section aria-labelledby="intro-title">
              <h2 id="intro-title" className="font-serif text-xl font-bold text-foreground mb-3">1. Inleiding</h2>
              <p>
                nltickethub (hierna: „wij”, „dienst”) hecht veel waarde aan de bescherming van persoonsgegevens.
                Dit privacybeleid beschrijft welke gegevens we verzamelen, hoe we ze gebruiken en welke rechten je hebt.
              </p>
              <p className="mt-3">
                nltickethub is een <strong className="text-foreground">onafhankelijk vergelijkingsplatform</strong>
                en verkoopt geen kaartjes. Via onze website vindt geen kaartverkooptransactie plaats.
              </p>
            </section>

            <section aria-labelledby="data-title">
              <h2 id="data-title" className="font-serif text-xl font-bold text-foreground mb-3">2. Verzamelde gegevens</h2>
              <h3 className="font-semibold text-foreground mb-2">2.1 Automatisch verzamelde gegevens</h3>
              <ul className="list-disc list-inside flex flex-col gap-1 mb-4">
                <li>IP-adres (geanonimiseerd)</li>
                <li>Browsertype en -versie</li>
                <li>Bezochte pagina&apos;s en zoektermen</li>
                <li>Datum en duur van het bezoek</li>
              </ul>
              <h3 className="font-semibold text-foreground mb-2">2.2 Gegevens bij contact</h3>
              <ul className="list-disc list-inside flex flex-col gap-1">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Inhoud van het bericht</li>
              </ul>
            </section>

            <section aria-labelledby="usage-title">
              <h2 id="usage-title" className="font-serif text-xl font-bold text-foreground mb-3">3. Gebruik van gegevens</h2>
              <p>We gebruiken de gegevens voor:</p>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>Het goed laten functioneren van de website</li>
                <li>Het beantwoorden van contactverzoeken</li>
                <li>Het verbeteren van inhoud en gebruikerservaring</li>
                <li>Statistische analyses (alleen geanonimiseerd)</li>
              </ul>
            </section>

            <section aria-labelledby="sharing-title">
              <h2 id="sharing-title" className="font-serif text-xl font-bold text-foreground mb-3">4. Delen van gegevens</h2>
              <p>
                We verkopen of verstrekken je persoonsgegevens niet aan derden, tenzij de wet dit verplicht.
                Via de knop &quot;Aanbieding bekijken&quot; ga je naar de website van de partner, waar het privacybeleid van die partner geldt.
              </p>
            </section>

            <section aria-labelledby="cookies-title">
              <h2 id="cookies-title" className="font-serif text-xl font-bold text-foreground mb-3">5. Cookies</h2>
              <p>
                Onze website gebruikt cookies om de gebruikerservaring te verbeteren. Meer hierover lees je in de{' '}
                <Link href="/cookies" className="text-primary hover:underline font-medium">
                  Cookieverklaring
                </Link>.
              </p>
            </section>

            <section aria-labelledby="rights-title">
              <h2 id="rights-title" className="font-serif text-xl font-bold text-foreground mb-3">6. Je rechten</h2>
              <p>Op basis van de AVG heb je onder meer het recht op:</p>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>Inzage – welke gegevens we over je bewaren</li>
                <li>Rectificatie – correctie van onjuiste gegevens</li>
                <li>Vergetelheid – verzoek tot verwijdering van je gegevens</li>
                <li>Dataportabiliteit – je gegevens in machineleesbaar formaat</li>
                <li>Bezwaar – bezwaar maken tegen verwerking</li>
              </ul>
              <p className="mt-3">
                Stuur een e-mail naar{' '}
                <a href="mailto:info@nltickethub.com" className="text-primary hover:underline font-medium">
                  info@nltickethub.com
                </a>{' '}
                om je rechten uit te oefenen.
              </p>
            </section>

            <section aria-labelledby="contact-data-title">
              <h2 id="contact-data-title" className="font-serif text-xl font-bold text-foreground mb-3">7. Contact</h2>
              <p>Voor vragen over privacy:</p>
              <p className="mt-2">
                <strong className="text-foreground">nltickethub</strong><br />
                E-mail:{' '}
                <a href="mailto:info@nltickethub.com" className="text-primary hover:underline">
                  info@nltickethub.com
                </a><br />
                Adres: Strawinskylaan 1, 1077 XW Amsterdam (WTC Amsterdam)<br />
                Website: nltickethub.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
