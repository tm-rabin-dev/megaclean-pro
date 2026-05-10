import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
    after: '/images/carpet-after-02.jpg',
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
  // ── PLACEHOLDERS (add photos when client provides them) ──
  // {
  //   service: 'Kitchen Deep Clean',
  //   description: 'Kitchen surfaces degreased, sanitised, and polished.',
  //   before: '/images/kitchen-before-01.jpg',   ← ADD THIS FILE
  //   after: '/images/kitchen-after-01.jpg',     ← ADD THIS FILE
  // },
  // {
  //   service: 'Bathroom Deep Clean',
  //   description: 'Bathroom tiles, grout, and glass restored to a fresh finish.',
  //   before: '/images/bathroom-before-01.jpg',  ← ADD THIS FILE
  //   after: '/images/bathroom-after-01.jpg',    ← ADD THIS FILE
  // },
]

const INITIAL_COUNT = 4

function TransformationCard({ service, description, before, after }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex aspect-[16/9]">
        <div className="relative w-1/2 overflow-hidden">
          <img src={before} alt={`${service} before`} loading="lazy" className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 bg-slate-900/70 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm uppercase tracking-wide">
            Before
          </span>
        </div>
        <div className="w-0.5 bg-white flex-shrink-0 relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center">
            <span className="text-slate-500 text-xs font-bold">→</span>
          </div>
        </div>
        <div className="relative w-1/2 overflow-hidden">
          <img src={after} alt={`${service} after`} loading="lazy" className="w-full h-full object-cover" />
          <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            After
          </span>
        </div>
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
  const remaining = transformations.length - INITIAL_COUNT

  return (
    <section className="py-24 px-6 bg-[#f0f6ff]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-600 bg-white px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Real Cleaning Transformations
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
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
        <div className="text-center mt-12">
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
