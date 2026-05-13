import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react'
import { allServices } from './Services'

// Collect all unique photos from all service galleries
const allPhotos = []
const seen = new Set()
allServices.forEach(({ title, gallery }) => {
  if (!gallery) return
  gallery.forEach(src => {
    if (!seen.has(src)) {
      seen.add(src)
      allPhotos.push({ src, service: title })
    }
  })
})

const INITIAL_SHOW = 6

export default function AllPhotosGrid() {
  const [showAll, setShowAll] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  const visible = showAll ? allPhotos : allPhotos.slice(0, INITIAL_SHOW)

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => Math.min(i + 1, allPhotos.length - 1))
      if (e.key === 'ArrowLeft') setLightbox(i => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

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

        {/* Grid — 6 per row desktop, 3 tablet, 2 mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {visible.map(({ src, service }, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100"
            >
              <img
                src={src}
                alt={service}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-[10px] font-semibold truncate block">{service}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Reveal button */}
        {allPhotos.length > INITIAL_SHOW && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(v => !v)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-brand-600 text-white font-semibold text-sm rounded-xl transition-colors"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>See All {allPhotos.length} Photos <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(i => Math.max(i - 1, 0)) }}
            className={`absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors ${lightbox === 0 ? 'opacity-30 cursor-default' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div onClick={e => e.stopPropagation()} className="flex flex-col items-center gap-3">
            <img src={allPhotos[lightbox].src} alt="" className="max-h-[80vh] max-w-[85vw] object-contain rounded-xl shadow-2xl" />
            <span className="text-white/70 text-sm font-medium">{allPhotos[lightbox].service}</span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(i => Math.min(i + 1, allPhotos.length - 1)) }}
            className={`absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors ${lightbox === allPhotos.length - 1 ? 'opacity-30 cursor-default' : ''}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 text-white/50 text-sm">{lightbox + 1} / {allPhotos.length}</div>
        </div>
      )}
    </section>
  )
}
