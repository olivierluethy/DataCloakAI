import { notFound } from "next/navigation"

type BlogPost = {
  title: string
  content: string
}

const BLOG_POSTS = {
  "anonymize-data-for-ai-models": {
    title: "How to Anonymize Data for AI Models",
    content: "Hier kommt dein Artikelinhalt rein …",
  },
  "gdpr-ai-compliance": {
    title: "GDPR Compliance in AI Workflows",
    content: "GDPR Artikel …",
  },
  "preventing-data-leaks-ai": {
    title: "Preventing Data Leaks",
    content: "Leak Prevention …",
  },
} as const // ← Important: "as const" makes keys readonly literals

// Extract the keys as a union type
type BlogSlug = keyof typeof BLOG_POSTS
// → "anonymize-data-for-ai-models" | "gdpr-ai-compliance" | "preventing-data-leaks-ai"

type PageProps = {
  params: Promise<{
    slug: string // from Next.js, but we'll narrow it later
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  // Now assert or check that slug is a valid key
  if (!(slug in BLOG_POSTS)) {
    notFound()
  }

  const post = BLOG_POSTS[slug as BlogSlug] // Safe now

  return (
    <article className="prose mx-auto py-20 px-4">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}