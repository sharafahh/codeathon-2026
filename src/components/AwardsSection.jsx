import { Award, Briefcase, Sparkles, Ribbon } from 'lucide-react'
import { awards } from '../data/events'

const iconMap = {
  'First Prize': Award,
  'Second Prize': Award,
  'Third Prize': Award,
  'Participation Certificate': Ribbon,
  'Internship Opportunities': Briefcase,
  'Best Innovation': Sparkles,
  'Best Technical Implementation': Sparkles,
  'Best Interdisciplinary Team': Sparkles,
  'Best Social Impact': Sparkles,
}

const borderColors = [
  'border-yellow-500/20 hover:border-yellow-500/40',
  'border-gray-400/20 hover:border-gray-400/40',
  'border-amber-600/20 hover:border-amber-600/40',
  'border-indigo-400/20 hover:border-indigo-400/40',
  'border-emerald-400/20 hover:border-emerald-400/40',
  'border-pink-400/20 hover:border-pink-400/40',
  'border-pink-400/20 hover:border-pink-400/40',
  'border-pink-400/20 hover:border-pink-400/40',
  'border-pink-400/20 hover:border-pink-400/40',
]

const gradientOverlay = [
  'from-yellow-500/[0.06]',
  'from-gray-300/[0.04]',
  'from-amber-600/[0.06]',
  'from-indigo-400/[0.06]',
  'from-emerald-400/[0.06]',
  'from-pink-400/[0.06]',
  'from-pink-400/[0.06]',
  'from-pink-400/[0.06]',
  'from-pink-400/[0.06]',
]

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="bg-black px-4 py-16 sm:py-24"
      aria-labelledby="awards-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gray-400">
            Awards
          </span>
          <h2
            id="awards-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Recognitions
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Certificates, cash prizes, and special recognitions for outstanding participants.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => {
            const Icon = iconMap[award.title]
            return (
              <article
                key={award.title}
                className={`group relative flex flex-col items-center rounded-2xl border ${borderColors[i]} bg-white/[0.02] p-8 text-center transition hover:bg-white/[0.04] hover:-translate-y-1`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${gradientOverlay[i]} to-transparent`} aria-hidden="true" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06]">
                  {Icon && <Icon className={`h-7 w-7 ${award.color}`} aria-hidden="true" />}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {award.title}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  {award.award}
                </p>
                {award.amount && (
                  <p className="mt-2 text-3xl font-extrabold text-white">
                    {award.amount}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
