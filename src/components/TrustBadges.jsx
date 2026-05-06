const badges = [
  { icon: '🛡️', title: '$20M Insured', desc: 'Public liability cover' },
  { icon: '✅', title: 'Police Checked', desc: 'Every single cleaner' },
  { icon: '🌿', title: 'Eco-Friendly', desc: 'Safe for kids & pets' },
  { icon: '⭐', title: '5-Star Rated', desc: '500+ Google reviews' },
  { icon: '🔄', title: 'Free Re-clean', desc: '100% guarantee' },
]

export default function TrustBadges() {
  return (
    <section className="py-10 px-6 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-brand-50 transition-colors group">
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 block">{icon}</span>
              <div className="text-sm font-extrabold text-slate-900">{title}</div>
              <div className="text-xs text-slate-500 mt-0.5">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
