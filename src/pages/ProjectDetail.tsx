import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Code } from 'lucide-react'
import Container from '../components/layout/Container'
import ContactCTA from '../components/sections/ContactCTA'
import { projects } from '../data/projects'
import Seo from '../components/Seo'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [imageError, setImageError] = useState(false)

  if (!project) {
    return <Navigate to="/realisations" replace />
  }

  const showImage = project.image && !imageError

  return (
    <>
      <Seo title={project.title} description={project.shortDescription} path={`/realisations/${project.slug}`} />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Réalisations', path: '/realisations' },
          { name: project.title, path: `/realisations/${project.slug}` },
        ]}
      />

      <section className="flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-primary-navy to-primary-emerald md:h-80">
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <Code size={56} className="text-white/70" strokeWidth={1.5} />
        )}
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <Link
            to="/realisations"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-navy transition-colors hover:text-primary-emerald"
          >
            <ArrowLeft size={16} />
            Retour aux réalisations
          </Link>

          <div className="flex flex-wrap gap-2">
            <span className="inline-block rounded-full bg-primary-navy/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-navy">
              {project.categoryLabel}
            </span>
            {project.status && (
              <span className="inline-block rounded-full bg-accent-gold/15 px-2.5 py-1 text-xs font-semibold text-ink">
                {project.status}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-h1 font-bold text-ink">{project.title}</h1>
          <p className="mt-4 text-lead text-ink/70">{project.description}</p>

          <div className="mt-8">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/50">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-ink/10 px-3 py-1.5 text-sm text-ink/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}