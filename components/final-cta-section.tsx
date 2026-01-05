"use client"

import { Button } from "@/components/ui/button"
import { trackCTAClick } from "@/lib/analytics"

export function FinalCTASection() {
  const handleGetAccess = () => {
    trackCTAClick("Get Early Access Now")
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Use AI without Exposing Sensitive Data</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure early access to DataCloak AI and help shape the future of privacy-first AI workflows for developers
            and professionals.
          </p>
        </div>

        <Button
          onClick={handleGetAccess}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12"
          aria-label="Get Early Access to DataCloak AI"
        >
          Get Early Access Now
        </Button>
      </div>
    </section>
  )
}
