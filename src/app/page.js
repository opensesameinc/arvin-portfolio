'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  MapPin,
  BarChart2,
  Briefcase,
  ChevronRight,
  Link2,
  FileText,
  Mail,
} from 'lucide-react'

const glassPill = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
  boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
}

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

const NAV_BLOCKS = [
  {
    href: '/case-studies',
    icon: BarChart2,
    title: 'Case Studies',
    desc: 'CRM orchestration, paid media architecture, and live pipeline builds.',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(52,211,153,0.3) 0%, rgba(16,185,129,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(52,211,153,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderColor: 'rgba(52,211,153,0.25)',
    },
    iconClass: 'text-emerald-400',
  },
  {
    href: '/career',
    icon: Briefcase,
    title: 'Career',
    desc: 'Enterprise architecture, B2B SaaS, and growth leadership across high-impact organizations.',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(59,130,246,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(96,165,250,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderColor: 'rgba(96,165,250,0.25)',
    },
    iconClass: 'text-blue-400',
  },
]

function useMouse() {
  const mouse = useRef({ x: 0.5, y: 0.5 })
  const target = useRef({ x: 0.5, y: 0.5 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX / window.innerWidth
      target.current.y = e.clientY / window.innerHeight
    }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      mouse.current.x += (target.current.x - mouse.current.x) * 0.06
      mouse.current.y += (target.current.y - mouse.current.y) * 0.06
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return mouse
}

function TiltCard({ children, className, style, href }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.02)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  const Tag = href ? 'a' : 'div'
  const props = href ? { href } : {}

  return (
    <Tag
      ref={ref}
      {...props}
      className={className}
      style={{ ...style, transition: 'transform 0.15s ease', willChange: 'transform' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </Tag>
  )
}

function LeadForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) { setFirstName(''); setEmail('') }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 py-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.25)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7l4 4 6-7" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">You're in.</p>
          <a href="/build-and-launch-your-site" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-xs hover:text-emerald-300 transition-colors">
            Access your guide →
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-2 mb-2">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-colors"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-colors"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="sm:shrink-0 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.02] disabled:opacity-50 whitespace-nowrap"
          style={{
            background: 'linear-gradient(135deg, #34d399 0%, #10b981 60%, #059669 100%)',
            boxShadow: '0 6px 24px rgba(16,185,129,0.45), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.15)',
          }}
        >
          {status === 'loading' ? 'Sending...' : 'Get the guide →'}
        </button>
      </div>
      {status === 'error' && <p className="text-red-400 text-xs mt-1">Something went wrong. Try again.</p>}
      <p className="text-zinc-600 text-xs mt-2">No spam. Unsubscribe anytime.</p>
    </form>
  )
}

export default function Home() {
  const mouse = useMouse()
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const photoRef = useRef(null)
  const rafId = useRef(null)

  useEffect(() => {
    const animate = () => {
      const mx = mouse.current.x
      const my = mouse.current.y
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${(mx - 0.5) * -60}px, ${(my - 0.5) * -40}px)`
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${(mx - 0.5) * 50}px, ${(my - 0.5) * 35}px)`
      if (photoRef.current) photoRef.current.style.transform = `translate(${(mx - 0.5) * -12}px, ${(my - 0.5) * -8}px)`
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId.current)
  }, [])

  const trackEvent = (eventName, data = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...data })
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">

      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          ref={orb1Ref}
          className="absolute top-[-15%] left-[5%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.14) 0%, transparent 70%)', filter: 'blur(80px)', transition: 'transform 0.1s linear' }}
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-[-10%] right-[0%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', filter: 'blur(80px)', transition: 'transform 0.1s linear' }}
        />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="mb-14">
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-10">

            {/* Photo */}
            <div ref={photoRef} className="shrink-0 self-start md:self-center" style={{ willChange: 'transform', transition: 'transform 0.1s linear' }}>
              <div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full"
                style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.15), 0 0 0 4px rgba(52,211,153,0.12), 0 20px 60px rgba(0,0,0,0.6)' }}
              >
                <div className="absolute inset-0 rounded-full z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 50%)' }} />
                <Image src="/arvin.png" alt="Arvin Poole" fill className="rounded-full object-cover object-top" priority />
              </div>
            </div>

            {/* Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-300 text-sm mb-5 border border-white/[0.15]"
                style={glassPill}
              >
                <MapPin size={13} className="text-emerald-400" />
                MarTech · Revenue Architecture · Austin, TX
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-[1.15]" style={{ fontFamily: 'var(--font-space-mono)', letterSpacing: '-0.02em' }}>
                Arvin Poole
                <span className="block text-emerald-400">Enterprise Revenue &</span>
                <span className="block">MarTech Architect</span>
              </h1>

              <p className="text-base text-zinc-400 leading-relaxed max-w-xl mb-6">
                I build data-driven acquisition engines, orchestrate complex CRM infrastructures,
                and drive measurable pipeline growth for B2B SaaS and high-CAC industries.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  onClick={() => trackEvent('cta_click', { link_name: 'Contact' })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold text-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #34d399 0%, #10b981 60%, #059669 100%)',
                    boxShadow: '0 6px 24px rgba(16,185,129,0.45), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.15)',
                  }}
                >
                  <Mail size={15} />
                  Get in touch
                  <ArrowUpRight size={14} className="opacity-70" />
                </a>
                <a
                  href="https://linkedin.com/in/arvinpoole"
                  target="_blank"
                  onClick={() => trackEvent('outbound_click', { link_name: 'LinkedIn' })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-black font-semibold text-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)',
                    boxShadow: '0 4px 20px rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.08)',
                  }}
                >
                  <Link2 size={15} />
                  LinkedIn
                  <ArrowUpRight size={14} className="opacity-60" />
                </a>
                <button
                  onClick={() => trackEvent('resume_download')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold text-sm transition-all border border-white/[0.15] hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.2)',
                  }}
                >
                  <FileText size={15} className="text-zinc-400" />
                  Resume
                </button>
              </div>
            </div>
          </div>

        </section>

        {/* Lead magnet */}
        <section className="mb-14">
          <div
            className="rounded-3xl p-8 relative overflow-hidden border"
            style={{
              ...glassCard,
              borderColor: 'rgba(52,211,153,0.2)',
              background: 'linear-gradient(145deg, rgba(52,211,153,0.08) 0%, rgba(255,255,255,0.04) 50%, rgba(59,130,246,0.06) 100%)',
            }}
          >
            <CardShine />
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Free Resource</p>
                  <h2 className="text-2xl font-bold text-white mb-2">Build & Launch Your Site with AI</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                    Get the step-by-step guide to building and deploying your own website using
                    Claude Code, VS Code, GitHub, and Vercel — no coding experience needed.
                    Plus MarTech insights and growth frameworks straight to your inbox.
                  </p>
                </div>
              </div>
              <LeadForm />
            </div>
          </div>
        </section>

        {/* Explore */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
            <span className="text-zinc-600 text-xs font-medium uppercase tracking-widest">Explore</span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NAV_BLOCKS.map(({ href, icon: Icon, title, desc, iconStyle, iconClass }) => (
              <TiltCard
                key={href}
                href={href}
                className="group block rounded-3xl p-6 relative overflow-hidden border border-white/[0.12] no-underline"
                style={glassCard}
              >
                <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 38%)' }} />
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center border" style={iconStyle}>
                    <Icon size={20} className={iconClass} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h2 className="text-white font-bold text-base">{title}</h2>
                      <ChevronRight size={16} className="text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0" />
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
