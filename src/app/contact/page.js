'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowUpRight, Globe, Camera, Link2 } from 'lucide-react'
import Link from 'next/link'

const glassCard = {
  background: 'linear-gradient(145deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.07) 100%)',
  boxShadow: '0 16px 48px rgba(0,0,0,0.65), 0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.25)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
}

const CardShine = () => (
  <div
    className="absolute inset-0 rounded-3xl pointer-events-none"
    style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 38%)' }}
  />
)

const LINKS = [
  {
    label: 'LinkedIn',
    handle: '@arvinpoole',
    href: 'https://linkedin.com/in/arvinpoole',
    icon: Globe,
    iconClass: 'text-blue-400',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(59,130,246,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(96,165,250,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderColor: 'rgba(96,165,250,0.25)',
    },
  },
  {
    label: 'Instagram',
    handle: '@arvinpoole',
    href: 'https://instagram.com/arvinpoole',
    icon: Camera,
    iconClass: 'text-orange-400',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(251,146,60,0.3) 0%, rgba(236,72,153,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(251,146,60,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderColor: 'rgba(251,146,60,0.25)',
    },
  },
  {
    label: 'Linktree',
    handle: 'linktr.ee/arvinpoole',
    href: 'https://linktr.ee/arvinpoole',
    icon: Link2,
    iconClass: 'text-emerald-400',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(52,211,153,0.3) 0%, rgba(16,185,129,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(52,211,153,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderColor: 'rgba(52,211,153,0.25)',
    },
  },
]

export default function Contact() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      if (res.ok) {
        setStatus('success')
        setFirstName('')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">

      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute top-[-15%] left-[5%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[0%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      <main className="relative z-10 max-w-lg mx-auto px-6 py-20">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-10 transition-colors">
          <ArrowLeft size={14} />
          Back
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
            Let's connect.
          </h1>
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-500 text-sm">Open to Marketing Director & Head of Growth roles</span>
          </div>
        </div>

        {/* Social links */}
        <div className="space-y-3 mb-12">
          {LINKS.map(({ label, handle, href, icon: Icon, iconClass, iconStyle }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl p-4 relative overflow-hidden border border-white/[0.12] hover:border-white/[0.22] hover:scale-[1.015] transition-all duration-200"
              style={glassCard}
            >
              <CardShine />
              <div className="relative flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                  style={iconStyle}
                >
                  <Icon size={18} className={iconClass} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{handle}</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="relative text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0" />
            </a>
          ))}
        </div>

        {/* Lead capture */}
        <div
          className="rounded-3xl p-7 relative overflow-hidden border border-white/[0.12]"
          style={glassCard}
        >
          <CardShine />
          <div className="relative">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Stay in the loop</p>
            <h2 className="text-white font-bold text-lg mb-1">Get updates from Arvin</h2>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
              MarTech insights, case studies, and growth frameworks — straight to your inbox.
            </p>

            {status === 'success' ? (
              <div className="flex items-center gap-3 py-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.25)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-7" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-zinc-300 text-sm">You're in. Talk soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none focus:border-white/20 transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none focus:border-white/20 transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.02] disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #34d399 0%, #10b981 60%, #059669 100%)',
                    boxShadow: '0 6px 24px rgba(16,185,129,0.4), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.15)',
                  }}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">Something went wrong. Try again.</p>
                )}
              </form>
            )}
          </div>
        </div>

      </main>
    </div>
  )
}
