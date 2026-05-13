import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react'
import { allServices } from './Services'

const categories = allServices
  .filter(s => s.gallery && s.gallery.length > 0)
  .map(({ title, emoji, gallery }) => ({ title, emoji, photos: gallery }))

export default function AllPhotosGrid() {
  const [openIndex, setOpenIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(lb => {
        if (!lb) return null
        const max = categories[lb.cat].photos.length - 1
        return lb.idx < max ? { ...lb, idx: lb.idx + 1 } : lb
      })
      if (e.key === 'ArrowLeft') setLightbox(lb => {
        if (!lb) return null
        return lb.idx > 0 ? { ...lb, idx: lb.idx - 1 } : lb
      })
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const lbPhotos = lightbox ? categories[lightbox.cat].photos : []
  const lbSrc    = lightbox ? lbPhotos[lightbox.idx] : null
  const lbTitle  = lightbox ? categories[lightbox.cat].title : ''

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Real Job Photos
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Every Job, Real Photos
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            No stock images. Every photo below is from a real job completed by our team across Sydney.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {categories.map(({ title, emoji, photos }, i) => (
            <div key={title} className="border border-slate-200 rounded-2xl overflow-hidden">

              {/* Category header */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 hover:bg-brand-50 transition-colors text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">{emoji}</span>
                  <span className="font-bold text-slate-900">{title}</span>
                </span>
                {openIndex === i
                  ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
              </button>

              {/* Photos grid */}
              {openIndex === i && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-4 bg-white">
                  {photos.map((src, j) => (
                    <button
                      key={j}
                      onClick={() => setLightbox({ cat: i, idx: j })}
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
          ))}
        </div>
      </div>

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
              src={lbSrc}
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
    </section>
  )
}
