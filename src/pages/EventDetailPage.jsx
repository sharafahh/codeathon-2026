import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Code2, CircuitBoard, Rocket } from 'lucide-react'
import { codeathonEvents } from '../data/events'

const iconMap = {
  Code2,
  CircuitBoard,
  Rocket,
}

export default function EventDetailPage({ eventKey }) {
  const [expandedRules, setExpandedRules] = useState(new Set())
  const event = codeathonEvents[eventKey]

  if (!event) {
    return (
      <main className="min-h-screen bg-[#F8F9FA] px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#0F172A] sm:text-5xl">Event not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-[#06b6d4] hover:text-[#0891b2]">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Events
        </Link>
      </main>
    )
  }

  const Icon = iconMap[event.icon]

  const toggleRule = (index) => {
    setExpandedRules((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  const shortTitle = (rule) => {
    if (rule.length <= 60) return rule
    return rule.slice(0, 58).trim() + '…'
  }

  return (
    <main className="bg-[#F8F9FA] px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#475569] transition hover:text-[#0F172A] focus:outline-none focus:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Events
        </Link>

        <div className="mt-8 rounded-lg border border-[#E2E8F0] bg-white p-6 sm:p-10">
          <div className="flex items-start gap-4 sm:items-center sm:gap-6">
            <div className="inline-flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-[#ecfeff] text-[#06b6d4] sm:h-16 sm:w-16">
              {Icon ? <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" /> : null}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">{event.title}</h1>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-[#06b6d4]">{event.focus}</p>
            </div>
          </div>

          <p className="mt-6 text-lg text-[#475569]">{event.description}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-[#E2E8F0] bg-[#F8F9FA] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">Eligibility</h2>
              <p className="mt-2 text-sm text-[#475569]">{event.eligibility}</p>
            </div>
            <div className="rounded-lg border border-[#E2E8F0] bg-[#F8F9FA] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">Team Size</h2>
              <p className="mt-2 text-sm text-[#475569]">{event.teamSize}</p>
            </div>
            <div className="rounded-lg border border-[#E2E8F0] bg-[#F8F9FA] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">Registration Fee</h2>
              <p className="mt-2 text-sm text-[#475569]">{event.feeLabel}</p>
            </div>
          </div>

          {event.domains.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">Domains / Project Areas</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {event.domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-xs text-[#475569]"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          )}

          {event.procedure.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">Procedure / Format</h2>
              <ol className="mt-3 space-y-2">
                {event.procedure.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#475569]">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#ecfeff] text-xs font-semibold text-[#06b6d4]">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">Rules</h2>
            <div className="mt-3 divide-y divide-[#E2E8F0] rounded-lg border border-[#E2E8F0] overflow-hidden">
              {event.rules.map((rule, i) => {
                const expanded = expandedRules.has(i)
                return (
                  <div key={rule} className="bg-white">
                    <button
                      type="button"
                      onClick={() => toggleRule(i)}
                      className="flex w-full items-center gap-4 px-4 py-3.5 text-left transition hover:bg-[#ecfeff] focus:outline-none focus:bg-[#ecfeff]"
                      aria-expanded={expanded}
                    >
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#ecfeff] text-xs font-semibold text-[#06b6d4]">
                        {i + 1}
                      </span>
                      <span className="flex-1 text-sm font-medium text-[#0F172A]">
                        {shortTitle(rule)}
                      </span>
                      <span className="text-lg font-light text-[#06b6d4] transition-transform duration-200">
                        {expanded ? '−' : '*'}
                      </span>
                    </button>
                    {expanded && (
                      <div className="px-4 pb-4 pl-[3.25rem]">
                        <p className="text-sm text-[#475569] leading-relaxed">{rule}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">Evaluation Criteria</h2>
            <div className="mt-3 overflow-hidden rounded-lg border border-[#E2E8F0]">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Evaluation criteria and weights for {event.title}</caption>
                <thead className="bg-[#F8F9FA]">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold text-[#0F172A]">
                      Criterion
                    </th>
                    <th scope="col" className="w-1/2 px-4 py-3 font-semibold text-[#0F172A]">
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {event.evaluation.map(({ criterion, weight }) => (
                    <tr key={criterion} className="hover:bg-[#ecfeff]">
                      <td className="px-4 py-3 text-[#475569]">{criterion}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-[#475569]">{weight}%</span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E2E8F0]">
                            <div
                              className="h-full rounded-full bg-[#06b6d4]"
                              style={{ width: `${weight}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#06b6d4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-[#F8F9FA] sm:w-auto"
            >
              Register Now
            </a>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-md border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:bg-[#ecfeff] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/30 focus:ring-offset-2 focus:ring-offset-[#F8F9FA] sm:w-auto"
            >
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}