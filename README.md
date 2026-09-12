# DataCloak AI

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
