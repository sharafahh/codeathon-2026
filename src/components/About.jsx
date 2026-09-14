import { Target, Users, Zap, BookOpen } from 'lucide-react'
import { OBJECTIVES } from '../data/events'

const highlights = [
  {
    icon: Target,
    title: 'Innovation-First',
    text: 'Push the boundaries of what student developers and engineers can build in just one week.',
  },
  {
    icon: Users,
    title: 'Inter-College',
    text: 'Teams from universities across the region compete side by side.',
  },
  {
    icon: Zap,
    title: '$25,000 Prize Pool',
    text: 'Win cash prizes, swag, and exposure to top tech recruiters.',
  },
  {
    icon: BookOpen,
    title: 'Mentorship & Expo',
    text: 'Get guidance from industry mentors and showcase your project at the Expo.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-black px-4 py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gray-400">
            About the Challenge
          </span>
          <h2
            id="about-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Built by students,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              for students
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            CODEATHON is a week-long technical innovation challenge where teams
            of college students conceive, design, and build real-world
            software and hardware solutions. Whether you are a seasoned
            competitive programmer or building your first project, there is
            a place for you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.04]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 text-cyan-300">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-400">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
                Our Mission
              </p>
              <p className="mt-4 text-gray-300">
                To democratize access to high-impact technical experiences and
                foster a community where students learn by building.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
                How It Works
              </p>
              <ol className="mt-6 space-y-4 text-gray-300">
                {[
                  ['Register a team', 'Sign up before the deadline and lock in your team name.'],
                  ['Pick a track', 'Choose from event tracks that match your skills.'],
                  ['Build for 6 days', 'Code, iterate, and ship your project.'],
                  ['Pitch & win', 'Present to judges and compete for prizes.'],
                ].map(([step, desc], i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/15 to-purple-500/15 text-sm font-semibold text-cyan-300">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{step}</p>
                      <p className="text-sm text-gray-400">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
