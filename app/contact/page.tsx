'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const ADDRESS = 'Strawinskylaan 1, 1077 XW Amsterdam'
const ADDRESS_NOTE = 'WTC Amsterdam'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-primary py-14 md:py-16 overflow-hidden" aria-label="Contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Contact</h1>
          <p className="text-primary-foreground/85 max-w-xl">
            Vraag, suggestie of ontbreekt een evenement? We reageren binnen 1–2 werkdagen.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Formulier links, 2/3 */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card shadow-lg p-10 flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                </div>
                <h2 className="font-bold text-foreground text-xl">Bericht ontvangen</h2>
                <p className="text-muted-foreground text-sm max-w-sm">
                  We reageren binnen 1–2 werkdagen op het opgegeven e-mailadres.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-2 px-4 py-2 rounded-xl text-sm font-semibold text-primary hover:bg-accent-muted/50 transition-colors"
                >
                  Nieuw bericht
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card shadow-lg p-6 md:p-8 flex flex-col gap-4"
                aria-label="Contactformulier"
              >
                <h2 className="font-bold text-foreground text-xl mb-1">Bericht sturen</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Naam *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jan de Vries"
                      className="border border-input rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jan@voorbeeld.nl"
                      className="border border-input rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Onderwerp *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="border border-input rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="">Kies onderwerp...</option>
                    <option value="fout">Foutieve gegevens melden</option>
                    <option value="evenement">Ontbrekend evenement</option>
                    <option value="partner">Partnerschap</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Bericht *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Je bericht..."
                    className="border border-input rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  <a href="/privacy" className="text-primary hover:underline">Privacybeleid</a>
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Versturen
                </button>
              </form>
            )}
          </div>

          {/* Rechterkolom: contact + let op */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="rounded-2xl border border-border bg-card shadow-lg p-5 flex flex-col gap-4">
              <h3 className="font-bold text-foreground">Contactgegevens</h3>
              <a href="mailto:info@nltickethub.com" className="flex items-center gap-3 text-sm">
                <span className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </span>
                info@nltickethub.com
              </a>
              <div className="flex items-start gap-3 text-sm">
                <span className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </span>
                <span>{ADDRESS}<br /><span className="text-muted-foreground">{ADDRESS_NOTE}</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-foreground" />
                </span>
                Binnen 1–2 werkdagen
              </div>
            </div>
            <div className="rounded-2xl border border-accent/40 bg-accent-muted/40 p-4 text-sm">
              <p className="font-bold text-foreground mb-1">Let op</p>
              <p className="text-muted-foreground leading-relaxed">
                Wij verkopen geen kaartjes. Voor verkoopvragen: neem contact op met de kaartpartner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
