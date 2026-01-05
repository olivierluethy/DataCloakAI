"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Lock, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { trackCTAClick, trackHeroInteraction } from "@/lib/analytics"

export function HeroSection() {
  const scrollToEarlyAccess = () => {
    trackCTAClick("Secure Early Access")
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Floating security icons data
  const floatingIcons = [
    { Icon: Lock, size: 48, delay: 0, duration: 20, x: -200, y: -100 },
    { Icon: Shield, size: 64, delay: 5, duration: 25, x: 300, y: -150 },
    { Icon: Lock, size: 40, delay: 10, duration: 18, x: -350, y: 200 },
    { Icon: Shield, size: 56, delay: 15, duration: 22, x: 200, y: 150 },
    { Icon: Lock, size: 52, delay: 2, duration: 24, x: 100, y: -300 },
    { Icon: Shield, size: 44, delay: 8, duration: 19, x: -150, y: 250 },
  ]

  return (
    <section id="hero" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Large blurred accent glows for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
        />
      </div>

      {/* Floating security icons - moving slowly for secure/privacy feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              x: [x, x + 100, x],
              y: [y, y + 150, y],
            }}
            transition={{
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              x: { duration, repeat: Infinity, ease: "linear", delay },
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
            }}
            className="absolute"
            style={{ left: "50%", top: "50%" }}
          >
            <Icon className={`w-${size/4} h-${size/4} text-accent/30`} />
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            >
              Protect Sensitive Data with Privacy-First AI Anonymization
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Automatically anonymize sensitive data like names, file paths, IDs and confidential information before
              sending to ChatGPT, Claude or other AI models. Anonymize data for AI input protection with GDPR compliance
              and prevent accidental data leaks with our privacy-first AI tool.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToEarlyAccess}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onMouseEnter={() => trackHeroInteraction("CTA Hover")}
              aria-label="Secure Early Access to DataCloak AI - Limited early access spots available"
            >
              Secure Early Access (Limited Spots)
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}