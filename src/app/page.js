'use client'

export default function Home() {
  
  // Custom function to push events to GTM
  const trackEvent = (eventName, data = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...data
      });
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Arvin Poole <span className="text-emerald-500">|</span> Growth Marketing & MarTech Architect
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-6 leading-relaxed">
          I build data-driven acquisition engines, orchestrate complex CRM infrastructures, and drive measurable pipeline growth for B2B SaaS and high-CAC industries.
        </p>
        <p className="text-lg text-zinc-500 mb-8 max-w-2xl">
          15+ years of experience turning marketing automation, paid media, and empirical data into revenue. Currently based in Austin, TX, and open to Marketing Director and Head of Growth roles.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://linkedin.com/in/arvinpoole" 
            target="_blank"
            onClick={() => trackEvent('outbound_click', { link_name: 'LinkedIn' })}
            className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors"
          >
            Connect on LinkedIn
          </a>
          <button 
            onClick={() => trackEvent('resume_download')}
            className="px-6 py-3 border border-zinc-700 text-white font-semibold rounded hover:border-emerald-500 hover:text-emerald-400 transition-colors"
          >
            Download Resume
          </button>
        </div>
      </section>

      {/* Case Studies Grid */}
      <div className="space-y-16">
        
        {/* Case Study 1 */}
        <article className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Lead Scoring & CRM Orchestration</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Challenge</h3>
              <p>Silktide was transitioning from a sales-led, outbound-heavy motion to an inbound marketing engine. They needed a measurable qualification model that bridged the gap between marketing and sales, but the existing CRM architecture lacked the governance to support it.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Execution</h3>
              <p>Instead of just assigning points to pageviews, I built a foundational CRM architecture first. I established strict lifecycle ownership rules where HubSpot owned scoring and the early lifecycle, while Salesforce owned SQLs and downstream stages. Once the governance was locked down, I designed and operationalized a 100-point B2B lead scoring model across both platforms. The model was logically split between firmographic fit (40 points) and behavioral intent (60 points). To ensure execution, I built a 36-task, seven-phase build plan and handed off clear, documented specifications to the RevOps team.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Empirical Pivot</h3>
              <p>I do not build models on boardroom assumptions. To calibrate the scoring thresholds, I pulled and analyzed 12 months of historical demo-requester data. The analysis revealed that 94 percent of conversions were actually single-touch events. Based on that data, I killed the planned multi-touch bonus weighting and adjusted the engagement thresholds to match where converters actually lived.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Result</h3>
              <p>A fully operational, data-backed scoring engine that aligned marketing and sales around a single source of truth, eliminating disqualification noise and accelerating speed-to-lead for high-intent buyers.</p>
            </div>
          </div>
        </article>

        {/* Case Study 2 */}
        <article className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Paid Media Architecture & Regulatory Agility</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Challenge</h3>
              <p>A previous $1,220 LinkedIn campaign died in an algorithmic death spiral because it used a conversion objective without enough conversion volume to optimize. The business needed a functional acquisition engine for the U.S. Higher Education vertical using our strongest first-party data asset: a public accessibility index of 945 universities.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Execution</h3>
              <p>I designed a 10-day, $1,800 validation campaign targeting digital and accessibility leaders. To prevent algorithmic throttling, I changed the objective to Website Visits. I engineered the full measurement architecture, ensuring Insight Tag coverage, Conversions API deduplication, and precise UTM structures that passed data perfectly into HubSpot scoring fields. I also wrote the creative briefs, balancing a deliberately anti-corporate visual identity with the authoritative framing required for public-sector buyers.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Regulatory Pivot</h3>
              <p>Mid-build, the DOJ issued an Interim Final Rule extending the ADA Title II compliance deadline. I executed a surgical pivot on the copy. Instead of relying on immediate compliance fear, I rolled out deadline-aware angles like "The DOJ delayed it. The lawsuits did not." The messaging changed, but the audience, budget, and tracking structure remained entirely untouched.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Result</h3>
              <p>I launched a technically sound validation engine to test our riskiest assumption (CTR on the Index hook) at a low cost. This sequenced approach protected the marketing team from wasting hours on a heavy 25-ad-set ABM build before the core message was proven in the market.</p>
            </div>
          </div>
        </article>

        {/* Case Study 3 */}
        <article className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Active Build: GHL Pipeline Orchestration</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Challenge</h3>
              <p>In the life insurance sector, speed-to-lead is the single biggest predictor of a closed policy. My client is currently operating on a fragmented tech stack that causes lead decay. We need to consolidate their marketing and sales operations into a single environment and ruthlessly optimize the follow-up process in a tightly cost-constrained environment.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Blueprint</h3>
              <p>I am currently migrating their entire lead management and sales architecture into Go High Level (GHL). Instead of just porting over old data, I am rebuilding the funnel logic from the ground up. To accelerate the technical build, I am using Claude Code to script the custom webhooks, API integrations, and backend logic. I am engineering automated SMS and email nurturing sequences designed to trigger the second a lead hits the system, with the goal of driving response times down to zero. I am also building conditional logic into the pipeline to immediately flag and route high-value policy inquiries directly to the sales team to separate signal from noise.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold mb-1">The Objective</h3>
              <p>A unified, fully automated GHL architecture that eliminates manual lead triage. Once deployed, the system will guarantee immediate engagement with every prospect, maximizing the conversion rate of expensive demand-gen traffic and setting the foundation for scalable, tracked experimentation.</p>
            </div>
          </div>
        </article>

      </div>
    </main>
  );
}