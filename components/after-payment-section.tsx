"use client"

import { motion } from "framer-motion"
import {
  Euro,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react"

export function PostPurchaseTrustSection() {
  const steps = [
    {
      icon: Euro,
      title: "Secure lifetime access",
      description: "One-time payment of €39 — yours forever (no recurring charges)",
    },
    {
      icon: Clock,
      title: "Receive early builds",
      description: "Get access to new features & improvements as soon as they’re ready",
    },
    {
      icon: ShieldCheck,
      title: "Full refund until public launch",
      description: "Not happy? Ask for 100% refund anytime before we go fully public",
    },
  ]

  // Floating icons — same style & density as in WhySection
  const floatingIcons = [
    { Icon: Lock,      size: 48, delay: 0,  duration: 24, x: -140, y: -100 },
    { Icon: Sparkles,  size: 56, delay: 6,  duration: 28, x: 120,  y: -140 },
    { Icon: Zap,       size: 44, delay: 12, duration: 22, x: -100, y: 120  },
    { Icon: CheckCircle2, size: 50, delay: 3, duration: 26, x: 160,  y: 80  },
    { Icon: Euro,      size: 52, delay: 9,  duration: 30, x: -80,  y: -180 },
    { Icon: ShieldCheck, size: 48, delay: 15, duration: 25, x: 100,  y: 160 },
  ]

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle grid background — identical to WhySection */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Soft accent glows — same positioning & opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/30 border border-accent/30 text-white text-sm font-medium shadow-sm">
  <CheckCircle2 className="w-4 h-4 text-white" />
  Zero risk • Lifetime deal
</div>


            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              What happens after you pay?
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              No subscription. No lock-in. Just lifetime access — and peace of mind.
            </p>
          </motion.div>

          {/* Floating icons overlay — same behavior as WhySection */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                  x: [x, x + 100, x],
                  y: [y, y + 140, y],
                  rotate: [-6, 6, -6],
                }}
                transition={{
                  opacity: { duration: 10, repeat: Infinity },
                  x: { duration, repeat: Infinity, ease: "linear", delay },
                  y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                  rotate: { duration: duration * 1.3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute left-1/2 top-1/2"
              >
                <Icon
                  className={`w-${size/4} h-${size/4} text-accent/40`}
                  style={{ filter: "drop-shadow(0 0 18px rgba(var(--accent-rgb), 0.35))" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Three trust cards */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  whileHover={{ y: -16, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-md p-8 shadow-xl transition-all duration-700 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/25"
                >
                  {/* Glimmer shine on hover — identical to WhySection */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12" />
                  </motion.div>

                  {/* Icon container with pulse glow */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-accent transition-transform duration-500 group-hover:scale-125" />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-400 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-400">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Final trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-xl font-medium text-white italic inline-flex items-center gap-3">
  No risk. Lifetime deal. You literally cannot lose.
  <ArrowRight className="w-5 h-5" />
</p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}