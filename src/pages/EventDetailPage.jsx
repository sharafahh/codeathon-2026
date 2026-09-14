import { Link } from 'react-router-dom'
import { ArrowLeft, Check, Code2, CircuitBoard, Rocket } from 'lucide-react'
import { codeathonEvents } from '../data/events'

const iconMap = {
  Code2,
  CircuitBoard,
  Rocket,
}

export default function EventDetailPage({ eventKey }) {
  const event = codeathonEvents[eventKey]

  if (!event) {
    return (
      <main className="min-h-screen bg-black px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-5xl">Event not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Events
        </Link>
      </main>
    )
  }

  const Icon = iconMap[event.icon]

  return (
    <main className="bg-black px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white focus:outline-none focus:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Events
        </Link>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="flex items-start gap-4 sm:items-center sm:gap-6">
            <div className="inline-flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 sm:h-16 sm:w-16">
              {Icon ? <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" /> : null}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">{event.title}</h1>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-indigo-300">{event.focus}</p>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-300">{event.description}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Eligibility</h2>
              <p className="mt-2 text-sm text-gray-300">{event.eligibility}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Team Size</h2>
              <p className="mt-2 text-sm text-gray-300">{event.teamSize}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Registration Fee</h2>
              <p className="mt-2 text-sm text-gray-300">{event.feeLabel}</p>
            </div>
          </div>

          {event.domains.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Domains / Project Areas</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {event.domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          )}

          {event.procedure.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Procedure / Format</h2>
              <ol className="mt-3 space-y-2">
                {event.procedure.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-indigo-500/15 text-xs font-semibold text-indigo-300">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Rules</h2>
            <ul className="mt-3 space-y-2">
              {event.rules.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-400" aria-hidden="true" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Evaluation Criteria</h2>
            <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Evaluation criteria and weights for {event.title}</caption>
                <thead className="bg-white/5">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold text-white">
                      Criterion
                    </th>
                    <th scope="col" className="w-1/2 px-4 py-3 font-semibold text-white">
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {event.evaluation.map(({ criterion, weight }) => (
                    <tr key={criterion} className="hover:bg-white/[0.03]">
                      <td className="px-4 py-3 text-gray-300">{criterion}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-300">{weight}%</span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-indigo-500"
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
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              Register Now
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
            >
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
