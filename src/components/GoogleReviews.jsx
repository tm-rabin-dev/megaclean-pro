import { Star, ExternalLink } from 'lucide-react'

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

const reviews = [
  { name: 'Sarah M.', location: 'Bondi Beach', rating: 5, text: "Absolutely brilliant service. Got my full bond back — couldn't be happier.", time: '2 weeks ago' },
  { name: 'James T.',  location: 'Newtown',     rating: 5, text: "My Airbnb went from 4.6 to 4.9 stars. Reliable, on-time, every time.", time: '1 month ago' },
  { name: 'Lisa K.',   location: 'Sydney CBD',  rating: 5, text: "First cleaning company that actually does what they promise. Impressed.", time: '3 weeks ago' },
]

export default function GoogleReviews() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <GoogleG />
          <div>
            <div className="font-bold text-slate-900 text-sm">Clenza</div>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-xs font-bold text-slate-700">5.0</span>
              <span className="text-xs text-slate-400">· 500+ reviews</span>
            </div>
          </div>
        </div>
        <a href="#" className="text-xs text-brand-600 font-semibold flex items-center gap-1 hover:underline">
          View on Google <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Mini reviews */}
      <div className="space-y-4">
        {reviews.map(({ name, location, rating, text, time }) => (
          <div key={name} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs flex-shrink-0">
              {name[0]}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-bold text-slate-800">{name}</span>
                <span className="text-xs text-slate-400">· {location}</span>
              </div>
              <div className="flex mb-1">
                {[...Array(rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">"{text}"</p>
              <p className="text-xs text-slate-400 mt-0.5">{time}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-400 text-center mt-4 pt-4 border-t border-slate-100">
        Replace with a live Google Reviews embed or Elfsight widget
      </p>
    </div>
  )
}
