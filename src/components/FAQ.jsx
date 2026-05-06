import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Do you bring your own cleaning supplies and equipment?',
    a: "Yes — our cleaners arrive fully equipped with professional-grade, eco-friendly cleaning products and all necessary equipment. You don't need to provide anything. If you have specific product preferences, just let us know when booking.",
  },
  {
    q: 'Can I book same-day cleaning?',
    a: "Yes! Subject to team availability, we offer same-day and next-morning cleaning slots. Contact us as early as possible to secure your preferred time. For urgent bookings, calling directly is fastest.",
  },
  {
    q: 'Are your cleaners background-checked and insured?',
    a: "Absolutely. Every cleaner has undergone a thorough police background check, identity verification, and reference check. All cleaners also carry public liability insurance, so you and your property are fully protected.",
  },
  {
    q: 'Do you offer end-of-lease (bond) cleaning?',
    a: "Yes — it's one of our specialties. Our bond cleaning follows a real estate–approved checklist covering ovens, rangehoods, carpets, windows, bathrooms, and everything in between. We also offer a re-clean guarantee.",
  },
  {
    q: "How do I get a quote? Will I be surprised by the final price?",
    a: "Fill in our online quote form or call us directly. We give you a clear, upfront price based on your property size and service — no hidden fees, no surprise add-ons. The price we quote is the price you pay.",
  },
  {
    q: 'What suburbs do you service in Sydney?',
    a: "We service all major Sydney suburbs including the CBD, Eastern Suburbs (Bondi, Coogee, Randwick), Inner West (Newtown, Leichhardt), North Shore (Chatswood, Mosman), Parramatta, and Western Sydney.",
  },
  {
    q: "What if I'm not happy with the clean?",
    a: "Our 100% satisfaction guarantee means you're covered. If anything isn't right, contact us within 24 hours and we'll send a cleaner back to fix the issue completely free of charge. No hassle, no arguments.",
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-2xl overflow-hidden transition-colors ${open ? 'border-brand-200' : 'border-slate-200 hover:border-slate-300'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-semibold text-sm leading-snug ${open ? 'text-brand-600' : 'text-slate-900'}`}>{q}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180 text-brand-500' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-slate-100 pt-4">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ({ limit }) {
  const displayed = limit ? faqs.slice(0, limit) : faqs
  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12" data-reveal>
          <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500">Everything you need to know before booking.</p>
        </div>
        <div className="flex flex-col gap-3" data-reveal-stagger>
          {displayed.map((item, i) => (
            <div key={item.q} style={{ transitionDelay: `${i * 55}ms` }}>
              <Item {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
