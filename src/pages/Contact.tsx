import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import Container from '../components/layout/Container'
import PageHeader from '../components/layout/PageHeader'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../components/icons/SocialIcons'
import { sendContactMessage, type ContactPayload } from '../lib/api'
import Seo from '../components/Seo'


const subjects = [
  { value: 'sites-web', label: 'Création de site web' },
  { value: 'logiciels-de-gestion', label: 'Logiciel de gestion' },
  { value: 'applications-mobiles', label: 'Application mobile' },
  { value: 'autres-services', label: 'Autres services (cloud, sécurité, maintenance)' },
  { value: 'autre', label: 'Autre' },
]

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full rounded-lg border border-ink/15 bg-surface-muted px-4 py-3 text-sm text-ink transition-all placeholder:text-ink/40 focus:border-primary-navy focus:outline-none focus:ring-2 focus:ring-primary-navy/15'

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState<ContactPayload>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    const service = searchParams.get('service')
    if (service && subjects.some((s) => s.value === service)) {
      setForm((f) => ({ ...f, subject: service }))
    }
  }, [searchParams])

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContactMessage(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
     <Seo
        title="Contact"
        description="Parlons de votre projet digital : formulaire de contact, téléphone et WhatsApp."
        path="/contact"
      />

      <PageHeader 
        title="Contactez-nous" 
        description="Parlons de votre projet digital." 
        coverImage="/images/FasoDev_logo.svg"
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Colonne gauche — coordonnées */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+22651611221"
                  className="flex items-center gap-4 rounded-lg bg-surface-muted p-4 transition-colors hover:bg-primary-navy/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-navy/10 text-primary-navy">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Téléphone</p>
                    <p className="font-semibold text-ink">+226 51 61 12 21</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@fasodev.bf"
                  className="flex items-center gap-4 rounded-lg bg-surface-muted p-4 transition-colors hover:bg-primary-navy/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-navy/10 text-primary-navy">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Email</p>
                    {/* TODO: adresse email réelle — cf. CDC §7 */}
                    <p className="font-semibold text-ink">contact@fasodev.bf</p>
                  </div>
                </a>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contacter sur WhatsApp
              </a>

              <div>
                <p className="mb-3 text-sm font-semibold text-ink/50">Suivez-nous</p>
                <div className="flex gap-3">
                  {/* TODO: liens réseaux sociaux réels — cf. CDC §7 */}
                  <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-primary-navy transition-colors hover:bg-primary-navy hover:text-white">
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-primary-navy transition-colors hover:bg-primary-navy hover:text-white">
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-primary-navy transition-colors hover:bg-primary-navy hover:text-white">
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="rounded-xl border border-ink/5 bg-white p-8 shadow-brand">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Nom" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Téléphone" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+226 00 00 00 00"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Sujet" htmlFor="subject">
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Choisissez un sujet
                      </option>
                      {subjects.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className={`${inputClass} resize-y`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 self-end rounded-lg bg-primary-navy px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-navy-deep disabled:opacity-60"
                >
                  {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
                  {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>

                {status === 'success' && (
                  <p className="flex items-center gap-2 text-sm font-medium text-primary-emerald">
                    <CheckCircle2 size={16} />
                    Message envoyé ! Nous vous répondons rapidement.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                    <AlertCircle size={16} />
                    Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}