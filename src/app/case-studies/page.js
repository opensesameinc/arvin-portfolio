'use client'

import { BarChart2, Megaphone, Wrench, ChevronDown, ArrowLeft } from 'lucide-react'
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

const CASES = [
  {
    id: 'lead-scoring',
    icon: BarChart2,
    iconClass: 'text-emerald-400',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(52,211,153,0.3) 0%, rgba(16,185,129,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(52,211,153,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderColor: 'rgba(52,211,153,0.25)',
    },
    title: 'Lead Scoring & CRM Orchestration',
    stack: 'HubSpot · Salesforce · B2B SaaS',
    snippet: 'Built a 100-point B2B lead scoring model on top of a fully restructured CRM architecture — bridging marketing and sales around a single source of truth.',
    sections: [
      {
        label: 'The Challenge',
        text: 'Silktide was transitioning from a sales-led, outbound-heavy motion to an inbound marketing engine. They needed a measurable qualification model that bridged marketing and sales, but the existing CRM architecture lacked the governance to support it.',
      },
      {
        label: 'The Execution',
        text: 'Instead of just assigning points to pageviews, I built the foundational CRM architecture first. I established strict lifecycle ownership rules where HubSpot owned scoring and the early lifecycle, while Salesforce owned SQLs and downstream stages. I designed and operationalized a 100-point B2B lead scoring model split between firmographic fit (40 points) and behavioral intent (60 points), then built a 36-task, seven-phase build plan for RevOps.',
      },
      {
        label: 'The Empirical Pivot',
        text: 'I pulled and analyzed 12 months of historical demo-requester data. The analysis revealed that 94% of conversions were single-touch events. I killed the planned multi-touch bonus weighting and adjusted thresholds to match where converters actually lived.',
      },
      {
        label: 'The Result',
        text: 'A fully operational, data-backed scoring engine that aligned marketing and sales around a single source of truth, eliminating disqualification noise and accelerating speed-to-lead for high-intent buyers.',
      },
    ],
  },
  {
    id: 'paid-media',
    icon: Megaphone,
    iconClass: 'text-blue-400',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(59,130,246,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(96,165,250,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderColor: 'rgba(96,165,250,0.25)',
    },
    title: 'Paid Media Architecture & Regulatory Agility',
    stack: 'LinkedIn Ads · Higher Education · ADA Compliance',
    snippet: 'Designed a $1,800 validation campaign that rescued a dying LinkedIn strategy — then executed a surgical copy pivot mid-build when the DOJ moved the ADA deadline.',
    sections: [
      {
        label: 'The Challenge',
        text: 'A previous $1,220 LinkedIn campaign died in an algorithmic death spiral — conversion objective without enough volume to optimize. The business needed a functional acquisition engine for the U.S. Higher Education vertical using a public accessibility index of 945 universities.',
      },
      {
        label: 'The Execution',
        text: 'I designed a 10-day, $1,800 validation campaign targeting digital and accessibility leaders, switching the objective to Website Visits to prevent algorithmic throttling. I engineered the full measurement architecture: Insight Tag coverage, Conversions API deduplication, and precise UTM structures. I also wrote the creative briefs balancing an anti-corporate visual identity with authoritative framing for public-sector buyers.',
      },
      {
        label: 'The Regulatory Pivot',
        text: 'Mid-build, the DOJ issued an Interim Final Rule extending the ADA Title II deadline. I executed a surgical copy pivot — shifting from compliance fear to deadline-aware angles like "The DOJ delayed it. The lawsuits did not." Audience, budget, and tracking remained untouched.',
      },
      {
        label: 'The Result',
        text: 'A technically sound validation engine that tested the riskiest assumption (CTR on the Index hook) at low cost, protecting the team from wasting hours on a heavy 25-ad-set ABM build before the core message was proven.',
      },
    ],
  },
  {
    id: 'ghl-pipeline',
    icon: Wrench,
    iconClass: 'text-orange-400',
    badge: 'In Progress',
    iconStyle: {
      background: 'linear-gradient(135deg, rgba(251,146,60,0.3) 0%, rgba(249,115,22,0.1) 100%)',
      boxShadow: '0 4px 14px rgba(251,146,60,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderColor: 'rgba(251,146,60,0.25)',
    },
    title: 'GHL Pipeline Orchestration',
    stack: 'Go High Level · Life Insurance · CRM Automation',
    snippet: 'Rebuilding a fragmented life insurance tech stack into a unified GHL environment — engineering automated SMS and email sequences to trigger the moment a lead enters the system.',
    sections: [
      {
        label: 'The Challenge',
        text: 'In the life insurance sector, speed-to-lead is the single biggest predictor of a closed policy. My client operates on a fragmented tech stack that causes lead decay. We need to consolidate their marketing and sales operations into a single environment and ruthlessly optimize follow-up in a cost-constrained environment.',
      },
      {
        label: 'The Blueprint',
        text: 'Migrating their entire lead management and sales architecture into Go High Level. Instead of porting old data, rebuilding the funnel logic from the ground up. Using Claude Code to script custom webhooks, API integrations, and backend logic. Engineering automated SMS and email sequences to trigger the second a lead hits the system, with conditional logic to route high-value policy inquiries directly to sales.',
      },
      {
        label: 'The Objective',
        text: 'A unified, fully automated GHL architecture that eliminates manual lead triage — guaranteeing immediate engagement with every prospect and setting the foundation for scalable, tracked experimentation.',
      },
    ],
  },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function CaseStudies() {
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

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <BarChart2 size={16} className="text-emerald-400" />
            <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Case Studies</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Work that moved<br />
            <span className="text-emerald-400">the needle.</span>
          </h1>
        </div>

        {/* Snippet cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          {CASES.map(({ id, icon: Icon, iconClass, iconStyle, title, stack, snippet, badge }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="group text-left rounded-3xl p-6 relative overflow-hidden border border-white/[0.12] hover:border-white/[0.2] transition-all duration-300 hover:scale-[1.02]"
              style={glassCard}
            >
              <CardShine />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center border"
                    style={{ ...iconStyle, borderColor: iconStyle.borderColor }}
                  >
                    <Icon size={18} className={iconClass} />
                  </div>
                  {badge && (
                    <span
                      className="px-2 py-0.5 rounded-full text-orange-300 text-xs font-medium border border-orange-500/20"
                      style={{
                        background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(234,88,12,0.08))',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                      }}
                    >
                      {badge}
                    </span>
                  )}
                </div>
                <h2 className="text-white font-bold text-sm mb-1 leading-snug">{title}</h2>
                <p className="text-zinc-600 text-xs mb-3">{stack}</p>
                <p className="text-zinc-400 text-xs leading-relaxed">{snippet}</p>
                <div className="flex items-center gap-1 mt-4 text-zinc-600 group-hover:text-zinc-400 transition-colors text-xs">
                  <span>Read more</span>
                  <ChevronDown size={12} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          <span className="text-zinc-700 text-xs font-medium uppercase tracking-widest">Full Case Studies</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, rgba(255,255,255,0.08), transparent)' }} />
        </div>

        {/* Full case studies */}
        <div className="space-y-6">
          {CASES.map(({ id, icon: Icon, iconClass, iconStyle, title, stack, badge, sections }) => (
            <article
              key={id}
              id={id}
              className="rounded-3xl p-8 relative overflow-hidden border border-white/[0.12] scroll-mt-8"
              style={glassCard}
            >
              <CardShine />
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center border"
                  style={{ ...iconStyle, borderColor: iconStyle.borderColor }}
                >
                  <Icon size={18} className={iconClass} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    {badge && (
                      <span
                        className="px-2 py-0.5 rounded-full text-orange-300 text-xs font-medium border border-orange-500/20"
                        style={{
                          background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(234,88,12,0.08))',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-500 text-sm mt-0.5">{stack}</p>
                </div>
              </div>

              <div className="space-y-5">
                {sections.map(({ label, text }) => (
                  <div key={label}>
                    <p className="text-emerald-400 text-sm font-semibold mb-1">{label}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

      </main>
    </div>
  )
}
