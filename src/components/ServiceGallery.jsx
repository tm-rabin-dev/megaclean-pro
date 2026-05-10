import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export default function ServiceGallery({ images }) {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open === null) return
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen(i => Math.min(i + 1, images.length - 1))
      if (e.key === 'ArrowLeft') setOpen(i => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, images.length])

  useEffect(() => {
    document.body.style.overflow = open !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="mt-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
          Real job photos — click to enlarge
        </p>
        <div className="grid grid-cols-3 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="relative group aspect-square overflow-hidden rounded-xl bg-slate-100"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setOpen(i => Math.max(i - 1, 0)) }}
            className={`absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors ${open === 0 ? 'opacity-30 cursor-default' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={images[open]}
            alt=""
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); setOpen(i => Math.min(i + 1, images.length - 1)) }}
            className={`absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors ${open === images.length - 1 ? 'opacity-30 cursor-default' : ''}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {open + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
