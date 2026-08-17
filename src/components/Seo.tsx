// src/components/Seo.tsx
import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'FasoDev'
const SITE_URL = 'https://www.fasodev.bf' // TODO: confirmer le domaine final (cf. CDC §9)
const DEFAULT_DESCRIPTION =
  'FasoDev conçoit des solutions digitales sur mesure au Burkina Faso : sites web, logiciels de gestion et applications mobiles.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg` // TODO: image 1200x630 à fournir

interface SeoProps {
  title: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
}: SeoProps) {
  const fullTitle = `${title} - ${SITE_NAME}`
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}