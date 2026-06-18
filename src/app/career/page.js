'use client'

import { Briefcase, GraduationCap, Wrench } from 'lucide-react'
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

const DOT_COLORS = {
  emerald: '#34d399',
  blue: '#60a5fa',
  violet: '#a78bfa',
  orange: '#fb923c',
  gray: '#6b7280',
}

const ROLES = [
  {
    company: 'Silktide',
    location: 'Austin, TX',
    title: 'Growth Marketing Manager, Marketing Technology',
    dates: 'Jan 2026 – May 2026',
    dot: 'emerald',
    bullets: [
      'Designed and operationalized a 100-point B2B lead scoring model across HubSpot and Salesforce, guiding architectural direction for MarTech integrations and enterprise data governance.',
      'Analyzed 12 months of historical data to calibrate system scoring, proving 94% of conversions were single-touch events. Cut redundancy and simplified fragmented lead routing logic.',
      'Audited Google Tag Manager environments, identifying 11 orphaned conversion tags, and authored an 11-task developer specification to remediate tracking across international corporate entities.',
      'Migrated a 25-campaign Google Ads architecture from a UK entity to a US entity while maintaining shared GTM and GA4 properties.',
    ],
  },
  {
    company: 'Open Sesame Digital',
    location: 'Austin, TX (Freelance)',
    title: 'Marketing Technology Architect',
    dates: 'Oct 2024 – Present',
    dot: 'emerald',
    bullets: [
      'Architecting end-to-end web infrastructure and customer engagement platforms to support business strategy.',
      'Directing the technical deployment and interoperability of marketing automation systems across Go High Level, Marketo, and HubSpot.',
      'Translating early-stage business requirements into technical integrations that govern data reporting and streamline lead routing across client organizations.',
    ],
  },
  {
    company: 'Vendidit',
    location: 'Austin, TX',
    title: 'Fractional CMO & Technology Strategist',
    dates: 'Jul 2024 – Oct 2024',
    dot: 'blue',
    bullets: [
      'Designed the foundational technology and engagement strategy for a reverse logistics platform modernizing the secondary retail returns market.',
      'Mapped business capabilities to initial architecture to support audience targeting and growth planning.',
    ],
  },
  {
    company: 'Buildxact & Genesis Digital',
    location: 'Remote',
    title: 'Operations & Systems Director',
    dates: 'Dec 2022 – May 2024',
    dot: 'blue',
    bullets: [
      'Evaluated and optimized technical infrastructure for scaling SaaS platforms, connecting business strategy to technology architecture.',
      'Constructed complex targeting queries and automated workflows to reduce redundancy and improve interoperability between isolated data systems.',
    ],
  },
  {
    company: 'Life Line Screening',
    location: 'Austin, TX',
    title: 'Sr. Digital Retention Manager',
    dates: '2018 – 2022',
    dot: 'violet',
    bullets: [
      'Directed the enterprise migration from Marketo to Iterable, serving as primary technical decision maker for platform selection.',
      'Authored full product technical specifications and managed the build of the new solution to ensure exact marketing and business integration.',
      'Negotiated and managed vendor contracts while overseeing high-volume email campaigns that generated 50% of overall company revenue.',
    ],
  },
  {
    company: 'Invenio Solutions',
    location: 'Austin, TX',
    title: 'Certified Marketo Automation Specialist',
    dates: '2017 – 2018',
    dot: 'violet',
    bullets: [
      'Led the architecture and implementation of the marketing and sales technology stack for global supply chain client D.W. Morgan Company.',
      'Engineered backend integration connecting Marketo, Salesforce, and Tableau to build visibility into logistics pipelines and inventory on demand.',
    ],
  },
  {
    company: 'Yokogawa Corporation',
    location: 'Austin, TX',
    title: 'Technical Project Manager & Developer',
    dates: '2014 – 2017',
    dot: 'orange',
    bullets: [
      'Managed application development using PHP and MySQL, focusing on database design and query optimization.',
      'Maintained server configurations, user access controls, and security implementations across multiple domains.',
    ],
  },
  {
    company: 'Dell Computers',
    location: 'Round Rock, TX',
    title: 'Technology Strategy Manager, Product',
    dates: 'Dec 2010 – Apr 2014',
    dot: 'orange',
    bullets: [
      'Established technical direction for PowerEdge Server and Converged Infrastructure portfolios, bridging business strategy and operating models.',
      'Guided architectural adoption decisions and validated hardware and software integrations with Intel, Microsoft, and VMware.',
    ],
  },
  {
    company: 'IBM Corporation',
    location: 'Armonk, NY',
    title: 'Development Manager, Enterprise Architecture & QA',
    dates: 'Jan 1999 – Apr 2009',
    dot: 'gray',
    bullets: [
      'Governed enterprise-wide standards across application and integration domains.',
      'Managed engineering budgets up to $4M and directed a 22-member development team.',
      'Led the $12M software release for IBM WebSphere, ensuring a 99.9% defect-free migration with zero unscheduled downtime.',
      'Partnered with research teams on Data Grid and Compute Grid architectures to evaluate and optimize emerging technologies.',
    ],
  },
  {
    company: 'United States Air Force',
    location: '',
    title: 'Operational Leadership',
    dates: '1989 – 1999',
    dot: 'gray',
    bullets: [
      'Served during Desert Storm. Honorable Discharge.',
      'Applied strict operational governance and logistics management to high-stakes delivery environments.',
    ],
  },
]

const SKILLS = [
  {
    label: 'CRM & Marketing Automation',
    color: 'emerald',
    tags: ['HubSpot', 'Salesforce', 'Go High Level', 'Marketo', 'Iterable', 'Lead Scoring', 'Data Governance'],
  },
  {
    label: 'Paid Media & Analytics',
    color: 'blue',
    tags: ['LinkedIn Ads', 'Google Ads', 'GTM', 'GA4', 'Conversions API', 'UTM Architecture', 'Campaign Management'],
  },
  {
    label: 'Enterprise Architecture',
    color: 'violet',
    tags: ['Business Capability Mapping', 'System Interoperability', 'Technical Specification', 'Cross-Functional Alignment', 'Multi-Entity Architecture'],
  },
  {
    label: 'AI & Development',
    color: 'orange',
    tags: ['Claude / Anthropic', 'Google Gemini Pro', 'Advanced LLM Workflows', 'Webhooks & APIs', 'PHP', 'MySQL'],
  },
]

const TAG_STYLES = {
  emerald: { background: 'rgba(52,211,153,0.1)', borderColor: 'rgba(52,211,153,0.2)', color: '#6ee7b7' },
  blue: { background: 'rgba(96,165,250,0.1)', borderColor: 'rgba(96,165,250,0.2)', color: '#93c5fd' },
  violet: { background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.2)', color: '#c4b5fd' },
  orange: { background: 'rgba(251,146,60,0.1)', borderColor: 'rgba(251,146,60,0.2)', color: '#fdba74' },
}

const Divider = ({ label }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
    <span className="text-zinc-700 text-xs font-medium uppercase tracking-widest">{label}</span>
    <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, rgba(255,255,255,0.08), transparent)' }} />
  </div>
)

export default function Career() {
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
            <Briefcase size={16} className="text-emerald-400" />
            <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Career</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Built to scale.<br />
            <span className="text-emerald-400">Wired for growth.</span>
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
            Technical leader combining a foundation in enterprise systems engineering with deep expertise
            in marketing technology and customer engagement platforms. From IBM to B2B SaaS. I map
            business strategy to architecture.
          </p>
        </div>

        {/* Open to */}
        <div
          className="rounded-3xl p-6 relative overflow-hidden border mb-16"
          style={{
            ...glassCard,
            borderColor: 'rgba(52,211,153,0.2)',
          }}
        >
          <CardShine />
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Open to</p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Marketing Director or Head of Growth roles at B2B SaaS companies where data-driven acquisition
            and CRM infrastructure are core to the growth thesis. Based in Austin, TX. Open to remote.
          </p>
        </div>

        {/* Work History */}
        <Divider label="Work History" />

        <div className="mb-16">
          {ROLES.map(({ company, location, title, dates, dot, bullets }, i) => (
            <div key={company + dates} className="flex gap-5 mb-1">

              {/* Timeline spine */}
              <div className="flex flex-col items-center pt-1 shrink-0">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: DOT_COLORS[dot], boxShadow: `0 0 8px ${DOT_COLORS[dot]}55` }}
                />
                {i < ROLES.length - 1 && (
                  <div className="w-px flex-1 mt-1.5" style={{ background: 'rgba(255,255,255,0.07)', minHeight: '40px' }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 mb-0.5">
                  <span className="text-white font-bold text-base">{company}</span>
                  <span className="text-zinc-600 text-xs">{dates}</span>
                </div>
                <p className="text-xs mb-0.5" style={{ color: DOT_COLORS[dot] }}>{title}</p>
                {location && <p className="text-zinc-600 text-xs mb-3">{location}</p>}
                <ul className="space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-zinc-400 text-sm leading-relaxed">
                      <span className="text-zinc-700 mt-1.5 shrink-0">–</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <Divider label="Skills & Tools" />

        <div
          className="rounded-3xl p-8 relative overflow-hidden border border-white/[0.12] mb-16"
          style={glassCard}
        >
          <CardShine />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SKILLS.map(({ label, color, tags }) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: DOT_COLORS[color] }}>
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={TAG_STYLES[color]}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <Divider label="Education" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              degree: 'Bachelor of Science',
              field: 'Electrical & Computer Engineering',
              school: 'University of Alabama at Huntsville',
            },
            {
              degree: 'Master of Business Administration',
              field: 'MBA',
              school: 'University of Arizona',
            },
          ].map(({ degree, field, school }) => (
            <div
              key={school}
              className="rounded-3xl p-6 relative overflow-hidden border border-white/[0.12]"
              style={glassCard}
            >
              <CardShine />
              <GraduationCap size={18} className="text-emerald-400 mb-3" />
              <p className="text-white font-bold text-sm mb-0.5">{degree}</p>
              <p className="text-zinc-400 text-sm mb-1">{field}</p>
              <p className="text-zinc-600 text-xs">{school}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  )
}
