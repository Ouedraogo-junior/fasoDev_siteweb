import { Link } from 'react-router-dom'
import Container from '../layout/Container'

export default function ContactCTA() {
  return (
    <section className="bg-primary-navy py-16 text-center text-white">
      <Container>
        <h2 className="text-h2 font-bold">Un projet en tête ?</h2>
        <p className="mx-auto mt-3 max-w-lg text-white/70">
          Parlons de vos besoins et voyons ensemble comment le concrétiser.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-accent-gold px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
        >
          Discutons de votre projet
        </Link>
      </Container>
    </section>
  )
}