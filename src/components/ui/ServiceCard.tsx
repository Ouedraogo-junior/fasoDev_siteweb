import { Globe, LayoutDashboard, Smartphone, CloudCog, Wrench } from 'lucide-react'
import type { Service } from '../../types'

const icons = {
  globe: Globe,
  'layout-dashboard': LayoutDashboard,
  smartphone: Smartphone,
  cloud: CloudCog,
  wrench: Wrench,
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]

  return (
    <div className="group h-full rounded-xl border border-ink/5 bg-white p-6 shadow-brand transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-emerald/10 text-primary-emerald">
        <Icon size={22} />
      </div>
      <h3 className="text-h3 font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 text-sm text-ink/60">{service.shortDescription}</p>
    </div>
  )
}