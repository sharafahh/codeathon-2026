import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Ferrofluid from './Ferrofluid'

export default function CTASection() {
  return (
    <section
      id="registration"
      className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#F7FBFF] px-4 py-16 sm:px-6 sm:py-20 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <Ferrofluid
          colors={['#4FC1FF', '#34D9B2', '#0A6FB7']}
          speed={0.3}
          scale={2.5}
          turbulence={0.6}
          fluidity={0.15}
          rimWidth={0.15}
          sharpness={2}
          shimmer={1}
          glow={1}
          flowDirection="down"
          opacity={0.5}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={0.35}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/60 via-[#F7FBFF]/50 to-[#F7FBFF]/90 z-[1]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Ready to compete?
        </h2>

        <p className="mt-6 text-base text-[#475569] sm:text-lg">
          Join the inter-college technical innovation challenge and push your
          skills against the best teams in the region.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/register"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] px-8 py-3.5 text-sm font-semibold text-white transition hover:from-[#0195E8] hover:to-[#26C2A0] focus:outline-none focus:ring-2 focus:ring-[#02A4FF] focus:ring-offset-2 focus:ring-offset-[#FFFFFF] sm:w-auto"
          >
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}