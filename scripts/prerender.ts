import { mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { allRoutes } from './routes.js'

async function run() {
  const server = await preview({ preview: { port: 4173 } })
  const baseUrl = server.resolvedUrls?.local[0] ?? 'http://localhost:4173/'

  const browser = await puppeteer.launch({ headless: true })

  console.log(`Pré-rendu de ${allRoutes.length} pages...`)

  for (const route of allRoutes) {
    const page = await browser.newPage()
    const url = new URL(route === '/' ? '' : route.slice(1), baseUrl).toString()

    await page.goto(url, { waitUntil: 'networkidle0' })
    const html = await page.content()

    const outDir = route === '/' ? 'dist' : path.join('dist', route)
    mkdirSync(outDir, { recursive: true })
    writeFileSync(path.join(outDir, 'index.html'), html)

    console.log(`  ✓ ${route}`)
    await page.close()
  }

  await browser.close()
  await new Promise<void>((resolve, reject) => {
    server.httpServer.close((err) => (err ? reject(err) : resolve()))
  })

  console.log('Pré-rendu terminé.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})