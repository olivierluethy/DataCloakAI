import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"

type BlogPost = {
  title: string
  content: string
}

const BLOG_POSTS = {
  "anonymize-data-for-ai-models": {
    title: "How to Anonymize Data for AI Models",
    content: `
      <p class="lead">Training powerful AI models requires massive datasets—but feeding raw customer data into LLMs is a ticking time bomb.</p>
      <h2>The hidden risk: Re-identification</h2>
      <p>Even "anonymized" data can be re-identified. DataCloakAI transforms sensitive data into high-utility synthetic equivalents, making re-identification mathematically impossible while preserving statistical value.</p>
      <ul>
        <li>Train models without exposing real PII</li>
        <li>Share datasets safely with partners</li>
        <li>Run analytics without privacy trade-offs</li>
      </ul>
    `,
  },
  "gdpr-ai-compliance": {
    title: "GDPR Compliance in AI Workflows",
    content: `
      <p class="lead">Regulators are targeting companies processing European data without ironclad privacy controls.</p>
      <h2>The GDPR Trap</h2>
      <p>LLMs memorize and cloud providers log. One audit and you're exposed. DataCloakAI embeds Privacy by Design directly into your pipeline with differential privacy guarantees and granular data minimization.</p>
    `,
  },
  "preventing-data-leaks-ai": {
    title: "Preventing Data Leaks in AI Systems",
    content: `
      <p class="lead">Your AI model is only as secure as the data it was trained on.</p>
      <h2>New Attack Surfaces</h2>
      <p>Prompt injection can trick bots into spitting out training snippets. DataCloakAI ensures sensitive patterns never enter the model, providing automated redaction of trade secrets and PII at the source.</p>
    `,
  },
  /* NEU: Speziell für Software Engineers */
  "secure-ai-for-developers": {
    title: "Secure AI Integration for Software Engineers",
    content: `
      <p class="lead">Leaking API keys, hardcoded credentials, or internal file paths into AI logs is a nightmare for any DevOps team.</p>
      <h2>Automated Code Scrubbing</h2>
      <p>DataCloakAI acts as a pre-processor for your IDE and terminal. It automatically detects and masks secrets before they are sent to OpenAI or Anthropic APIs.</p>
      <ul>
        <li>Prevent hardcoded secrets from entering AI training sets</li>
        <li>Anonymize local file paths and system references</li>
        <li>Integrate via API or CLI into your current CI/CD</li>
      </ul>
    `,
  },
  /* NEU: Speziell für IT Consultants */
  "ai-privacy-for-consultants": {
    title: "How Consultants Use ChatGPT Without Breaking NDAs",
    content: `
      <p class="lead">As a consultant, your reputation is built on trust. Pasting client data into AI tools is often a direct violation of your NDA.</p>
      <h2>Safe Consulting in the AI Age</h2>
      <p>DataCloakAI allows you to leverage the power of LLMs for client reports, data analysis, and strategy without ever risking the original sensitive data.</p>
      <ul>
        <li>Maintain 100% client confidentiality</li>
        <li>Fulfill your fiduciary duty in regulated industries</li>
        <li>Scale your output while staying GDPR compliant</li>
      </ul>
    `,
  }
} as const;


type BlogSlug = keyof typeof BLOG_POSTS

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  if (!(slug in BLOG_POSTS)) notFound()
  const post = BLOG_POSTS[slug as BlogSlug]

  return (
    <article className="min-h-screen bg-background text-foreground">
      {/* Hero Bereich - Dark & Professional */}
      <div className="bg-slate-950 border-b border-white/5 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full -translate-y-1/2" />
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <Link href="/" className="text-accent text-sm font-medium mb-8 inline-block hover:underline">
            ← Back to DataCloakAI
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-8 flex items-center gap-4 text-sm text-white/40 italic">
             <span>Published Jan 6, 2026</span>
             <span>•</span>
             <span>4 min read</span>
             <span className="bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20 not-italic">AI Privacy Series</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div 
          className="prose prose-invert prose-accent max-w-none 
          prose-headings:text-white prose-p:text-white/70 prose-li:text-white/70
          prose-strong:text-accent prose-h2:text-3xl prose-h2:mt-12"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* DER WICHTIGE CTA-BLOCK AM ENDE */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl border border-accent/30 bg-accent/5 backdrop-blur-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to secure your AI workflows?</h3>
              <p className="text-white/60 max-w-md">
                Join 500+ professionals and secure your €39 Lifetime Deal before the last spots are gone.
              </p>
            </div>
            <Link href="/#early-access">
              <Button size="lg" className="bg-accent text-black font-bold h-14 px-8 rounded-xl hover:scale-105 transition-transform">
                Get Early Access Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}