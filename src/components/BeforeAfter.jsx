import CompareSlider from './CompareSlider'

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
                className="h-64"
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
