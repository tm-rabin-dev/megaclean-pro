import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Check, ArrowRight, Calendar, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { allServices } from '../components/Services'

export default function ServicesPage() {
  const { hash } = useLocation()
  const [openId, setOpenId]   = useState(null)
  const [lightbox, setLightbox] = useState(null) // { id, idx }

  const toggleGallery = (id) => setOpenId(prev => prev === id ? null : id)

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

  useEffect(() => {
    if (!lightbox) return
    const photos = allServices.find(s => s.id === lightbox.id)?.gallery ?? []
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(lb => lb && lb.idx < photos.length - 1 ? { ...lb, idx: lb.idx + 1 } : lb)
      if (e.key === 'ArrowLeft')  setLightbox(lb => lb && lb.idx > 0               ? { ...lb, idx: lb.idx - 1 } : lb)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const lbPhotos = lightbox ? (allServices.find(s => s.id === lightbox.id)?.gallery ?? []) : []
  const lbTitle  = lightbox ?  allServices.find(s => s.id === lightbox.id)?.title : ''

  return (
    <>
      <PageHero
        title="Our Cleaning Services"
        subtitle="Professional cleaning for every situation — from weekly home maintenance to end-of-lease cleans and everything in between."
        crumb="Services"
      />

      {/* All services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {allServices.map(({ id, emoji, bgColor, borderColor, title, tagline, description, includes, image, imageAlt, gallery }) => {
              const isOpen    = openId === id
              const hasPhotos = gallery && gallery.length > 0

              return (
                <div
                  key={id}
                  id={id}
                  className={`scroll-mt-24 rounded-2xl border ${borderColor} ${bgColor} overflow-hidden flex flex-col`}
                >
                  {/* Main photo */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={image}
                      alt={imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    <div className="absolute left-4 bottom-4 flex items-center gap-2">
                      <div className="w-9 h-9 bg-white/90 rounded-xl flex items-center justify-center text-xl shadow-sm">
                        {emoji}
                      </div>
                      <span className="text-white font-extrabold text-base drop-shadow">{title}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">{tagline}</div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>

                    <ul className="grid grid-cols-2 gap-y-1.5 gap-x-3 mb-4 flex-1">
                      {includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <Link
                        to="/get-quote"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                      >
                        <Calendar className="w-4 h-4" /> Book This Service
                      </Link>
                      <Link
                        to="/get-quote"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-brand-200 hover:border-brand-400 text-brand-600 font-semibold text-sm rounded-xl transition-colors"
                      >
                        Get a Free Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Clickable title to reveal photos */}
                    {hasPhotos && (
                      <button
                        onClick={() => toggleGallery(id)}
                        className="flex items-center justify-between mt-4 pt-4 border-t border-black/8 text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors w-full text-left"
                      >
                        <span>{title} — Real Job Photos</span>
                        {isOpen
                          ? <ChevronUp className="w-4 h-4 flex-shrink-0" />
                          : <ChevronDown className="w-4 h-4 flex-shrink-0" />}
                      </button>
                    )}
                  </div>

                  {/* Gallery photos */}
                  {isOpen && hasPhotos && (
                    <div className="grid grid-cols-3 gap-2 p-4 pt-0">
                      {gallery.map((src, j) => (
                        <button
                          key={j}
                          onClick={() => setLightbox({ id, idx: j })}
                          className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100"
                        >
                          <img
                            src={src}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(lb => lb && lb.idx > 0 ? { ...lb, idx: lb.idx - 1 } : lb) }}
            className={`absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors ${lightbox.idx === 0 ? 'opacity-30 cursor-default' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div onClick={e => e.stopPropagation()} className="flex flex-col items-center gap-3">
            <img
              src={lbPhotos[lightbox.idx]}
              alt={lbTitle}
              className="max-h-[80vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
            />
            <span className="text-white/70 text-sm font-medium">{lbTitle}</span>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(lb => lb && lb.idx < lbPhotos.length - 1 ? { ...lb, idx: lb.idx + 1 } : lb) }}
            className={`absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors ${lightbox.idx === lbPhotos.length - 1 ? 'opacity-30 cursor-default' : ''}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 text-white/50 text-sm">
            {lightbox.idx + 1} / {lbPhotos.length}
          </div>
        </div>
      )}
    </>
  )
}
