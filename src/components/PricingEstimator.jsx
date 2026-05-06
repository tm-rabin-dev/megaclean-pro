import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator, ArrowRight } from 'lucide-react'

const base = {
  'Regular House Clean':       99,
  'Deep Clean':                199,
  'End-of-Lease / Bond Clean': 299,
  'Office Clean':              149,
  'Airbnb / Short-Stay Clean': 119,
  'Move-In / Move-Out Clean':  249,
}

const roomAdd = { 'Studio (0)': 0, '1 Bedroom': 0, '2 Bedrooms': 25, '3 Bedrooms': 55, '4 Bedrooms': 80, '5+ Bedrooms': 110 }
const bathAdd = { '1 Bathroom': 0, '2 Bathrooms': 20, '3 Bathrooms': 40, '4+ Bathrooms': 65 }

const selectCls = 'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent cursor-pointer'

export default function PricingEstimator() {
  const [service, setService] = useState('')
  const [rooms, setRooms] = useState('')
  const [baths, setBaths] = useState('')

  const ready = service && rooms && baths
  const low  = ready ? (base[service] + roomAdd[rooms] + bathAdd[baths]) : null
  const high = ready ? Math.round(low * 1.18) : null

  return (
    <section className="py-16 px-6 bg-brand-50 border-t border-brand-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10" data-reveal>
          <div className="inline-flex items-center gap-2 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" /> Instant Price Estimator
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Get an Instant Price Estimate
          </h2>
          <p className="text-slate-500 text-base">
            Select your service and property size for an instant ballpark. Exact quote confirmed before we begin.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-brand-100 shadow-md p-8">
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Service</label>
              <select value={service} onChange={e => setService(e.target.value)} className={selectCls}>
                <option value="">Select service</option>
                {Object.keys(base).map(k => <option key={k}>{k}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Bedrooms</label>
              <select value={rooms} onChange={e => setRooms(e.target.value)} className={selectCls}>
                <option value="">Select bedrooms</option>
                {Object.keys(roomAdd).map(k => <option key={k}>{k}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Bathrooms</label>
              <select value={baths} onChange={e => setBaths(e.target.value)} className={selectCls}>
                <option value="">Select bathrooms</option>
                {Object.keys(bathAdd).map(k => <option key={k}>{k}</option>)}
              </select>
            </div>
          </div>

          {/* Result */}
          <div className={`rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300 ${ready ? 'bg-brand-600' : 'bg-slate-50 border border-slate-200'}`}>
            {ready ? (
              <>
                <div className="text-center sm:text-left">
                  <p className="text-brand-100 text-sm font-semibold mb-1">Your estimated cost</p>
                  <div className="text-4xl font-extrabold text-white">
                    ${low} <span className="text-brand-200 text-2xl">– ${high}</span>
                  </div>
                  <p className="text-brand-200 text-xs mt-1">Final price confirmed before we start. No hidden fees.</p>
                </div>
                <Link
                  to="/get-quote"
                  className="flex-shrink-0 flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-bold text-sm rounded-xl hover:bg-brand-50 transition-colors shadow-md whitespace-nowrap"
                >
                  Get Exact Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </>
            ) : (
              <div className="w-full text-center text-slate-400 text-sm py-2">
                Select your service, bedrooms, and bathrooms to see an instant estimate
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
