"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { WhySection } from "@/components/why-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { FAQSection } from "@/components/faq-section"
import { BlogTeaserSection } from "@/components/blog-teaser-section"
import { EarlyAccessSection } from "@/components/early-access-section"
import { PrivacyAuditForm } from "@/components/privacy-audit-form"
import { DisclaimerSection } from "@/components/disclaimer-section"
import { PrivacyTrustSection } from "@/components/privacy-trust-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { setupScrollTracking, trackSectionView } from "@/lib/analytics"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    setupScrollTracking()

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    const sections = document.querySelectorAll("section[id]")
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = (entry.target as HTMLElement).id
          trackSectionView(sectionId)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      observer.disconnect()
    }
  }, [])

  const scrollToEarlyAccess = () => {
    setShowExitIntent(false)
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <WhySection />
      <TargetAudienceSection />
      <CaseStudiesSection />
      <FAQSection />
      <BlogTeaserSection />
      <PrivacyAuditForm />
      <EarlyAccessSection />
      <DisclaimerSection />
      <PrivacyTrustSection />
      <FinalCTASection />
      <Footer />

      <Dialog open={showExitIntent} onOpenChange={setShowExitIntent}>
        <DialogContent className="sm:max-w-md dialog-content">
          <DialogHeader>
            <DialogTitle>Don't miss limited early access spots</DialogTitle>
            <DialogDescription className="pt-2">
              Secure your place now and get lifetime access to DataCloak AI for just €39. Limited 50 spots available.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={scrollToEarlyAccess}
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            aria-label="Secure Early Access to DataCloak AI"
          >
            Secure Access Now
          </Button>
        </DialogContent>
      </Dialog>
    </main>
  )
}
