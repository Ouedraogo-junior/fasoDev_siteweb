import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from './Container'
import logo from '../../assets/logo.svg'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'À propos', to: '/a-propos' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary-emerald ${
      isActive ? 'text-primary-navy' : 'text-ink/70'
    }`

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `px-2 py-3 rounded-md text-base font-medium ${
      isActive ? 'text-primary-navy bg-primary-navy/5' : 'text-ink/80'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-surface-light/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo FasoDev" className="h-12 w-12" />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-primary-emerald">Faso</span>
            <span className="text-primary-navy">Dev</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={desktopLink}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-lg bg-primary-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-navy-deep md:inline-block"
        >
          Contactez-nous
        </Link>

        <button
          className="p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-black/5 bg-surface-light md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={mobileLink}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-primary-navy px-5 py-3 text-center text-sm font-medium text-white"
            >
              Contactez-nous
            </Link>
          </Container>
        </nav>
      )}
    </header>
  )
}