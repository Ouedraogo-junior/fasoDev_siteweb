export interface Service {
  slug: string
  title: string
  shortDescription: string
  description: string
  prestations: string[]
  icon: 'globe' | 'layout-dashboard' | 'smartphone' | 'cloud' | 'wrench'
}

export interface Project {
  slug: string
  title: string
  category: 'sites-web' | 'logiciels-de-gestion' | 'applications-mobiles'
  categoryLabel: string
  shortDescription: string
  description: string
  stack: string[]
  status?: string
  demoUrl?: string
  image?: string
}