import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

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
        href="tel:+61415410507"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-800 text-white font-semibold text-sm"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a
        href="https://wa.me/61415410507"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold text-sm"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
    </div>
  )
}
