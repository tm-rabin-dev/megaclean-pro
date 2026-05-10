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
  // {
  //   service: 'Oven Cleaning',
  //   description: 'Oven degreased inside and out — looks brand new.',
  //   before: '/images/oven-before-01.jpg',      ← ADD THIS FILE
  //   after: '/images/oven-after-01.jpg',        ← ADD THIS FILE
  // },
  // {
  //   service: 'End of Lease Clean',
  //   description: 'End-of-lease clean prepared and passed final inspection.',
  //   before: '/images/lease-before-01.jpg',     ← ADD THIS FILE
  //   after: '/images/lease-after-01.jpg',       ← ADD THIS FILE
  // },
]

export default function TransformationsGallery() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
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
          {transformations.map(({ service, description, before, after }, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Before / After images */}
              <div className="flex aspect-[16/9]">
                {/* Before */}
                <div className="relative w-1/2 overflow-hidden">
                  <img
                    src={before}
                    alt={`${service} before`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/70 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm uppercase tracking-wide">
                    Before
                  </span>
                </div>

                {/* Divider */}
                <div className="w-0.5 bg-white flex-shrink-0 relative z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center">
                    <span className="text-slate-500 text-xs font-bold">→</span>
                  </div>
                </div>

                {/* After */}
                <div className="relative w-1/2 overflow-hidden">
                  <img
                    src={after}
                    alt={`${service} after`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    After
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="px-6 py-5 flex items-center gap-4">
                <span className="flex-shrink-0 inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full whitespace-nowrap">
                  {service}
                </span>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
