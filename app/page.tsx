"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { WhySection } from "@/components/why-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { FAQSection } from "@/components/faq-section"
import { EarlyAccessSection } from "@/components/early-access-section"
import { DisclaimerSection } from "@/components/disclaimer-section"
import { PrivacyTrustSection } from "@/components/privacy-trust-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { setupScrollTracking, trackSectionView } from "@/lib/analytics"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PurchaseNotification } from "@/components/purchase-notification"
import { InternalAIChallengeSection } from "@/components/internal-aichallenge-section"
import { PostPurchaseTrustSection } from "@/components/after-payment-section"
import { HowItWorksSection } from "@/components/how-it-works"

export default function Home() {
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    setupScrollTracking()

    // Prüfen, ob das Popup in dieser Session schon mal gezeigt wurde
    const hasSeenExitPopup = sessionStorage.getItem("hasSeenExitPopup")

    const handleMouseLeave = (e: MouseEvent) => {
      // Nur auslösen, wenn:
      // 1. Maus wirklich nach oben verlässt (nicht seitlich)
      // 2. Popup noch nicht gezeigt wurde
      // 3. Dialog gerade nicht offen ist
      if (
        e.clientY <= 0 &&
        !hasSeenExitPopup &&
        !showExitIntent
      ) {
        setShowExitIntent(true)
        // Merken, dass wir es gezeigt haben
        sessionStorage.setItem("hasSeenExitPopup", "true")
      }
    }

    // Nur den Listener hinzufügen, wenn es noch nicht gezeigt wurde
    if (!hasSeenExitPopup) {
      document.addEventListener("mouseleave", handleMouseLeave)
    }

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
  }, [showExitIntent]) // showExitIntent als Abhängigkeit, falls sich Zustand ändert

  const scrollToEarlyAccess = () => {
    setShowExitIntent(false)
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDialogClose = () => {
    setShowExitIntent(false)
    // Hier wird bereits in handleMouseLeave gesetzt → kein zweites Mal nötig
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <InternalAIChallengeSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <WhySection />
      <TargetAudienceSection />
      <FAQSection />
      <HowItWorksSection />
      <EarlyAccessSection />
      <DisclaimerSection />
      <PrivacyTrustSection />
      <PostPurchaseTrustSection />
      <FinalCTASection />
      <Footer />

      <Dialog 
        open={showExitIntent} 
        onOpenChange={handleDialogClose}
      >
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
            className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90"
            aria-label="Secure Early Access to DataCloak AI"
          >
            Secure Access Now
          </Button>
        </DialogContent>
      </Dialog>

      <PurchaseNotification />
    </main>
  )
}