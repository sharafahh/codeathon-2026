import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, Ticket, Code2, Rocket, CircuitBoard } from 'lucide-react'
import ElectricBorder from './ElectricBorder'
import './EventCard.css'

const iconMap = { Code2, Rocket, CircuitBoard }

export default function EventCard({ event, index }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = iconMap[event.icon]
  const toggleCard = () => setIsFlipped((flipped) => !flipped)

  const handleKeyDown = (keyEvent) => {
    if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
      keyEvent.preventDefault()
      toggleCard()
    }
  }

  return (
    <ElectricBorder color="#02A4FF" chaos={0.08} speed={1} borderRadius={12}>
      <div
        className={`event-flip-card ${isFlipped ? 'is-flipped' : ''}`}
        tabIndex="0"
        role="group"
        aria-label={`${event.title} event card. ${isFlipped ? 'Showing event details.' : 'Showing event title.'} Press Enter or Space to flip.`}
        onClick={(clickEvent) => { if (!clickEvent.target.closest('a')) toggleCard() }}
        onKeyDown={handleKeyDown}
      >
        <article className="event-card-face event-card-front" aria-hidden={isFlipped}>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#02A4FF]/10 sm:h-14 sm:w-14">
            {Icon && <Icon className="h-6 w-6 text-[#02A4FF] sm:h-7 sm:w-7" aria-hidden="true" />}
          </div>
          <span className="mt-8 rounded-full border border-[#D6EAF0] bg-[#DCF0EE] px-3 py-1 text-xs font-medium text-[#02A4FF]">{event.category}</span>
          <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">{event.title}</h3>
          <p className="mt-auto pt-8 text-sm font-medium text-[#02A4FF]">Tap to view details</p>
        </article>

        <article className="event-card-face event-card-back" aria-hidden={!isFlipped}>
          <div className="flex items-start justify-between gap-2">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#02A4FF]/10 sm:h-12 sm:w-12">
              {Icon && <Icon className="h-5 w-5 text-[#02A4FF] sm:h-6 sm:w-6" aria-hidden="true" />}
            </div>
            <span className="rounded-full border border-[#D6EAF0] bg-[#DCF0EE] px-3 py-1 text-xs font-medium text-[#02A4FF]">{event.category}</span>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-[#0F172A] sm:text-xl">{event.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#475569]">{event.description}</p>
          <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-3 text-xs text-[#475569] sm:gap-y-4 sm:text-sm">
            <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 flex-none text-[#94A3B8]" aria-hidden="true" /><span className="truncate">{event.date}, {event.time}</span></div>
            <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 flex-none text-[#94A3B8]" aria-hidden="true" /><span>{event.teams}</span></div>
            <div className="flex items-center gap-1.5"><Ticket className="h-3.5 w-3.5 flex-none text-[#94A3B8]" aria-hidden="true" /><span className="truncate">Fee: {event.fee}</span></div>
          </div>
          <div className="mt-auto pt-6">
            <Link to={event.path} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] px-5 py-2.5 text-sm font-medium text-white transition hover:from-[#0195E8] hover:to-[#26C2A0] focus:outline-none focus:ring-2 focus:ring-[#02A4FF] focus:ring-offset-2 focus:ring-offset-[#FFFFFF] sm:w-auto">
              Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </ElectricBorder>
  )
}
