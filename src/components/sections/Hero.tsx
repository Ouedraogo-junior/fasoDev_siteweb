import { Link } from 'react-router-dom'
import Container from '../layout/Container'

export default function Hero({ coverImage }: { coverImage?: string }) {
  return (
    <section className="relative overflow-hidden bg-surface-muted">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-emerald/5 via-transparent to-primary-navy/10" />

      <Container
        className={`relative py-20 md:py-28 ${
          coverImage
            ? 'grid items-center gap-12 md:grid-cols-2'
            : 'flex flex-col items-center text-center'
        }`}
      >
        <div className={coverImage ? 'text-left' : 'flex flex-col items-center text-center'}>
          <h1 className="max-w-xl text-display-sm font-bold tracking-tight text-ink md:text-display">
            Des solutions digitales <span className="text-primary-emerald">sur mesure</span> pour faire grandir vos idées.
          </h1>
          <p className="mt-6 max-w-xl text-lead text-ink/70">
            FasoDev accompagne les entreprises et institutions du Burkina Faso dans leur transformation numérique; sites, logiciels et applications pensés pour votre réalité locale.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-primary-navy px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-navy/20 transition-colors hover:bg-primary-navy-deep"
            >
              Discutons de votre projet
            </Link>
            <Link
              to="/realisations"
              className="rounded-lg border border-ink/15 bg-white px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary-navy/30 hover:text-primary-navy"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>

        {coverImage && (
          <div className="order-first md:order-last">
            <img
              src={coverImage}
              alt=""
              className="mx-auto w-full max-w-md md:max-w-none"
            />
          </div>
        )}
      </Container>
    </section>
  )
}