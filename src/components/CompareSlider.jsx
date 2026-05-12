import { useState, useRef } from 'react'

export default function CompareSlider({ beforeImage, afterImage, beforeAlt, afterAlt, className = '' }) {
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

  const onMouseDown = (e) => { isDragging.current = true; updatePosition(e.clientX); e.preventDefault() }
  const onMouseMove = (e) => { if (isDragging.current) updatePosition(e.clientX) }
  const onMouseUp   = ()  => { isDragging.current = false }
  const onTouchStart = (e) => { isDragging.current = true; updatePosition(e.touches[0].clientX) }
  const onTouchMove  = (e) => { if (isDragging.current) updatePosition(e.touches[0].clientX) }
  const onTouchEnd   = ()  => { isDragging.current = false }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
      style={{ cursor: 'col-resize', touchAction: 'none' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* After image — full background */}
      <img src={afterImage} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" draggable={false} />

      {/* Before image — left side, clipped */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white pointer-events-none backdrop-blur-sm">
        Before
      </span>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white pointer-events-none">
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
