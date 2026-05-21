import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, crumb }) {
  return (
    <section className="pt-28 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{crumb || title}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-400 text-lg max-w-[22rem] sm:max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
