import { Target, Users, Zap, BookOpen } from 'lucide-react'

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
      className="bg-[#F7FBFF] px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="about-heading"
            className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl"
          >
            Built by students, for students
          </h2>
          <p className="mt-6 text-lg text-[#475569]">
            CODEATHON is a week-long technical innovation challenge where teams
            of college students conceive, design, and build real-world
            software and hardware solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#02A4FF]">
              What to Expect
            </h3>
            <div className="mt-8 space-y-8">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#DCF0EE] sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 text-[#02A4FF] sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0F172A]">{title}</h4>
                    <p className="mt-1 text-sm text-[#475569]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#02A4FF]">
                Our Mission
              </h3>
              <p className="mt-4 text-[#475569]">
                To democratize access to high-impact technical experiences and
                foster a community where students learn by building.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#02A4FF]">
                How It Works
              </h3>
              <ol className="mt-4 space-y-5">
                {[
                  ['Register a team', 'Sign up before the deadline and lock in your team name.'],
                  ['Pick a track', 'Choose from event tracks that match your skills.'],
                  ['Build for 6 days', 'Code, iterate, and ship your project.'],
                  ['Pitch & win', 'Present to judges and compete for prizes.'],
                ].map(([step, desc], i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#DCF0EE] text-sm font-semibold text-[#02A4FF] sm:h-8 sm:w-8">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[#0F172A]">{step}</p>
                      <p className="text-sm text-[#475569]">{desc}</p>
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
