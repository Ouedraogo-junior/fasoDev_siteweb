import Hero from '../components/sections/Hero'
import ServicesOverview from '../components/sections/ServicesOverview'
import WhyFasoDev from '../components/sections/WhyFasoDev'
import ContactCTA from '../components/sections/ContactCTA'
import Seo from '../components/Seo'


export default function Home() {
  return (
    <>
      <Seo
        title="Accueil"
        description="Des solutions digitales sur mesure pour faire grandir vos idées : sites web, logiciels de gestion et applications mobiles au Burkina Faso et partout dans le monde."
        path="/"
      />
      <Hero coverImage="/images/FasoDev_logo.svg" />
      <ServicesOverview />
      <WhyFasoDev />
      <ContactCTA />
    </>
  )
}