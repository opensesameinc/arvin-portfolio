'use client'

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
} from 'lucide-react'

export default function Home() {

  const trackEvent = (eventName, data = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...data })
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-emerald-500/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-blue-500/6 blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="mb-20">

          {/* Location pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm mb-8 backdrop-blur-sm">
            <MapPin size={13} className="text-emerald-400" />
            Austin, TX · Open to Marketing Director & Head of Growth
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Arvin Poole
            <span className="block text-emerald-400">Growth Marketing &</span>
            <span className="block">MarTech Architect</span>
          </h1>

          <p className="text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl">
            I build data-driven acquisition engines, orchestrate complex CRM infrastructures,
            and drive measurable pipeline growth for B2B SaaS and high-CAC industries.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: '15+ years', sub: 'experience' },
              { label: 'B2B SaaS', sub: 'focus' },
              { label: 'Austin TX', sub: 'based' },
            ].map(({ label, sub }) => (
              <div key={label} className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-all"
            >
              <Link2 size={15} />
              Connect on LinkedIn
              <ArrowUpRight size={14} className="opacity-60" />
            </a>
            <button
              onClick={() => trackEvent('resume_download')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <FileText size={15} className="text-zinc-400" />
              Download Resume
            </button>
          </div>
        </section>

        {/* Case Studies */}
        <section className="space-y-5 mb-8">
          <div className="flex items-center gap-2 mb-8">
            <BarChart2 size={16} className="text-emerald-400" />
            <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Case Studies</span>
          </div>

          {/* Case Study 1 */}
          <article className="group rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                <BarChart2 size={18} className="text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Lead Scoring & CRM Orchestration</h2>
                <p className="text-zinc-500 text-sm mt-0.5">HubSpot · Salesforce · B2B SaaS</p>
              </div>
            </div>

            <div className="space-y-5">
              {[
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
              ].map(({ label, text }) => (
                <div key={label}>
                  <p className="text-emerald-400 text-sm font-semibold mb-1">{label}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Case Study 2 */}
          <article className="group rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                <Megaphone size={18} className="text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Paid Media Architecture & Regulatory Agility</h2>
                <p className="text-zinc-500 text-sm mt-0.5">LinkedIn Ads · Higher Education · ADA Compliance</p>
              </div>
            </div>

            <div className="space-y-5">
              {[
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
              ].map(({ label, text }) => (
                <div key={label}>
                  <p className="text-emerald-400 text-sm font-semibold mb-1">{label}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Case Study 3 */}
          <article className="group rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 rounded-2xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center">
                <Wrench size={18} className="text-orange-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">Active Build: GHL Pipeline Orchestration</h2>
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/20 text-orange-400 text-xs font-medium">In Progress</span>
                </div>
                <p className="text-zinc-500 text-sm mt-0.5">Go High Level · Life Insurance · CRM Automation</p>
              </div>
            </div>

            <div className="space-y-5">
              {[
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
              ].map(({ label, text }) => (
                <div key={label}>
                  <p className="text-emerald-400 text-sm font-semibold mb-1">{label}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* Training Guide CTA */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
          <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                  <BookOpen size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-1">Free Resource</p>
                  <h2 className="text-xl font-bold text-white mb-2">Build & Launch Your Website with AI</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                    A step-by-step interactive guide to building and deploying your own website using
                    Claude Code, VS Code, GitHub, and Vercel — no coding experience needed.
                  </p>
                </div>
              </div>
              <a
                href="/build-and-launch-your-site"
                onClick={() => trackEvent('outbound_click', { link_name: 'Build and Launch Guide' })}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-all"
              >
                Start the guide
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
