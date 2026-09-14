import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, DollarSign, Code2, Rocket, CircuitBoard } from 'lucide-react'

const iconMap = {
  Code2,
  Rocket,
  CircuitBoard,
}

export default function EventCard({ event, index }) {
  const Icon = iconMap[event.icon]

  return (
    <article
      className={`group relative flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-5 transition hover:border-[#06b6d4]/40 sm:p-8 ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''} ${index === 0 ? 'border-l-[3px] border-l-[#06b6d4]' : 'border-l-2 border-l-transparent group-hover:border-l-[#06b6d4]'}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#06b6d4]/10 sm:h-12 sm:w-12">
          {Icon && <Icon className="h-5 w-5 text-[#06b6d4] sm:h-6 sm:w-6" aria-hidden="true" />}
        </div>
        <span className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-medium text-[#06b6d4] sm:px-3 sm:py-1">
          {event.category}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#0F172A] transition group-hover:text-[#06b6d4] sm:text-xl">
        {event.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{event.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-3 text-xs text-[#475569] sm:gap-y-4 sm:text-sm">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 flex-none text-[#94A3B8]" aria-hidden="true" />
          <span className="truncate">
            {event.date}, {event.time}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5 flex-none text-[#94A3B8]" aria-hidden="true" />
          <span>{event.teams}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <DollarSign className="h-3.5 w-3.5 flex-none text-[#94A3B8]" aria-hidden="true" />
          <span className="truncate">Prize: {event.prize}</span>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Link
          to={`/events/${event.id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#06b6d4]/30 bg-[#ecfeff] px-5 py-2.5 text-sm font-medium text-[#06b6d4] transition hover:bg-[#06b6d4] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-white sm:inline-flex sm:w-auto"
        >
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}