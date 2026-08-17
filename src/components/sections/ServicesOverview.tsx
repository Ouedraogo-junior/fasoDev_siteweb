import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../layout/Container'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

export default function ServicesOverview() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-h2 font-bold text-ink">Nos services</h2>
          <p className="mt-3 text-ink/60">
            Quatre expertises, une seule mission : donner vie à vos idées grâce à des solutions digitales adaptées à vos besoins.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-navy transition-colors hover:text-primary-emerald"
          >
            Voir le détail de nos services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  )
}