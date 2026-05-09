import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles, Phone, ChevronDown } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const serviceLinks = [
  { label: 'Carpet Cleaning', href: '/services#carpet' },
  { label: 'Mattress Cleaning', href: '/services#mattress' },
  { label: 'Curtain Cleaning', href: '/services#curtain' },
  { label: 'Couch Cleaning', href: '/services#couch' },
  { label: 'Rug Cleaning', href: '/services#rug' },
  { label: 'Leather Couch Cleaning', href: '/services#leather-couch' },
  { label: 'Window Cleaning', href: '/services#window' },
  { label: 'End of Lease Clean', href: '/services#end-of-lease' },
  { label: 'Carpet Repair', href: '/services#carpet-repair' },
  { label: 'Carpet Restretching', href: '/services#carpet-restretching' },
]

export default function Navbar({ topOffset = 0 }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200)
  }

  const navLinkCls = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-brand-600' : 'text-slate-700 hover:text-brand-600'}`

  return (
    <header
      className={`fixed left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-slate-100'}`}
      style={{ top: `${topOffset}px` }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-extrabold text-lg text-slate-900">
            Clenz<span className="text-brand-600">a</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <NavLink to="/" end className={navLinkCls}>Home</NavLink>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                <Link to="/services" className="block px-4 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50 border-b border-slate-100 mb-1">
                  All Services →
                </Link>
                {serviceLinks.map(({ label, href }) => (
                  <Link key={label} to={href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-600">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/about" className={navLinkCls}>About</NavLink>
          <NavLink to="/contact" className={navLinkCls}>Contact</NavLink>
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:04XXXXXXXX" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
            <Phone className="w-3.5 h-3.5" /> 04XX XXX XXX
          </a>
          <a href="https://wa.me/614XXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
            <WhatsAppIcon /> WhatsApp
          </a>
          <Link to="/get-quote" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-700 rounded-lg hover:bg-slate-100">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col divide-y divide-slate-100">
            {[{ to: '/', label: 'Home' }, { to: '/services', label: 'Services' }, { to: '/about', label: 'About' }, { to: '/contact', label: 'Contact' }]
              .map(({ to, label }) => (
                <Link key={to} to={to} onClick={() => setMobileOpen(false)} className="py-3.5 text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">
                  {label}
                </Link>
              ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:04XXXXXXXX" className="flex items-center justify-center gap-2 py-3 border-2 border-slate-200 text-slate-700 font-semibold text-sm rounded-xl">
                <Phone className="w-4 h-4" /> Call 04XX XXX XXX
              </a>
              <a href="https://wa.me/614XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-emerald-500 text-white font-bold text-sm rounded-xl">
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <Link to="/get-quote" onClick={() => setMobileOpen(false)} className="flex items-center justify-center py-3 bg-brand-600 text-white font-bold text-sm rounded-xl">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
