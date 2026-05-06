import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const allServices = [
  {
    id: 'end-of-lease',
    emoji: '🔑',
    bgColor: 'bg-[#fbf6ef]',
    borderColor: 'border-[#eadfce]',
    title: 'End-of-Lease Cleaning',
    tagline: 'Get your full bond back',
    image: '/images/bathroom-team-cleaning.png',
    imageAlt: 'Clenza team completing a detailed end-of-lease bathroom clean',
    servicePageImage: '/images/services/end-of-lease-cleaning.jpg',
    servicePageImageAlt: 'Clean modern apartment ready for end-of-lease handover',
    description:
      'Comprehensive bond clean following a real-estate–approved checklist. Ovens, rangehoods, skirting boards, windows — everything covered to meet landlord and agent standards.',
    includes: [
      'All rooms, walls & skirting boards',
      'Oven, rangehood & appliances',
      'Bathrooms & laundry',
      'Carpets, windows & tracks',
      'Bond-back guarantee',
    ],
  },
  {
    id: 'house',
    emoji: '🏠',
    bgColor: 'bg-[#f4f8f7]',
    borderColor: 'border-[#ddebe8]',
    title: 'House Cleaning',
    tagline: 'Regular or one-off',
    image: '/images/vacuum-living-cleaning.png',
    imageAlt: 'Cleaner vacuuming a Sydney living room',
    servicePageImage: '/images/services/house-cleaning.jpg',
    servicePageImageAlt: 'Bright clean living room after professional house cleaning',
    description:
      'Keep your home consistently clean without lifting a finger. Regular fortnightly cleans or a one-off when you need it — flexible scheduling around your life.',
    includes: [
      'All bedrooms & living areas',
      'Kitchen & appliance exteriors',
      'Bathrooms & toilets',
      'Vacuuming & mopping',
      'Dusting & surfaces',
    ],
  },
  {
    id: 'deep',
    emoji: '✨',
    bgColor: 'bg-[#f1faf7]',
    borderColor: 'border-[#d7eee7]',
    title: 'Deep Cleaning',
    tagline: 'Top-to-bottom intensive clean',
    image: '/images/dirty-bench-cleaning.png',
    imageAlt: 'Cleaner wiping a visibly dirty kitchen bench during a deep clean',
    servicePageImage: '/images/services/deep-cleaning.jpg',
    servicePageImageAlt: 'Spotless bathroom after detailed deep cleaning',
    description:
      'The intensive version of a standard clean. Perfect for spring cleans, pre-sale preparation, or properties that need extra attention.',
    includes: [
      'Everything in regular clean',
      'Inside oven, fridge & microwave',
      'Skirting boards & light fittings',
      'Window sills & door tracks',
      'Cabinet interiors',
    ],
  },
  {
    id: 'office',
    emoji: '🏢',
    bgColor: 'bg-[#f7f7f4]',
    borderColor: 'border-[#e7e6df]',
    title: 'Office Cleaning',
    tagline: 'Professional & discreet',
    image: '/images/carpet-cleaning.png',
    imageAlt: 'Professional floor cleaning machine in a commercial lobby',
    servicePageImage: '/images/services/office-cleaning.jpg',
    servicePageImageAlt: 'Cleaner wiping desks in a modern office workspace',
    description:
      'Maintain a clean, professional workspace that impresses clients and keeps your team productive. After-hours and weekend slots available.',
    includes: [
      'Desks, chairs & workstations',
      'Kitchen & break room',
      'Toilets & bathrooms',
      'Reception & common areas',
      'After-hours scheduling',
    ],
  },
  {
    id: 'airbnb',
    emoji: '🛏',
    bgColor: 'bg-[#fbf3f0]',
    borderColor: 'border-[#ead8d0]',
    title: 'Airbnb / Short-Stay',
    tagline: '5-star guest reviews',
    image: '/images/spray-kitchen-cleaning.png',
    imageAlt: 'Cleaner with spray bottle preparing a short-stay kitchen',
    servicePageImage: '/images/services/airbnb-cleaning.jpg',
    servicePageImageAlt: 'Cleaner preparing a bright bedroom for short-stay guests',
    description:
      'Fast, reliable turnaround cleaning between guest stays. We coordinate around your check-in times and ensure everything is guest-ready.',
    includes: [
      'Full clean between guests',
      'Fresh linen & towels set up',
      'Kitchen reset & restock',
      'Bathrooms sanitised',
      'Flexible same-day slots',
    ],
  },
  {
    id: 'carpet',
    emoji: '🪣',
    bgColor: 'bg-[#f0f8f5]',
    borderColor: 'border-[#d8ebe4]',
    title: 'Carpet Cleaning',
    tagline: 'Deep stain removal',
    image: '/images/vacuum-living-cleaning.png',
    imageAlt: 'Professional vacuum cleaning in a furnished living room',
    servicePageImage: '/images/services/carpet-cleaning.jpg',
    servicePageImageAlt: 'Professional floor cleaning machine for carpet cleaning',
    description:
      'Professional hot-water extraction and dry cleaning to remove deep stains, odours, and allergens from all carpet types.',
    includes: [
      'Hot water extraction',
      'Pre-treatment of stains',
      'All carpet types',
      'Deodorising treatment',
      'Quick-dry process',
    ],
  },
  {
    id: 'window',
    emoji: '🪟',
    bgColor: 'bg-[#f3f8fa]',
    borderColor: 'border-[#dbe9ec]',
    title: 'Window Cleaning',
    tagline: 'Streak-free guarantee',
    image: '/images/window-cleaning.png',
    imageAlt: 'Cleaner washing apartment balcony windows',
    servicePageImage: '/images/services/window-cleaning.jpg',
    servicePageImageAlt: 'Cleaner washing large apartment windows',
    description:
      'Interior and exterior window cleaning for homes and commercial premises. Streak-free results that let the light back in.',
    includes: [
      'Interior & exterior glass',
      'Window frames & sills',
      'Sliding door tracks',
      'Flyscreen cleaning',
      'High-reach windows',
    ],
  },
  {
    id: 'move',
    emoji: '📦',
    bgColor: 'bg-[#f7f4f8]',
    borderColor: 'border-[#e5ddea]',
    title: 'Move-In / Move-Out',
    tagline: 'Start or leave fresh',
    image: '/images/oven-cleaning.png',
    imageAlt: 'Cleaner scrubbing an oven during a move-out clean',
    servicePageImage: '/images/services/move-in-move-out-cleaning.jpg',
    servicePageImageAlt: 'Empty clean apartment ready for move-in or move-out cleaning',
    description:
      'Moving is stressful enough. Let us handle the cleaning — whether you\'re leaving a property spotless or arriving into a fresh space.',
    includes: [
      'Full property clean',
      'Cupboards inside & out',
      'Bathrooms & kitchen deep clean',
      'Floors vacuumed & mopped',
      'Same-day available',
    ],
  },
]

export default function Services({ limit, showViewAll = false }) {
  const displayed = limit ? allServices.slice(0, limit) : allServices

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-xs font-bold text-[#176b61] bg-[#edf7f5] px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Every Clean, Done Right
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From weekly home maintenance to one-off deep cleans and bond cleans — professional every time, with no hidden fees.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-stagger>
          {displayed.map(({ id, emoji, bgColor, borderColor, title, tagline, description, image, imageAlt }, i) => (
            <div
              key={id}
              id={id}
              style={{ transitionDelay: `${i * 70}ms` }}
              className={`group rounded-2xl border ${borderColor} ${bgColor} overflow-hidden hover:shadow-lg hover:shadow-slate-900/8 transition-shadow duration-300 flex flex-col`}
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <img src={image} alt={imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-2xl shadow-sm backdrop-blur-sm">
                  {emoji}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-xs font-bold text-[#176b61] uppercase tracking-wide mb-1">{tagline}</div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>
                <Link
                  to="/get-quote"
                  className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#176b61] hover:text-[#11564e] group/link"
                >
                  Book this service
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 hover:border-[#176b61] text-slate-700 hover:text-[#176b61] font-semibold rounded-xl transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
