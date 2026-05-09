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
            See the transformation. Our cleaners do not just clean - they restore.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map(({ room, beforeImage, afterImage, beforeDesc, afterDesc }) => (
            <div key={room} className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <div className="relative h-56 flex">
                <div className="w-1/2 relative overflow-hidden">
                  <img src={beforeImage} alt={`${room} before Clenza cleaning`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-slate-950/20" />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    Before
                  </span>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-slate-700 font-extrabold text-sm">to</span>
                  </div>
                </div>

                <div className="w-1/2 relative overflow-hidden">
                  <img src={afterImage} alt={`${room} after Clenza cleaning`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-cyan-950/10" />
                  <span className="absolute right-3 top-3 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    After
                  </span>
                </div>
              </div>

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
