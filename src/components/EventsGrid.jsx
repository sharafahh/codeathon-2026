import EventCard from './EventCard'
import { events } from '../data/events'
import Ferrofluid from './Ferrofluid'

export default function EventsGrid() {
  return (
    <section
      id="events"
      className="relative isolate overflow-hidden bg-white"
      aria-labelledby="events-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30" aria-hidden="true">
        <Ferrofluid
          colors={['#4FC1FF', '#34D9B2', '#0A6FB7']}
          speed={0.25}
          scale={2.2}
          turbulence={0.8}
          fluidity={0.15}
          rimWidth={0.18}
          sharpness={2}
          shimmer={1}
          glow={1}
          flowDirection="down"
          opacity={0.5}
          mouseInteraction={true}
          mouseStrength={0.4}
          mouseRadius={0.4}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white via-[#F7FBFF]/40 to-white" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow section-eyebrow--center">The Tracks</span>
          <h2
            id="events-heading"
            className="section-title"
          >
            Three events. One mission.
          </h2>
          <p className="section-copy">
            Pick the challenge that fits your skills — code, invent software, or
            forge hardware. Compete solo or bring your crew.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}