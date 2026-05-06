import { Link } from 'react-router-dom'
import { CheckCircle, Users, Star, Shield, Heart, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '3+', label: 'Years in Sydney' },
]

const values = [
  {
    icon: Shield,
    title: 'Trust & Safety',
    desc: 'Every cleaner is police-checked, insured, and reference-verified. We take safety seriously so you never have to.',
  },
  {
    icon: Star,
    title: 'Quality First',
    desc: 'We follow a rigorous cleaning checklist and do quality checks after every job. Consistent results, every time.',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    desc: "Your satisfaction isn't just a promise — it's our policy. We re-clean anything that isn't right, free of charge.",
  },
  {
    icon: Users,
    title: 'Local & Accountable',
    desc: "We're a Sydney-based business. When you call, you reach a real person who knows your suburb and your needs.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Clenza"
        subtitle="A Sydney-based cleaning company built on trust, transparency, and doing the job right the first time."
        crumb="About"
      />

      {/* Story section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center" data-reveal-stagger>
          <div>
            <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              We Started Because We Were Frustrated Too
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Clenza was founded in Sydney after our team experienced firsthand what frustrates most people about cleaning services — unreliable turn-up times, hidden pricing, and inconsistent results.
              </p>
              <p>
                We set out to build a cleaning service that works the way customers actually want: transparent quotes upfront, verified and insured cleaners, easy online booking, and a genuine guarantee that means something.
              </p>
              <p>
                Today we serve hundreds of Sydney homes, offices, and Airbnb properties. Every job, big or small, gets the same attention to detail and the same commitment to leaving the space spotless.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/get-quote" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-colors">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-200 hover:border-brand-500 text-slate-700 hover:text-brand-600 font-semibold rounded-xl transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3] shadow-lg">
            <img
              src="/images/team.png"
              alt="Clenza cleaning team in uniform"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-600 py-14 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-extrabold text-white mb-1">{value}</div>
              <div className="text-brand-100 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-brand-600 bg-brand-100 px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-stagger>
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} style={{ transitionDelay: `${i * 75}ms` }} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo row placeholder */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center font-extrabold text-slate-900 text-xl mb-8">The Clenza Difference</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: '/images/before-kitchen.png', alt: 'Kitchen before professional cleaning' },
              { src: '/images/van.png', alt: 'Clenza cleaner arriving in a service van' },
              { src: '/images/after-kitchen.png', alt: 'Kitchen after professional cleaning' },
            ].map(({ src, alt }) => (
              <div key={src} className="aspect-[4/3] rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm">
                <img src={src} alt={alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
