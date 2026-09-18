import { CalendarDays, Code2, Rocket, CircuitBoard, Award, Ticket } from 'lucide-react'
import { events } from '../data/events'

const eventIcons = { Code2, Rocket, CircuitBoard }

const steps = [
  {
    label: 'Get ready',
    title: 'Registration opens',
    text: 'Lock in your team early — seats fill up fast.',
    icon: Ticket,
    date: 'Before the first event',
  },
  ...events.map((event) => ({
    label: event.category,
    title: event.title,
    text: event.description,
    icon: eventIcons[event.icon] || Code2,
    date: `${event.date} · ${event.time}`,
  })),
  {
    label: 'The payoff',
    title: 'Awards & internship shortlist',
    text: 'Winners are announced across every track and top talent is shortlisted for industry internships.',
    icon: Award,
    date: 'Closing ceremony',
  },
]

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-white"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow section-eyebrow--center">Timeline</span>
          <h2
            id="timeline-heading"
            className="section-title"
          >
            Your path through CODEATHON 2026
          </h2>
          <p className="section-copy">
            From sign-up to the podium — here's how the week unfolds.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#02A4FF]/40 to-transparent lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              const side = i % 2 === 0 ? 'left' : 'right'
              return (
                <li
                  key={step.title}
                  className={`relative pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-7 ${side === 'left' ? 'lg:pr-2' : 'lg:pl-2'}`}
                >
                  <span
                    className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#E3EEF5] bg-white shadow-[0_10px_24px_-16px_rgba(2,164,255,0.55)] lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4 text-[#02A4FF]" />
                  </span>

                  <div className={side === 'left' ? 'lg:col-start-1' : 'lg:col-start-2'}>
                    <article className="rounded-2xl border border-[#E3EEF5] bg-[#F7FBFF] p-6 shadow-[0_14px_40px_-30px_rgba(11,27,51,0.4)] sm:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#02A4FF]">
                          {step.label}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#64748B]">
                          <CalendarDays className="h-3.5 w-3.5 text-[#34D9B2]" aria-hidden="true" />
                          {step.date}
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-bold tracking-tight text-[#0B1B33]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#33475B]">{step.text}</p>
                    </article>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <p className="mt-14 text-center text-sm text-[#64748B]">
          Dates and timings are subject to change — stay tuned for updates on the schedule.
        </p>
      </div>
    </section>
  )
}