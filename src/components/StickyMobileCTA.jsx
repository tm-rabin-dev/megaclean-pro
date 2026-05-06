import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  if (!visible) return null
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-2xl">
      <a
        href="tel:04XXXXXXXX"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-800 text-white font-semibold text-sm"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <Link
        to="/get-quote"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-600 text-white font-bold text-sm"
      >
        Get Quote <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
