"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { trackCTAClick, trackHeroInteraction } from "@/lib/analytics"

export function HeroSection() {
  const scrollToEarlyAccess = () => {
    trackCTAClick("Secure Early Access")
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"></div>
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Protect Sensitive Data with Privacy-First AI Anonymization
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Automatically anonymize sensitive data like names, file paths, IDs and confidential information before
              sending to ChatGPT, Claude or other AI models. Anonymize data for AI input protection with GDPR compliance
              and prevent accidental data leaks with our privacy-first AI tool.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-accent" aria-label="Privacy-first AI protection feature" />
              <span>Privacy-first AI protection</span>
            </div>
            <div className="hidden sm:block text-muted-foreground">•</div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-accent" aria-label="GDPR-compliant feature" />
              <span>GDPR-compliant</span>
            </div>
            <div className="hidden sm:block text-muted-foreground">•</div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-accent" aria-label="Anonymize for ChatGPT and Claude feature" />
              <span>Anonymize for ChatGPT & Claude</span>
            </div>
          </div>

          <Button
            onClick={scrollToEarlyAccess}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12"
            onMouseEnter={() => trackHeroInteraction("CTA Hover")}
            aria-label="Secure Early Access to DataCloak AI - Limited early access spots available"
          >
            Secure Early Access (Limited Spots)
          </Button>
        </div>
      </div>
    </section>
  )
}
