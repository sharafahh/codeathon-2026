import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import Ferrofluid from './Ferrofluid'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 sm:px-6 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Ferrofluid
          colors={['#4FC1FF', '#34D9B2', '#0A6FB7']}
          speed={0.45}
          scale={1.8}
          turbulence={0.9}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.2}
          shimmer={1.2}
          glow={1.3}
          flowDirection="down"
          opacity={0.9}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.35}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/70 via-white/20 to-white"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0B1B33] sm:text-base">
          Aalim Muhammed Salegh College of Engineering
        </p>
        <p className="mt-2 text-sm font-medium text-[#64748B]">presents</p>

        <h1
          id="hero-heading"
          className="mt-6 text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="bg-gradient-to-r from-[#02A4FF] via-[#0A6FB7] to-[#34D9B2] bg-clip-text text-transparent">
            CODEATHON
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#33475B] sm:text-xl">
          An inter-college technical innovation challenge where the brightest
          minds compete, collaborate, and build the future — in one electrifying day.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/register" className="btn-primary w-full sm:w-auto">
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href="#events" className="btn-secondary w-full sm:w-auto">
            Explore Events
          </a>
        </div>

        <a
          href="https://www.google.com/maps/search/aalim+muhammed+salegh+college/@19.6922828,61.0418276,4z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm text-[#02A4FF] transition hover:text-[#34D9B2] focus:outline-none focus:underline"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Aalim Muhammed Salegh College of Engineering
        </a>
      </div>
    </section>
  )
}