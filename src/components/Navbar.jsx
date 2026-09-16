import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/events'
import amsLogo from '../assets/ams-logo.jpg'
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#D6EAF0] bg-[#FFFFFF]"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="flex items-center gap-3 text-xl font-bold tracking-tight text-[#0F172A]"
          aria-label="CODEATHON 2026 home"
        >
          <img
            src={amsLogo}
            alt="Aalim Muhammed Salegh College of Engineering logo"
            className="h-11 w-11 rounded-full border border-[#D6EAF0] bg-[#FFFFFF] object-contain p-0.5"
          />
          <span>
            CODEATHON<span className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-transparent">2026</span>
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#02A4FF] focus:outline-none focus:text-[#02A4FF]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/register"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] px-6 py-2.5 text-sm font-semibold text-white transition hover:from-[#0195E8] hover:to-[#26C2A0] focus:outline-none focus:ring-2 focus:ring-[#02A4FF]"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#475569] hover:bg-[#DCF0EE] hover:text-[#02A4FF] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
          <div className="border-t border-[#D6EAF0] bg-[#FFFFFF] md:hidden">
            <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[#475569] hover:bg-[#DCF0EE] hover:text-[#02A4FF] focus:outline-none focus:text-[#02A4FF]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/register"
              className="mt-2 block rounded-lg bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] px-3 py-3 text-center text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#02A4FF]"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
