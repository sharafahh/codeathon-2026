import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import Ferrofluid from './Ferrofluid'

export default function CTASection() {
  return (
    <section
      id="registration"
      className="relative isolate flex min-h-[60vh] items-center justify-center overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <Ferrofluid
          colors={['#4FC1FF', '#34D9B2', '#0A6FB7']}
          speed={0.3}
          scale={2.2}
          turbulence={0.7}
          fluidity={0.15}
          rimWidth={0.18}
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

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/80 via-white/60 to-white" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D6EAF0] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#02A4FF]">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Limited seats
        </span>

        <h2
          id="cta-heading"
          className="mt-8 text-4xl font-black tracking-tight text-[#0B1B33] sm:text-5xl lg:text-6xl"
        >
          Ready to make your mark?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#33475B] sm:text-lg">
          Join the inter-college technical innovation challenge and push your
          skills against the best teams in the region.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/register" className="btn-primary w-full sm:w-auto">
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href="#faq" className="btn-secondary w-full sm:w-auto">
            Read the FAQs
          </a>
        </div>
      </div>
    </section>
  )
}