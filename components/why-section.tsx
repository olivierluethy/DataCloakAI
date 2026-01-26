"use client"

import { Lock, Cpu, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhySection() {
  const reasons = [
    {
      icon: Cpu,
      title: "Real-World AI Workflows",
      description: "Purpose-built for developers, consultants, and professionals — use top AI models safely without killing productivity or rebuilding inferior internal tools.",
    },
    {
      icon: Shield,
      title: "Simple & Focused",
      description: "No enterprise bloat or complexity — just automatic, seamless anonymization that works instantly in your daily ChatGPT/Claude workflows.",
    },
    {
      icon: Lock,
      title: "Privacy & Compliance First",
      description: "Client-side processing, zero storage, no logs — GDPR & FADP compliant by design. Your data never leaves your device.",
    },
  ]

  const trustHighlights = [
    { title: "Client-Side Processing", text: "Sensitive data never leaves your device." },
    { title: "Zero Data Storage & Logging", text: "Nothing saved on servers — interactions stay private." },
    { title: "GDPR & Swiss Privacy Standards", text: "Built in Switzerland for maximum compliance and trust." },
  ]

  return (
    <section id="why" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10 space-y-16">

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
            Powerful, simple privacy-first protection trusted by professionals in regulated industries.
          </p>
        </motion.div>

        {/* Reason Cards – slightly updated descriptions for flow */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-md p-8 shadow-xl transition-all duration-700"
              >
                <div className="relative w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Merged Trust + Lifetime Deal Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-md p-10 shadow-xl transition-all duration-500"
        >
          <h3 className="text-2xl font-bold mb-6">Unmatched Trust & Zero-Risk Lifetime Access</h3>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Technical Trust */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Core Architecture</h4>
              <ul className="space-y-4 text-lg">
                {trustHighlights.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-accent text-2xl mt-1">→</span>
                    <span>
                      <span className="font-semibold text-foreground">{item.title}</span> — {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Lifetime Deal + Risk Reversal */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-4">Lifetime Deal – Zero Risk</h4>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>One-time €39 payment — core access forever, no subscription</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>Full refund anytime before public launch — literally zero risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>Limited early spots — secure yours before they're gone</span>
                </li>
              </ul>
              
              {/* Mini CTA to nudge toward action */}
              <div className="pt-4">
                <a
                  href="#early-access"
                  className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-lg font-medium"
                >
                  Secure €39 Lifetime Access Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}