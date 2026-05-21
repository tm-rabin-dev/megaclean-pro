import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowRight, CheckCircle, MapPin, Phone, Shield, Sparkles, Star } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { allServices } from '../components/Services'

const commonServices = allServices.filter(({ id }) =>
  ['carpet', 'mattress', 'couch', 'rug', 'window', 'end-of-lease'].includes(id)
)

const pageData = {
  'cleaning-services-sydney': {
    path: '/cleaning-services-sydney',
    metaTitle: 'Cleaning Services Sydney | Clenza Cleaning',
    metaDescription:
      'Book reliable cleaning services in Sydney with Clenza Cleaning. Home, office, end-of-lease, carpet, couch, mattress, rug and window cleaning.',
    crumb: 'Cleaning Services Sydney',
    title: 'Cleaning Services Sydney',
    subtitle:
      'Reliable home, office, end-of-lease, carpet, couch, mattress and rug cleaning across Sydney with clear pricing and fast quotes.',
    eyebrow: 'Professional cleaners across Sydney',
    introTitle: 'Sydney cleaners for homes, rentals, offices and Airbnb properties',
    intro:
      'Clenza Cleaning helps Sydney households and businesses book dependable cleaners without hidden costs or confusing packages. From one-off deep cleans to end-of-lease cleans and specialised steam cleaning, our team brings the equipment, products and checklist needed to get the job done properly.',
    heroImage: '/images/hero-cleaner-kitchen.png',
    heroAlt: 'Professional cleaner wiping a kitchen bench in Sydney',
    serviceArea: 'Sydney',
    highlights: [
      'Home, apartment, office and Airbnb cleaning',
      'Carpet, couch, mattress and rug steam cleaning',
      'End-of-lease cleaning with clear checklists',
      'Same-day and weekend availability where possible',
    ],
    faq: [
      {
        q: 'What cleaning services do you offer in Sydney?',
        a: 'We provide house cleaning, office cleaning, end-of-lease cleaning, carpet cleaning, couch cleaning, mattress cleaning, rug cleaning, window cleaning and more across Sydney.',
      },
      {
        q: 'Can I get a same-day cleaner in Sydney?',
        a: 'Same-day cleaning depends on team availability, but calling early gives you the best chance of securing an urgent Sydney cleaning booking.',
      },
      {
        q: 'Do you bring cleaning supplies?',
        a: 'Yes. Our cleaners bring professional products and equipment for the booked service, including specialist extraction equipment where required.',
      },
    ],
  },
  'house-cleaning-sydney': {
    path: '/house-cleaning-sydney',
    metaTitle: 'House Cleaning Sydney | Clenza Cleaning',
    metaDescription:
      'Professional house cleaning in Sydney for homes and apartments. One-off, deep and regular cleaning with clear quotes and trusted cleaners.',
    crumb: 'House Cleaning Sydney',
    title: 'House Cleaning Sydney',
    subtitle:
      'Fresh, reliable house cleaning for busy Sydney homes, apartments and families, with flexible one-off, deep and regular cleaning options.',
    eyebrow: 'Home cleaning made simple',
    introTitle: 'House cleaners who work around your Sydney home',
    intro:
      'Whether you need a once-off refresh, a deeper seasonal clean or help keeping your home under control, Clenza Cleaning provides practical house cleaning services for Sydney homes and apartments. We focus on the rooms and surfaces that matter most: kitchens, bathrooms, living spaces, bedrooms, floors and high-touch areas.',
    heroImage: '/images/house-cleaning.png',
    heroAlt: 'Clean bright living room after house cleaning',
    serviceArea: 'Sydney homes and apartments',
    highlights: [
      'Kitchen, bathroom, living area and bedroom cleaning',
      'One-off, deep and recurring house cleans',
      'Police-checked, insured cleaning team',
      'Easy quote form, phone and WhatsApp booking',
    ],
    faq: [
      {
        q: 'What is included in a house clean?',
        a: 'House cleaning can include surface wiping, dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning and general tidying based on your quote.',
      },
      {
        q: 'Can I book a regular cleaner?',
        a: 'Yes. We can help with one-off or recurring house cleaning depending on your preferred schedule and suburb.',
      },
      {
        q: 'Do I need to be home during the clean?',
        a: 'No. Many customers provide access instructions, but you are also welcome to be home if that is more comfortable.',
      },
    ],
  },
  'cleaning-services-strathfield': {
    path: '/cleaning-services-strathfield',
    metaTitle: 'Cleaning Services Strathfield | Clenza Cleaning',
    metaDescription:
      'Local cleaning services in Strathfield NSW for homes, offices, rentals, carpet, couch, mattress and end-of-lease cleaning.',
    crumb: 'Cleaning Services Strathfield',
    title: 'Cleaning Services Strathfield',
    subtitle:
      'Local cleaning services for Strathfield homes, apartments, offices and rental properties, backed by fast quotes and real Sydney service.',
    eyebrow: 'Local cleaners near Strathfield',
    introTitle: 'Cleaning services for Strathfield and surrounding suburbs',
    intro:
      'Clenza Cleaning is based in Strathfield and services nearby homes, apartments, offices and rental properties across Sydney. If you need a cleaner for a move, inspection, end-of-lease clean, carpet refresh or general house clean, our team can quote clearly and book a time that suits you.',
    heroImage: '/images/vacuum-living-cleaning.png',
    heroAlt: 'Vacuuming a living room for a Strathfield cleaning service',
    serviceArea: 'Strathfield, Burwood, Homebush, Ashfield and nearby Sydney suburbs',
    highlights: [
      'Based around Strathfield NSW 2135',
      'House, apartment, office and end-of-lease cleaning',
      'Carpet, couch, mattress and rug cleaning available',
      'Call, WhatsApp or request a quote online',
    ],
    faq: [
      {
        q: 'Do you clean homes in Strathfield?',
        a: 'Yes. Clenza Cleaning services Strathfield and nearby suburbs including Burwood, Homebush, Ashfield and surrounding Inner West areas.',
      },
      {
        q: 'Can you clean Strathfield rental properties?',
        a: 'Yes. We provide end-of-lease and move-out cleaning for Strathfield rental properties, including optional carpet and upholstery cleaning.',
      },
      {
        q: 'How do I book a Strathfield cleaner?',
        a: 'You can call 0415 410 507, message on WhatsApp, or submit the quote form with your suburb and preferred cleaning service.',
      },
    ],
  },
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
        <Icon className="h-5 w-5 text-brand-600" />
      </div>
      <h3 className="mb-2 text-sm font-extrabold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
  )
}

function FaqList({ items }) {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">Common Questions</h2>
        </div>
        <div className="grid gap-4">
          {items.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-base font-extrabold text-slate-900">{q}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SeoLandingPage({ pageId }) {
  const data = pageData[pageId]

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const canonical = document.querySelector('link[rel="canonical"]')
    const previousDescription = description?.getAttribute('content')
    const previousCanonical = canonical?.getAttribute('href')

    document.title = data.metaTitle
    description?.setAttribute('content', data.metaDescription)
    canonical?.setAttribute('href', `https://clenzaclean.com.au${data.path}`)

    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.setAttribute('content', previousDescription)
      if (canonical && previousCanonical) canonical.setAttribute('href', previousCanonical)
    }
  }, [data])

  return (
    <>
      <PageHero title={data.title} subtitle={data.subtitle} crumb={data.crumb} />

      <section className="overflow-hidden bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="min-w-0">
            <span className="mb-5 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600">
              {data.eyebrow}
            </span>
            <h2 className="mb-5 max-w-[20rem] text-2xl font-extrabold leading-tight text-slate-900 sm:max-w-none sm:text-4xl">
              {data.introTitle}
            </h2>
            <p className="mb-7 max-w-[20rem] text-base leading-relaxed text-slate-600 sm:max-w-none">{data.intro}</p>
            <div className="mb-8 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <MapPin className="h-5 w-5 flex-shrink-0 text-brand-600" />
              <p className="text-sm font-semibold text-slate-700">{data.serviceArea}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+61415410507"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                <Phone className="h-4 w-4" /> Call 0415 410 507
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
            <img src={data.heroImage} alt={data.heroAlt} className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600">
              Why Choose Clenza
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">Built for Reliable Sydney Cleaning</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={Shield} title="Insured Cleaners" text="Professional cleaners with public liability protection and a careful checklist-led process." />
            <FeatureCard icon={Star} title="Clear Pricing" text="Simple quote paths for one-off, deep, end-of-lease and specialist cleaning work." />
            <FeatureCard icon={Sparkles} title="Real Results" text="Before-and-after focused cleaning for carpets, couches, mattresses, rugs and homes." />
            <FeatureCard icon={CheckCircle} title="Satisfaction Guarantee" text="If something is not right, contact us quickly and we will work to make it right." />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600">
              Popular Services
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">Cleaning Services Customers Book Most</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {commonServices.map(({ id, title, tagline, description, image, imageAlt }) => (
              <Link
                key={id}
                to={`/services#${id}`}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <img src={image} alt={imageAlt} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-600">{tagline}</p>
                  <h3 className="mb-2 text-lg font-extrabold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqList items={data.faq} />
      <CTABanner
        title={`Need ${data.title}?`}
        subtitle="Call, WhatsApp or request a fast quote online. We will confirm availability and pricing before you book."
      />
    </>
  )
}

export function CleaningServicesSydneyPage() {
  return <SeoLandingPage pageId="cleaning-services-sydney" />
}

export function HouseCleaningSydneyPage() {
  return <SeoLandingPage pageId="house-cleaning-sydney" />
}

export function CleaningServicesStrathfieldPage() {
  return <SeoLandingPage pageId="cleaning-services-strathfield" />
}
