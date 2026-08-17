import { writeFileSync } from 'fs'
import { allRoutes } from './routes.js'

const SITE_URL = 'https://www.fasodev.bf'

const urlEntries = allRoutes
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
console.log(`sitemap.xml généré avec ${allRoutes.length} URLs`)