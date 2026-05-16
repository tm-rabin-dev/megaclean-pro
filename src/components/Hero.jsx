import { Link } from 'react-router-dom'
import { Phone, Star, CheckCircle, ArrowRight, Award, Shield, Zap } from 'lucide-react'
import CompareSlider from './CompareSlider'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const bullets = [
  'Fully insured & police-checked cleaners',
  'Transparent upfront pricing — no surprises',
  'Same-day and weekend availability',
  '100% satisfaction guarantee',
]

const stats = [
  { icon: Star,   value: '5.0★',    label: 'Google Rating',   color: 'text-amber-500' },
  { icon: Shield, value: 'Insured', label: 'Public Liability', color: 'text-brand-500' },
  { icon: Zap,    value: 'Same Day',label: 'Available',        color: 'text-emerald-500' },
]

export default function Hero() {
  return (
    <section className="bg-white pt-28">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 xl:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <div>
            <div className="hero-1 inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Sydney's Trusted Cleaning Service
            </div>

            <h1 className="hero-2 font-serif text-4xl sm:text-5xl xl:text-[52px] font-bold text-slate-900 leading-[1.12] mb-5">
              A Cleaner Home,<br />
              <span className="text-brand-600">Booked in 60 Seconds</span>
            </h1>

            <p className="hero-3 text-lg text-slate-500 leading-relaxed mb-7 max-w-lg">
              Reliable home, office, end-of-lease and Airbnb cleaning across Sydney — verified cleaners, clear pricing, and a happiness guarantee.
            </p>

            <ul className="hero-3 space-y-3 mb-9">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="hero-4 flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                to="/get-quote"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-base rounded-xl transition-colors shadow-lg shadow-brand-600/20"
              >
                Get Instant Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+61415410507"
                className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-200 hover:border-brand-400 text-slate-700 hover:text-brand-600 font-semibold text-base rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" /> Call 0415 410 507
              </a>
              <a
                href="https://wa.me/61415410507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-xl transition-colors"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>

            <div className="hero-5 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-500 font-medium">
                <span className="font-bold text-slate-900">5.0</span> — 500+ verified reviews
              </span>
            </div>
          </div>

          {/* ── RIGHT: Before / After ── */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-slate-200">
              <CompareSlider
                beforeImage="/images/leather-couch-before-02.jpg"
                afterImage="/images/leather-couch-after-02.jpg"
                beforeAlt="Leather couch before cleaning"
                afterAlt="Leather couch after cleaning"
                className="h-full w-full"
              />
              <div className="absolute bottom-3 left-3 z-10 bg-white/90 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm pointer-events-none">
                📍 Sydney, NSW
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-5 left-6 right-6 bg-white rounded-xl shadow-lg border border-slate-100 px-5 py-4 flex items-center justify-between">
              {stats.map(({ icon: Icon, value, label, color }, i) => (
                <div key={label} className={`flex items-center gap-2 ${i < stats.length - 1 ? 'pr-4 border-r border-slate-100' : ''}`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">{value}</div>
                    <div className="text-xs text-slate-400">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="bg-brand-800 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-2 text-sm font-medium text-white/80">
            {[
              '✓ Police-checked cleaners',
              '✓ $20M public liability insured',
              '✓ No lock-in contracts',
              '✓ Eco-friendly products',
              '✓ All Sydney suburbs',
            ].map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
