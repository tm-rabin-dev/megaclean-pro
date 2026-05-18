import { useState } from 'react'
import { CheckCircle, ArrowRight, ArrowLeft, Loader } from 'lucide-react'

const initForm = { serviceType: '', propertyType: '', suburb: '', bedrooms: '', bathrooms: '', date: '', name: '', phone: '', email: '' }

const selectCls = 'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all cursor-pointer'
const inputCls  = 'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder-slate-400'
const Lbl = ({ children }) => <label className="block text-sm font-semibold text-slate-700 mb-1.5">{children}</label>

const STEP_LABELS = ['Service', 'Property', 'Contact']

function Progress({ step }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEP_LABELS.map((label, i) => {
        const n = i + 1
        const done = n < step
        const active = n === step
        return (
          <div key={n} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              done   ? 'bg-brand-600 text-white' :
              active ? 'bg-brand-600 text-white ring-4 ring-brand-100' :
                       'bg-slate-100 text-slate-400'}`}>
              {done ? '✓' : n}
            </div>
            <span className={`text-xs font-semibold hidden sm:block ${active ? 'text-brand-600' : 'text-slate-400'}`}>{label}</span>
            {i < 2 && <div className={`w-8 h-0.5 rounded ${n < step ? 'bg-brand-600' : 'bg-slate-200'}`} />}
          </div>
        )
      })}
    </div>
  )
}

export default function QuoteForm({ standalone = false }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }))

  const next = () => setStep(s => Math.min(s + 1, 3))
  const back = () => setStep(s => Math.max(s - 1, 1))

  const canNext1 = form.serviceType && form.propertyType
  const canNext2 = form.suburb && form.bedrooms && form.bathrooms && form.date
  const canSubmit = form.name && form.phone && form.email

  const submit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please call us on 0415 410 507.')
      }
    } catch {
      alert('Something went wrong. Please call us on 0415 410 507.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={standalone ? 'max-w-2xl mx-auto' : ''}>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
        {!standalone && (
          <div className="px-8 py-5" style={{ backgroundColor: '#176b61' }}>
            <h3 className="text-white font-extrabold text-lg">Get Your Free Quote</h3>
            <p className="text-brand-100 text-sm mt-1">3 quick steps · We respond within the hour</p>
          </div>
        )}

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Quote Request Received!</h3>
              <p className="text-slate-500 text-sm mb-1">
                Thanks{form.name ? `, ${form.name}` : ''} — we'll contact you shortly with your quote.
              </p>
              <p className="text-xs text-slate-400">Expect a response within 60 minutes to <span className="font-medium text-slate-600">{form.email}</span>.</p>
              <button onClick={() => { setSubmitted(false); setForm(initForm); setStep(1) }}
                className="mt-6 text-sm text-brand-600 hover:underline font-medium">
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <Progress step={step} />

              {/* ── Step 1: Service & Property ── */}
              {step === 1 && (
                <div className="space-y-5">
                  <h4 className="font-extrabold text-slate-900 text-base mb-5">What service do you need?</h4>
                  <div>
                    <Lbl>Service Type *</Lbl>
                    <select value={form.serviceType} onChange={set('serviceType')} required className={selectCls}>
                      <option value="">Select a service</option>
                      <option>Carpet Cleaning</option>
                      <option>Couch / Upholstery Cleaning</option>
                      <option>Leather Couch Cleaning</option>
                      <option>Mattress Cleaning</option>
                      <option>Rug Cleaning</option>
                      <option>Curtain Cleaning</option>
                      <option>Bedframe Cleaning</option>
                      <option>Window Cleaning</option>
                      <option>End-of-Lease / Bond Clean</option>
                      <option>Carpet Repair</option>
                      <option>Carpet Restretching</option>
                      <option>Flood & Water Damage</option>
                      <option>Regular House Clean</option>
                      <option>Deep Clean</option>
                      <option>Office Clean</option>
                    </select>
                  </div>
                  <div>
                    <Lbl>Property Type *</Lbl>
                    <select value={form.propertyType} onChange={set('propertyType')} required className={selectCls}>
                      <option value="">Select property type</option>
                      <option>House</option>
                      <option>Apartment / Unit</option>
                      <option>Townhouse</option>
                      <option>Studio</option>
                      <option>Office / Commercial</option>
                    </select>
                  </div>
                  <button type="button" onClick={next} disabled={!canNext1}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold rounded-xl transition-colors">
                    Next: Property Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* ── Step 2: Size & Date ── */}
              {step === 2 && (
                <div className="space-y-5">
                  <h4 className="font-extrabold text-slate-900 text-base mb-5">Tell us about your property</h4>
                  <div>
                    <Lbl>Suburb / Postcode *</Lbl>
                    <input type="text" value={form.suburb} onChange={set('suburb')} required placeholder="e.g. Parramatta 2150" className={inputCls} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Lbl>Bedrooms *</Lbl>
                      <select value={form.bedrooms} onChange={set('bedrooms')} required className={selectCls}>
                        <option value="">Select bedrooms</option>
                        <option>Studio (0)</option>
                        <option>1 Bedroom</option>
                        <option>2 Bedrooms</option>
                        <option>3 Bedrooms</option>
                        <option>4 Bedrooms</option>
                        <option>5+ Bedrooms</option>
                      </select>
                    </div>
                    <div>
                      <Lbl>Bathrooms *</Lbl>
                      <select value={form.bathrooms} onChange={set('bathrooms')} required className={selectCls}>
                        <option value="">Select bathrooms</option>
                        <option>1 Bathroom</option>
                        <option>2 Bathrooms</option>
                        <option>3 Bathrooms</option>
                        <option>4+ Bathrooms</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Lbl>Preferred Date *</Lbl>
                    <input type="date" value={form.date} onChange={set('date')} required
                      min={new Date().toISOString().split('T')[0]} className={inputCls} />
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={back}
                      className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-brand-400 transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button type="button" onClick={next} disabled={!canNext2}
                      className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold rounded-xl transition-colors">
                      Next: Your Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step 3: Contact ── */}
              {step === 3 && (
                <div className="space-y-5">
                  <h4 className="font-extrabold text-slate-900 text-base mb-5">Almost done — your contact details</h4>
                  <div>
                    <Lbl>Your Name *</Lbl>
                    <input type="text" value={form.name} onChange={set('name')} required placeholder="Jane Smith" className={inputCls} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Lbl>Phone *</Lbl>
                      <input type="tel" value={form.phone} onChange={set('phone')} required placeholder="04XX XXX XXX" className={inputCls} />
                    </div>
                    <div>
                      <Lbl>Email *</Lbl>
                      <input type="email" value={form.email} onChange={set('email')} required placeholder="jane@email.com" className={inputCls} />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={back}
                      className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-brand-400 transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button type="submit" disabled={loading || !canSubmit}
                      className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold rounded-xl transition-colors">
                      {loading ? <><Loader className="w-4 h-4 animate-spin" /> Sending...</> : <>Get My Free Quote <ArrowRight className="w-4 h-4" /></>}
                    </button>
                  </div>
                  <p className="text-center text-xs text-slate-400">No spam. No obligation. We respond within 60 minutes.</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
