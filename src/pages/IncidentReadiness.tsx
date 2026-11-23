import {
  ArrowLeft, ArrowRight, ShieldAlert, Users, ClipboardList, MessageSquare,
  RefreshCw, CheckCircle2, CalendarCheck, LockKeyhole, FileCheck2,
} from "lucide-react";
import "./IncidentReadiness.css";

const readinessAreas = [
  {
    icon: Users,
    number: "01",
    title: "Roles and responsibilities",
    text: "Identify who coordinates a response, who makes decisions, who communicates updates and who supports recovery.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Response checklists",
    text: "Create clear, approved checklists for reporting concerns, escalating them and recording important decisions.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Communication planning",
    text: "Prepare contact lists and draft messages for the people who may need timely, accurate information.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Recovery priorities",
    text: "Decide which services matter most, identify backup arrangements and document recovery responsibilities.",
  },
];

const preparationSteps = [
  ["Know what matters", "List important systems, accounts, information and business services, along with their owners."],
  ["Agree the response team", "Assign decision-makers, technical contacts, business leads and an alternate contact for each role."],
  ["Prepare trusted contacts", "Keep verified internal, provider and support contacts somewhere accessible if normal systems are unavailable."],
  ["Document the first actions", "Define how staff should report a concern, who should be notified and how decisions are recorded."],
  ["Practise and improve", "Use discussion-based exercises to check whether the plan is understandable and update it after lessons are learned."],
];

const firstActions = [
  "Report the concern promptly through the organisation's approved channel.",
  "Contact the designated response lead using a trusted contact method.",
  "Keep relevant records and note the time, people involved and actions taken.",
  "Follow approved organisational procedures before making changes to affected systems.",
  "Share only verified information with authorised people who need it.",
];

export default function IncidentReadiness() {
  return (
    <main className="ir-page">
      <header className="ir-header ir-content">
        <a className="ir-brand" href="/"><span className="ir-brand-mark"><ShieldAlert size={20} /></span><span><b>GABESTRA</b><small>INTELLIGENCE</small></span></a>
        <a className="ir-back" href="/"><ArrowLeft size={15} /> Back to homepage</a>
      </header>

      <section className="ir-hero ir-content">
        <div className="ir-hero-copy">
          <div className="ir-eyebrow"><span /> SERVICE 05 / PREPAREDNESS</div>
          <h1>Be ready.<br /><em>Respond with clarity.</em></h1>
          <p className="ir-lede">A security incident is easier to manage when people know their roles and the next step. We help organise practical response plans before they are needed.</p>
          <a className="ir-primary" href="mailto:YOUR_EMAIL@example.com?subject=Incident%20Readiness%20Enquiry">Discuss incident readiness <ArrowRight size={16} /></a>
          <div className="ir-note"><CheckCircle2 size={16} /> Preparation, communication and recovery planning</div>
        </div>
        <div className="ir-visual" aria-label="Incident readiness planning illustration">
          <div className="ir-visual-grid" />
          <div className="ir-ring ir-ring-one" />
          <div className="ir-ring ir-ring-two" />
          <div className="ir-visual-core"><ShieldAlert size={65} strokeWidth={1.2} /></div>
          <div className="ir-float ir-float-top"><CalendarCheck size={16} /> PLAN AHEAD</div>
          <div className="ir-float ir-float-bottom"><FileCheck2 size={16} /> CLEAR NEXT STEPS</div>
          <span className="ir-visual-code">GI / 005 — RESPONSE READINESS</span>
        </div>
      </section>

      <section className="ir-intro">
        <div className="ir-content ir-intro-grid">
          <div><div className="ir-eyebrow"><span /> WHY PREPARE</div><h2>Less confusion.<br /><em>Better coordination.</em></h2></div>
          <p>When an unexpected security issue occurs, teams may need to make decisions quickly. A documented plan helps people understand who to contact, what to record and how to work towards recovery without relying on guesswork.</p>
        </div>
      </section>

      <section className="ir-content ir-section">
        <div className="ir-section-heading">
          <div><div className="ir-eyebrow"><span /> READINESS FRAMEWORK</div><h2>Four areas to<br /><em>get in order.</em></h2></div>
          <p>Plans should be proportionate to the organisation, its systems and the information it is responsible for.</p>
        </div>
        <div className="ir-area-grid">
          {readinessAreas.map((area) => {
            const Icon = area.icon;
            return <article className="ir-area-card" key={area.number}>
              <div className="ir-card-top"><Icon size={23} /><span>{area.number}</span></div>
              <h3>{area.title}</h3><p>{area.text}</p>
            </article>;
          })}
        </div>
      </section>

      <section className="ir-workflow">
        <div className="ir-content">
          <div className="ir-section-heading">
            <div><div className="ir-eyebrow"><span /> BUILD YOUR PLAN</div><h2>Preparation, step<br /><em>by step.</em></h2></div>
            <p>A useful plan is clear, assigned to real people and reviewed regularly — not simply stored and forgotten.</p>
          </div>
          <div className="ir-step-list">
            {preparationSteps.map(([title, text], index) => <article className="ir-step" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="ir-content ir-first-actions">
        <div className="ir-first-copy">
          <div className="ir-eyebrow"><span /> WHEN A CONCERN IS REPORTED</div>
          <h2>Start with calm,<br /><em>approved actions.</em></h2>
          <p>These are general coordination principles. Follow your organisation's incident plan, provider guidance and applicable legal or regulatory requirements.</p>
        </div>
        <div className="ir-action-list">
          {firstActions.map((item, index) => <div className="ir-action" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="ir-scope">
        <div className="ir-content ir-scope-inner"><LockKeyhole size={23} /><div><h2>Responsible, authorised response</h2><p>Incident readiness is about preparation and coordination. Any technical containment or recovery action should be performed only by appropriately authorised people under an approved process. This page is general information, not an emergency response service or a guarantee of incident prevention.</p></div></div>
      </section>

      <section className="ir-cta">
        <div className="ir-content ir-cta-inner">
          <div><div className="ir-eyebrow"><span /> MAKE PREPAREDNESS A PRIORITY</div><h2>Know the plan<br /><em>before you need it.</em></h2><p>Start a conversation about response roles, communication planning and recovery priorities for your organisation.</p></div>
          <a className="ir-cta-card" href="mailto:YOUR_EMAIL@example.com?subject=Incident%20Readiness%20Enquiry"><small>GABESTRA INTELLIGENCE / 05</small><strong>Plan with clarity <ArrowRight size={20} /></strong><span>YOUR DIGITAL WORLD, BETTER PREPARED.</span></a>
        </div>
      </section>

      <footer className="ir-footer"><div className="ir-content"><span>© {new Date().getFullYear()} GABESTRA Intelligence</span><a href="/">Return to homepage <ArrowRight size={14} /></a></div></footer>
    </main>
  );
}
