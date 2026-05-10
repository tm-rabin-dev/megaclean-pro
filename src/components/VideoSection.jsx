const videos = [
  {
    src: '/videos/cleaning-video-01.mp4',
    title: 'Mattress Cleaning',
    desc: 'Watch the transformation — steam extraction bringing a mattress back to life.',
  },
  {
    src: '/videos/cleaning-video-02.mp4',
    title: 'Deep Mattress Steam Clean',
    desc: 'Removing stains and bacteria with professional-grade equipment.',
  },
  {
    src: '/videos/cleaning-video-03.mp4',
    title: 'Upholstery Cleaning',
    desc: 'Restoring fabric chairs to their original clean condition.',
  },
]

export default function VideoSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-brand-600 bg-brand-100 px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Watch Us Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Real Jobs. Real Results.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            No stock footage. No actors. Just our team doing what we do every day across Sydney.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {videos.map(({ src, title, desc }, i) => (
            <div
              key={title}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative bg-slate-900 aspect-[9/16] sm:aspect-[3/4]">
                <video
                  src={src}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
