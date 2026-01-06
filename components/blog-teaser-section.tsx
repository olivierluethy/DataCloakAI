"use client"

import { ArrowRight } from "lucide-react"
import { trackCTAClick } from "@/lib/analytics"
import Link from "next/link"


export function BlogTeaserSection() {
  const blogTeasers = [
    {
      title: "How to Anonymize Data for AI Models: A Complete Guide",
      description:
        "Learn the best practices for anonymizing sensitive data before using ChatGPT, Claude, or other AI models.",
      link: "/blog/anonymize-data-for-ai-models",
    },
    {
      title: "GDPR Compliance in AI Workflows: Privacy-First Best Practices",
      description: "Understand GDPR requirements and how to ensure compliance when using AI tools with sensitive data.",
      link: "/blog/gdpr-ai-compliance",
    },
    {
      title: "Preventing Data Leaks: AI Input Protection Strategies",
      description:
        "Discover strategies to protect your sensitive information when using ChatGPT and other AI services.",
      link: "/blog/preventing-data-leaks-ai",
    },
  ]

  const handleBlogClick = (title: string) => {
    trackCTAClick(`Blog: ${title}`)
  }

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">AI Privacy Tips from Our Blog</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed on privacy-first AI practices and anonymization strategies from our experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogTeasers.map((blog, idx) => (
              <Link
                key={idx}
                href={blog.link}
                onClick={() => handleBlogClick(blog.title)}
                className="group block p-6 rounded-lg border border-border bg-background hover:border-accent/50 hover:bg-accent/5 transition-all hover:shadow-md space-y-4 flex flex-col cursor-pointer"
                role="article"
                aria-label={`Read article: ${blog.title}`}
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow">{blog.description}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
