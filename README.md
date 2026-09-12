<div align="center">
  <img src="public/logo.png" alt="DataCloak AI logo" width="140" />
  <h1>DataCloak AI</h1>
  <p><b>Anonymize sensitive data before it ever reaches an AI model.</b><br/>Conversion-oriented Next.js landing site for a GDPR-focused data-anonymization concept, with a blog, Stripe checkout and email lead capture.</p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs">
    <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white">
    <img alt="Stripe" src="https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white">
  </p>
</div>

---

Marketing and early-access landing site for **DataCloak AI**, a concept for anonymizing
sensitive data before it is sent to AI models (GDPR-focused). Built as a conversion-oriented
one-pager with a blog, payment flow, and lead capture.

## Features

- Single-page landing built from modular sections (hero, problem, solution, FAQ, pricing,
  early-access, trust/privacy, final CTA) with an exit-intent dialog and scarcity counter.
- MDX-powered blog (`content/blog/`) covering data anonymization, GDPR/AI compliance, and
  preventing data leaks, rendered through `next-mdx-remote`.
- Early-access / checkout flow using **Stripe** and email delivery via **Nodemailer**.
- Scroll- and section-view analytics, plus Vercel Analytics.
- Legal pages (privacy policy, terms of service) and a generated `sitemap.ts`.

## Tech

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** with Radix UI primitives (shadcn/ui-style components)
- **Stripe**, **Nodemailer**, **mysql2**
- MDX (`@next/mdx`, `next-mdx-remote`, `gray-matter`)

## Run

```bash
npm install   # or pnpm install
npm run dev   # http://localhost:3000
```

Environment variables (Stripe keys, SMTP credentials, database connection) are required for the
payment and email flows; the landing page itself renders without them. Build with `npm run build`
and serve with `npm start`.

## License

Released under the [MIT License](LICENSE) © 2026 Olivier Lüthy. You're free to use, modify and distribute this
software, including commercially, as long as the copyright notice and license are included.

## Author

Built by **Olivier Lüthy** — [GitHub](https://github.com/olivierluethy).
