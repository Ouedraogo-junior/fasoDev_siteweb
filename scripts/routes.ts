import { services } from '../src/data/services.js'
import { projects } from '../src/data/projects.js'

export const staticRoutes = ['/', '/services', '/a-propos', '/realisations', '/contact']

export const dynamicRoutes = [
  ...services.map((s) => `/services/${s.slug}`),
  ...projects.map((p) => `/realisations/${p.slug}`),
]

export const allRoutes = [...staticRoutes, ...dynamicRoutes]