import { Link } from 'react-router-dom'
import { Code2, MapPin, Heart } from 'lucide-react'
import { COLLEGE_INFO } from '../data/events'

export default function Footer() {
  return (
    <footer
      className="border-t border-[#E2E8F0] bg-white px-4 py-12 sm:px-6"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#0F172A]"
            aria-label="CODEATHON 2026 home"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#06b6d4]">
              <Code2 className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span>
              CODEATHON<span className="text-[#06b6d4]">2026</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-[#64748B]">
            {COLLEGE_INFO.name}
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-sm text-[#64748B]">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{COLLEGE_INFO.name}</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#E2E8F0] pt-8 sm:flex-row">
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#94A3B8]">
            Built with <Heart className="h-3 w-3 text-[#06b6d4]" aria-hidden="true" /> by students for
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
