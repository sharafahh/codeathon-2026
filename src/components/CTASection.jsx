import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Ferrofluid from './Ferrofluid'

export default function CTASection() {
  return (
    <section
      id="registration"
      className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <Ferrofluid
          colors={['#0ea5e9', '#06B6D4', '#E0F2FE']}
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

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 z-[1]" aria-hidden="true" />

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
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#06b6d4] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
          >
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}