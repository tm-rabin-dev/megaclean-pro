import { DollarSign, UserCheck, Clock, ShieldCheck, Zap, Shield, Smartphone, MapPin } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'Transparent Pricing',
    description: "No surprise bills. You'll receive a clear, itemised price before we begin — the quote is what you pay.",
  },
  {
    icon: UserCheck,
    color: 'text-brand-600',
    bg: 'bg-brand-50',
    title: 'Verified Cleaners',
    description: 'Every cleaner is police background-checked, identity-verified, and reference-checked before their first job.',
  },
  {
    icon: Clock,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    title: 'On-Time, Every Time',
    description: "We respect your schedule. If we're ever late, we'll discount your clean — no questions asked.",
  },
  {
    icon: ShieldCheck,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    title: 'Satisfaction Guarantee',
    description: "Not happy with any area? We'll return within 24 hours and re-clean it completely free of charge.",
  },
  {
    icon: Zap,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    title: 'Same-Day Availability',
    description: 'Need a clean urgently? We offer same-day and next-morning slots subject to team availability.',
  },
  {
    icon: Shield,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    title: 'Fully Insured',
    description: 'All cleaners carry public liability insurance. Your home and belongings are protected during every job.',
  },
  {
    icon: Smartphone,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    title: 'Easy Online Booking',
    description: 'Book, reschedule, or cancel in under a minute. No phone tag, no waiting on hold.',
  },
  {
    icon: MapPin,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    title: 'Local Sydney Team',
    description: "We're a Sydney-based business — not an interstate call centre. Local accountability, local pride.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-xs font-bold text-brand-600 bg-brand-100 px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Why Clenza
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Not Your Average Cleaning Company
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We built Clenza to fix what frustrates people most about cleaning services — hidden pricing, no-shows, and poor communication.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-stagger>
          {features.map(({ icon: Icon, color, bg, title, description }, i) => (
            <div key={title} style={{ transitionDelay: `${i * 65}ms` }} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
              <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-sm font-extrabold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
