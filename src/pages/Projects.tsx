import { useState } from 'react'
import Container from '../components/layout/Container'
import PageHeader from '../components/layout/PageHeader'
import ProjectCard from '../components/ui/ProjectCard'
import ContactCTA from '../components/sections/ContactCTA'
import { projects } from '../data/projects'
import type { Project } from '../types'
import Seo from '../components/Seo'

const filters: { value: Project['category'] | 'tous'; label: string }[] = [
  { value: 'tous', label: 'Tous' },
  { value: 'sites-web', label: 'Sites web' },
  { value: 'logiciels-de-gestion', label: 'Logiciels de gestion' },
  { value: 'applications-mobiles', label: 'Applications mobiles' },
]

export default function Projects() {
  const [active, setActive] = useState<Project['category'] | 'tous'>('tous')
  const filtered = active === 'tous' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <Seo
        title="Réalisations"
        description="Découvrez les projets réalisés par FasoDev : sites web, logiciels de gestion et applications mobiles."
        path="/realisations"
      />

      <PageHeader
        title="Nos réalisations"
        description="Des projets pensés et développés pour répondre à des besoins concrets, au Burkina Faso et au-delà."
        coverImage="/images/FasoDev_logo.svg"
      />

      <section className="py-16">
        <Container>
          <div className="mb-10 flex gap-6 overflow-x-auto border-b border-ink/10">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActive(filter.value)}
                className={`whitespace-nowrap pb-3 text-sm font-semibold transition-colors ${
                  active === filter.value
                    ? 'border-b-2 border-primary-navy text-primary-navy'
                    : 'text-ink/50 hover:text-primary-navy'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}