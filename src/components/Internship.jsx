import { Briefcase, Building2, ArrowUpRight } from 'lucide-react'

const partnerPoints = [
  {
    title: 'Shortlisted finalists',
    text: 'The best participants across all tracks are shortlisted for internship roles.',
  },
  {
    title: 'Industry mentors',
    text: 'Learn inside the day from mentors embedded in our industry partners.',
  },
  {
    title: 'A launchpad, not a prize',
    text: 'Walk away with real-world experience and a direct line to professional careers.',
  },
]

export default function Internship() {
  return (
    <section
      id="internship"
      className="bg-white"
      aria-labelledby="internship-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="card-soft grid items-center gap-12 overflow-hidden lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <div className="relative h-full min-h-[18rem] overflow-hidden bg-gradient-to-br from-[#02A4FF] to-[#34D9B2] p-10 sm:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              aria-hidden="true"
            >
              <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Briefcase className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2
                id="internship-heading"
                className="mt-8 max-w-md text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl"
              >
                Your ticket to a real-world career
              </h2>
              <p className="mt-4 max-w-sm text-white/85">
                Top performers earn internship opportunities with our industry
                partners — exposure you cannot get in a classroom.
              </p>
            </div>
            <Building2
              className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-white/10"
              aria-hidden="true"
            />
          </div>

          <div className="px-8 pb-8 sm:px-12 lg:py-10">
            <ul className="divide-y divide-[#E3EEF5]">
              {partnerPoints.map((point) => (
                <li key={point.title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <span className="mt-1.5 flex h-2 w-2 flex-none items-center justify-center rounded-full bg-gradient-to-r from-[#02A4FF] to-[#34D9B2]" />
                  <div>
                    <h3 className="font-bold text-[#0B1B33]">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#33475B]">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#faq"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#02A4FF] transition hover:text-[#34D9B2] focus:outline-none focus:underline"
            >
              How does the shortlist work? <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}