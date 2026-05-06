import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Bondi Beach',
    service: 'End-of-Lease Clean',
    avatar: '👩',
    date: '2 weeks ago',
    text: "I was terrified about losing my bond after 3 years in my apartment. Clenza were thorough, professional, and got every corner I'd forgotten about. Got my full bond back — I can't recommend them enough.",
  },
  {
    name: 'James T.',
    location: 'Newtown',
    service: 'Airbnb Cleaning',
    avatar: '👨',
    date: '1 month ago',
    text: "As an Airbnb host with 3 properties, reliable turnaround cleaning is everything. They show up on time, every time. My guest reviews went from 4.6 to 4.9 stars since switching to Clenza.",
  },
  {
    name: 'Lisa K.',
    location: 'Sydney CBD',
    service: 'Office Cleaning',
    avatar: '👩‍💼',
    date: '3 weeks ago',
    text: "We tried three different office cleaning companies. Clenza is the first that actually does what they say — consistent quality, transparent invoices, and genuinely responsive service.",
  },
  {
    name: 'Michael R.',
    location: 'North Shore',
    service: 'Deep Clean',
    avatar: '👨‍💼',
    date: '5 days ago',
    text: "Booked a deep clean before listing our property for rent. The transformation was remarkable — oven, windows, bathrooms looked brand new. Worth every cent and I'll absolutely book again.",
  },
  {
    name: 'Priya S.',
    location: 'Parramatta',
    service: 'Regular House Clean',
    avatar: '👩',
    date: '1 week ago',
    text: "Super easy to book online, great communication, cleaner arrived right on time. My house hasn't looked this good since we moved in. Set up a fortnightly recurring clean now.",
  },
  {
    name: 'Tom W.',
    location: 'Surry Hills',
    service: 'Move-Out Clean',
    avatar: '🧑',
    date: '3 days ago',
    text: "Needed a last-minute move-out clean and they fit me in the next morning. Fast, professional, the place was spotless. The property manager was genuinely impressed. Highly recommend.",
  },
]

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-xs font-bold text-brand-600 bg-brand-100 px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5">
            What Our Customers Say
          </h2>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-5 bg-white border border-slate-200 rounded-2xl px-7 py-4 shadow-sm">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-slate-900">5.0</div>
              <Stars />
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-left">
              <div className="text-sm font-bold text-slate-800">500+ Google Reviews</div>
              <div className="text-xs text-slate-500 mt-0.5">All verified customers</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">✓ Trusted by Sydney homeowners</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-stagger>
          {testimonials.map(({ name, location, service, avatar, date, text }, i) => (
            <div key={name} style={{ transitionDelay: `${i * 75}ms` }} className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col hover:shadow-md transition-shadow">
              <Quote className="w-6 h-6 text-brand-100 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{text}"</p>
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-xl">{avatar}</div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{name}</div>
                    <div className="text-xs text-slate-400">{location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <Stars />
                  <div className="text-xs text-slate-400 mt-1">{date}</div>
                </div>
              </div>
              <span className="mt-3 inline-block text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full self-start">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
