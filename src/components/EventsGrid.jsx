import EventCard from './EventCard'
import { events } from '../data/events'
import Ferrofluid from './Ferrofluid'

export default function EventsGrid() {
  return (
    <section
      id="events"
      className="relative isolate group overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-36"
      aria-labelledby="events-heading"
    >
      <div className="absolute inset-0 z-0 opacity-0 pointer-events-none transition-all duration-700 group-hover:opacity-100 group-hover:pointer-events-auto">
        <Ferrofluid
          colors={['#0ea5e9', '#06B6D4', '#E0F2FE']}
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
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-1.5 text-xs font-medium text-[#475569]">
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