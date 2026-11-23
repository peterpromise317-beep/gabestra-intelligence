import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Fingerprint,
  MailWarning,
  MessageCircleWarning,
  ShieldCheck,
  Users,
  Globe2,
} from "lucide-react";
import "./SecurityAwareness.css";

const learningAreas = [
  {
    icon: MailWarning,
    title: "Phishing awareness",
    body: "Learn to recognise suspicious messages, unexpected attachments, misleading links and unusual requests for information.",
  },
  {
    icon: MessageCircleWarning,
    title: "Social engineering",
    body: "Understand how pressure, urgency, impersonation and requests for secrecy can be used to influence decisions.",
  },
  {
    icon: Globe2,
    title: "Safer browsing",
    body: "Build habits for checking website addresses, handling downloads and using public or shared devices more carefully.",
  },
  {
    icon: Fingerprint,
    title: "Privacy & personal data",
    body: "Make informed choices about what you share, app permissions, account privacy and the information you publish.",
  },
];

const signals = [
  ["Unexpected urgency", "A message pressures you to act immediately or claims something bad will happen if you wait."],
  ["Unusual requests", "Someone asks for passwords, one-time codes, payment details or confidential information."],
  ["Identity uncertainty", "The sender's address, profile or communication style does not match what you normally expect."],
  ["Unexpected links or files", "A message includes a link or attachment you were not expecting, especially without a clear reason."],
];

const habits = [
  "Pause before responding to urgent or alarming messages.",
  "Verify unusual requests using a separate, trusted contact method.",
  "Do not share passwords, one-time codes or recovery codes.",
  "Check website addresses carefully before signing in.",
  "Keep devices, browsers and applications updated.",
  "Report suspicious messages through the appropriate service or organisation.",
];

export default function SecurityAwareness() {
  return (
    <div className="sa-page">
      <header className="sa-header">
        <Link to="/" className="sa-brand" aria-label="Back to GABESTRA home">
          <span className="sa-brand-icon"><ShieldCheck size={22} /></span>
          <span><strong>GABESTRA</strong><small>INTELLIGENCE</small></span>
        </Link>
        <Link to="/" className="sa-back"><ArrowLeft size={15} /> Back to home</Link>
      </header>

      <main>
        <section className="sa-hero">
          <div className="sa-hero-copy">
            <div className="sa-eyebrow"><span /> GABESTRA SERVICES / 03</div>
            <p className="sa-kicker">SECURITY AWARENESS</p>
            <h1>Think clearly.<br />Stay <em>cyber-aware.</em></h1>
            <p className="sa-lede">
              Strong digital security is not only about technology. It is also about
              everyday decisions. We help people and teams recognise common online risks,
              protect personal information and respond with confidence.
            </p>
            <a className="sa-primary" href="mailto:YOUR_EMAIL@example.com?subject=Security%20Awareness%20Enquiry">
              Discuss awareness training <ArrowUpRight size={17} />
            </a>
            <div className="sa-hero-note"><ShieldCheck size={16} /> Practical education · People-first guidance · Safer habits</div>
          </div>
          <div className="sa-hero-art" aria-hidden="true">
            <div className="sa-grid" />
            <div className="sa-orbit sa-orbit-a" />
            <div className="sa-orbit sa-orbit-b" />
            <div className="sa-eye"><Eye size={76} strokeWidth={1.15} /></div>
            <div className="sa-float sa-float-one"><Users size={15} /> PEOPLE-FIRST LEARNING</div>
            <div className="sa-float sa-float-two"><CheckCircle2 size={15} /> INFORMED DECISIONS</div>
            <span className="sa-art-code">GI / AWARE / 003</span>
          </div>
        </section>

        <section className="sa-intro">
          <div className="sa-content sa-intro-grid">
            <div>
              <div className="sa-eyebrow"><span /> THE OBJECTIVE</div>
              <h2>Awareness turns<br />knowledge into <em>action.</em></h2>
            </div>
            <p>
              People are often the first to notice something unusual. Clear guidance helps
              them pause, verify what is happening and report concerns through trusted
              channels instead of feeling pressured to make quick decisions.
            </p>
          </div>
        </section>

        <section className="sa-content sa-section">
          <div className="sa-section-heading">
            <div><div className="sa-eyebrow"><span /> LEARNING AREAS</div><h2>Knowledge for everyday life.</h2></div>
            <p>Accessible cybersecurity education for individuals, students, teams and organisations.</p>
          </div>
          <div className="sa-learning-grid">
            {learningAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="sa-learning-card" key={item.title}>
                  <div className="sa-card-top"><span>0{index + 1}</span><Icon size={23} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sa-signals">
          <div className="sa-content">
            <div className="sa-section-heading">
              <div><div className="sa-eyebrow"><span /> SPOT THE WARNING SIGNS</div><h2>Pause when something<br /><em>doesn't feel right.</em></h2></div>
              <p>One warning sign does not prove a message is malicious. It is a reason to slow down and verify independently.</p>
            </div>
            <div className="sa-signal-list">
              {signals.map(([title, body], index) => (
                <article className="sa-signal" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sa-content sa-habits">
          <div className="sa-habits-copy">
            <div className="sa-eyebrow"><span /> EVERYDAY PRACTICE</div>
            <h2>Six habits for<br /><em>safer digital days.</em></h2>
            <p>These simple actions can help reduce avoidable risks at home, at school and at work.</p>
          </div>
          <div className="sa-habit-list">
            {habits.map((habit) => (
              <div className="sa-habit" key={habit}><CheckCircle2 size={17} /><span>{habit}</span></div>
            ))}
          </div>
        </section>

        <section className="sa-response">
          <div className="sa-content sa-response-inner">
            <div className="sa-response-icon"><ShieldCheck size={28} /></div>
            <div>
              <h2>If you think something is suspicious, pause and report it.</h2>
              <p>Do not reply, open unexpected attachments or provide confidential information. Use your organisation's established reporting route, or contact the relevant service through its official website or app.</p>
            </div>
          </div>
        </section>

        <section className="sa-cta">
          <div className="sa-content sa-cta-inner">
            <div>
              <div className="sa-eyebrow"><span /> TAKE THE NEXT STEP</div>
              <h2>Build a more<br /><em>security-aware culture.</em></h2>
              <p>Start a conversation about practical cybersecurity awareness for your team or community.</p>
            </div>
            <a className="sa-cta-card" href="mailto:YOUR_EMAIL@example.com?subject=Security%20Awareness%20Enquiry">
              <span>GABESTRA INTELLIGENCE</span>
              <strong>Discuss awareness training <ArrowRight size={19} /></strong>
              <small>YOUR_EMAIL@example.com</small>
            </a>
          </div>
        </section>
      </main>

      <footer className="sa-footer">
        <div className="sa-content"><Link to="/"><ShieldCheck size={17} /> GABESTRA Intelligence</Link><span>Intelligence. Protection. Digital Trust.</span></div>
      </footer>
    </div>
  );
}