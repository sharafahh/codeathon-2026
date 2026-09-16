import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Trophy, CalendarDays, Ticket, Rocket, Briefcase } from 'lucide-react'
import Ferrofluid from './Ferrofluid'

const heroStats = [
  { value: '3', label: 'Competitions', icon: Trophy },
  { value: '1 Day', label: 'Hackathon', icon: CalendarDays },
  { value: '₹150', label: 'Entry per participant', icon: Ticket },
  { value: '100%', label: 'Student driven', icon: Rocket },
]

const eventDate = new Date('2026-10-01T00:00:00')

export default function Hero() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(eventDate.getTime() - now, 0)
  const units = [
    { value: Math.floor(diff / 86400000), label: 'Days' },
    { value: Math.floor((diff % 86400000) / 3600000), label: 'Hours' },
    { value: Math.floor((diff % 3600000) / 60000), label: 'Minutes' },
    { value: Math.floor((diff % 60000) / 1000), label: 'Seconds' },
  ]

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#F7FBFF] px-4 py-16 sm:px-6 sm:py-20 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Ferrofluid
          colors={['#4FC1FF', '#34D9B2', '#0A6FB7']}
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={1.5}
          flowDirection="down"
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.35}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/60 via-transparent to-[#F7FBFF]/85 z-[1]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0F172A] sm:text-base">
          Aalim Muhammed Salegh College of Engineering
        </p>
        <p className="mt-1 text-sm font-medium text-[#64748B]">
          Presents
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-5xl font-black tracking-tighter bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
        >
          CODEATHON
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-[#475569] sm:text-lg">
          A week-long inter-college technical innovation challenge where the
          brightest minds compete, collaborate, and build the future.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/register"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] px-8 py-3.5 text-sm font-semibold text-white transition hover:from-[#0195E8] hover:to-[#26C2A0] focus:outline-none focus:ring-2 focus:ring-[#02A4FF] focus:ring-offset-2 focus:ring-offset-[#FFFFFF] sm:w-auto"
          >
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="#events"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#D6EAF0] bg-[#FFFFFF] px-8 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:border-[#02A4FF]/30 hover:bg-[#DCF0EE] focus:outline-none focus:ring-2 focus:ring-[#02A4FF]/30 focus:ring-offset-2 focus:ring-offset-[#FFFFFF] sm:w-auto"
          >
            Explore Events
          </a>
        </div>

        <a
          href="https://www.google.com/maps/search/aalim+muhammed+salegh+college/@19.6922828,61.0418276,4z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-[#02A4FF] transition hover:text-[#34D9B2] focus:outline-none focus:underline"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Aalim Muhammed Salegh College of Engineering
        </a>

        <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:mx-auto sm:grid-cols-4">
          {heroStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-[#D6EAF0] bg-white px-4 py-5 shadow-sm"
              >
                <Icon className="mx-auto h-5 w-5 text-[#02A4FF]" aria-hidden="true" />
                <p className="mt-2 bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-2xl font-black tracking-tight text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">
            Event starts in
          </p>
          <div className="mt-4 grid max-w-xl grid-cols-4 gap-3 sm:mx-auto">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="rounded-xl border border-[#D6EAF0] bg-white px-2 py-4 shadow-sm"
              >
                <p className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-3xl font-black tracking-tight text-transparent">
                  {String(unit.value).padStart(2, '0')}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[#64748B]">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
            <span className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-transparent">
              Prize Pool
            </span>
          </h2>
          <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-[#02A4FF]/30 bg-white px-8 py-6 shadow-sm">
            <p className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
              ₹25,000
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Total Prize Pool
            </p>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-xl border border-[#D6EAF0] bg-white px-6 py-5 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">First Prize</p>
              <p className="mt-2 text-3xl font-bold text-[#02A4FF]">₹5,000</p>
              <p className="mt-1 text-sm text-[#475569]">For every event</p>
            </div>
            <div className="rounded-xl border border-[#D6EAF0] bg-white px-6 py-5 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">Second Prize</p>
              <p className="mt-2 text-3xl font-bold text-[#02A4FF]">₹2,500</p>
              <p className="mt-1 text-sm text-[#475569]">For every event</p>
            </div>
            <div className="rounded-xl border border-[#D6EAF0] bg-white px-6 py-5 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">Special Recognition</p>
              <p className="mt-2 text-3xl font-bold text-[#02A4FF]">₹1,000</p>
              <p className="mt-1 text-sm text-[#475569]">Two selected events</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-[#D6EAF0] bg-[#F7FBFF] p-6 text-center sm:p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#02A4FF] to-[#34D9B2]">
              <Briefcase className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-[#0F172A]">
              Internship Opportunities
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base">
              The best participants across all tracks will be shortlisted for
              internship opportunities with our industry partners — a launchpad
              for real-world careers.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
