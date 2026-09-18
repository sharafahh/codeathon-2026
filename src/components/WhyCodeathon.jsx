import { Target, Users, Zap, BookOpen, Lightbulb, GraduationCap, Trophy, Rocket, Sparkles } from 'lucide-react'
import { OBJECTIVES } from '../data/events'

const objectiveIcons = {
  'Foster Innovation': Target,
  'Build Technical Skills': Zap,
  'Promote Collaboration': Users,
  'Bridge Industry & Academia': BookOpen,
}

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

export default function WhyCodeathon() {
  return (
    <section
      id="why"
      className="bg-[#F7FBFF]"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">Our Why</span>
            <h2
              id="why-heading"
              className="section-title"
            >
              Built by students, for students
            </h2>
            <p className="section-copy">
              CODEATHON is a student-organized technical challenge where college
              teams conceive, design, and build real-world software and hardware
              solutions — mentored by faculty and industry experts.
            </p>

            <div className="mt-10">
              {OBJECTIVES.map(({ title, description }) => {
                const Icon = objectiveIcons[title] || Target
                return (
                  <div
                    key={title}
                    className="flex gap-4 border-t border-[#D6EAF0] py-5 first:border-t-0 sm:gap-5"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white text-[#02A4FF] shadow-[0_10px_24px_-16px_rgba(2,164,255,0.55)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B1B33]">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#33475B]">{description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {experiences.map((exp, i) => {
                const Icon = exp.icon
                return (
                  <div
                    key={exp.title}
                    className={`rounded-2xl border border-[#E3EEF5] bg-white p-7 shadow-[0_14px_40px_-30px_rgba(11,27,51,0.35)] transition hover:-translate-y-0.5 hover:border-[#02A4FF]/30 sm:p-8 ${i % 2 === 1 ? 'sm:translate-y-6' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F8FC] text-[#02A4FF]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold text-[#C7D6E3]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold tracking-tight text-[#0B1B33]">{exp.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#33475B]">{exp.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}