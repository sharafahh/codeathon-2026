import { Trophy, CalendarDays, Ticket, Rocket } from 'lucide-react'

const snapshotStats = [
  { value: '3', label: 'Competitions', icon: Trophy },
  { value: '1 Day', label: 'Per Track', icon: CalendarDays },
  { value: '₹150', label: 'Entry per participant', icon: Ticket },
  { value: '100%', label: 'Student driven', icon: Rocket },
]

export default function EventSnapshot() {
  return (
    <section
      id="snapshot"
      aria-label="Event snapshot"
      className="border-y border-[#E3EEF5] bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 divide-x divide-[#E3EEF5] lg:grid-cols-4">
          {snapshotStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex flex-col items-center gap-3 px-4 py-10 text-center sm:py-12">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F8FC] text-[#02A4FF]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="flex flex-col">
                  <dt className="order-2 mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#64748B] sm:text-xs">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-black tracking-tight text-[#0B1B33] sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}