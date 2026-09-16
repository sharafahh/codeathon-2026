import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import Ferrofluid from './Ferrofluid'

export default function Hero() {
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

      </div>
    </section>
  )
}
