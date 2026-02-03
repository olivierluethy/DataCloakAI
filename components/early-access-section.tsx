"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Shield, Key, Fingerprint, Sparkles, Zap, Lock, Mail, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { trackCTAClick } from "@/lib/analytics"

export function EarlyAccessSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const benefits = [
    "Lock in 50% Lifetime Discount (€39 instead of €79)",
    "Direct influence on the product roadmap",
    "Early beta builds & exclusive updates",
    "Privacy-first community access",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)

    // optional: basic validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setLoading(false)
      return
    }

    trackCTAClick("Join Waitlist Submit")

    try {
      const res = await fetch("/api/submit-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitted(true)
      setEmail("")
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
    
    // HIER: Deine API-Anbindung oder Supabase/Formspree etc.
    // Beispielhafter Delay für die UI
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

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
      {/* Background Orbs & Icons (identisch zu deinem Code für Konsistenz) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
              Join the <span className="text-accent">Early Adopter</span> Cycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop guessing if people want your tool. Help us build the future of AI Privacy and secure your <span className="text-foreground font-semibold underline decoration-accent">lifetime deal</span>.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold">Why join the waitlist?</h3>
              <ul className="space-y-5">
                {benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 text-lg items-center"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Interaction Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 bg-card/50 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_0_50px_-12px_rgba(var(--accent-rgb),0.3)]"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Reserve Your Spot</h4>
                      <p className="text-muted-foreground">Zero risk. We'll invite you when we're ready.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="email"
                          required
                          placeholder="Enter your business email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-12 h-14 bg-background/50 border-white/10 rounded-xl text-lg focus:ring-accent"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 text-lg font-bold rounded-xl bg-accent text-accent-foreground hover:brightness-110 transition-all shadow-lg shadow-accent/20"
                      >
                        {loading ? "Registering..." : "Get 50% Lifetime Discount"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </form>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span>No credit card required • GDPR compliant</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-8"
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-10 h-10 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-3xl font-bold">You're on the list!</h4>
                      <p className="text-muted-foreground text-lg">
                        We've sent a confirmation to <span className="text-foreground font-medium">{email}</span>.
                      </p>
                    </div>
                    <p className="text-sm bg-accent/10 p-4 rounded-lg text-accent-foreground">
                      💡 <strong>What's next?</strong> We will reach out shortly to ask about your specific requirements for DataCloak AI.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
