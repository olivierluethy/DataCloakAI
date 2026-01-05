"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { trackCTAClick } from "@/lib/analytics"

export function EarlyAccessSection() {
  const benefits = [
    "Lifetime access to the core product",
    "Priority feedback and feature influence",
    "Early builds and regular updates",
    "One-time early adopter pricing (€39)",
  ]

  const handleGetAccess = () => {
    trackCTAClick("Secure Early Access")
    // In production, this would redirect to Stripe Checkout
    window.open("https://checkout.stripe.com", "_blank")
  }

  return (
    <section id="early-access" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Early Access Program</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DataCloak AI is under development. Secure your spot before public launch—Only 50 early access spots
              available for privacy-first AI protection.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What's Included in Early Access</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-label="Included feature" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-accent/30 bg-card space-y-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Price</div>
                <div className="text-5xl font-bold">€39</div>
                <div className="text-sm text-muted-foreground">One-time payment</div>
                <div className="text-xs text-muted-foreground pt-2">No subscription. No hidden fees.</div>
              </div>

              <Button
                onClick={handleGetAccess}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12"
                aria-label="Secure Early Access to DataCloak AI - €39 one-time payment"
              >
                Secure Early Access Now
              </Button>

              <p className="text-xs text-muted-foreground text-center pt-2">
                Only 50 spots remaining • Join 500+ developers and professionals protecting their sensitive data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
