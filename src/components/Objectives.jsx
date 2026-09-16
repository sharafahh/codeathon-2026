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
      className="bg-[#F7FBFF] px-4 py-16 sm:py-24"
      aria-labelledby="objectives-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6EAF0] bg-[#FFFFFF] px-4 py-1.5 text-xs font-medium text-[#475569]">
            Objectives
          </span>
          <h2
            id="objectives-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-5xl"
          >
            Our Objectives
          </h2>
          <p className="mt-6 text-lg text-[#475569]">
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
                className="group relative overflow-hidden rounded-lg border border-[#D6EAF0] bg-[#FFFFFF] p-6 transition hover:border-[#02A4FF]/30 hover:bg-[#DCF0EE]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#DCF0EE] text-[#02A4FF]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">{title}</h3>
                <p className="mt-2 text-sm text-[#475569]">{description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}