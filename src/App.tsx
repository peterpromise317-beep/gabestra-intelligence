import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteSecurity from "./pages/WebsiteSecurity";
import AccountProtection from "./pages/AccountProtection";
import SecurityAwareness from "./pages/SecurityAwareness";
import VulnerabilityManagement from "./pages/VulnerabilityManagement";
import IncidentReadiness from "./pages/IncidentReadiness";
import CybersecurityConsulting from "./pages/CybersecurityConsulting";
import {
  ArrowDownRight,
  ArrowRight,
  ShieldCheck,
  Globe2,
  LockKeyhole,
  Eye,
  Menu,
  X,
  CheckCircle2,
  Fingerprint,
  Network,
  Radar,
  Mail,
  Linkedin,
  Github,
  ShieldAlert,
} from "lucide-react";
import "./App.css";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Website Security",
    description:
      "Practical guidance to help protect websites, domains and the digital experiences your audience relies on.",
    tag: "Web protection",
  },
  {
    number: "02",
    icon: LockKeyhole,
    title: "Digital Account Protection",
    description:
      "Strengthen account security with safer authentication, access reviews and multi-factor authentication planning.",
    tag: "Identity & access",
  },
  {
    number: "03",
    icon: Eye,
    title: "Security Awareness",
    description:
      "Build safer digital habits through clear, approachable education about phishing, privacy and online risks.",
    tag: "People-first security",
  },
  {
    number: "04",
    icon: Radar,
    title: "Vulnerability Management",
    description:
      "Organise authorised security reviews, prioritise findings and turn recommendations into a practical action plan.",
    tag: "Risk reduction",
  },
  {
    number: "05",
    icon: ShieldAlert,
    title: "Incident Readiness",
    description:
      "Prepare response checklists, communication steps and recovery priorities before a security incident occurs.",
    tag: "Preparedness",
  },
  {
    number: "06",
    icon: Network,
    title: "Cybersecurity Consulting",
    description:
      "Make informed security decisions with clear explanations, scoped assessments and recommendations.",
    tag: "Strategic guidance",
  },
];

const tools = [
  {
    icon: Fingerprint,
    title: "Password & MFA Guide",
    description: "A practical checklist for improving sign-in security without sharing your passwords.",
    status: "In development",
  },
  {
    icon: Globe2,
    title: "Website Security Checklist",
    description: "Review essential defensive settings for a website you own or are authorised to assess.",
    status: "In development",
  },
  {
    icon: ShieldAlert,
    title: "Incident Response Planner",
    description: "Organise first-response actions, key contacts and recovery priorities.",
    status: "In development",
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        Digital protection. Clear thinking. Practical security.
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="GABESTRA Intelligence home" onClick={closeMenu}>
          <span className="brand-mark"><ShieldCheck size={22} strokeWidth={2.2} /></span>
          <span className="brand-copy">
            <strong>GABESTRA</strong>
            <small>INTELLIGENCE</small>
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#tools" onClick={closeMenu}>Security tools</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Get in touch <ArrowDownRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> CYBERSECURITY SERVICES & DIGITAL PROTECTION</div>
            <h1>Secure your<br /><span>digital world.</span></h1>
            <p className="hero-lede">
              Intelligence. Protection. Digital Trust. We make cybersecurity easier to understand
              and easier to act on — helping people and organisations build safer digital spaces.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore our services <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#approach">Discover our approach <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-proof">
              <div className="proof-icon"><CheckCircle2 size={18} /></div>
              <span>Defensive-first security · Clear guidance · Responsible practice</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract digital security illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core-glow" />
            <div className="core-shield"><ShieldCheck size={76} strokeWidth={1.15} /></div>
            <div className="floating-card card-top">
              <span className="mini-icon"><LockKeyhole size={15} /></span>
              <span><b>Protection first</b><small>Security by design</small></span>
              <i />
            </div>
            <div className="floating-card card-bottom">
              <span className="mini-icon"><Fingerprint size={16} /></span>
              <span><b>Digital trust</b><small>Built through good practice</small></span>
            </div>
            <div className="visual-caption"><span>GI / 001</span><span>SECURE BY DESIGN</span></div>
          </div>
          <div className="hero-index">01 <span>—</span> 03</div>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-inner">
            <p>THE DIGITAL WORLD MOVES FAST.</p>
            <h2>Your security approach<br />should move with it.</h2>
            <span className="intro-side">GABESTRA Intelligence helps turn complex security concerns into understandable, practical next steps.</span>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> WHAT WE DO</div>
              <h2>Security that makes<br /><em>sense.</em></h2>
            </div>
            <p>From everyday digital safety to structured security planning, our focus is on useful protection — not unnecessary complexity.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-number">{service.number}</span>
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <div>
                    <span className="service-tag">{service.tag}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <a href={service.number === "01" ? "/services/website-security" : service.number === "02" ? "/services/account-protection" : service.number === "03" ? "/services/security-awareness" : service.number === "04" ? "/services/vulnerability-management" : service.number === "05" ? "/services/incident-readiness" : service.number === "06" ? "/services/cybersecurity-consulting" : "#contact"} className="card-link" aria-label={`Ask about ${service.title}`}>
                    Discuss this service <ArrowUpRightIcon />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="tools-section" id="tools">
          <div className="section-wrap">
            <div className="tools-heading">
              <div>
                <div className="eyebrow"><span /> THE SECURITY DESK</div>
                <h2>Useful tools.<br /><em>Safer decisions.</em></h2>
              </div>
              <p>We are developing straightforward resources to help users strengthen their own digital security. Tools will be designed for lawful, authorised and defensive use.</p>
            </div>
            <div className="tools-grid">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <article className="tool-card" key={tool.title}>
                    <div className="tool-icon"><Icon size={23} /></div>
                    <span className="tool-status"><span /> {tool.status}</span>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <span className="tool-foot">COMING SOON <ArrowRight size={14} /></span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="approach-section section-wrap" id="approach">
          <div className="approach-art">
            <div className="approach-ring ring-a" />
            <div className="approach-ring ring-b" />
            <div className="approach-symbol"><ShieldCheck size={62} strokeWidth={1.2} /></div>
            <span className="art-label label-a">01 / AUTHORISED</span>
            <span className="art-label label-b">02 / RESPONSIBLE</span>
            <span className="art-label label-c">03 / PRACTICAL</span>
          </div>
          <div className="approach-copy">
            <div className="eyebrow"><span /> OUR PRINCIPLES</div>
            <h2>Trust is not a feature.<br /><em>It's the foundation.</em></h2>
            <p className="approach-lede">Good cybersecurity starts with responsibility. Our approach is built around respect for people, systems and data.</p>
            <div className="principle-list">
              <div><b>01</b><span><strong>Authorisation first</strong><small>Assess only systems and accounts you own or have clear permission to review.</small></span></div>
              <div><b>02</b><span><strong>Privacy by default</strong><small>Handle information carefully and avoid collecting what is not needed.</small></span></div>
              <div><b>03</b><span><strong>Practical outcomes</strong><small>Turn findings into understandable priorities and achievable improvements.</small></span></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <div className="eyebrow"><span /> START A CONVERSATION</div>
              <h2>Let's make your<br /><em>digital space safer.</em></h2>
              <p>Have a question or want to discuss a defensive cybersecurity project? Reach out to start the conversation.</p>
            </div>
            <form
              className="enquiry-form"
              onSubmit={async (event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const formData = new FormData(form);
                setIsSubmitting(true);
                setFormStatus("");

                try {
                  const response = await fetch("https://qmjofrmndygghmxhrtuf.supabase.co/functions/v1/submit-enquiry", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "apikey": "sb_publishable_BmyBA6Og7KgN-3Q7AukFcw_JuE2AIYb",
                    },
                    body: JSON.stringify({
                      full_name: formData.get("full_name"),
                      email: formData.get("email"),
                      service_interest: formData.get("service_interest"),
                      message: formData.get("message"),
                      website: formData.get("website"),
                    }),
                  });
                  const result = await response.json();
                  if (!response.ok) throw new Error(result.error || "We could not submit your enquiry.");
                  form.reset();
                  setFormStatus("Thank you. Your enquiry has been received.");
                } catch (error) {
                  setFormStatus(error instanceof Error ? error.message : "Something went wrong. Please try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div className="enquiry-form-heading">
                <span className="contact-card-label">CONTACT GABESTRA</span>
                <span className="contact-card-main">Tell us what you want to protect.</span>
              </div>
              <div className="enquiry-fields">
                <label>
                  Your name
                  <input name="full_name" type="text" minLength={2} maxLength={100} autoComplete="name" required placeholder="Full name" />
                </label>
                <label>
                  Email address
                  <input name="email" type="email" maxLength={254} autoComplete="email" required placeholder="you@example.com" />
                </label>
                <label className="enquiry-full">
                  Service of interest
                  <select name="service_interest" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Website Security</option>
                    <option>Digital Account Protection</option>
                    <option>Security Awareness</option>
                    <option>Vulnerability Management</option>
                    <option>Incident Readiness</option>
                    <option>Cybersecurity Consulting</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="enquiry-full">
                  How can we help?
                  <textarea name="message" minLength={20} maxLength={3000} required rows={4} placeholder="Briefly tell us what you would like help with (20–3,000 characters)." />
                </label>
                <label className="enquiry-honeypot" aria-hidden="true">
                  Leave this field empty
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <div className="enquiry-form-bottom">
                <button className="button button-primary enquiry-submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send enquiry"} <ArrowRight size={17} />
                </button>
                <p className={formStatus.startsWith("Thank you") ? "enquiry-status success" : "enquiry-status"} role="status" aria-live="polite">{formStatus}</p>
              </div>
              <small className="enquiry-privacy">Please do not include passwords, account credentials or other sensitive information.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark"><ShieldCheck size={22} /></span>
            <span className="brand-copy"><strong>GABESTRA</strong><small>INTELLIGENCE</small></span>
          </a>
          <p>Intelligence. Protection. Digital Trust.</p>
          <div className="footer-socials">
            <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email GABESTRA"><Mail size={18} /></a>
            <a href="#contact" aria-label="LinkedIn profile placeholder"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="GitHub profile placeholder"><Github size={18} /></a>
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <span>© {new Date().getFullYear()} GABESTRA Intelligence. All rights reserved.</span>
          <span>Built on responsibility. Focused on protection.</span>
        </div>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowDownRight className="diagonal-arrow" size={16} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/website-security" element={<WebsiteSecurity />} />
        <Route path="/services/account-protection" element={<AccountProtection />} />
        <Route path="/services/security-awareness" element={<SecurityAwareness />} />
        <Route path="/services/vulnerability-management" element={<VulnerabilityManagement />} />
          <Route path="/services/incident-readiness" element={<IncidentReadiness />} />
        <Route path="/services/cybersecurity-consulting" element={<CybersecurityConsulting />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}