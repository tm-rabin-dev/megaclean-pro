import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { allServices } from '../components/Services'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Cleaning Services"
        subtitle="Professional cleaning for every situation — from weekly home maintenance to end-of-lease cleans and everything in between."
        crumb="Services"
      />

      {/* All services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8" data-reveal-stagger>
            {allServices.map(({ id, emoji, bgColor, borderColor, title, tagline, description, includes }, i) => (
              <div
                key={id}
                id={id}
                style={{ transitionDelay: `${i * 70}ms` }}
                className={`scroll-mt-24 rounded-2xl border ${borderColor} ${bgColor} p-6 sm:p-8 flex flex-col sm:flex-row gap-6`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl border border-white/80">
                    {emoji}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">{tagline}</div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-3">{title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{description}</p>

                  {/* Includes */}
                  <ul className="grid grid-cols-2 gap-y-1.5 gap-x-3 mb-5">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/get-quote"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700"
                  >
                    Get a quote for this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
