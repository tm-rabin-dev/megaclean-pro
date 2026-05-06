import { Link } from 'react-router-dom'
import { ClipboardList, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    color: 'text-brand-600',
    bg: 'bg-brand-50',
    title: 'Request a Quote',
    description:
      'Fill in our quick online form. Tell us the service, property size, and your preferred date. Takes under 60 seconds.',
  },
  {
    number: '02',
    icon: Calendar,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    title: 'Pick Your Time',
    description:
      "We'll confirm your upfront price and send available slots. Choose a time that suits you — early, late, or weekend.",
  },
  {
    number: '03',
    icon: CheckCircle,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'Cleaner Arrives',
    description:
      "A verified, insured cleaner shows up on time with all equipment. Job done — or we'll fix it free.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-center">

          {/* Left text */}
          <div className="mb-12 lg:mb-0" data-reveal>
            <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5">
              Booked, Cleaned &amp; Done — in 3 Easy Steps
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Getting a professional clean has never been simpler. No contracts, no lock-ins, and no guesswork.
            </p>
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-colors shadow-sm"
            >
              Book Your First Clean
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-5" data-reveal-stagger>
            {steps.map(({ number, icon: Icon, color, bg, title, description }, i) => (
              <div key={title} style={{ transitionDelay: `${i * 100}ms` }} className="flex gap-5 items-start bg-slate-50 rounded-2xl p-6">
                {/* Icon + number */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-slate-900 text-white text-[10px] font-extrabold rounded-full flex items-center justify-center">
                    {parseInt(number)}
                  </span>
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
