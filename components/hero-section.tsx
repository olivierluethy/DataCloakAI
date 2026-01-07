"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Lock, Shield, Sparkles, Key, Fingerprint, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { trackCTAClick, trackHeroInteraction } from "@/lib/analytics"

export function HeroSection() {
  const scrollToEarlyAccess = () => {
    trackCTAClick("Secure Early Access")
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // More floating security icons – increased count, varied sizes, gentle swinging motion
  const floatingIcons = [
    { Icon: Lock, size: 64, delay: 0, duration: 32, x: -350, y: -250 },
    { Icon: Shield, size: 80, delay: 8, duration: 38, x: 400, y: -200 },
    { Icon: Key, size: 56, delay: 16, duration: 28, x: -450, y: 300 },
    { Icon: Fingerprint, size: 72, delay: 24, duration: 35, x: 350, y: 220 },
    { Icon: EyeOff, size: 60, delay: 4, duration: 30, x: 180, y: -400 },
    { Icon: Sparkles, size: 48, delay: 12, duration: 26, x: -250, y: 350 },
    { Icon: Lock, size: 52, delay: 20, duration: 34, x: 100, y: -320 },
    { Icon: Shield, size: 68, delay: 28, duration: 40, x: -180, y: -180 },
    { Icon: Key, size: 44, delay: 2, duration: 25, x: 300, y: 280 },
    { Icon: Fingerprint, size: 76, delay: 10, duration: 36, x: -300, y: 150 },
    { Icon: EyeOff, size: 50, delay: 18, duration: 29, x: 250, y: -300 },
    { Icon: Sparkles, size: 40, delay: 26, duration: 31, x: -100, y: 400 },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 px-6 sm:px-8 lg:px-12 overflow-hidden bg-black">
      {/* Very subtle animated grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
      </div>

      {/* Soft white glow orbs for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -180, 0],
            y: [0, 180, 0],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-white/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] bg-white/3 rounded-full blur-3xl"
        />
      </div>

      {/* More floating icons with gentle swing + glow */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.03, 0.12, 0.03],
              x: [x, x + 120, x],
              y: [y, y + 180, y],
              rotate: [-5, 5, -5], // subtle swing
            }}
            transition={{
              opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              x: { duration, repeat: Infinity, ease: "linear", delay },
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute hidden sm:block" // hide on very small screens to avoid clutter
            style={{ left: "50%", top: "50%" }}
          >
            <Icon
              className={`w-${size/4} h-${size/4}`}
              style={{ filter: "drop-shadow(0 0 25px rgba(255,255,255,0.5))" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content – fully responsive */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-10 sm:space-y-12"
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white"
          >
            Protect Sensitive Data
            <br className="hidden sm:block" />
            <span className="text-white/80">with Privacy-First AI Anonymization</span>

            <h3>Anonymize PII for ChatGPT & Claude Securely</h3>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Automatically anonymize names, file paths, IDs, and confidential information before sharing with ChatGPT, Claude, or any AI model.
            <br className="hidden md:block" />
            GDPR-compliant, zero data retention, and built for ultimate privacy.
          </motion.p>

          {/* Feature Checks – responsive wrapping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-10 text-white/80 text-base sm:text-lg"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <span>Privacy-First Design</span>
            </div>
            <div className="text-white/30">•</div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <span>GDPR Compliant</span>
            </div>
            <div className="text-white/30">•</div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <span>Works with All Major LLMs</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Button
              onClick={scrollToEarlyAccess}
              size="lg"
              className="bg-white text-black hover:bg-white/90 hover:shadow-2xl hover:shadow-white/40 text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 font-semibold rounded-full transition-all duration-500"
              onMouseEnter={() => trackHeroInteraction("CTA Hover")}
              aria-label="Secure Early Access – Limited spots available"
            >
              Secure Early Access (Limited Spots)
            </Button>
          </motion.div>

          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-sm sm:text-base text-white/50"
          >
            Join the waitlist — early adopters get priority access
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}