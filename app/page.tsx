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
import { WorkflowSection } from "@/components/how-it-works"
import { Timer, ArrowRight } from "lucide-react"

export default function Home() {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [spotsLeft, setSpotsLeft] = useState(7)

  // 1. Initialisierung: Scarcity & Analytics
  useEffect(() => {
    setupScrollTracking()
    
    // Zufällige Zahl zwischen 3 und 8 generieren
    const randomSpots = Math.floor(Math.random() * (8 - 3 + 1)) + 3
    setSpotsLeft(randomSpots)

    const hasSeenExitPopup = sessionStorage.getItem("hasSeenExitPopup")

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenExitPopup && !showExitIntent) {
        setShowExitIntent(true)
        sessionStorage.setItem("hasSeenExitPopup", "true")
      }
    }

    if (!hasSeenExitPopup) {
      document.addEventListener("mouseleave", handleMouseLeave)
    }

    // Intersection Observer für Section Tracking
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackSectionView(entry.target.id)
        }
      })
    }, { threshold: 0.3 })

    sections.forEach((section) => observer.observe(section))

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      observer.disconnect()
    }
  }, [showExitIntent])

  const scrollToEarlyAccess = () => {
    setShowExitIntent(false)
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
    
    // Fokus auf das E-Mail Feld nach dem Scrollen
    const input = document.querySelector('input[type="email"]') as HTMLInputElement
    if (input) setTimeout(() => input.focus(), 800)
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <Header />
      <HeroSection />
      <InternalAIChallengeSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <WhySection />
      <TargetAudienceSection />
      <FAQSection />
      <WorkflowSection />
      <EarlyAccessSection />
      <DisclaimerSection />
      <PrivacyTrustSection />
      <PostPurchaseTrustSection />
      <FinalCTASection />
      <Footer />

      {/* Exit Intent Dialog - Urgency Edition */}
      <Dialog open={showExitIntent} onOpenChange={setShowExitIntent}>
        <DialogContent className="sm:max-w-[440px] p-0 overflow-hidden border-accent/20 bg-card/95 backdrop-blur-2xl">
          <div className="bg-accent/10 p-6 flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30 animate-pulse">
              <Timer className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <div className="p-8 pt-2 space-y-6 text-center">
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-3xl font-black tracking-tight leading-tight text-white">
                Wait! Don't Lose Your <span className="text-accent italic">Priority</span> Status.
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                You are among <span className="text-foreground font-bold text-white">500+ professionals</span> on the waitlist. 
                We have only <span className="text-accent font-black underline decoration-accent">{spotsLeft} spots left</span> for this exclusive <span className="text-foreground font-bold text-white">€39 lifetime deal</span>. 
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-3">
              <Button
                onClick={scrollToEarlyAccess}
                size="lg"
                className="w-full h-14 text-lg font-bold bg-accent text-accent-foreground hover:brightness-110 shadow-lg shadow-accent/20 transition-all rounded-xl group"
              >
                Claim My €39 Lifetime Deal
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Dynamic Urgency Badge */}
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent font-black bg-accent/5 py-2.5 rounded-lg border border-accent/10">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                Quick! Only {spotsLeft} limited spots remaining
              </div>
            </div>

            <button 
              onClick={() => setShowExitIntent(false)}
              className="text-xs text-muted-foreground/60 hover:text-white transition-colors underline underline-offset-4"
            >
              No thanks, I'll take my chances with the full price later
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <PurchaseNotification />
    </main>
  )
}
