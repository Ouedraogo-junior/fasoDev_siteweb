import { Link } from 'react-router-dom'
import { Globe, LayoutDashboard, Smartphone, CloudCog, ArrowRight, Wrench } from 'lucide-react'
import Container from '../components/layout/Container'
import PageHeader from '../components/layout/PageHeader'
import ContactCTA from '../components/sections/ContactCTA'
import { services } from '../data/services'
import Seo from '../components/Seo'

const icons = {
  globe: Globe,
  'layout-dashboard': LayoutDashboard,
  smartphone: Smartphone,
  cloud: CloudCog,
  wrench: Wrench,
}

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Sites web, logiciels de gestion, applications mobiles et services complémentaires : découvrez l'offre FasoDev."
        path="/services"
      />

      <PageHeader
        title="Nos services"
        description="Cinq expertises complémentaires pour digitaliser votre activité, du site vitrine au logiciel métier sur mesure, avec un accompagnement technique dans la durée."
        coverImage="/images/FasoDev_logo.svg"
      />

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-16">
            {services.map((service) => {
              const Icon = icons[service.icon]

              return (
                <div key={service.slug} id={service.slug} className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-emerald/10 text-primary-emerald">
                      <Icon size={26} />
                    </div>
                    <h2 className="text-h2 font-bold text-ink">
                      <Link to={`/services/${service.slug}`} className="hover:text-primary-emerald transition-colors">
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-ink/70">{service.description}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-navy transition-colors hover:text-primary-emerald"
                      >
                        Voir le détail
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>

                      <Link
                        to={`/contact?service=${service.slug}`}
                        className="text-sm font-semibold text-ink/60 hover:text-primary-navy transition-colors"
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  <ul className="grid gap-3 rounded-xl border border-ink/5 bg-white p-6 shadow-brand">
                    {service.prestations.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-emerald" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}