import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  UserRoundCheck,
  RefreshCw,
} from "lucide-react";
import "./AccountProtection.css";

const focusAreas = [
  {
    icon: Fingerprint,
    title: "Multi-factor authentication",
    body: "Understand where MFA is available, which methods are supported and how to keep recovery options current.",
  },
  {
    icon: UserRoundCheck,
    title: "Access & permissions",
    body: "Review who has access, remove accounts that are no longer needed and apply least-privilege principles.",
  },
  {
    icon: KeyRound,
    title: "Password practices",
    body: "Adopt unique passwords, a reputable password manager and safer account recovery habits.",
  },
  {
    icon: RefreshCw,
    title: "Account recovery",
    body: "Prepare recovery codes, backup methods and trusted recovery contacts before access is lost.",
  },
];

const steps = [
  ["01", "Understand the accounts", "Identify the important accounts and services in scope, such as business email, hosting and collaboration tools."],
  ["02", "Review sign-in protections", "Check available MFA options, password practices, recovery settings and sign-in notifications."],
  ["03", "Check access permissions", "Review authorised users, administrator roles, connected apps and access that is no longer required."],
  ["04", "Create an improvement plan", "Prioritise changes and document recovery steps without collecting or requesting account passwords."],
];

const habits = [
  "Use a unique password for every important account.",
  "Enable multi-factor authentication wherever it is available.",
  "Store passwords in a reputable password manager.",
  "Keep recovery email addresses and phone numbers current.",
  "Review active sessions and remove devices you no longer use.",
  "Be cautious of unexpected sign-in prompts and recovery messages.",
];

export default function AccountProtection() {
  return (
    <div className="ap-page">
      <header className="ap-header">
        <Link to="/" className="ap-brand" aria-label="Back to GABESTRA home">
          <span className="ap-brand-icon"><ShieldCheck size={22} /></span>
          <span><strong>GABESTRA</strong><small>INTELLIGENCE</small></span>
        </Link>
        <Link to="/" className="ap-back"><ArrowLeft size={15} /> Back to home</Link>
      </header>

      <main>
        <section className="ap-hero">
          <div className="ap-hero-copy">
            <div className="ap-eyebrow"><span /> GABESTRA SERVICES / 02</div>
            <p className="ap-kicker">DIGITAL ACCOUNT PROTECTION</p>
            <h1>Protect access.<br />Preserve <em>trust.</em></h1>
            <p className="ap-lede">
              Your digital identity is connected to the accounts you use every day.
              We help individuals and teams strengthen sign-in security, review access
              and prepare safer account recovery practices.
            </p>
            <a className="ap-primary" href="mailto:YOUR_EMAIL@example.com?subject=Digital%20Account%20Protection%20Enquiry">
              Discuss account protection <ArrowUpRight size={17} />
            </a>
            <div className="ap-hero-note"><ShieldCheck size={16} /> No password collection · Privacy-conscious guidance · Safer access</div>
          </div>
          <div className="ap-hero-art" aria-hidden="true">
            <div className="ap-grid" />
            <div className="ap-orbit ap-orbit-a" />
            <div className="ap-orbit ap-orbit-b" />
            <div className="ap-lock"><LockKeyhole size={75} strokeWidth={1.15} /></div>
            <div className="ap-float ap-float-one"><Smartphone size={15} /> MULTI-FACTOR AUTH</div>
            <div className="ap-float ap-float-two"><CheckCircle2 size={15} /> ACCESS REVIEW</div>
            <span className="ap-art-code">GI / ID-SEC / 002</span>
          </div>
        </section>

        <section className="ap-intro">
          <div className="ap-content ap-intro-grid">
            <div>
              <div className="ap-eyebrow"><span /> THE OBJECTIVE</div>
              <h2>Make every sign-in<br />a <em>safer decision.</em></h2>
            </div>
            <p>
              A strong account-protection routine combines more than a password.
              It includes a second verification factor, sensible access permissions,
              secure recovery options and regular reviews of connected devices.
            </p>
          </div>
        </section>

        <section className="ap-content ap-section">
          <div className="ap-section-heading">
            <div><div className="ap-eyebrow"><span /> PROTECTION AREAS</div><h2>Four essential layers.</h2></div>
            <p>Practical account-security guidance that can be adopted at an individual or organisational level.</p>
          </div>
          <div className="ap-focus-grid">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="ap-focus-card" key={item.title}>
                  <div className="ap-card-top"><span>0{index + 1}</span><Icon size={23} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="ap-process">
          <div className="ap-content">
            <div className="ap-section-heading">
              <div><div className="ap-eyebrow"><span /> OUR METHOD</div><h2>Understand. Strengthen.<br /><em>Stay prepared.</em></h2></div>
              <p>We focus on clear recommendations and never need your passwords to help improve account security.</p>
            </div>
            <div className="ap-steps">
              {steps.map(([number, title, body]) => (
                <article className="ap-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ap-content ap-habits">
          <div className="ap-habits-copy">
            <div className="ap-eyebrow"><span /> EVERYDAY SECURITY</div>
            <h2>Small habits.<br /><em>Stronger accounts.</em></h2>
            <p>Use this checklist to review accounts that belong to you or that you are authorised to manage. Never share passwords, one-time codes or recovery codes with anyone offering assistance.</p>
          </div>
          <div className="ap-habit-list">
            {habits.map((habit) => (
              <div className="ap-habit" key={habit}><CheckCircle2 size={17} /><span>{habit}</span></div>
            ))}
          </div>
        </section>

        <section className="ap-privacy">
          <div className="ap-content ap-privacy-inner">
            <div className="ap-privacy-icon"><ShieldCheck size={28} /></div>
            <div>
              <h2>Your credentials stay yours.</h2>
              <p>GABESTRA should never ask you to send passwords, one-time passcodes, authentication approval prompts or recovery codes. Guidance can be provided without taking control of your personal accounts.</p>
            </div>
          </div>
        </section>

        <section className="ap-cta">
          <div className="ap-content ap-cta-inner">
            <div>
              <div className="ap-eyebrow"><span /> TAKE THE NEXT STEP</div>
              <h2>Make account security<br /><em>part of your routine.</em></h2>
              <p>Start a conversation about improving sign-in protection and access practices.</p>
            </div>
            <a className="ap-cta-card" href="mailto:YOUR_EMAIL@example.com?subject=Digital%20Account%20Protection%20Enquiry">
              <span>GABESTRA INTELLIGENCE</span>
              <strong>Discuss your requirements <ArrowRight size={19} /></strong>
              <small>YOUR_EMAIL@example.com</small>
            </a>
          </div>
        </section>
      </main>

      <footer className="ap-footer">
        <div className="ap-content"><Link to="/"><ShieldCheck size={17} /> GABESTRA Intelligence</Link><span>Intelligence. Protection. Digital Trust.</span></div>
      </footer>
    </div>
  );
}