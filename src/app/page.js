'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  MapPin,
  BarChart2,
  Megaphone,
  Wrench,
  BookOpen,
  ChevronRight,
  Link2,
  FileText,
  Briefcase,
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

const NAV_BLOCKS = [
  {
    href: '/case-studies',
    icon: BarChart2,
    color: 'emerald',
    title: 'Case Studies',
    desc: 'CRM orchestration, paid media architecture, and live pipeline builds.',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(52,211,153,0.3) 0%, rgba(16,185,129,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(52,211,153,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    },
    borderColor: 'rgba(52,211,153,0.25)',
    iconClass: 'text-emerald-400',
  },
  {
    href: '/career',
    icon: Briefcase,
    color: 'blue',
    title: 'Career',
    desc: '15+ years across B2B SaaS, high-CAC verticals, and growth leadership.',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(59,130,246,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(96,165,250,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    },
    borderColor: 'rgba(96,165,250,0.25)',
    iconClass: 'text-blue-400',
  },
  {
    href: '/build-and-launch-your-site',
    icon: BookOpen,
    color: 'violet',
    title: 'Build & Launch Guide',
    desc: 'Step-by-step: build and deploy your own site with AI. No code needed.',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(167,139,250,0.3) 0%, rgba(139,92,246,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(167,139,250,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    },
    borderColor: 'rgba(167,139,250,0.25)',
    iconClass: 'text-violet-400',
  },
  {
    href: '/contact',
    icon: Mail,
    color: 'orange',
    title: 'Contact',
    desc: 'Open to Marketing Director and Head of Growth opportunities.',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(251,146,60,0.3) 0%, rgba(249,115,22,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(251,146,60,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    },
    borderColor: 'rgba(251,146,60,0.25)',
    iconClass: 'text-orange-400',
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

  const onLeave = (e) => {
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
      style={{ ...style, transition: 'transform 0.15s ease, box-shadow 0.15s ease', willChange: 'transform' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </Tag>
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

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${(mx - 0.5) * -60}px, ${(my - 0.5) * -40}px)`
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${(mx - 0.5) * 50}px, ${(my - 0.5) * 35}px)`
      }
      if (photoRef.current) {
        photoRef.current.style.transform = `translate(${(mx - 0.5) * -12}px, ${(my - 0.5) * -8}px)`
      }

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

      {/* Background orbs — parallax with mouse */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          ref={orb1Ref}
          className="absolute top-[-15%] left-[5%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(52,211,153,0.14) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transition: 'transform 0.1s linear',
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-[-10%] right-[0%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transition: 'transform 0.1s linear',
          }}
        />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-12">

            {/* Photo */}
            <div ref={photoRef} className="shrink-0 self-start md:self-center" style={{ willChange: 'transform', transition: 'transform 0.1s linear' }}>
              <div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full"
                style={{
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.15), 0 0 0 4px rgba(52,211,153,0.12), 0 20px 60px rgba(0,0,0,0.6)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-full z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 50%)', borderRadius: '50%' }}
                />
                <Image
                  src="/arvin.jpg"
                  alt="Arvin Poole"
                  fill
                  className="rounded-full object-cover object-top grayscale"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-300 text-sm mb-5 border border-white/[0.15]"
                style={glassPill}
              >
                <MapPin size={13} className="text-emerald-400" />
                Austin, TX · Open to Marketing Director & Head of Growth
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-[1.1]">
                Arvin Poole
                <span className="block text-emerald-400">Growth Marketing &</span>
                <span className="block">MarTech Architect</span>
              </h1>

              <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
                I build data-driven acquisition engines, orchestrate complex CRM infrastructures,
                and drive measurable pipeline growth for B2B SaaS and high-CAC industries.
              </p>
            </div>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: '15+ years', sub: 'experience' },
              { label: 'B2B SaaS', sub: 'focus' },
              { label: 'Austin TX', sub: 'based' },
            ].map(({ label, sub }) => (
              <div
                key={label}
                className="px-4 py-2 rounded-2xl border border-white/[0.15]"
                style={glassPill}
              >
                <span className="text-white font-semibold text-sm">{label}</span>
                <span className="text-zinc-500 text-sm"> · {sub}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://linkedin.com/in/arvinpoole"
              target="_blank"
              onClick={() => trackEvent('outbound_click', { link_name: 'LinkedIn' })}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-black font-semibold text-sm transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)',
                boxShadow: '0 4px 20px rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.08)',
              }}
            >
              <Link2 size={15} />
              Connect on LinkedIn
              <ArrowUpRight size={14} className="opacity-60" />
            </a>
            <button
              onClick={() => trackEvent('resume_download')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold text-sm transition-all border border-white/[0.15] hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
                boxShadow: '0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.2)',
              }}
            >
              <FileText size={15} className="text-zinc-400" />
              Download Resume
            </button>
          </div>
        </section>

        {/* Navigation hub */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
            <span className="text-zinc-600 text-xs font-medium uppercase tracking-widest">Explore</span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NAV_BLOCKS.map(({ href, icon: Icon, title, desc, iconStyle, borderColor, iconClass }) => (
              <TiltCard
                key={href}
                href={href}
                className="group block rounded-3xl p-6 relative overflow-hidden border border-white/[0.12] no-underline"
                style={glassCard}
              >
                {/* Top shine */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 38%)' }}
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center border"
                    style={{ ...iconStyle, borderColor }}
                  >
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
