import { Link } from 'react-router-dom'
import { MapPin, GraduationCap, Users, Phone, Mail, Building2, ArrowUpRight } from 'lucide-react'
import { COLLEGE_INFO, COORDINATORS } from '../data/events'

function CoordinatorCard({ name, role, phone, icon: Icon }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <a
      href={`tel:${phone.replace(/\s/g, '')}`}
      className="group flex items-center gap-4 rounded-2xl border border-[#E3EEF5] bg-white p-5 shadow-[0_14px_40px_-30px_rgba(11,27,51,0.4)] transition hover:-translate-y-0.5 hover:border-[#02A4FF]/35"
    >
      <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#F0F8FC] text-sm font-bold text-[#02A4FF] transition group-hover:bg-gradient-to-r group-hover:from-[#02A4FF] group-hover:to-[#34D9B2] group-hover:text-white">
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate font-bold text-[#0B1B33]">{name}</p>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#64748B]">
          <Icon className="h-3 w-3 text-[#34D9B2]" aria-hidden="true" />
          {role}
        </p>
      </div>
      <span className="flex flex-none items-center gap-1.5 rounded-lg bg-[#F0F8FC] px-3 py-1.5 text-xs font-semibold text-[#0A6FB7] transition group-hover:bg-[#02A4FF] group-hover:text-white">
        <Phone className="h-3 w-3" aria-hidden="true" />
        <span className="hidden sm:inline">{phone}</span>
      </span>
    </a>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">Contact</span>
            <h2
              id="contact-heading"
              className="section-title"
            >
              Talk to the team behind CODEATHON
            </h2>
            <p className="section-copy">
              Questions about registration, teams, or venue? The organizing
              committee is one call away.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4">
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#F0F8FC] text-[#02A4FF]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-[#0B1B33]">Venue</p>
                  <p className="text-sm text-[#33475B]">{COLLEGE_INFO.name}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#F0F8FC] text-[#02A4FF]">
                  <Building2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-[#0B1B33]">Accreditation</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {COLLEGE_INFO.accreditation.map(({ label, value }) => (
                      <span
                        key={label}
                        className="rounded-full border border-[#D6EAF0] bg-[#F7FBFF] px-2.5 py-1 text-xs font-medium text-[#0A6FB7]"
                      >
                        {label} · {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#F0F8FC] text-[#02A4FF]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-[#0B1B33]">Get in touch</p>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#02A4FF] transition hover:text-[#34D9B2]"
                  >
                    Register for an event <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0B1B33]">
                <GraduationCap className="h-4 w-4 text-[#34D9B2]" aria-hidden="true" />
                Faculty Coordinators
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {COORDINATORS.faculty.map(({ name, phone }) => (
                  <CoordinatorCard
                    key={name}
                    name={name}
                    phone={phone}
                    role="Faculty Coordinator"
                    icon={GraduationCap}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0B1B33]">
                <Users className="h-4 w-4 text-[#34D9B2]" aria-hidden="true" />
                Student Coordinators
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {COORDINATORS.students.map(({ name, phone }) => (
                  <CoordinatorCard
                    key={name}
                    name={name}
                    phone={phone}
                    role="Student Coordinator"
                    icon={Users}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}