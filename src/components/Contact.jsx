import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader, ArrowRight } from 'lucide-react'

const info = [
  { icon: Phone, label: 'Phone', value: '04XX XXX XXX', sub: 'Mon–Sat 7am–7pm, Sun 8am–5pm', href: 'tel:04XXXXXXXX', color: 'bg-brand-50 text-brand-600' },
  { icon: Mail, label: 'Email', value: 'hello@clenza.com.au', sub: 'We reply within 2 hours', href: 'mailto:hello@clenza.com.au', color: 'bg-cyan-50 text-cyan-600' },
  { icon: MapPin, label: 'Service Area', value: 'All Sydney Suburbs', sub: 'CBD · East · North Shore · West', href: null, color: 'bg-emerald-50 text-emerald-600' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat 7am–7pm', sub: 'Sunday 8am–5pm', href: null, color: 'bg-violet-50 text-violet-600' },
]

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder-slate-400'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12" data-reveal-stagger>
          {/* Left: info */}
          <div>
            <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              We'd Love to Hear From You
            </h2>
            <p className="text-slate-500 text-base mb-8">
              Have a question or ready to book? Our Sydney team responds within the hour.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {info.map(({ icon: Icon, label, value, sub, href, color }) => (
                <div key={label} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="font-semibold text-slate-900 text-sm hover:text-brand-600 transition-colors block">{value}</a>
                  ) : (
                    <div className="font-semibold text-slate-900 text-sm">{value}</div>
                  )}
                  <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 h-44 flex flex-col items-center justify-center text-center p-6">
              <MapPin className="w-8 h-8 text-brand-400 mb-2" />
              <p className="font-bold text-slate-700 text-sm mb-1">Sydney, NSW</p>
              <p className="text-xs text-slate-500">Serving all suburbs — CBD, Eastern, North Shore, Inner West, Parramatta &amp; Western Sydney.</p>
              <p className="text-xs text-brand-500 mt-2 font-medium">↑ Replace with Google Maps embed</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-500 text-sm">Thanks{form.name ? `, ${form.name}` : ''}. We'll get back to you within 2 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                  className="mt-6 text-sm text-brand-600 hover:underline font-medium">Send another message</button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <h3 className="text-lg font-extrabold text-slate-900">Send a Message</h3>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name *</label>
                  <input type="text" value={form.name} onChange={set('name')} required placeholder="Jane Smith" className={inputCls} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                    <input type="email" value={form.email} onChange={set('email')} required placeholder="jane@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                    <input type="tel" value={form.phone} onChange={set('phone')} placeholder="04XX XXX XXX" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                  <textarea value={form.message} onChange={set('message')} required rows={4}
                    placeholder="Tell us about your property and what you need..." className={inputCls + ' resize-none'} />
                </div>
                <button type="submit" disabled={loading}
                  className="flex items-center justify-center gap-2 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-colors">
                  {loading ? <><Loader className="w-4 h-4 animate-spin" /> Sending...</> : <>Send Message <ArrowRight className="w-4 h-4" /></>}
                </button>
                <p className="text-center text-xs text-slate-400">
                  Or call us on{' '}
                  <a href="tel:04XXXXXXXX" className="text-brand-600 font-semibold">04XX XXX XXX</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
