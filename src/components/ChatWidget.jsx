import { useState, useRef, useEffect } from 'react'
import Anthropic from '@anthropic-ai/sdk'
import { X, Send, Phone } from 'lucide-react'
import SYSTEM_PROMPT from '../chatbot/systemPrompt'

const MASCOT_IMG = '/images/mascot-robot.png'

const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY || '',
  dangerouslyAllowBrowser: true,
})

const GREETING = "G'day! I'm Cleany 🧹\n\nYour Clenza cleaning assistant! Ask me about pricing, services, same-day bookings — I'm here to help."

const QUICK_QUESTIONS = [
  'How much for carpet cleaning?',
  'Do you do end-of-lease cleans?',
  'Are you available today?',
  'Is it safe for pets & kids?',
]

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-4">
      <div className="w-8 h-8 rounded-full overflow-hidden bg-[#0f5248] flex-shrink-0">
        <img src={MASCOT_IMG} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Message({ role, content }) {
  const isUser = role === 'user'
  return (
    <div className={`flex items-end gap-2 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden bg-[#0f5248] flex-shrink-0">
          <img src={MASCOT_IMG} alt="" className="w-full h-full object-cover object-center" />
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'text-white rounded-br-sm'
            : 'bg-slate-100 text-slate-800 rounded-bl-sm'
        }`}
        style={isUser ? { backgroundColor: '#176b61' } : {}}
      >
        {content}
      </div>
    </div>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [hasApiKey] = useState(() => {
    const key = import.meta.env.VITE_ANTHROPIC_API_KEY
    return key && key !== 'your-api-key-here' && key.length > 10
  })

  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: GREETING }])
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  const sendMessage = async (text) => {
    const content = (text || input).trim()
    if (!content || loading) return
    setInput('')

    const userMsg = { role: 'user', content }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setLoading(true)

    if (!hasApiKey) {
      setTimeout(() => {
        setMessages([
          ...updated,
          {
            role: 'assistant',
            content:
              'To activate me, add your Anthropic API key to the .env file (VITE_ANTHROPIC_API_KEY). Get one at console.anthropic.com.',
          },
        ])
        setLoading(false)
      }, 600)
      return
    }

    try {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: updated
          .filter((m) => m.role !== 'system')
          .map((m) => ({ role: m.role, content: m.content })),
      })
      setMessages([
        ...updated,
        { role: 'assistant', content: response.content[0].text },
      ])
    } catch {
      setMessages([
        ...updated,
        {
          role: 'assistant',
          content:
            "Sorry, hit a snag there. Give us a call on [PHONE] and we'll help you straight away.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const showQuickReplies = messages.length <= 1 && !loading

  return (
    <>
      {/* ── Chat window ── */}
      {open && (
        <div
          className="fixed z-50 flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          style={{
            bottom: '110px',
            right: '20px',
            width: '360px',
            maxWidth: 'calc(100vw - 2rem)',
            height: '520px',
            maxHeight: 'calc(100vh - 140px)',
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center justify-between flex-shrink-0"
            style={{ backgroundColor: '#176b61' }}
          >
            <div className="flex items-center gap-3">
              {/* Cleany head in header */}
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30 bg-[#0f5248]">
                <img src={MASCOT_IMG} alt="Cleany" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <div className="text-white font-extrabold text-sm">
                  Cleany — Clenza Assistant
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-white/70 text-xs">
                    Online — replies instantly
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <Message key={i} role={m.role} content={m.content} />
            ))}

            {/* Quick reply chips */}
            {showQuickReplies && (
              <div className="flex flex-wrap gap-2 mb-4 pl-10">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors"
                    style={{
                      backgroundColor: '#f0faf8',
                      borderColor: '#69bfb0',
                      color: '#176b61',
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {loading && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>

          {/* Call strip */}
          <div className="bg-slate-50 border-t border-slate-100 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
            <span className="text-xs text-slate-500">Prefer to talk?</span>
            <a
              href="tel:0415410507"
              className="flex items-center gap-1.5 text-xs font-bold"
              style={{ color: '#176b61' }}
            >
              <Phone className="w-3.5 h-3.5" /> Call 0415 410 507
            </a>
          </div>

          {/* Input */}
          <div className="border-t border-slate-100 px-3 py-3 flex items-end gap-2 flex-shrink-0">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              rows={1}
              placeholder="Ask Cleany anything..."
              className="flex-1 resize-none text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:border-transparent max-h-28 overflow-y-auto"
              style={{ '--tw-ring-color': '#176b61' }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              className="w-10 h-10 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
              style={{ backgroundColor: input.trim() ? '#176b61' : undefined }}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── Cleany launcher button ── */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed z-50 mascot-launcher mascot-float"
          style={{ bottom: '20px', right: '20px' }}
          aria-label="Chat with Cleany"
        >
          <div className="relative">
            <img
              src={MASCOT_IMG}
              alt="Chat with Cleany"
              className="select-none"
              style={{
                width: 'clamp(60px, 10vw, 82px)',
                height: 'clamp(60px, 10vw, 82px)',
                objectFit: 'contain',
                display: 'block',
              }}
              draggable={false}
            />
            {/* Online dot */}
            <span className="absolute w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"
              style={{ bottom: '6px', right: '4px' }} />
          </div>
        </button>
      )}

      {/* ── Close button when chat is open ── */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="fixed z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
          style={{
            bottom: '20px',
            right: '20px',
            backgroundColor: '#176b61',
          }}
          aria-label="Close chat"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      )}
    </>
  )
}
