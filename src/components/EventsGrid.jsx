import EventCard from './EventCard'
import { events } from '../data/events'
import Ferrofluid from './Ferrofluid'
import { Lightbulb, GraduationCap, Users, Trophy, Rocket, Sparkles } from 'lucide-react'

const experiences = [
  {
    title: 'Hands-on Innovation',
    text: 'Prototype, build, and present real projects with your own team under pressure.',
    icon: Lightbulb,
  },
  {
    title: 'Expert Mentorship',
    text: 'Get guidance and feedback from faculty and industry mentors throughout the day.',
    icon: GraduationCap,
  },
  {
    title: 'Networking',
    text: 'Meet and collaborate with the brightest minds from colleges across the region.',
    icon: Users,
  },
  {
    title: 'Prizes & Recognition',
    text: 'Compete for a ₹25,000 prize pool with awards across every track.',
    icon: Trophy,
  },
  {
    title: 'Student Driven',
    text: 'A completely student-organized event built by students, for students.',
    icon: Rocket,
  },
  {
    title: 'Vibrant Atmosphere',
    text: 'Live demos, friendly rivalry, and non-stop energy from check-in to podium.',
    icon: Sparkles,
  },
]

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
        </div>

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl" aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="text-center text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
          >
            The <span className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {experiences.map((exp) => {
              const Icon = exp.icon
              return (
                <div
                  key={exp.title}
                  className="group rounded-xl border border-[#D6EAF0] bg-[#FFFFFF] p-6 shadow-sm transition hover:border-[#02A4FF]/30 hover:shadow-[0_10px_32px_rgba(2,164,255,0.16)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#DCF0EE] text-[#02A4FF] transition group-hover:bg-gradient-to-r group-hover:from-[#02A4FF] group-hover:to-[#34D9B2] group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">{exp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">{exp.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
