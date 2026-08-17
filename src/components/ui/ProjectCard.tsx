import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Code } from 'lucide-react'
import type { Project } from '../../types'

export default function ProjectCard({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false)
  const showImage = project.image && !imageError

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-lg">
      <Link
        to={`/realisations/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Voir le projet ${project.title}`}
      />

      <div className="flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-primary-navy to-primary-emerald">
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <Code size={36} className="text-white/70" strokeWidth={1.5} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 inline-block w-fit rounded-full bg-primary-navy/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-navy">
          {project.categoryLabel}
        </span>
        <h3 className="text-h3 font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-ink/60">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-ink/10 px-2 py-1 text-xs text-ink/60">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-ink/5 pt-4">
          <span className="flex items-center gap-1.5 text-sm font-semibold text-primary-navy transition-colors group-hover:text-primary-emerald">
            Voir le projet
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </span>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 flex items-center gap-1 rounded-full border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink/60 transition-colors hover:border-primary-emerald/40 hover:text-primary-emerald"
            >
              Démo
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}