import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const allServices = [
  {
    id: 'carpet',
    emoji: '🪣',
    bgColor: 'bg-[#f0f8f5]',
    borderColor: 'border-[#d8ebe4]',
    title: 'Carpet Cleaning',
    tagline: 'Deep stain removal',
    image: '/images/carpet-cleaning-in-progress-01.jpg',
    imageAlt: 'Professional carpet cleaning machine removing stains',
    description:
      'Professional hot-water extraction to remove deep stains, odours, and allergens from all carpet types. Real results, every time.',
    includes: [
      'Hot water extraction',
      'Pre-treatment of stains',
      'All carpet types',
      'Deodorising treatment',
      'Quick-dry process',
    ],
  },
  {
    id: 'mattress',
    emoji: '🛏️',
    bgColor: 'bg-[#fbf6ef]',
    borderColor: 'border-[#eadfce]',
    title: 'Mattress Cleaning',
    tagline: 'Sleep fresh & clean',
    image: '/images/mattress-cleaning-01.jpg',
    imageAlt: 'Professional mattress cleaning with steam extraction tool',
    description:
      'Deep clean your mattress to remove dust mites, stains, bacteria and odours. A cleaner mattress means healthier, better sleep.',
    includes: [
      'Steam extraction cleaning',
      'Stain & odour removal',
      'Dust mite treatment',
      'Sanitising & deodorising',
      'All mattress types',
    ],
  },
  {
    id: 'curtain',
    emoji: '🪟',
    bgColor: 'bg-[#f4f8f7]',
    borderColor: 'border-[#ddebe8]',
    title: 'Curtain Cleaning',
    tagline: 'Fresh, dust-free curtains',
    image: '/images/curtain-before-01.jpg',
    imageAlt: 'Curtain cleaning before and after',
    description:
      'Professional on-site or off-site curtain cleaning. We remove dust, allergens and stains without damaging delicate fabrics.',
    includes: [
      'On-site steam cleaning',
      'Delicate fabric care',
      'Dust & allergen removal',
      'Stain treatment',
      'Rehang included',
    ],
  },
  {
    id: 'couch',
    emoji: '🛋️',
    bgColor: 'bg-[#f1faf7]',
    borderColor: 'border-[#d7eee7]',
    title: 'Couch Cleaning',
    tagline: 'Restore your sofa',
    image: '/images/couch-before-01.jpg',
    imageAlt: 'Professional couch and upholstery cleaning',
    description:
      'Fabric and upholstery cleaning that removes years of built-up dirt, stains and odours. Your couch will look and feel brand new.',
    includes: [
      'Fabric & microfibre couches',
      'Stain pre-treatment',
      'Deep steam extraction',
      'Deodorising treatment',
      'Quick dry process',
    ],
  },
  {
    id: 'rug',
    emoji: '🏠',
    bgColor: 'bg-[#f7f7f4]',
    borderColor: 'border-[#e7e6df]',
    title: 'Rug Cleaning',
    tagline: 'All rug types',
    image: '/images/rug-cleaning-in-progress-01.jpg',
    imageAlt: 'Professional rug cleaning in progress',
    description:
      'Gentle yet powerful rug cleaning for all types — Persian, wool, synthetic and more. We restore colour and remove embedded dirt.',
    includes: [
      'All rug types & sizes',
      'Colour-safe cleaning',
      'Stain removal',
      'Deodorising',
      'Pick-up & delivery available',
    ],
  },
  {
    id: 'bedframe',
    emoji: '🛏',
    bgColor: 'bg-[#fbf3f0]',
    borderColor: 'border-[#ead8d0]',
    title: 'Bedframe Cleaning',
    tagline: 'Dust-free sleeping space',
    image: '/images/chairs-after-01.jpg',
    imageAlt: 'Clean furniture and bedframe after professional cleaning',
    description:
      'Thorough cleaning of bedframes, headboards and bases to remove dust, allergens and stains for a healthier sleeping environment.',
    includes: [
      'Fabric & timber bedframes',
      'Headboard deep clean',
      'Dust & allergen removal',
      'Sanitising treatment',
      'All bedframe types',
    ],
  },
  {
    id: 'leather-couch',
    emoji: '✨',
    bgColor: 'bg-[#f3f8fa]',
    borderColor: 'border-[#dbe9ec]',
    title: 'Leather Couch Cleaning',
    tagline: 'Restore & protect leather',
    image: '/images/leather-couch-before-01.jpg',
    imageAlt: 'Leather couch before and after professional cleaning',
    description:
      'Specialist leather cleaning and conditioning to restore shine, remove stains and protect your leather furniture from cracking.',
    includes: [
      'All leather types',
      'Stain & mark removal',
      'Leather conditioning',
      'UV protection treatment',
      'Scratch & crack care',
    ],
  },
  {
    id: 'window',
    emoji: '🪟',
    bgColor: 'bg-[#f7f4f8]',
    borderColor: 'border-[#e5ddea]',
    title: 'Window Cleaning',
    tagline: 'Streak-free guarantee',
    image: '/images/window-cleaning-01.jpg',
    imageAlt: 'Professional window cleaning with water-fed pole',
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
    id: 'end-of-lease',
    emoji: '🔑',
    bgColor: 'bg-[#f0f8f5]',
    borderColor: 'border-[#d8ebe4]',
    title: 'End of Lease Clean',
    tagline: 'Get your full bond back',
    image: '/images/carpet-after-02.jpg',
    imageAlt: 'Clean empty room after professional end of lease cleaning',
    description:
      'Comprehensive bond clean following a real-estate–approved checklist. Everything covered to meet landlord and agent standards.',
    includes: [
      'All rooms, walls & skirting boards',
      'Oven, rangehood & appliances',
      'Bathrooms & laundry',
      'Carpets, windows & tracks',
      'Bond-back guarantee',
    ],
  },
  {
    id: 'carpet-repair',
    emoji: '🔧',
    bgColor: 'bg-[#fbf6ef]',
    borderColor: 'border-[#eadfce]',
    title: 'Carpet Repair',
    tagline: 'Fix, don\'t replace',
    image: '/images/carpet-repair-in-progress-02.jpg',
    imageAlt: 'Carpet repair and restretching in progress',
    description:
      'Repair burns, tears, ripples and damaged areas in your carpet. Save thousands compared to full replacement.',
    includes: [
      'Burns & tear repairs',
      'Patch & seam repair',
      'All carpet types',
      'Colour matching',
      'Same-day available',
    ],
  },
  {
    id: 'flood-damage',
    emoji: '💧',
    bgColor: 'bg-[#f0f6fb]',
    borderColor: 'border-[#d0e4f0]',
    title: 'Flood & Water Damage',
    tagline: 'Fast emergency response',
    image: '/images/flood-damage-07.jpg',
    imageAlt: 'Flood damage carpet drying with professional equipment',
    description:
      'Emergency water damage restoration for flooded carpets and flooring. We extract water, dry, clean and restore your carpet fast to prevent mould and permanent damage.',
    includes: [
      'Emergency same-day response',
      'Water extraction',
      'Industrial drying equipment',
      'Mould prevention treatment',
      'Full carpet restoration',
    ],
  },
  {
    id: 'carpet-restretching',
    emoji: '📐',
    bgColor: 'bg-[#f4f8f7]',
    borderColor: 'border-[#ddebe8]',
    title: 'Carpet Restretching',
    tagline: 'Remove ripples & bubbles',
    image: '/images/carpet-repair-in-progress-01.jpg',
    imageAlt: 'Carpet restretching to remove ripples and bubbles',
    description:
      'Loose, rippling carpet is a trip hazard and looks unsightly. We restretch and re-lay your carpet to a smooth, tight finish.',
    includes: [
      'Ripple & bubble removal',
      'Full room restretching',
      'Re-laying & re-tacking',
      'All carpet types',
      'Fast turnaround',
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
