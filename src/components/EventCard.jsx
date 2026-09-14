import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, DollarSign, Code2, Rocket, CircuitBoard } from 'lucide-react'
import GradualBlur from 'gradualblur'
import { events } from '../data/events'

const iconMap = {
  Code2,
  Rocket,
  CircuitBoard,
}

const eventAccents = [
  'from-cyan-400 to-blue-500',
  'from-purple-400 to-pink-500',
  'from-emerald-400 to-teal-500',
  'from-amber-400 to-orange-500',
  'from-blue-400 to-indigo-500',
  'from-rose-400 to-red-500',
]

export default function EventCard({ event, index }) {
  const accent = eventAccents[index % eventAccents.length]
  const Icon = iconMap[event.icon]
  const isCrackTheCode = event.id === 7

  return (
    <article
      className={`group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:border-white/[0.12] hover:bg-white/[0.04] ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {isCrackTheCode && (
        <GradualBlur
          target="parent"
          position="bottom"
          height="5rem"
          strength={1.5}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={0.8}
        />
      )}

      <div className="flex items-start justify-between">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-lg`}>
          {Icon && <Icon className="h-6 w-6 text-white" aria-hidden="true" />}
        </div>
        <span className="rounded-full border border-white/[0.06] bg-black/40 px-3 py-1 text-xs font-medium text-gray-400">
          {event.category}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white transition group-hover:text-cyan-300">
        {event.title}
      </h3>
      <p className="mt-2 text-sm text-gray-400">{event.description}</p>

      <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 flex-none text-gray-500" aria-hidden="true" />
          <span className="truncate">
            {event.date}, {event.time}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 flex-none text-gray-500" aria-hidden="true" />
          <span>{event.teams}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 flex-none text-gray-500" aria-hidden="true" />
          <span>Prize: {event.prize}</span>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Link
          to={`/events/${event.id}`}
          className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:ring-offset-2 focus:ring-offset-black"
        >
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
