import { useState, useEffect } from 'react'
import { CalendarDays } from 'lucide-react'

const eventDate = new Date('2026-10-01T00:00:00')

export default function Countdown() {
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
      id="countdown"
      className="overflow-hidden bg-white"
      aria-labelledby="countdown-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow section-eyebrow--center">Mark the Date</span>
          <h2
            id="countdown-heading"
            className="section-title"
          >
            The countdown begins
          </h2>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#33475B] sm:text-base">
            <CalendarDays className="h-4 w-4 text-[#02A4FF]" aria-hidden="true" />
            October 1, 2026 · Aalim Muhammed Salegh College of Engineering
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-4 gap-3 sm:gap-5">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="rounded-2xl border border-[#E3EEF5] bg-[#F7FBFF] px-2 py-7 text-center sm:py-9"
            >
              <p className="bg-gradient-to-r from-[#02A4FF] to-[#34D9B2] bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-5xl">
                {String(unit.value).padStart(2, '0')}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#64748B] sm:text-xs">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}