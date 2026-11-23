# GABESTRA Intelligence

A responsive React + TypeScript + Vite website concept for **GABESTRA Intelligence**.

**Brand positioning:** Cybersecurity Services, Digital Protection & Intelligence  
**Primary tagline:** Secure your digital world.  
**Supporting line:** Intelligence. Protection. Digital Trust.

## Included

- Responsive landing page and mobile navigation
- Services overview with dedicated Website Security, Digital Account Protection, Security Awareness, Vulnerability Management and Incident Readiness pages
- Security tools preview (clearly marked as in development)
- Responsible-security principles
- Contact section

## Routes

- `/` — Main GABESTRA homepage
- `/services/website-security` — Website Security service page
- `/services/account-protection` — Digital Account Protection service page
- `/services/security-awareness` — Security Awareness service page
- `/services/vulnerability-management` — Vulnerability Management service page
- `/services/incident-readiness` — Incident Readiness service page

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite in your browser.

## Production build

```bash
npm run build
npm run preview
```

## Before publishing

1. Replace `YOUR_EMAIL@example.com` in `src/App.tsx` with the official contact email.
2. Add verified social profile URLs where the current placeholder links appear.
3. Review all service descriptions so they accurately reflect services GABESTRA is prepared and qualified to provide.
4. Do not present the planned security tools as live until they are implemented, reviewed and tested.

## Important scope note

This is a frontend website. It does not currently include a backend, authentication, a working contact form, vulnerability scanner, or active security-testing functionality. The security tools shown are labelled as in development. Any future assessment feature should be limited to systems the operator owns or has explicit permission to assess.
