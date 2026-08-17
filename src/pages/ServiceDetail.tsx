import { Link, Navigate, useParams } from 'react-router-dom'
import { Globe, LayoutDashboard, Smartphone, CloudCog, Wrench } from 'lucide-react'
import Container from '../components/layout/Container'
import PageHeader from '../components/layout/PageHeader'
import ContactCTA from '../components/sections/ContactCTA'
import { services } from '../data/services'
import Seo from '../components/Seo'
import BreadcrumbSchema from '../components/BreadcrumbSchema'
import Breadcrumb from '../components/layout/Breadcrumb'

const icons = {
  globe: Globe,
  'layout-dashboard': LayoutDashboard,
  smartphone: Smartphone,
  cloud: CloudCog,
  wrench: Wrench,
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = icons[service.icon]

  const breadcrumbItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${service.slug}` },
  ]

  return (
    <>
      <Seo title={service.title} description={service.shortDescription} path={`/services/${service.slug}`} />
      <Breadcrumb items={breadcrumbItems} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <PageHeader 
        title={service.title} 
        description={service.shortDescription} 
        coverImage="/images/FasoDev_logo.svg" 
      />

      <section className="py-20">
        <Container className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-emerald/10 text-primary-emerald">
              <Icon size={26} />
            </div>
            <p className="text-ink/70">{service.description}</p>
            <Link
              to={`/contact?service=${service.slug}`}
              className="mt-6 inline-block rounded-lg bg-primary-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-navy-deep"
            >
              Demander un devis pour ce service
            </Link>
          </div>

          <ul className="grid gap-3 rounded-xl border border-ink/5 bg-white p-6 shadow-brand">
            {service.prestations.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-emerald" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}