import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { COLLEGE_INFO } from '../data/events'
import Ferrofluid from './Ferrofluid'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Ferrofluid
          colors={['#0ea5e9', '#06B6D4', '#E0F2FE']}
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

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/70 z-[1]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0F172A] sm:text-base">
          Aalim Muhammed Salegh College of Engineering
        </p>
        <p className="mt-1 text-sm font-medium text-[#64748B]">
          Presents
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-5xl font-black tracking-tighter text-[#06b6d4] sm:text-7xl md:text-8xl lg:text-9xl"
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#06b6d4] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
          >
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="#events"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-8 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:border-[#06b6d4]/30 hover:bg-[#ecfeff] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/30 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
          >
            Explore Events
          </a>
        </div>

        <a
          href="https://www.google.com/maps/search/aalim+muhammed+salegh+college/@19.6922828,61.0418276,4z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-[#06b6d4] transition hover:text-[#0891b2] focus:outline-none focus:underline"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Aalim Muhammed Salegh College of Engineering
        </a>

        <div className="mx-auto mt-16 max-w-3xl rounded-lg border border-[#E2E8F0] bg-white p-4 sm:p-6 lg:p-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-[#64748B]">
            Accreditations
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
            {COLLEGE_INFO.accreditation.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#E2E8F0] bg-white p-3 text-center transition hover:border-[#CBD5E1] sm:p-4"
              >
                <p className="text-sm font-semibold text-[#0F172A]">{item.label}</p>
                <p className="mt-1 text-xs text-[#64748B]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}