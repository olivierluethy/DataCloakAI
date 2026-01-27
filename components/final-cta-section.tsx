"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Shield, Lock, Key, Fingerprint } from "lucide-react"

export function FinalCTASection() {
  const scrollToEarlyAccess = () => {
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Floating icons for the final CTA – more dramatic, larger, slower swing
  const floatingIcons = [
    { Icon: Lock, size: 80, delay: 0, duration: 35, x: -400, y: -300 },
    { Icon: Shield, size: 96, delay: 10, duration: 40, x: 450, y: -250 },
    { Icon: Key, size: 72, delay: 20, duration: 32, x: -500, y: 350 },
    { Icon: Fingerprint, size: 88, delay: 30, duration: 38, x: 400, y: 300 },
    { Icon: Sparkles, size: 64, delay: 5, duration: 36, x: 0, y: -450 },
    { Icon: Zap, size: 76, delay: 15, duration: 34, x: -200, y: 400 },
    { Icon: Shield, size: 68, delay: 25, duration: 37, x: 250, y: -380 },
  ]

  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Intense glow orbs for dramatic finale */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -200, 0],
            y: [0, 200, 0],
          }}
          transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grand floating icons – larger, slower, more glow */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.2, 0.05],
              x: [x, x + 150, x],
              y: [y, y + 200, y],
              rotate: [-10, 10, -10],
            }}
            transition={{
              opacity: { duration: 12, repeat: Infinity },
              x: { duration, repeat: Infinity, ease: "linear", delay },
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute hidden lg:block"
            style={{ left: "50%", top: "50%" }}
          >
            <Icon
              className={`w-${size/4} h-${size/4} text-accent/50`}
              style={{ filter: "drop-shadow(0 0 40px rgba(var(--accent-rgb), 0.6))" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Secure Your Spot in the Future of
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
              Privacy-First AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Early access is limited. Join the waitlist today and be among the first to protect your sensitive data with DataCloak AI.
          </motion.p>

          {/* Massive, glowing CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12"
          >
            <Button
  onClick={scrollToEarlyAccess}
  size="lg"
  className="bg-white text-black text-xl sm:text-2xl px-12 sm:px-16 h-16 sm:h-20 font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500"
>
  Secure Early Access Now
</Button>

          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-sm text-muted-foreground/70"
          >
            Limited spots • Priority access • Exclusive early features
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}