'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/career', label: 'Career' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visibleLinks = LINKS.filter(({ href }) => href !== pathname)

  if (visibleLinks.length === 0) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/[0.15] px-2 py-2 transition-all duration-500 ease-out"
        style={{
          marginTop: scrolled ? '20px' : '32px',
          background: scrolled
            ? 'linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.09) 100%)'
            : 'linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.06) 100%)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(52,211,153,0.08)'
            : '0 4px 16px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)',
          backdropFilter: scrolled ? 'blur(32px)' : 'blur(20px)',
          WebkitBackdropFilter: scrolled ? 'blur(32px)' : 'blur(20px)',
        }}
      >
        {visibleLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
