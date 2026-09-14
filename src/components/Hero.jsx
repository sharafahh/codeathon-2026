import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { COLLEGE_INFO } from '../data/events'
import Ferrofluid from './Ferrofluid'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black px-4 py-16 sm:py-24 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Ferrofluid
          colors={['#4F46E5', '#06B6D4', '#E0F2FE']}
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.35}
        />
      </div>

      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_rgba(34,211,238,0.12),_rgba(168,85,247,0.08),_transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2740%27 height=%2740%27><path d=%27M0 40L40 0%27 stroke=%27%23ffffff%27 stroke-opacity=%270.02%27 stroke-width=%271%27/></svg>')]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium text-cyan-300">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          01 October 2026
        </span>

        <p className="mx-auto mt-6 max-w-2xl text-base font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-lg">
          Inter-College Technical Innovation Challenge
        </p>

        <h1
          id="hero-heading"
          className="mt-4 text-3xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent text-glow-cyan">
            CODEATHON
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-white bg-clip-text text-transparent text-glow-purple">
            2026
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
          A week-long inter-college technical innovation challenge where the
          brightest student developers, designers, and engineers compete,
          collaborate, and build the future.
        </p>

        <p className="mx-auto mt-4 flex items-center justify-center gap-1.5 text-sm text-gray-500">
          <MapPin className="h-4 w-4 text-gray-600" aria-hidden="true" />
          {COLLEGE_INFO.name}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
          >
            Explore Events
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
            Accreditations
          </p>
          <div className="mt-5 grid grid-cols-3 gap-4">
            {COLLEGE_INFO.accreditation.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center transition hover:border-white/[0.12]"
              >
                <p className="text-sm font-semibold text-gray-300">{item.label}</p>
                <p className="mt-1 text-xs text-gray-500">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
