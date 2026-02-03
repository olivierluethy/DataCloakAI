"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Sparkles, Key, Fingerprint, Zap, Mail, CheckCircle } from "lucide-react"
import { trackFormSubmit } from "@/lib/analytics"

export function PrivacyAuditForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address")
      return
    }

    trackFormSubmit("Privacy Audit")

    const res = await fetch('/api/submit-audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 6000)
    } else {
      setError("Submission failed. Try again.")
    }
  }

  // Floating icons around the form
  const floatingIcons = [
    { Icon: Shield, size: 64, delay: 0, duration: 30, x: -200, y: -150 },
    { Icon: Key, size: 56, delay: 8, duration: 34, x: 220, y: -120 },
    { Icon: Fingerprint, size: 72, delay: 16, duration: 28, x: -180, y: 180 },
    { Icon: Sparkles, size: 48, delay: 24, duration: 32, x: 160, y: 100 },
    { Icon: Zap, size: 60, delay: 4, duration: 26, x: -100, y: -220 },
  ]

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Dramatic glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-accent/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/6 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-3xl relative z-10">
        <div className="space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Get Your <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Free Privacy Audit</span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Discover how much sensitive data you might be exposing to AI models. Receive personalized recommendations instantly.
            </p>
          </motion.div>

          {/* Form Card with Floating Icons */}
          <div className="relative">
            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.05, 0.18, 0.05],
                    x: [x, x + 120, x],
                    y: [y, y + 160, y],
                    rotate: [-10, 10, -10],
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
                    className={`w-${size/4} h-${size/4} text-accent/40`}
                    style={{ filter: "drop-shadow(0 0 30px rgba(var(--accent-rgb), 0.5))" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative backdrop-blur-xl bg-card/90 border border-border/80 rounded-3xl p-10 sm:p-12 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label htmlFor="audit-email" className="flex items-center gap-3 text-lg font-medium">
                    <Mail className="w-6 h-6 text-accent" />
                    Your Email Address
                  </label>
                  <Input
                    id="audit-email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg px-6 rounded-2xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/30"
                    aria-label="Email address for privacy audit"
                  />
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm text-destructive flex items-center gap-2"
                      >
                        <Zap className="w-4 h-4" />
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-16 text-xl font-bold rounded-2xl bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent shadow-2xl hover:shadow-accent/40 transition-all duration-500"
                  >
                    Send My Free Privacy Audit
                  </Button>
                </motion.div>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-6 bg-green-600/10 border border-green-500/30 rounded-2xl flex items-center justify-center gap-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-500" />
                      <p className="text-lg font-medium text-green-600">
                        Check your inbox! Your personalized privacy audit is on the way.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

          {/* Subtle reassurance */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-muted-foreground/70"
          >
            No spam • Instant delivery • 100% private
          </motion.p>
        </div>
      </div>
    </section>
  )
}