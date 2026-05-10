import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Check, ArrowRight, Calendar } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import ServiceGallery from '../components/ServiceGallery'
import { allServices } from '../components/Services'

export default function ServicesPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }, [hash])

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
            {allServices.map(({ id, emoji, bgColor, borderColor, title, tagline, description, includes, image, imageAlt, gallery }, i) => (
              <div
                key={id}
                id={id}
                style={{ transitionDelay: `${i * 70}ms` }}
                className={`scroll-mt-24 rounded-2xl border ${borderColor} ${bgColor} overflow-hidden flex flex-col`}
              >
                {/* Real photo */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute left-4 bottom-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/90 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      {emoji}
                    </div>
                    <span className="text-white font-extrabold text-lg drop-shadow">{title}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">{tagline}</div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{description}</p>

                  {/* Includes */}
                  <ul className="grid grid-cols-2 gap-y-1.5 gap-x-3 mb-5 flex-1">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <Link
                      to="/get-quote"
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                    >
                      <Calendar className="w-4 h-4" /> Book This Service
                    </Link>
                    <Link
                      to="/get-quote"
                      className="flex items-center justify-center gap-2 px-5 py-3 border-2 border-brand-200 hover:border-brand-400 text-brand-600 font-semibold text-sm rounded-xl transition-colors"
                    >
                      Get a Free Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {gallery && gallery.length > 0 && (
                    <ServiceGallery images={gallery} />
                  )}
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
