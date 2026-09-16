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

export default function AwardsSection() {
  const cashPrizes = awards.filter((a) => a.amount)
  const recognitions = awards.filter((a) => !a.amount)

  return (
    <section
      id="awards"
      className="bg-[#F7FBFF] px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
      aria-labelledby="awards-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="awards-heading"
            className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl"
          >
            Recognitions
          </h2>
          <p className="mt-6 text-lg text-[#475569]">
            Certificates, cash prizes, and special recognitions
            for outstanding participants.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#64748B]">
            Cash Prizes
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-12">
            {cashPrizes.map((award) => {
              const Icon = iconMap[award.title]
              return (
                <div key={award.title} className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    {Icon && <Icon className="h-5 w-5 text-[#02A4FF]" aria-hidden="true" />}
                    <span className="text-sm font-medium uppercase tracking-wider text-[#02A4FF]">
                      {award.title}
                    </span>
                  </div>
                  <p className="mt-4 text-4xl font-black tracking-tight text-[#02A4FF] sm:text-5xl md:text-6xl">
                    {award.amount}
                  </p>
                    <p className="mt-3 text-sm font-medium uppercase tracking-wider text-[#64748B] sm:text-base">
                    {award.award}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#64748B]">
            Special Recognitions
          </h3>
          <div className="mt-10 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 sm:gap-y-8">
            {recognitions.map((award) => {
              const Icon = iconMap[award.title]
              return (
                <div key={award.title} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#DCF0EE] sm:h-10 sm:w-10">
                    {Icon && <Icon className="h-5 w-5 text-[#02A4FF]" aria-hidden="true" />}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#0F172A]">{award.title}</p>
                    <p className="text-sm text-[#64748B]">{award.award}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
