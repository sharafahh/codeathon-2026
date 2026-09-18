import { Award, Crown, Medal, Sparkles, Ribbon, Briefcase, Trophy } from 'lucide-react'
import { awards } from '../data/events'

const podium = [
  {
    title: 'First Prize',
    amount: '₹5,000',
    note: 'For every event',
    icon: Crown,
    emphasis: true,
  },
  {
    title: 'Second Prize',
    amount: '₹2,500',
    note: 'For every event',
    icon: Medal,
  },
  {
    title: 'Special Recognition',
    amount: '₹1,000',
    note: 'Two selected events',
    icon: Sparkles,
  },
]

const recognitionIcons = {
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

export default function Prizes() {
  const recognitions = awards.filter((a) => !a.amount)

  return (
    <section
      id="prizes"
      className="bg-[#F7FBFF]"
      aria-labelledby="prizes-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow section-eyebrow--center">Prizes</span>
          <h2
            id="prizes-heading"
            className="section-title"
          >
            Big stakes, bigger bragging rights
          </h2>
          <p className="section-copy">
            Certificates, cash prizes, and special recognitions for outstanding
            participants across every track.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl text-center">
          <div className="card-soft px-8 py-10 sm:px-12">
            <Trophy className="mx-auto h-8 w-8 text-[#02A4FF]" aria-hidden="true" />
            <p className="mt-4 bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl">
              ₹25,000
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Total prize pool
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {podium.map((prize) => {
            const Icon = prize.icon
            return (
              <div
                key={prize.title}
                className={`rounded-2xl border p-8 text-center ${
                  prize.emphasis
                    ? 'border-transparent bg-gradient-to-b from-[#02A4FF] to-[#34D9B2] text-white shadow-[0_24px_50px_-28px_rgba(2,164,255,0.9)]'
                    : 'border-[#E3EEF5] bg-white shadow-[0_14px_40px_-30px_rgba(11,27,51,0.4)]'
                }`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    prize.emphasis ? 'bg-white/15 text-white' : 'bg-[#F0F8FC] text-[#02A4FF]'
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className={`mt-5 text-xs font-semibold uppercase tracking-[0.18em] ${prize.emphasis ? 'text-white/85' : 'text-[#64748B]'}`}>
                  {prize.title}
                </p>
                <p className={`mt-3 text-4xl font-black tracking-tight ${prize.emphasis ? 'text-white' : 'text-[#0B1B33]'}`}>
                  {prize.amount}
                </p>
                <p className={`mt-2 text-sm ${prize.emphasis ? 'text-white/85' : 'text-[#64748B]'}`}>
                  {prize.note}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#64748B]">
            Special recognitions
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
            {recognitions.map((award) => {
              const Icon = recognitionIcons[award.title] || Sparkles
              return (
                <div
                  key={award.title}
                  className="flex items-center gap-3 rounded-xl border border-[#E3EEF5] bg-white px-4 py-3.5"
                >
                  <Icon className="h-4 w-4 flex-none text-[#02A4FF]" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#0B1B33]">{award.title}</p>
                    <p className="truncate text-xs text-[#64748B]">{award.award}</p>
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