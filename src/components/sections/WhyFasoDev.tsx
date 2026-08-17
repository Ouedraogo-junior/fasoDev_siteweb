import { MapPin, Code2, MessageCircleMore, TrendingUp } from 'lucide-react'
import Container from '../layout/Container'

const reasons = [
  {
    icon: MapPin,
    title: 'Expertise locale',
    description: 'Mobile Money, XOF, réalités burkinabè : nos solutions sont pensées pour votre contexte, pas importées telles quelles.',
  },
  {
    icon: Code2,
    title: 'Excellence technique',
    description: 'Des stacks modernes et éprouvées (Laravel, React, applications mobiles) pour des produits fiables et évolutifs.',
  },
  {
    icon: MessageCircleMore,
    title: 'Support réactif',
    description: "Un interlocuteur direct à chaque étape du projet, du cahier des charges jusqu'au suivi post-lancement.",
  },
  {
    icon: TrendingUp,
    title: 'Solutions évolutives',
    description: 'Des bases solides dès le départ pour accompagner la croissance de votre activité, sans tout reconstruire.',
  },
]

export default function WhyFasoDev() {
  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-h2 font-bold text-ink">Pourquoi FasoDev ?</h2>
            <p className="mt-4 text-ink/60">
              Nous combinons une connaissance fine du marché local avec des standards techniques internationaux.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-3">
                <reason.icon className="mt-0.5 shrink-0 text-primary-emerald" size={20} />
                <div>
                  <h3 className="font-semibold text-ink">{reason.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}