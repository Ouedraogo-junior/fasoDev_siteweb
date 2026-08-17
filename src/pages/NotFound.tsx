import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Container from '../components/layout/Container'

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" path="/404" />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
        <h1 className="text-h1 font-bold text-ink">Page introuvable</h1>
        <p className="text-ink/60">La page que vous cherchez n'existe pas ou plus.</p>
        <Link
          to="/"
          className="mt-2 rounded-lg bg-primary-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-navy-deep"
        >
          Retour à l'accueil
        </Link>
      </Container>
    </>
  )
}