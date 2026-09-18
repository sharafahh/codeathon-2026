import { Link } from 'react-router-dom'
import { Code2, Heart, MapPin } from 'lucide-react'
import { COLLEGE_INFO, navLinks } from '../data/events'

export default function Footer() {
  return (
    <footer
      className="border-t border-[#E3EEF5] bg-[#F7FBFF] px-4 py-12 sm:px-6"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 text-lg font-bold tracking-tight text-[#0B1B33]"
              aria-label="CODEATHON 2026 home"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#02A4FF] to-[#34D9B2]">
                <Code2 className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span>
                CODEATHON
                <span className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-transparent">
                  2026
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#33475B]">
              An inter-college technical innovation challenge, run by students,
              for students.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B1B33]">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#33475B] transition hover:text-[#02A4FF] focus:outline-none focus:text-[#02A4FF]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B1B33]">
              Hosted by
            </h2>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-[#33475B]">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-[#02A4FF]" aria-hidden="true" />
              {COLLEGE_INFO.name}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#D6EAF0] pt-8 sm:flex-row">
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
            Built with <Heart className="h-3 w-3 text-[#34D9B2]" aria-hidden="true" /> by students for
            students &middot; CODEATHON 2026
          </p>
          <p className="text-xs text-[#64748B]">
            &copy; 2026 {COLLEGE_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}