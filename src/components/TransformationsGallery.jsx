import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import CompareSlider from './CompareSlider'

const transformations = [
  // ── CARPET ──────────────────────────────────────────────
  {
    service: 'Carpet Cleaning',
    description: 'Heavy carpet traffic marks removed with deep steam extraction.',
    before: '/images/carpet-before-01.jpg',
    after: '/images/carpet-after-01.jpg',
  },
  {
    service: 'Carpet Cleaning',
    description: 'Badly stained hallway carpet restored to a clean, fresh condition.',
    before: '/images/carpet-before-02.jpg',
    after: '/images/carpet-after-02-new.png',
  },
  {
    service: 'Carpet Cleaning',
    description: 'Carpet deep cleaned and deodorised throughout the property.',
    before: '/images/carpet-before-03.jpg',
    after: '/images/carpet-after-03.jpg',
  },
  // ── COUCH ───────────────────────────────────────────────
  {
    service: 'Couch Cleaning',
    description: 'Fabric sofa refreshed with professional upholstery steam cleaning.',
    before: '/images/couch-before-01.jpg',
    after: '/images/couch-after-01.jpg',
  },
  {
    service: 'Couch Cleaning',
    description: 'Floral fabric upholstery deep cleaned and stains fully removed.',
    before: '/images/couch-before-02.jpg',
    after: '/images/couch-after-02.jpg',
  },
  {
    service: 'Couch Cleaning',
    description: 'Grey sectional couch cleaned, deodorised and restored.',
    before: '/images/couch-before-03.jpg',
    after: '/images/couch-after-03.jpg',
  },
  {
    service: 'Couch Cleaning',
    description: 'Bouclé fabric couch — stains lifted and fabric texture preserved.',
    before: '/images/couch-before-04.jpg',
    after: '/images/couch-after-04.jpg',
  },
  {
    service: 'Couch Cleaning',
    description: 'Beige couch deep cleaned with hot-water extraction and deodorised.',
    before: '/images/couch-before-05.jpg',
    after: '/images/couch-after-05.jpg',
  },
  // ── LEATHER COUCH ────────────────────────────────────────
  {
    service: 'Leather Couch Cleaning',
    description: 'White leather sofa cleaned, conditioned and protected.',
    before: '/images/leather-couch-before-01.jpg',
    after: '/images/leather-couch-after-01.jpg',
  },
  {
    service: 'Leather Couch Cleaning',
    description: 'Beige leather couch restored from heavy wear marks and staining.',
    before: '/images/leather-couch-before-02.jpg',
    after: '/images/leather-couch-after-02.jpg',
  },
  {
    service: 'Leather Couch Cleaning',
    description: 'Grey leather sofa deep cleaned and finished with leather conditioner.',
    before: '/images/leather-couch-before-03.jpg',
    after: '/images/leather-couch-after-03.jpg',
  },
  // ── CHAIRS ──────────────────────────────────────────────
  {
    service: 'Upholstery Cleaning',
    description: 'Cane dining chair cushions professionally cleaned and refreshed.',
    before: '/images/chairs-before-01.jpg',
    after: '/images/chairs-after-01.jpg',
  },
  {
    service: 'Upholstery Cleaning',
    description: 'Timber dining chairs fully cleaned — stains removed across all seats.',
    before: '/images/chairs-before-02.jpg',
    after: '/images/chairs-after-02.jpg',
  },
  // ── CURTAINS ─────────────────────────────────────────────
  {
    service: 'Curtain Cleaning',
    description: 'Heavy curtains deep cleaned — years of dust and discolouration removed.',
    before: '/images/curtain-before-01.jpg',
    after: '/images/curtain-after-01.jpg',
  },
  // ── MATTRESS ─────────────────────────────────────────────
  {
    service: 'Mattress Cleaning',
    description: 'Heavily stained mattress deep cleaned, sanitised and restored.',
    before: '/images/mattress-before-01.png',
    after: '/images/mattress-after-01.png',
  },
  // ── RUG ──────────────────────────────────────────────────
  {
    service: 'Rug Cleaning',
    description: 'Dull, dirty area rug restored — colours lifted and deep soil removed.',
    before: '/images/rug-before-01.png',
    after: '/images/rug-after-01.png',
  },
  // ── WINDOW ───────────────────────────────────────────────
  {
    service: 'Window Cleaning',
    description: 'Grimy streaked windows transformed to a streak-free, crystal clear finish.',
    before: '/images/window-before-01.png',
    after: '/images/window-after-01.png',
  },
]

const INITIAL_COUNT = 4

function TransformationCard({ service, description, before, after }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[16/9]">
        <CompareSlider
          beforeImage={before}
          afterImage={after}
          beforeAlt={`${service} before`}
          afterAlt={`${service} after`}
          className="h-full"
        />
      </div>
      <div className="px-6 py-5 flex items-center gap-4">
        <span className="flex-shrink-0 inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full whitespace-nowrap">
          {service}
        </span>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function TransformationsGallery() {
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? transformations : transformations.slice(0, INITIAL_COUNT)

  return (
    <section className="py-12 px-6 bg-[#f0f6ff]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-brand-600 bg-white px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
            Real Results
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Real Cleaning Transformations
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            See the difference professional cleaning makes across carpets, kitchens, bathrooms, upholstery, windows, and full-property cleans.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visible.map((item, i) => (
            <TransformationCard key={i} {...item} />
          ))}
        </div>

        {/* Reveal button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(v => !v)}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-brand-600 hover:text-white text-brand-600 font-bold text-sm rounded-2xl shadow-sm hover:shadow-md border border-brand-100 hover:border-brand-600 transition-all duration-300"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>See All {transformations.length} Transformations <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>

      </div>
    </section>
  )
}
