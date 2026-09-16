import EventCard from './EventCard'
import { events } from '../data/events'
import Ferrofluid from './Ferrofluid'

export default function EventsGrid() {
  return (
    <section
      id="events"
      className="relative isolate group overflow-hidden bg-[#F7FBFF] px-4 py-16 sm:px-6 sm:py-20 lg:py-36"
      aria-labelledby="events-heading"
    >
      <div className="absolute inset-0 z-0 opacity-0 pointer-events-none transition-all duration-700 group-hover:opacity-100 group-hover:pointer-events-auto">
        <Ferrofluid
          colors={['#4FC1FF', '#34D9B2', '#0A6FB7']}
          speed={0.3}
          scale={2}
          turbulence={0.8}
          fluidity={0.15}
          rimWidth={0.15}
          sharpness={2}
          shimmer={1}
          glow={1}
          flowDirection="down"
          opacity={0.6}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={0.35}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6EAF0] bg-[#FFFFFF] px-4 py-1.5 text-xs font-medium text-[#475569]">
            Event Tracks
          </span>
          <h2
            id="events-heading"
            className="mt-8 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-5xl"
          >
            Pick your challenge
          </h2>
          <p className="mt-6 text-lg text-[#475569]">
            Three tracks across different domains. Teams can compete in one or
            combine skills across multiple tracks.
          </p>
          <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-[#02A4FF]/30 bg-[#FFFFFF] px-8 py-5 shadow-sm">
            <p className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-transparent sm:text-5xl">₹25,000</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#475569]">Prize Pool</p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3 sm:gap-6">
          <div className="rounded-xl border border-[#D6EAF0] bg-[#FFFFFF] px-6 py-5 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">First Prize</p>
            <p className="mt-2 text-3xl font-bold text-[#02A4FF]">₹5,000</p>
            <p className="mt-1 text-sm text-[#475569]">For every event</p>
          </div>
          <div className="rounded-xl border border-[#D6EAF0] bg-[#FFFFFF] px-6 py-5 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">Second Prize</p>
            <p className="mt-2 text-3xl font-bold text-[#02A4FF]">₹2,500</p>
            <p className="mt-1 text-sm text-[#475569]">For every event</p>
          </div>
          <div className="rounded-xl border border-[#D6EAF0] bg-[#FFFFFF] px-6 py-5 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">Special Recognition</p>
            <p className="mt-2 text-3xl font-bold text-[#02A4FF]">₹1,000</p>
            <p className="mt-1 text-sm text-[#475569]">Two selected events</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
