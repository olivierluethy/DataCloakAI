"use client"

import { Shield, Zap, RefreshCw, Lock, Key, Fingerprint, EyeOff, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function SolutionSection() {
  const features = [
    {
      icon: Shield,
      title: "Automatically Detects",
      description:
        "Identifies sensitive data in real-time before sending to ChatGPT, Claude or other AI models for input protection",
    },
    {
      icon: Zap,
      title: "Intelligently Replaces",
      description: "Converts sensitive data to safe placeholders while preserving context for AI responses",
    },
    {
      icon: RefreshCw,
      title: "Seamlessly Restores",
      description: "Optional restoration of original values in AI responses for complete anonymization workflow",
    },
  ]

  const detections = [
    "Names, organizations & personal identifiers",
    "File paths, usernames & system references",
    "API keys, tokens, credentials & references",
    "Client-specific confidential data & internal processes",
  ]

  // Floating icons around the first three feature cards
  const floatingIcons = [
    { Icon: Lock, size: 48, delay: 0, duration: 22, x: -120, y: -80 },
    { Icon: Key, size: 40, delay: 5, duration: 26, x: 100, y: -120 },
    { Icon: Fingerprint, size: 56, delay: 10, duration: 20, x: -80, y: 100 },
    { Icon: EyeOff, size: 44, delay: 15, duration: 24, x: 140, y: 60 },
    { Icon: Sparkles, size: 36, delay: 2, duration: 28, x: -160, y: -40 },
    { Icon: Shield, size: 52, delay: 8, duration: 23, x: 80, y: 140 },
  ]

  return (
    <section id="solution" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-card/50 border-y border-border">
      {/* Subtle animated grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Accent glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              How DataCloak AI Anonymizes Sensitive Data
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              DataCloak AI automatically detects and anonymizes sensitive information with zero manual effort, providing
              privacy-first AI input protection for all your workflows.
            </motion.p>
          </div>

          {/* Feature Cards Grid with Floating Icons Overlay */}
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Floating Icons – only around the three main cards */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                    x: [x, x + 80, x],
                    y: [y, y + 120, y],
                    rotate: [-8, 8, -8],
                  }}
                  transition={{
                    opacity: { duration: 10, repeat: Infinity },
                    x: { duration, repeat: Infinity, ease: "linear", delay },
                    y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                    rotate: { duration: duration * 1.4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute left-1/2 top-1/2"
                >
                  <Icon
                    className={`w-${size/4} h-${size/4} text-accent/40`}
                    style={{ filter: "drop-shadow(0 0 20px rgba(var(--accent-rgb), 0.4))" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* The three main feature cards */}
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -16, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background/80 backdrop-blur-md p-8 shadow-xl transition-all duration-700 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/30"
                >
                  {/* Glimmer / Shine Effect on Hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </motion.div>

                  {/* Icon with enhanced hover */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-accent transition-transform duration-500 group-hover:scale-125" />
                    {/* Subtle pulse glow */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-400 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-400">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Lists */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-6 p-8 rounded-2xl bg-background/60 border border-border/60 backdrop-blur-sm transition-all duration-500 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-foreground">What DataCloak Detects & Anonymizes</h3>
              <ul className="space-y-4">
                {detections.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 text-muted-foreground"
                  >
                    <span className="text-accent text-2xl mt-0.5">✓</span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-6 p-8 rounded-2xl bg-background/60 border border-border/60 backdrop-blur-sm transition-all duration-500 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-foreground">Why Choose DataCloak AI</h3>
              <ul className="space-y-4">
                {[
                  "No manual cleanup required - full automation for AI input protection",
                  "No guessing what is safe to share with AI models",
                  "Seamless daily AI usage for professionals and developers",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                    className="flex gap-4 text-muted-foreground"
                  >
                    <span className="text-accent text-2xl mt-0.5">✓</span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}