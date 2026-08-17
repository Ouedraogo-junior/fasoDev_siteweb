import { Helmet } from 'react-helmet-async'

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FasoDev',
    description:
      'Solutions digitales sur mesure : sites web, logiciels de gestion et applications mobiles au Burkina Faso.',
    url: 'https://www.fasodev.bf',
    telephone: '+22651611221',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ouagadougou',
      addressCountry: 'BF',
    },
    sameAs: [
      // TODO: liens réseaux sociaux réels — cf. CDC §7
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}