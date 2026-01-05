"use client"

import { Star } from "lucide-react"

export function SocialProofSection() {
  const testimonials = [
    {
      quote:
        "Reduced data leak risks by 90% using DataCloak AI. As a developer, it automatically prevented accidental sensitive data exposure in my AI workflows. It's the privacy-first AI tool I've been waiting for.",
      author: "John Doe",
      role: "Software Engineer",
      stars: 5,
    },
    {
      quote:
        "Working with client data is risky. DataCloak AI automatically anonymizes sensitive information before I use ChatGPT for coding assistance, saving me hours of manual review time.",
      author: "Sarah Chen",
      role: "Freelance Consultant",
      stars: 5,
    },
    {
      quote:
        "GDPR compliance made easy. No more worrying about whether I'm exposing PII to AI models. Improved our security posture in weeks. This is essential for any professional.",
      author: "Michael Berg",
      role: "Data Privacy Specialist",
      stars: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="mx-auto max-w-5xl">
        <div className="text-center space-y-12">
          <p className="text-lg text-muted-foreground">
            Join <span className="text-foreground font-semibold">500+ developers, freelancers and consultants</span> who
            use AI data anonymization to protect their sensitive data.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-label="Star rating" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground mb-4 italic">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
