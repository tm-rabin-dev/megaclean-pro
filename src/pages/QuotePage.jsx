import { Shield, Clock, Star, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import QuoteForm from '../components/QuoteForm'

const trust = [
  { icon: Shield, text: 'Fully insured cleaners' },
  { icon: Clock, text: 'Response within 60 mins' },
  { icon: Star, text: '100% satisfaction guarantee' },
  { icon: CheckCircle, text: 'No hidden fees' },
]

export default function QuotePage() {
  return (
    <>
      <PageHero
        title="Get a Free Quote"
        subtitle="Tell us about your property and preferred date. We'll respond with a clear, upfront price within the hour."
        crumb="Get a Quote"
      />

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 items-start">

          {/* Left: trust signals */}
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Why choose Clenza?</h3>
            <p className="text-slate-500 text-sm mb-7">
              Over 500 Sydney customers trust us for reliable, professional cleaning at fair prices.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {trust.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 p-4">
                  <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5">
              <div className="text-sm font-bold text-slate-900 mb-1">Prefer to talk?</div>
              <p className="text-xs text-slate-500 mb-3">Our team is available Mon–Sat 7am–7pm</p>
              <a
                href="tel:0415410507"
                className="block w-full text-center py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl transition-colors"
              >
                Call 0415 410 507
              </a>
            </div>
          </div>

          {/* Right: form */}
          <QuoteForm standalone />
        </div>
      </section>
    </>
  )
}
