"use client"

import { Button } from "@/components/ui/button"
import { Check, Shield, Key, Fingerprint, Sparkles, Zap, Lock } from "lucide-react"
import { motion } from "framer-motion"
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
    window.open("https://buy.stripe.com/test_9B6bJ1cn4d3V03tf5B4Ja00", "_blank")
  }

  // Floating icons around the pricing card
  const floatingIcons = [
    { Icon: Shield, size: 80, delay: 0, duration: 35, x: -300, y: -200 },
    { Icon: Key, size: 72, delay: 8, duration: 40, x: 350, y: -180 },
    { Icon: Fingerprint, size: 64, delay: 16, duration: 32, x: -250, y: 220 },
    { Icon: Sparkles, size: 56, delay: 24, duration: 38, x: 280, y: 150 },
    { Icon: Zap, size: 68, delay: 4, duration: 30, x: 100, y: -320 },
    { Icon: Lock, size: 60, delay: 12, duration: 34, x: -150, y: 280 },
  ]

  return (
    <section id="early-access" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background to-background/90">
      {/* Dramatic glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 150, 0], y: [0, -150, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[700px] h-[700px] bg-accent/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -180, 0], y: [0, 180, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grand floating icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.2, 0.05],
              x: [x, x + 140, x],
              y: [y, y + 180, y],
              rotate: [-12, 12, -12],
            }}
            transition={{
              opacity: { duration: 12, repeat: Infinity },
              x: { duration, repeat: Infinity, ease: "linear", delay },
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute left-1/2 top-1/2"
          >
            <Icon
              className={`w-${size/4} h-${size/4} text-accent/50`}
              style={{ filter: "drop-shadow(0 0 40px rgba(var(--accent-rgb), 0.6))" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-6"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Early Access Program
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto">
              DataCloak AI is launching soon. <span className="text-foreground font-semibold">Only 50 spots</span> available at one-time early adopter pricing.
            </p>
          </motion.div>

          {/* Benefits + Pricing Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold">What Early Adopters Get</h3>
              <ul className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                    className="flex gap-5 text-lg"
                  >
                    <Check className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="relative overflow-hidden rounded-3xl border border-accent/40 bg-card/95 backdrop-blur-xl p-10 sm:p-12 shadow-2xl"
            >
              {/* Inner glimmer on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-12" />
              </motion.div>

              <div className="space-y-8 text-center">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">One-Time Payment</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-6xl sm:text-7xl font-bold">€39</span>
                  </div>
                  <p className="text-muted-foreground">No subscription • Lifetime core access</p>
                </div>

                <Button
                  onClick={handleGetAccess}
                  size="lg"
                  className="w-full h-16 text-xl font-bold rounded-2xl bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent shadow-2xl hover:shadow-accent/50 transition-all duration-500"
                >
                  Secure Your Spot Now
                </Button>

                <p className="text-sm text-muted-foreground/80">
                  <span className="font-semibold text-foreground">Only 50 spots left</span> • Join 500+ privacy-focused professionals
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}