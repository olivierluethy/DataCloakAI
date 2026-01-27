"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Lock, Shield, Sparkles, Key, Fingerprint, EyeOff, Cpu } from "lucide-react"
import { motion } from "framer-motion"
import { trackCTAClick, trackHeroInteraction } from "@/lib/analytics"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToEarlyAccess = () => {
    trackCTAClick("Secure Early Access")
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-black to-gray-950"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -120, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -140, 0], y: [0, 140, 0] }}
          transition={{ duration: 70, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-20%] w-[700px] h-[700px] bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.04, 0.10, 0.04],
              x: [x, x + 100, x],
              y: [y, y + 140, y],
              rotate: [-4, 4, -4],
            }}
            transition={{
              opacity: { duration: 14, repeat: Infinity, ease: "easeInOut" },
              x: { duration, repeat: Infinity, ease: "linear", delay },
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: duration * 1.4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute"
            style={{ left: "50%", top: "50%", transform: `translate(${x}px, ${y}px)` }}
          >
            <Icon
              className={`w-${Math.round(size / 4)} h-${Math.round(size / 4)} text-white/60`}
              style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.35))" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8 lg:space-y-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-white">
              Before ChatGPT Sees Your Data
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">We Anonymize It</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light">
              Automatically remove sensitive details from your prompts before they reach ChatGPT, Claude, or any AI model — no manual cleanup, no risk.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 text-white/90 text-base sm:text-lg">
              {["Privacy-First Design", "GDPR Compliant", "Works with All Major LLMs"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 lg:pt-10">
              <Button
                onClick={scrollToEarlyAccess}
                size="lg"
                className="bg-white text-black hover:bg-white/95 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] text-lg sm:text-xl px-10 sm:px-14 h-14 sm:h-16 font-semibold rounded-full transition-all duration-500 shadow-xl hover:scale-[1.03] active:scale-95"
                onMouseEnter={() => trackHeroInteraction("CTA Hover")}
                aria-label="Secure Early Access – €39 Lifetime Core Access"
              >
                Get Early Access (€39 – Lifetime)
              </Button>

              <p className="mt-4 text-sm sm:text-base text-white/60 font-light">
                No subscription • Full refund before launch • Limited spots
              </p>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
              >
                {[
                  { Icon: Shield, label: "GDPR Ready" },
                  { Icon: Cpu, label: "Client-Side Only" },
                  { Icon: EyeOff, label: "Zero Logs" },
                  { Icon: Lock, label: "Swiss Privacy" },
                ].map(({ Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-sm text-white/80 bg-white/6 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-sm hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-4.5 h-4.5 text-emerald-400" />
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Mockup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] md:max-w-[620px] lg:max-w-[680px] xl:max-w-[760px] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-purple-600/5 to-transparent rounded-3xl blur-3xl opacity-50 -z-10" />

              {/* Clickable image */}
              <Image
                src="/mockup.png"
                alt="DataCloak AI Prompt Anonymizer – Input with sensitive data redacted and safe output preview"
                width={1400}
                height={900}
                priority
                className="rounded-3xl shadow-2xl shadow-black/70 border border-white/10 object-cover transition-all duration-700 hover:scale-[1.015] hover:shadow-black/80"
                onClick={openModal}
              />

              <p className="mt-5 text-center text-sm text-white/50 font-light tracking-wide">
                Conceptual preview — Early access version in development
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-2xl font-bold z-50 hover:text-gray-300"
            >
              ×
            </button>
            <Image
              src="/mockup.png"
              alt="Mockup enlarged"
              width={1400}
              height={900}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
