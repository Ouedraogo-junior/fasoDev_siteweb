import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import OrganizationSchema from './components/OrganizationSchema'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <OrganizationSchema />

      <main className="flex-1 pt-20">
        {/* pt-20 compense le header en position fixed (h-20) */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}