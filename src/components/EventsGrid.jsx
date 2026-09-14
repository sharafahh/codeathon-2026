import EventCard from './EventCard'
import { events } from '../data/events'

export default function EventsGrid() {
  return (
    <section
      id="events"
      className="bg-black px-4 py-16 sm:py-24"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gray-400">
            Event Tracks
          </span>
          <h2
            id="events-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Pick your challenge
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Three tracks across different domains. Teams can compete in one or
            combine skills across multiple tracks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
