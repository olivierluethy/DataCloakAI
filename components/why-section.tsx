"use client"

import { Lock, Cpu, Shield, Key, Fingerprint, EyeOff, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function WhySection() {
  const reasons = [
    {
      icon: Cpu,
      title: "Built for Real-World AI Workflows",
      description: "Purpose-built for developers and professionals who need privacy-first AI tools",
    },
    {
      icon: Shield,
      title: "No Enterprise Complexity",
      description: "Simple, focused design without bloat—just AI input protection that works",
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Local client-side processing with zero data storage or logging",
    },
  ]

  // Floating icons around the three reason cards
  const floatingIcons = [
    { Icon: Key, size: 48, delay: 0, duration: 24, x: -140, y: -100 },
    { Icon: Fingerprint, size: 56, delay: 6, duration: 28, x: 120, y: -140 },
    { Icon: EyeOff, size: 44, delay: 12, duration: 22, x: -100, y: 120 },
    { Icon: Sparkles, size: 40, delay: 18, duration: 26, x: 160, y: 80 },
    { Icon: Zap, size: 52, delay: 3, duration: 30, x: -80, y: -180 },
    { Icon: Shield, size: 50, delay: 9, duration: 25, x: 100, y: 160 },
  ]

  return (
    <section id="why" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Soft accent glows */}
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
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why DataCloak AI</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Privacy-first AI protection shouldn't require enterprise complexity. We make it simple.
            </p>
          </motion.div>

          {/* Three Reason Cards with Floating Icons */}
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Floating Icons Overlay */}
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

            {/* Reason Cards */}
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  whileHover={{ y: -16, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-md p-8 shadow-xl transition-all duration-700 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/25"
                >
                  {/* Glimmer Shine Effect */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12" />
                  </motion.div>

                  {/* Icon with pulse glow */}
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
                    {reason.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-400">
                    {reason.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Technical Approach Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-accent/40"
          >
            {/* Subtle inner glow on hover */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-6">Technical Approach for AI Data Anonymization</h3>
            <ul className="space-y-5 text-lg">
              {[
                { strong: "Client-side processing", text: "Your sensitive data never leaves your device" },
                { strong: "No data storage", text: "Nothing is saved on our servers" },
                { strong: "No prompt logging", text: "Your AI interactions with ChatGPT or Claude remain private" },
                { strong: "Privacy by design", text: "Built from the ground up for security and GDPR compliance" },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="text-accent text-2xl mt-1">→</span>
                  <span>
                    <span className="text-foreground font-semibold">{item.strong}</span> - {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}