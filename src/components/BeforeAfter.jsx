import { useState, useRef } from 'react'

const transformations = [
  {
    room: 'Carpet',
    beforeImage: '/images/carpet-before-01.jpg',
    afterImage: '/images/carpet-after-01.jpg',
    beforeDesc: 'Heavy staining, embedded dirt and foot traffic marks across the carpet',
    afterDesc: 'Deep cleaned, stains lifted, carpet restored to a fresh condition',
  },
  {
    room: 'Couch',
    beforeImage: '/images/couch-before-01.jpg',
    afterImage: '/images/couch-after-01.jpg',
    beforeDesc: 'Built-up grime, stains and odours across the upholstery fabric',
    afterDesc: 'Fully restored fabric, stains removed, fresh and clean throughout',
  },
  {
    room: 'Curtains',
    beforeImage: '/images/curtain-before-01.jpg',
    afterImage: '/images/curtain-after-01.jpg',
    beforeDesc: 'Years of dust, dirt and discolouration built up in the fabric',
    afterDesc: 'Bright, fresh and clean curtains — looking like new again',
  },
]

function CompareSlider({ beforeImage, afterImage, beforeAlt, afterAlt }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updatePosition = (clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }

  const onMouseDown = (e) => {
    isDragging.current = true
    updatePosition(e.clientX)
    e.preventDefault()
  }

  const onMouseMove = (e) => {
    if (isDragging.current) updatePosition(e.clientX)
  }

  const onMouseUp = () => { isDragging.current = false }

  const onTouchStart = (e) => {
    isDragging.current = true
    updatePosition(e.touches[0].clientX)
  }

  const onTouchMove = (e) => {
    if (isDragging.current) updatePosition(e.touches[0].clientX)
  }

  const onTouchEnd = () => { isDragging.current = false }

  return (
    <div
      ref={containerRef}
      className="relative h-64 overflow-hidden select-none"
      style={{ cursor: 'col-resize', touchAction: 'none' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* After image — right side */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Before image — left side, clipped */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white pointer-events-none">
        Before
      </span>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white pointer-events-none">
        After
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white/90 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-30 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
          <path d="M6 1L1 6L6 11" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 1L19 6L14 11" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="section-pad bg-slate-900 text-white overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold text-cyan-400 bg-cyan-400/10 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            The Clenza Difference
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Drag the slider to see the transformation. Our cleaners do not just clean — they restore.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map(({ room, beforeImage, afterImage, beforeDesc, afterDesc }) => (
            <div key={room} className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <CompareSlider
                beforeImage={beforeImage}
                afterImage={afterImage}
                beforeAlt={`${room} before Clenza cleaning`}
                afterAlt={`${room} after Clenza cleaning`}
              />

              <div className="p-5">
                <h3 className="font-bold text-white mb-3">{room}</h3>
                <div className="flex gap-3 text-xs">
                  <div className="flex-1 bg-white/5 rounded-xl p-3">
                    <p className="text-white/40 font-semibold mb-1">BEFORE</p>
                    <p className="text-white/60 leading-relaxed">{beforeDesc}</p>
                  </div>
                  <div className="flex-1 bg-cyan-500/10 rounded-xl p-3 border border-cyan-500/20">
                    <p className="text-cyan-400 font-semibold mb-1">AFTER</p>
                    <p className="text-white/80 leading-relaxed">{afterDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
