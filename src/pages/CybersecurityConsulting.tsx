import {
  ArrowLeft, ArrowRight, Compass, Target, FileSearch, ClipboardCheck,
  ShieldCheck, Scale, Lightbulb, Users, CheckCircle2,
} from "lucide-react";
import "./CybersecurityConsulting.css";

const consultingAreas = [
  { icon: Compass, title: "Security direction", text: "Clarify current concerns, business priorities and the security outcomes that matter most." },
  { icon: FileSearch, title: "Risk and gap reviews", text: "Review documented processes and authorised information to identify practical areas for improvement." },
  { icon: Target, title: "Prioritised roadmaps", text: "Turn observations into a sequenced plan with owners, priorities and realistic next steps." },
  { icon: Users, title: "People and process", text: "Help teams understand responsibilities, decision paths and everyday security practices." },
];

const engagementSteps = [
  ["Understand", "Discuss your organisation, current concerns, important systems and desired outcomes."],
  ["Scope", "Agree the questions to address, information to review, boundaries, deliverables and timeline."],
  ["Assess", "Review only the materials and systems you are authorised to share or have assessed."],
  ["Recommend", "Present clear findings, practical options, priorities and suggested ownership."],
  ["Improve", "Use the roadmap to guide improvements and revisit priorities as your needs change."],
];

const principles = [
  "Work within an agreed scope and written authorisation.",
  "Collect only information needed for the agreed purpose.",
  "Explain assumptions, limitations and areas that need specialist review.",
  "Prioritise realistic improvements instead of fear-based recommendations.",
];

export default function CybersecurityConsulting() {
  return (
    <main className="cc-page">
      <header className="cc-header cc-content">
        <a className="cc-brand" href="/"><span className="cc-brand-mark"><ShieldCheck size={20}/></span><span><b>GABESTRA</b><small>INTELLIGENCE</small></span></a>
        <a className="cc-back" href="/"><ArrowLeft size={15}/> Back to homepage</a>
      </header>

      <section className="cc-hero cc-content">
        <div className="cc-hero-copy">
          <div className="cc-eyebrow"><span/> SERVICE 06 / STRATEGIC GUIDANCE</div>
          <h1>Make security<br/><em>decisions with clarity.</em></h1>
          <p className="cc-lede">Cybersecurity can feel complicated. We help make the choices easier to understand, connect security priorities to real needs and turn recommendations into an achievable plan.</p>
          <a className="cc-primary" href="mailto:YOUR_EMAIL@example.com?subject=Cybersecurity%20Consulting%20Enquiry">Discuss a consulting enquiry <ArrowRight size={16}/></a>
          <div className="cc-note"><CheckCircle2 size={16}/> Clear advice · Defined scope · Practical priorities</div>
        </div>
        <div className="cc-visual" aria-label="Strategic cybersecurity planning illustration">
          <div className="cc-grid-bg"/>
          <div className="cc-orbit cc-orbit-a"/><div className="cc-orbit cc-orbit-b"/><div className="cc-orbit cc-orbit-c"/>
          <div className="cc-core"><Compass size={62} strokeWidth={1.2}/></div>
          <div className="cc-float cc-float-a"><Target size={16}/> CLEAR DIRECTION</div>
          <div className="cc-float cc-float-b"><ClipboardCheck size={16}/> ACTIONABLE PLAN</div>
          <span className="cc-visual-code">GI / 006 — STRATEGIC SECURITY</span>
        </div>
      </section>

      <section className="cc-intro">
        <div className="cc-content cc-intro-grid">
          <div><div className="cc-eyebrow"><span/> THE VALUE OF ADVICE</div><h2>Understand the risk.<br/><em>Choose the next step.</em></h2></div>
          <p>Good security decisions begin with context. A useful review considers what you are protecting, how your organisation works, which risks matter most and what can realistically be improved with the people and resources available.</p>
        </div>
      </section>

      <section className="cc-content cc-section">
        <div className="cc-section-heading">
          <div><div className="cc-eyebrow"><span/> CONSULTING FOCUS</div><h2>Advice shaped<br/><em>around your needs.</em></h2></div>
          <p>Engagements are tailored to the agreed question and remain within clearly defined, authorised boundaries.</p>
        </div>
        <div className="cc-area-grid">
          {consultingAreas.map((area, i) => { const Icon = area.icon; return <article className="cc-area-card" key={area.title}>
            <div className="cc-card-top"><Icon size={23}/><span>0{i+1}</span></div>
            <h3>{area.title}</h3><p>{area.text}</p>
          </article>; })}
        </div>
      </section>

      <section className="cc-process">
        <div className="cc-content">
          <div className="cc-section-heading">
            <div><div className="cc-eyebrow"><span/> HOW WE WORK</div><h2>A clear path from<br/><em>question to action.</em></h2></div>
            <p>Every engagement should have a shared understanding of its purpose, boundaries and expected output.</p>
          </div>
          <div className="cc-step-list">
            {engagementSteps.map(([title, text], i) => <article className="cc-step" key={title}>
              <span>0{i+1}</span><h3>{title}</h3><p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="cc-content cc-principles">
        <div className="cc-principles-copy">
          <div className="cc-eyebrow"><span/> RESPONSIBLE CONSULTING</div>
          <h2>Trust comes from<br/><em>doing things properly.</em></h2>
          <p>We believe sound advice should be transparent about what was reviewed, what was not reviewed and where further expertise may be needed.</p>
        </div>
        <div className="cc-principle-list">
          {principles.map((item, i) => <div className="cc-principle" key={item}><span>0{i+1}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="cc-scope">
        <div className="cc-content cc-scope-inner"><Scale size={24}/><div><h2>Defined scope. Honest recommendations.</h2><p>Consulting information on this page describes the intended service approach; it is not a claim of certification, regulatory approval or guaranteed outcomes. Specific professional services, technical testing and specialist advice must be agreed separately and delivered by appropriately qualified, authorised people.</p></div></div>
      </section>

      <section className="cc-cta">
        <div className="cc-content cc-cta-inner">
          <div><div className="cc-eyebrow"><span/> START WITH A CONVERSATION</div><h2>Bring your questions.<br/><em>Leave with direction.</em></h2><p>Tell us what you are trying to protect or improve. We can begin by understanding the challenge and whether a scoped consulting engagement is appropriate.</p></div>
          <a className="cc-cta-card" href="mailto:YOUR_EMAIL@example.com?subject=Cybersecurity%20Consulting%20Enquiry"><small>GABESTRA INTELLIGENCE / 06</small><strong>Find a clearer way forward <ArrowRight size={20}/></strong><span>INTELLIGENCE. PROTECTION. DIGITAL TRUST.</span></a>
        </div>
      </section>

      <footer className="cc-footer"><div className="cc-content"><span>© {new Date().getFullYear()} GABESTRA Intelligence</span><a href="/">Return to homepage <ArrowRight size={14}/></a></div></footer>
    </main>
  );
}
