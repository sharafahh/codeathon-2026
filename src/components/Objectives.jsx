import { Target, Users, Zap, BookOpen } from 'lucide-react'
import { OBJECTIVES } from '../data/events'

const iconMap = {
  'Foster Innovation': Target,
  'Build Technical Skills': Zap,
  'Promote Collaboration': Users,
  'Bridge Industry & Academia': BookOpen,
}

export default function Objectives() {
  return (
    <section
      id="objectives"
      className="bg-black px-4 py-16 sm:py-24"
      aria-labelledby="objectives-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gray-400">
            Objectives
          </span>
          <h2
            id="objectives-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Objectives
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            CODEATHON 2026 is designed to empower students through technical
            excellence, collaboration, and innovation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OBJECTIVES.map(({ title, description }) => {
            const Icon = iconMap[title] || Target
            return (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:border-purple-400/20 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 to-cyan-500/15 text-purple-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-400">{description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
