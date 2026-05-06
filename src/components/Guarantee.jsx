import { Link } from 'react-router-dom'
import { ShieldCheck, RotateCcw, ArrowRight } from 'lucide-react'

const points = [
  { icon: RotateCcw, text: 'Free re-clean within 24 hours' },
  { icon: ShieldCheck, text: 'No questions asked' },
  { icon: ShieldCheck, text: 'Applies to every service' },
  { icon: ShieldCheck, text: 'Bond-back guarantee included' },
]

export default function Guarantee() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14" data-reveal>
          {/* Badge */}
          <div className="flex-shrink-0">
            <div className="w-44 h-44 bg-brand-600 rounded-full flex flex-col items-center justify-center shadow-2xl shadow-brand-900/40 border-4 border-brand-500/30">
              <ShieldCheck className="w-14 h-14 text-white mb-2" />
              <div className="text-white font-extrabold text-sm text-center leading-tight">
                100%<br />GUARANTEE
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              If You're Not 100% Happy,<br />
              <span className="text-brand-400">We Make It Right — Free.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
              Every clean is backed by our satisfaction guarantee. If anything isn't to your standard, contact us within 24 hours and we'll return to fix any missed area, completely free. No hassle, no arguments.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {points.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-xl px-4 py-3">
                  <Icon className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold text-base rounded-xl transition-colors shadow-lg"
            >
              Book with Confidence
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
