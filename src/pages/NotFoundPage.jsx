import { Link } from 'react-router-dom'
import { ArrowRight, Home, Sparkles } from 'lucide-react'
import { MascotFull } from '../components/MascotSVG'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32 bg-white">
      <div className="text-center max-w-lg">
        {/* Cleany mascot */}
        <div className="flex justify-center mb-6">
          <MascotFull width={110} />
        </div>

        {/* 404 */}
        <div className="text-8xl font-extrabold text-brand-100 leading-none mb-2 select-none">404</div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          This page ran off with a mop!
        </h1>
        <p className="text-slate-500 text-base mb-8">
          Looks like Cleany cleaned this page right out of existence. Let's get you back to somewhere useful.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-200 hover:border-brand-400 text-slate-700 hover:text-brand-600 font-semibold rounded-xl transition-colors"
          >
            View Services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/get-quote"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-terra-500 hover:bg-terra-600 text-white font-bold rounded-xl transition-colors"
          >
            <Sparkles className="w-4 h-4" /> Get a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
