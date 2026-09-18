import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks } from '../data/events'
import amsLogo from '../assets/ams-logo.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#E3EEF5] bg-white/85 backdrop-blur-md"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-[#0B1B33]"
          aria-label="CODEATHON 2026 home"
        >
          <img
            src={amsLogo}
            alt="Aalim Muhammed Salegh College of Engineering logo"
            className="h-10 w-10 rounded-full border border-[#E3EEF5] bg-white object-contain p-0.5"
          />
          <span>
            CODEATHON
            <span className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-transparent">
              2026
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#33475B] transition-colors hover:text-[#02A4FF] focus:outline-none focus:text-[#02A4FF]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/register"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] px-5 py-2.5 text-sm font-semibold text-white transition hover:from-[#0195E8] hover:to-[#26C2A0] focus:outline-none focus:ring-2 focus:ring-[#02A4FF]"
          >
            Register
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#33475B] hover:bg-[#F0F8FC] hover:text-[#02A4FF] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#E3EEF5] bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[#33475B] hover:bg-[#F0F8FC] hover:text-[#02A4FF] focus:outline-none focus:text-[#02A4FF]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/register"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] px-3 py-3 text-center text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#02A4FF]"
              onClick={() => setOpen(false)}
            >
              Register
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}