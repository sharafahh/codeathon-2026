import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is CODEATHON 2026?',
    answer:
      'CODEATHON is a day-long, inter-college technical innovation challenge hosted by Aalim Muhammed Salegh College of Engineering. It brings together the brightest minds across engineering disciplines to compete in coding, software, and hardware tracks.',
  },
  {
    question: 'Who can participate?',
    answer:
      'The event is open to students of all engineering colleges and disciplines. A valid college ID is mandatory at the time of registration and check-in.',
  },
  {
    question: 'How much does it cost to participate?',
    answer:
      'The registration fee is ₹150 per participant per event. The fee covers participation across your chosen track for the day.',
  },
  {
    question: 'Can I take part in more than one event?',
    answer:
      "Yes. Teams can compete in one event or combine skills across multiple tracks, as long as they meet each event's team-size and eligibility requirements.",
  },
  {
    question: 'What are the team sizes for each track?',
    answer:
      'Crack the Code — individual or teams of 2. Hackathon — teams of 2–5. TechForge — teams of 2–4. Mixed-discipline teams are encouraged.',
  },
  {
    question: 'What can I win?',
    answer:
      'There is a ₹25,000 total prize pool. Each event carries ₹5,000 for first place, ₹2,500 for second, plus a ₹1,000 special recognition in two selected events. Top participants are also shortlisted for industry internships.',
  },
  {
    question: 'Where does the event take place?',
    answer:
      'All tracks are hosted on the campus of Aalim Muhammed Salegh College of Engineering. Venue details for each track are shared with registered participants.',
  },
]

function FaqItem({ item }) {
  return (
    <details className="group border-b border-[#E3EEF5] py-6 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
        <h3 className="text-base font-bold tracking-tight text-[#0B1B33] transition-colors group-hover:text-[#02A4FF] sm:text-lg">
          {item.question}
        </h3>
        <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[#D6EAF0] bg-white text-[#02A4FF] transition-transform duration-200 group-open:rotate-180">
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </span>
      </summary>
      <p className="mt-3 max-w-3xl pr-10 text-sm leading-relaxed text-[#33475B] sm:text-base">
        {item.answer}
      </p>
    </details>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#F7FBFF]"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
          <div>
            <span className="section-eyebrow">Questions</span>
            <h2
              id="faq-heading"
              className="section-title"
            >
              Everything you need to know
            </h2>
            <p className="section-copy">
              Can't find your answer? Reach out to the coordinators listed in the
              contact section below and we'll get back to you.
            </p>
          </div>

          <div>
            {faqs.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}