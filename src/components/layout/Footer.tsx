import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import { FacebookIcon } from '../icons/SocialIcons'
import Container from './Container'
import logo from '../../assets/logo.svg'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-navy-deep text-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo FasoDev" className="h-12 w-12" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary-emerald">Faso</span>
              <span className="text-white">Dev</span>
            </span>
          </Link>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              La voie du numérique.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/80 transition-colors hover:text-primary-lime">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary-lime" />
                <a href="tel:+22651611221" className="hover:text-primary-lime transition-colors">
                  +226 51 61 12 21
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary-lime" />
                {/* TODO: adresse email réelle — cf. CDC §7 */}
                <a href="mailto:contact@fasodev.bf" className="hover:text-primary-lime transition-colors">
                  contact@fasodev.bf
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/share/18pD1n92z4/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-primary-lime/20"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {year} FasoDev. Tous droits réservés.
        </div>
      </Container>
    </footer>
  )
}