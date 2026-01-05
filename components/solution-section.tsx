"use client"

import { Shield, Zap, RefreshCw } from "lucide-react"
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

  return (
    <section id="solution" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-card/50 border-y border-border">
      {/* Subtle animated background grid - same style as Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Floating accent orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-32 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-reverse delay-1000" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              How DataCloak AI Anonymizes Sensitive Data for ChatGPT and Claude
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              DataCloak AI automatically detects and anonymizes sensitive information with zero manual effort, providing
              privacy-first AI input protection for all your workflows.
            </motion.p>
          </div>

          {/* Feature Cards with hover animation */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group relative space-y-4 p-8 rounded-2xl border border-border bg-background/80 backdrop-blur-sm hover:border-accent/70 hover:bg-background/95 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-accent/20"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center"
                  >
                    <Icon className="w-7 h-7 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom lists with subtle entrance */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-6 p-6 rounded-xl bg-background/50 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground">What DataCloak Detects & Anonymizes</h3>
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
                    <span className="text-accent text-lg mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 p-6 rounded-xl bg-background/50 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground">Why Choose DataCloak AI</h3>
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
                    <span className="text-accent text-lg mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}