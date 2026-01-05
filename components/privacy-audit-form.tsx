"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackFormSubmit } from "@/lib/analytics"

export function PrivacyAuditForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError("")

  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    setError("Please enter a valid email address")
    return
  }

  trackFormSubmit("Privacy Audit")

  const res = await fetch('/api/submit-audit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  if (res.ok) {
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 5000)
  } else {
    setError("Submission failed. Try again.")
  }
}

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Get Your Free Privacy Audit</h2>
            <p className="text-lg text-muted-foreground">
              Find out how much sensitive data you might be exposing to AI models. Get personalized recommendations for
              protecting your information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-lg p-8">
            <div className="space-y-2">
              <label htmlFor="audit-email" className="block text-sm font-medium">
                Email Address
              </label>
              <Input
                id="audit-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                aria-label="Email address for privacy audit"
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Free Privacy Audit
            </Button>

            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-600 font-medium">
                  Check your email for your personalized privacy audit!
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
