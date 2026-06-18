'use client'

import { BarChart2, Megaphone, Wrench, Server, ChevronDown } from 'lucide-react'
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

const ICON_STYLES = {
  emerald: {
    background: 'linear-gradient(135deg, rgba(52,211,153,0.3) 0%, rgba(16,185,129,0.1) 100%)',
    boxShadow: '0 4px 14px rgba(52,211,153,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    borderColor: 'rgba(52,211,153,0.25)',
    labelColor: '#34d399',
  },
  blue: {
    background: 'linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(59,130,246,0.1) 100%)',
    boxShadow: '0 4px 14px rgba(96,165,250,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    borderColor: 'rgba(96,165,250,0.25)',
    labelColor: '#60a5fa',
  },
  violet: {
    background: 'linear-gradient(135deg, rgba(167,139,250,0.3) 0%, rgba(139,92,246,0.1) 100%)',
    boxShadow: '0 4px 14px rgba(167,139,250,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    borderColor: 'rgba(167,139,250,0.25)',
    labelColor: '#a78bfa',
  },
  orange: {
    background: 'linear-gradient(135deg, rgba(251,146,60,0.3) 0%, rgba(249,115,22,0.1) 100%)',
    boxShadow: '0 4px 14px rgba(251,146,60,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    borderColor: 'rgba(251,146,60,0.25)',
    labelColor: '#fb923c',
  },
}

const CASES = [
  {
    id: 'platform-migration',
    icon: Server,
    color: 'violet',
    iconClass: 'text-violet-400',
    title: 'Enterprise Platform Migration: Marketo → Iterable',
    stack: 'National Healthcare Screening Provider · B2C Retention · HIPAA Environment',
    snippet: 'Replaced a B2B-architected platform throttling a high-volume B2C revenue engine. ~$134K in annual savings, 3+ net-new channels, and zero revenue disruption across a live, revenue-critical cutover.',
    metrics: [
      { value: '~$134K', label: 'annual cost reduction' },
      { value: '50%', label: 'of revenue protected' },
      { value: '0', label: 'unscheduled downtime' },
      { value: '3+', label: 'net-new channels added' },
    ],
    sections: [
      {
        label: 'The Challenge',
        text: 'A legacy Marketo instance architected for B2B lead management was being forced to process high-volume B2C transactional data for a national health screening business. The result was compounding technical debt: data latency from forcing transactional volume through a rigid relational model, brittle syncs between the platform and the system of record, and a contractual 8% annual cost escalator approaching $372K/year. When Marketo granted only a 6-month renewal as a one-time concession, I used that window deliberately to fund the migration rather than accept another 12-month lock-in.',
      },
      {
        label: 'The Architecture Decision',
        text: "After evaluating every vendor, I selected Iterable on three criteria: a schema-less JSON data model that mapped marketing logic directly without forcing transactional data into relational fields; multi-channel capability (Email + SMS + Push) that Marketo couldn't offer; and scaling-based pricing I could tie to business milestones. I structured a 2-year locked contract with growth tiers built in: 4.5M to 5.5M profiles, 540M to 660M sends. Spend tracked with business growth, not vendor leverage.",
      },
      {
        label: 'The Vendor Strategy',
        text: 'The commercial structure was part of the architecture. I negotiated a 6-month Marketo bridge term to fund the migration window, avoiding a 12-month commitment to a platform we were leaving. I then replaced the compounding 8% escalator with predictable, scaling-based pricing the CFO could forecast across the full contract term. Predictable cost was a design requirement, not an afterthought.',
      },
      {
        label: 'The Execution',
        text: "I retained the proprietary HIPAA-compliant CRM as the system of record throughout. PHI was never ungoverned during the dual-platform period. I upgraded identity resolution from fragile email + first-name deduplication to deterministic UUID via the CRM's internal ID. I flattened Marketo's nested custom objects into optimized JSON payloads at the API perimeter. A phased 45-day IP warmup preceded a full parallel dual-run cutover, both platforms live and validated simultaneously, before sunsetting Marketo on schedule in March 2023.",
      },
      {
        label: 'The Result',
        text: '~$134K lower annual platform cost (36% reduction vs. Marketo run-rate). Zero unscheduled downtime. The email channel responsible for 50% of company revenue was never interrupted. Added 1.5M profile capacity (4.0M → 5.5M) and opened SMS, mobile push, web push, and in-app as net-new channels. Delivered on schedule.',
      },
    ],
  },
  {
    id: 'lead-scoring',
    icon: BarChart2,
    color: 'emerald',
    iconClass: 'text-emerald-400',
    title: 'Lead Scoring & CRM Orchestration',
    stack: 'B2B SaaS Platform · HubSpot · Salesforce',
    snippet: 'Built a 100-point B2B lead scoring model on top of a fully restructured CRM architecture, then used 12 months of empirical data to kill an assumption and simplify the model before it shipped.',
    sections: [
      {
        label: 'The Challenge',
        text: "A B2B SaaS platform was transitioning from a sales-led, outbound-heavy motion to an inbound marketing engine. They needed a measurable qualification model bridging marketing and sales, but the existing CRM architecture lacked the governance to support it. HubSpot and Salesforce operated as parallel systems with no clear lifecycle ownership.",
      },
      {
        label: 'The Architecture First',
        text: 'Rather than layering a scoring model on top of broken plumbing, I rebuilt the CRM architecture first. I established strict lifecycle ownership rules: HubSpot owned lead scoring and the early lifecycle; Salesforce owned SQLs and all downstream stages. This created a single source of truth before a single scoring rule was written.',
      },
      {
        label: 'The Scoring Model',
        text: 'I designed and operationalized a 100-point B2B lead scoring model split between firmographic fit (40 points) and behavioral intent (60 points), then built a 36-task, seven-phase RevOps build plan to govern rollout.',
      },
      {
        label: 'The Empirical Pivot',
        text: "I pulled and analyzed 12 months of historical demo-requester data before the model went live. The analysis revealed that 94% of conversions were single-touch events, which killed the planned multi-touch bonus weighting entirely. I adjusted thresholds to match where converters actually lived in the data, not where theory said they should.",
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
    color: 'blue',
    iconClass: 'text-blue-400',
    title: 'Paid Media Architecture & Regulatory Agility',
    stack: 'Higher Education Vertical · LinkedIn Ads · ADA Compliance',
    snippet: 'Designed a $1,800 validation campaign that rescued a dying LinkedIn strategy, then executed a surgical copy pivot mid-build when the DOJ moved the compliance deadline.',
    sections: [
      {
        label: 'The Challenge',
        text: 'A previous $1,220 LinkedIn campaign had died in an algorithmic death spiral: a conversion objective without enough volume to optimize. The business needed a functional acquisition engine for the U.S. Higher Education vertical using a public accessibility index of 945 universities, without repeating the same structural error.',
      },
      {
        label: 'The Campaign Architecture',
        text: 'I designed a 10-day, $1,800 validation campaign targeting digital and accessibility leaders, switching the objective to Website Visits to prevent algorithmic throttling. I engineered the full measurement stack: Insight Tag coverage, Conversions API deduplication, and precise UTM structures so every click was attributable before a dollar of spend was committed.',
      },
      {
        label: 'The Creative Strategy',
        text: 'I wrote the creative briefs balancing an anti-corporate visual identity with authoritative framing for public-sector buyers. These are people who buy on credibility, not brand.',
      },
      {
        label: 'The Regulatory Pivot',
        text: 'Mid-build, the DOJ issued an Interim Final Rule extending the ADA Title II deadline. Rather than halt the campaign, I executed a surgical copy pivot, shifting from compliance fear to deadline-aware angles like "The DOJ delayed it. The lawsuits did not." Audience targeting, budget, and tracking architecture remained untouched.',
      },
      {
        label: 'The Result',
        text: 'A technically sound validation engine that tested the riskiest assumption, CTR on the Index hook, at minimum cost. It protected the team from wasting build hours on a heavy 25-ad-set ABM structure before the core message was proven.',
      },
    ],
  },
  {
    id: 'ghl-pipeline',
    icon: Wrench,
    color: 'orange',
    iconClass: 'text-orange-400',
    badge: 'In Progress',
    title: 'GHL Pipeline Orchestration',
    stack: 'Regional Life Insurance Agency · Go High Level · CRM Automation',
    snippet: 'Rebuilding a fragmented life insurance tech stack into a unified GHL environment, engineering automated sequences to trigger the moment a lead enters the system.',
    sections: [
      {
        label: 'The Challenge',
        text: 'In the life insurance sector, speed-to-lead is the single biggest predictor of a closed policy. A regional agency was operating on a fragmented tech stack causing lead decay: manual triage, delayed follow-up, and no unified view of prospect activity across channels.',
      },
      {
        label: 'The Blueprint',
        text: 'Migrating their entire lead management and sales architecture into Go High Level, not porting old data, but rebuilding funnel logic from the ground up. Using Claude Code to script custom webhooks, API integrations, and backend logic. Engineering automated SMS and email sequences to trigger the second a lead hits the system, with conditional routing to send high-value policy inquiries directly to sales.',
      },
      {
        label: 'The Objective',
        text: 'A unified, fully automated GHL architecture that eliminates manual lead triage, guaranteeing immediate engagement with every prospect and setting the foundation for scalable, tracked experimentation.',
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

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20">

        {/* Back */}

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          {CASES.map(({ id, icon: Icon, color, iconClass, title, stack, snippet, badge }) => {
            const s = ICON_STYLES[color]
            return (
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
                      style={{ background: s.background, boxShadow: s.boxShadow, borderColor: s.borderColor }}
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
            )
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          <span className="text-zinc-700 text-xs font-medium uppercase tracking-widest">Full Case Studies</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, rgba(255,255,255,0.08), transparent)' }} />
        </div>

        {/* Full case studies */}
        <div className="space-y-6">
          {CASES.map(({ id, icon: Icon, color, iconClass, title, stack, badge, metrics, sections }) => {
            const s = ICON_STYLES[color]
            return (
              <article
                key={id}
                id={id}
                className="rounded-3xl p-8 relative overflow-hidden border border-white/[0.12] scroll-mt-8"
                style={glassCard}
              >
                <CardShine />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center border"
                    style={{ background: s.background, boxShadow: s.boxShadow, borderColor: s.borderColor }}
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

                {/* Metrics (if present) */}
                {metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                    {metrics.map(({ value, label }) => (
                      <div
                        key={label}
                        className="rounded-2xl p-4 text-center border border-white/[0.08]"
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      >
                        <div className="text-xl font-bold mb-0.5" style={{ color: s.labelColor }}>{value}</div>
                        <div className="text-zinc-600 text-xs leading-tight">{label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sections */}
                <div className="space-y-5">
                  {sections.map(({ label, text }) => (
                    <div key={label}>
                      <p className="text-sm font-semibold mb-1" style={{ color: s.labelColor }}>{label}</p>
                      <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

      </main>
    </div>
  )
}
