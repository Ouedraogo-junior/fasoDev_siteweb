import { Helmet } from 'react-helmet-async'

interface Crumb {
  name: string
  path: string
}

export default function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  const SITE_URL = 'https://www.fasodev.bf'
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}