import Container from './Container'

type PageHeaderProps = {
  title: string
  description?: string
  coverImage?: string
}

export default function PageHeader({ title, description, coverImage }: PageHeaderProps) {
  return (
    <section
      className={`relative py-24 text-center ${
        coverImage ? 'bg-cover bg-center' : 'bg-surface-muted py-16'
      }`}
      style={coverImage ? { backgroundImage: `url(${coverImage})` } : undefined}
    >
      {coverImage && <div className="absolute inset-0 bg-primary-navy/85" />}

      <Container className="relative">
        <h1
          className={`text-h1 font-bold ${
            coverImage ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mx-auto mt-3 max-w-2xl ${
              coverImage ? 'text-white/85' : 'text-ink/60'
            }`}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  )
}