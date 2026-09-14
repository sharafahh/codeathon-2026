import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'
import { navLinks } from '../data/events'
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white"
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
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#06b6d4]">
            <Code2 className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span>
            CODEATHON<span className="text-[#06b6d4]">2026</span>
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#06b6d4] focus:outline-none focus:text-[#06b6d4]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/register"
            className="inline-flex items-center rounded-lg bg-[#06b6d4] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#475569] hover:bg-[#ecfeff] hover:text-[#06b6d4] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
          <div className="border-t border-[#E2E8F0] bg-white md:hidden">
            <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[#475569] hover:bg-[#ecfeff] hover:text-[#06b6d4] focus:outline-none focus:text-[#06b6d4]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/register"
              className="mt-2 block rounded-lg bg-[#06b6d4] px-3 py-3 text-center text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
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