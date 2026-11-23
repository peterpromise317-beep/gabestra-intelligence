import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  ShieldAlert,
  ScanEye,
} from "lucide-react";
import "./WebsiteSecurity.css";

const reviewAreas = [
  {
    icon: LockKeyhole,
    title: "Access & authentication",
    body: "Review administrator access, account ownership, multi-factor authentication and account recovery practices.",
  },
  {
    icon: Globe2,
    title: "HTTPS & transport security",
    body: "Check that the site uses HTTPS consistently and that visitors are not being sent to insecure versions.",
  },
  {
    icon: ShieldCheck,
    title: "Security configuration",
    body: "Review important defensive settings such as security headers, cookie flags and exposed configuration information.",
  },
  {
    icon: ClipboardCheck,
    title: "Updates & backups",
    body: "Assess update routines, backup coverage and whether recovery steps are documented.",
  },
];

const process = [
  ["01", "Define the scope", "Confirm the website owner, written permission, approved domain and boundaries of the review."],
  ["02", "Review the essentials", "Use a non-invasive checklist to examine publicly observable settings and information supplied by the owner."],
  ["03", "Prioritise findings", "Explain each observation in plain language, including its potential impact and priority."],
  ["04", "Plan improvements", "Provide practical recommendations and a clear order for addressing the findings."],
];

const checklist = [
  "The website redirects visitors to HTTPS.",
  "Administrator accounts use multi-factor authentication where available.",
  "Unused accounts and old access permissions are reviewed.",
  "The website platform, themes and extensions are kept updated.",
  "Backups are created regularly and recovery is documented.",
  "Security and privacy contact details are current.",
];

export default function WebsiteSecurity() {
  return (
    <div className="ws-page">
      <header className="ws-header">
        <Link to="/" className="ws-brand" aria-label="Back to GABESTRA home">
          <span className="ws-brand-icon"><ShieldCheck size={22} /></span>
          <span><strong>GABESTRA</strong><small>INTELLIGENCE</small></span>
        </Link>
        <Link to="/" className="ws-back"><ArrowLeft size={15} /> Back to home</Link>
      </header>

      <main>
        <section className="ws-hero">
          <div className="ws-hero-inner">
            <div className="ws-eyebrow"><span /> GABESTRA SERVICES / 01</div>
            <p className="ws-kicker">WEBSITE SECURITY</p>
            <h1>Build confidence<br />into your <em>website.</em></h1>
            <p className="ws-lede">
              A safer website starts with understanding the basics. We help website owners
              review essential defensive settings, identify areas for improvement and plan
              practical next steps.
            </p>
            <a className="ws-primary" href="mailto:YOUR_EMAIL@example.com?subject=Website%20Security%20Enquiry">
              Discuss website security <ArrowUpRight size={17} />
            </a>
            <div className="ws-hero-note"><ShieldCheck size={16} /> Defensive reviews · Clear recommendations · Authorised scope only</div>
          </div>
          <div className="ws-hero-art" aria-hidden="true">
            <div className="ws-art-ring ring-one" />
            <div className="ws-art-ring ring-two" />
            <div className="ws-art-grid" />
            <div className="ws-art-shield"><ShieldCheck size={78} strokeWidth={1.1} /></div>
            <div className="ws-art-chip chip-one"><LockKeyhole size={15} /> ACCESS CONTROL</div>
            <div className="ws-art-chip chip-two"><CheckCircle2 size={15} /> DEFENSIVE REVIEW</div>
            <span className="ws-art-code">GI / WEB-SEC / 001</span>
          </div>
        </section>

        <section className="ws-intro">
          <div className="ws-content ws-intro-grid">
            <div>
              <div className="ws-eyebrow"><span /> THE OBJECTIVE</div>
              <h2>Protection begins<br />with the <em>fundamentals.</em></h2>
            </div>
            <p>
              Websites depend on many connected parts: hosting, software, user accounts,
              forms and third-party services. A thoughtful security review helps owners
              understand where to focus without unnecessary disruption.
            </p>
          </div>
        </section>

        <section className="ws-content ws-section">
          <div className="ws-section-heading">
            <div><div className="ws-eyebrow"><span /> REVIEW AREAS</div><h2>What we look at.</h2></div>
            <p>A scoped, defensive review focused on core website security practices.</p>
          </div>
          <div className="ws-review-grid">
            {reviewAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="ws-review-card" key={item.title}>
                  <div className="ws-card-top"><span>0{index + 1}</span><Icon size={23} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="ws-process">
          <div className="ws-content">
            <div className="ws-section-heading">
              <div><div className="ws-eyebrow"><span /> HOW IT WORKS</div><h2>A clear process.<br /><em>No guesswork.</em></h2></div>
              <p>Every engagement should have an agreed purpose, scope and permission before any review begins.</p>
            </div>
            <div className="ws-process-list">
              {process.map(([number, title, body]) => (
                <article className="ws-process-row" key={number}>
                  <span className="ws-process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ws-content ws-check-section">
          <div className="ws-check-copy">
            <div className="ws-eyebrow"><span /> START WITH THE BASICS</div>
            <h2>A simple website<br /><em>security checklist.</em></h2>
            <p>Use these questions as a starting point for a website you own or are authorised to manage. This checklist is educational and does not replace a professional assessment.</p>
          </div>
          <div className="ws-checklist">
            {checklist.map((item) => (
              <div className="ws-check-item" key={item}><CheckCircle2 size={17} /><span>{item}</span></div>
            ))}
          </div>
        </section>

        <section className="ws-scope">
          <div className="ws-content ws-scope-inner">
            <div className="ws-scope-icon"><ShieldAlert size={28} /></div>
            <div>
              <h2>Responsible security is non-negotiable.</h2>
              <p>Any technical assessment must be limited to websites and infrastructure the client owns or has explicit permission to assess. This service page does not promise penetration testing, automated scanning or certification.</p>
            </div>
          </div>
        </section>

        <section className="ws-cta">
          <div className="ws-content ws-cta-inner">
            <div>
              <div className="ws-eyebrow"><span /> TAKE THE NEXT STEP</div>
              <h2>Make your website<br /><em>security a priority.</em></h2>
              <p>Tell us about the website you manage and the security questions you want to address.</p>
            </div>
            <a className="ws-cta-card" href="mailto:YOUR_EMAIL@example.com?subject=Website%20Security%20Enquiry">
              <span>GABESTRA INTELLIGENCE</span>
              <strong>Start a conversation <ArrowRight size={19} /></strong>
              <small>YOUR_EMAIL@example.com</small>
            </a>
          </div>
        </section>
      </main>

      <footer className="ws-footer">
        <div className="ws-content"><Link to="/"><ShieldCheck size={17} /> GABESTRA Intelligence</Link><span>Intelligence. Protection. Digital Trust.</span></div>
      </footer>
    </div>
  );
}