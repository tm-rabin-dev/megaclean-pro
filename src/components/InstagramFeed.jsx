import { Instagram, ExternalLink } from 'lucide-react'

const posts = [
  { bg: 'from-brand-600 to-brand-800', emoji: '✨', caption: 'Kitchen transformation 🏠 End-of-lease ready!', likes: 48 },
  { bg: 'from-terra-400 to-terra-600', emoji: '🛁', caption: 'Bathroom deep clean — sparkling result 🪣', likes: 62 },
  { bg: 'from-brand-500 to-cyan-600',  emoji: '🏢', caption: 'Office clean after hours. Pristine. 💼', likes: 37 },
  { bg: 'from-amber-400 to-orange-500',emoji: '🛋',  caption: 'Airbnb turnaround done in 2 hours ⏱', likes: 55 },
  { bg: 'from-teal-500 to-brand-700',  emoji: '🧹', caption: "5-star guest review incoming 🌟 That's what we do.", likes: 71 },
  { bg: 'from-brand-700 to-slate-700', emoji: '🪟', caption: 'Streak-free windows every time 🌤', likes: 43 },
]

export default function InstagramFeed() {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900">@clenza</div>
              <div className="text-xs text-slate-500">Before &amp; afters · Tips · Team</div>
            </div>
          </div>
          <a
            href="https://instagram.com/clenza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-slate-200 hover:border-brand-400 text-slate-700 hover:text-brand-600 font-semibold text-sm rounded-xl transition-colors"
          >
            Follow Us <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map(({ bg, emoji, caption, likes }, i) => (
            <div
              key={i}
              className={`group relative aspect-square rounded-2xl bg-gradient-to-br ${bg} overflow-hidden cursor-pointer`}
            >
              {/* Photo placeholder — replace with real Instagram photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{emoji}</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center">
                <p className="text-white text-xs font-semibold leading-snug mb-2">{caption}</p>
                <span className="text-white/80 text-xs">❤️ {likes}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Replace gradient placeholders with real Instagram post photos once your account is set up
        </p>
      </div>
    </section>
  )
}
