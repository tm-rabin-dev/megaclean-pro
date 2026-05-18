import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

const services = [
  {
    category: 'Carpet & Flooring',
    emoji: '🧹',
    items: [
      { name: 'Carpet Cleaning', price: '$45/room', note: 'Min. $120 · Deodorise +$25' },
      { name: 'Carpet Repair', price: 'From $120', note: 'Burns, tears & fraying edges' },
      { name: 'Carpet Restretching', price: '$80/room', note: 'Min. $120 · Removes ripples & bubbles' },
      { name: 'Rug Cleaning', price: 'From $99', note: 'Small $99 · Medium $149 · Large $199+' },
    ],
  },
  {
    category: 'Upholstery & Soft Furnishings',
    emoji: '🛋️',
    items: [
      { name: 'Couch / Sofa Cleaning', price: '$45/seat', note: 'Min. $120 · 3-seater from $135' },
      { name: 'Leather Couch Cleaning', price: '$60/seat', note: 'Min. $150 · Includes conditioning' },
      { name: 'Mattress Cleaning', price: 'From $99', note: 'Single $99 · Queen $149 · King $179' },
      { name: 'Curtain Cleaning', price: '$60/window', note: 'On-site steam · No take-down needed' },
      { name: 'Bedframe Cleaning', price: 'From $99', note: 'Single $99 · Queen $129 · King $149' },
    ],
  },
  {
    category: 'End of Lease & General',
    emoji: '🔑',
    items: [
      { name: 'End of Lease Clean', price: 'From $299', note: '1BR $299 · 2BR $399 · 3BR $499 · 4BR $649' },
      { name: 'Window Cleaning', price: '$15/window', note: 'Min. $99 · Interior & exterior' },
      { name: 'Office / Commercial Clean', price: 'From $149', note: 'After-hours available · Quote required' },
    ],
  },
  {
    category: 'Emergency Services',
    emoji: '🚨',
    items: [
      { name: 'Flood & Water Damage', price: 'Call for quote', note: 'Emergency response · 0415 410 507', emergency: true },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-xs font-bold text-[#176b61] bg-[#edf7f5] px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">No Surprises. Ever.</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Clear pricing for every service. Final quote confirmed upfront — always.
          </p>
        </div>

        <div className="space-y-6" data-reveal>
          {services.map(({ category, emoji, items }) => (
            <div key={category} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <span className="text-xl">{emoji}</span>
                <h3 className="font-extrabold text-slate-900 text-base">{category}</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {items.map(({ name, price, note, emergency }) => (
                  <div key={name} className="flex items-center justify-between gap-4 px-6 py-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 text-sm">{name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{note}</div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      {emergency ? (
                        <a
                          href="tel:0415410507"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 font-bold text-sm rounded-xl hover:bg-red-100 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" /> Call Now
                        </a>
                      ) : (
                        <span className="font-extrabold text-[#176b61] text-base">{price}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#176b61] rounded-2xl p-8 text-center text-white" data-reveal>
          <h3 className="text-xl font-extrabold mb-2">Not sure what you need?</h3>
          <p className="text-brand-100 text-sm mb-6">Get a free quote in 60 seconds — no obligation, no spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#176b61] font-bold text-sm rounded-xl hover:bg-brand-50 transition-colors"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0415410507"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/40 hover:border-white text-white font-semibold text-sm rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" /> Call 0415 410 507
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          * All prices are starting rates. Final price confirmed before any work begins — no hidden charges.
        </p>
      </div>
    </section>
  )
}
