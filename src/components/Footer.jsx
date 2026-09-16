import { Link } from 'react-router-dom'
import { Code2, MapPin, Heart, GraduationCap, Users, Phone } from 'lucide-react'
import { COLLEGE_INFO, COORDINATORS } from '../data/events'

function CoordinatorCard({ name, role, phone, icon: Icon }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="w-full rounded-xl border border-[#D6EAF0] bg-[#FFFFFF] p-5 shadow-sm transition hover:border-[#02A4FF]/40 hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#DCF0EE] text-sm font-bold text-[#02A4FF]">
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate font-semibold text-[#0F172A]">{name}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#64748B]">
            <Icon className="h-3 w-3" aria-hidden="true" />
            {role}
          </p>
        </div>
      </div>
      <a
        href={`tel:${phone.replace(/\s/g, '')}`}
        className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-[#DCF0EE] px-3 py-1.5 text-xs font-semibold text-[#0A6FB7] transition hover:bg-[#02A4FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#02A4FF]/30"
      >
        <Phone className="h-3 w-3" aria-hidden="true" />
        {phone}
      </a>
    </div>
  )
}

function CoordinatorGroup({ title, icon: Icon, details, role }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0F172A]">
        <Icon className="h-4 w-4 text-[#34D9B2]" aria-hidden="true" />
        {title}
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {details.map(({ name, phone }) => (
          <CoordinatorCard
            key={name}
            name={name}
            phone={phone}
            role={role}
            icon={Icon}
          />
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      className="border-t border-[#D6EAF0] bg-[#F7FBFF] px-4 py-12 sm:px-6"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#0F172A]"
            aria-label="CODEATHON 2026 home"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-[#02A4FF] to-[#34D9B2]">
              <Code2 className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span>
              CODEATHON<span className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-transparent">2026</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-[#475569]">
            {COLLEGE_INFO.name}
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-sm text-[#475569]">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{COLLEGE_INFO.name}</span>
          </div>
        </div>

        <div className="mt-12 border-t border-[#D6EAF0] pt-10">
          <h2 className="text-center text-lg font-bold tracking-tight text-[#0F172A]">
            Coordinators
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <CoordinatorGroup
              title="Faculty Coordinators"
              icon={GraduationCap}
              details={COORDINATORS.faculty}
              role="Faculty Coordinator"
            />
            <CoordinatorGroup
              title="Student Coordinators"
              icon={Users}
              details={COORDINATORS.students}
              role="Student Coordinator"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#D6EAF0] pt-8 sm:flex-row">
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#94A3B8]">
            Built with <Heart className="h-3 w-3 text-[#34D9B2]" aria-hidden="true" /> by students for
            students &middot; CODEATHON 2026
          </p>
          <p className="text-xs text-[#94A3B8]">
            &copy; 2026 {COLLEGE_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}