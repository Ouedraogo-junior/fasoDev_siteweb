import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Container from './Container'

export interface BreadcrumbItem {
  name: string
  path: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-black/5 bg-surface-light py-3">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink/60">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight size={14} className="shrink-0 text-ink/30" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="font-medium text-ink" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.path} className="transition-colors hover:text-primary-emerald">
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </Container>
    </nav>
  )
}