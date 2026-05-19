import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const services = [
  'End-of-Lease Cleaning',
  'House Cleaning',
  'Deep Cleaning',
  'Office Cleaning',
  'Airbnb Cleaning',
  'Carpet Cleaning',
  'Window Cleaning',
  'Move-In / Move-Out',
]

const areas = [
  'Sydney CBD',
  'Eastern Suburbs',
  'Inner West',
  'North Shore',
  'Parramatta',
  'Western Sydney',
  'Hills District',
  'South Sydney',
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="inline-flex mb-5">
            <div className="bg-white rounded-xl p-1.5 inline-flex">
              <img src="/images/clenza-logo.png" alt="Clenza" className="h-12 w-auto" />
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Sydney's trusted professional cleaning service. Verified cleaners, transparent pricing, and a 100% satisfaction guarantee.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+61415410507" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-brand-400" /> 0415 410 507
            </a>
            <a href="mailto:hello@clenza.com.au" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-brand-400" /> hello@clenza.com.au
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" /> 7 Bennett St, Wentworthville NSW 2145
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-slate-400">Services</h4>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-slate-400">Service Areas</h4>
          <ul className="flex flex-col gap-2.5">
            {areas.map((a) => (
              <li key={a}><span className="text-slate-400 text-sm">{a}</span></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-slate-400">Company</h4>
          <ul className="flex flex-col gap-2.5 mb-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Our Services' },
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
              { to: '/get-quote', label: 'Get a Quote' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-slate-400">Legal</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-xs">
          <p>© {year} Clenza. All rights reserved. ABN: 20 455 980 845</p>
          <p>Professional cleaning services across Sydney, NSW</p>
        </div>
      </div>
    </footer>
  )
}
