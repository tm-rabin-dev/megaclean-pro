import { Link } from 'react-router-dom'
import { Check, Star, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Regular Clean',
    emoji: '🏠',
    from: '$99',
    popular: false,
    description: 'Perfect for ongoing home maintenance.',
    features: [
      'All bedrooms & living areas',
      'Kitchen benchtops & sink',
      'Bathroom & toilet',
      'Vacuuming & mopping',
      'Dusting surfaces',
    ],
  },
  {
    name: 'Deep Clean',
    emoji: '✨',
    from: '$199',
    popular: true,
    description: 'Intensive top-to-bottom clean.',
    features: [
      'Everything in Regular Clean',
      'Inside oven & rangehood',
      'Inside fridge & microwave',
      'Skirting boards & blinds',
      'Window sills & tracks',
    ],
  },
  {
    name: 'End-of-Lease',
    emoji: '🔑',
    from: '$299',
    popular: false,
    description: 'Bond-back guaranteed clean.',
    features: [
      'Everything in Deep Clean',
      'Walls & light switches',
      'All cupboards inside & out',
      'Garage & laundry areas',
      'Bond-back re-clean guarantee',
    ],
  },
  {
    name: 'Office Clean',
    emoji: '🏢',
    from: '$149',
    popular: false,
    description: 'Professional commercial cleaning.',
    features: [
      'Desks & workstations',
      'Kitchen / break room',
      'Toilets & bathrooms',
      'Reception & common areas',
      'After-hours scheduling',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-xs font-bold text-[#176b61] bg-[#edf7f5] px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">No Surprises. Ever.</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Starting prices shown. Final quote depends on property size and condition — always agreed upfront.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-stagger>
          {plans.map(({ name, emoji, from, popular, description, features }, i) => (
            <div
              key={name}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`relative flex flex-col rounded-2xl overflow-hidden border-2 transition-shadow hover:shadow-lg ${
                popular
                  ? 'border-[#176b61] shadow-md shadow-emerald-100'
                  : 'border-slate-200'
              }`}
            >
              {popular && (
                <div className="bg-[#176b61] text-white text-xs font-extrabold text-center py-2 tracking-widest uppercase">
                  <Star className="w-3 h-3 inline mr-1 fill-white" />Most Popular
                </div>
              )}
              <div className="p-6 flex flex-col flex-1 bg-white">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="text-base font-extrabold text-slate-900 mb-1">{name}</h3>
                <p className="text-xs text-slate-500 mb-4">{description}</p>
                <div className="mb-5">
                  <span className="text-xs text-slate-400">From</span>
                  <div className="flex items-end gap-1">
                    <span className={`text-3xl font-extrabold ${popular ? 'text-[#176b61]' : 'text-slate-900'}`}>{from}</span>
                    <span className="text-slate-400 text-xs mb-1.5">/ service</span>
                  </div>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/get-quote"
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors ${
                    popular
                      ? 'bg-[#176b61] hover:bg-[#11564e] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-[#edf7f5] text-slate-800 hover:text-[#176b61] border border-slate-200'
                  }`}
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">
          * Prices vary by property size, condition, and location. All prices confirmed upfront — no hidden charges.
        </p>
      </div>
    </section>
  )
}
