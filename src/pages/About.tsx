import { Lightbulb, BadgeCheck, ClipboardCheck, Zap } from 'lucide-react'
import Container from '../components/layout/Container'
import PageHeader from '../components/layout/PageHeader'
import ContactCTA from '../components/sections/ContactCTA'
import Seo from '../components/Seo'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: "Toujours à la pointe des nouvelles technologies pour des solutions d'avenir.",
    classes: 'bg-primary-emerald/10 text-primary-emerald',
  },
  {
    icon: BadgeCheck,
    title: 'Qualité',
    description: 'Un engagement sans faille pour des produits finis robustes et élégants.',
    classes: 'bg-primary-navy/10 text-primary-navy',
  },
  {
    icon: ClipboardCheck,
    title: 'Rigueur',
    description: 'Une méthodologie précise pour respecter vos délais et vos exigences.',
    classes: 'bg-primary-teal/10 text-primary-teal',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Des solutions optimisées pour une efficacité maximale au quotidien.',
    classes: 'bg-accent-gold/10 text-accent-gold',
  },
]

const steps = [
  {
    number: '1',
    title: 'Écoute du besoin',
    description: 'Analyse approfondie de vos objectifs et contraintes.',
    classes: 'border-primary-emerald text-primary-emerald',
  },
  {
    number: '2',
    title: 'Conception',
    description: 'Maquettage, architecture et validation de la solution.',
    classes: 'border-primary-navy text-primary-navy',
  },
  {
    number: '3',
    title: 'Développement',
    description: 'Codage robuste, tests itératifs et intégration.',
    classes: 'border-primary-teal text-primary-teal',
  },
  {
    number: '4',
    title: 'Suivi & support',
    description: 'Déploiement, maintenance et accompagnement continu.',
    classes: 'border-accent-gold text-accent-gold',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="À propos"
        description="Découvrez la mission, les valeurs et la méthode de travail de FasoDev, solutions digitales sur mesure au Burkina Faso."
        path="/a-propos"
      />

      <PageHeader
        title="À propos de FasoDev"
        description="Des solutions digitales sur mesure pour faire grandir vos idées."
        coverImage="/images/FasoDev_logo.svg"
      />

      {/* Notre Histoire */}
      <section className="py-20">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div className="order-2 md:order-1">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wide text-primary-emerald">
              Notre histoire
            </span>
            <h2 className="text-h2 font-bold text-ink">Catalyseur de l'économie numérique locale</h2>
            <p className="mt-4 text-ink/70">
              FasoDev est née d'une vision claire : accompagner les entreprises et institutions dans leur
              transition numérique avec des solutions sur mesure, performantes et évolutives. Nous croyons que la
              technologie doit être un levier de croissance accessible, pas une contrainte.
            </p>
            <p className="mt-4 text-ink/70">
              Sites web, logiciels de gestion, applications mobiles : notre équipe conçoit des architectures
              modernes, adaptées aux réalités locales; Mobile Money, connectivité, usages; tout en respectant les
              standards techniques internationaux.
            </p>
          </div>

          <div className="order-1 flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-primary-navy to-primary-emerald p-10 text-center md:order-2">
            <p className="text-2xl font-semibold leading-snug text-white">
              « Votre réussite, notre mission. Nous donnons vie à vos idées grâce à des solutions digitales
              performantes et adaptées à vos besoins. »
            </p>
          </div>
        </Container>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-surface-muted py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-h2 font-bold text-ink">Nos valeurs</h2>
            <p className="mt-3 text-ink/60">
              Les principes qui guident chacune de nos lignes de code et chaque interaction avec nos clients.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-ink/5 bg-white p-6 shadow-brand transition-all hover:-translate-y-1 hover:shadow-brand-lg"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${value.classes}`}>
                  <value.icon size={22} />
                </div>
                <h3 className="font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Notre Méthode */}
      <section className="py-20">
        <Container>
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="text-h2 font-bold text-ink">Notre méthode de travail</h2>
            <p className="mt-3 text-ink/60">Une approche structurée pour transformer vos idées en réalité numérique.</p>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-ink/10 md:block" />
            <div className="relative grid gap-10 md:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white text-xl font-bold shadow-brand ${step.classes}`}
                  >
                    {step.number}
                  </div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-ink">{step.title}</h4>
                  <p className="mt-2 text-sm text-ink/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}