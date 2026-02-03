"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Shield, Lock, Key, Fingerprint, ArrowRight } from "lucide-react"

export function FinalCTASection() {
  const scrollToEarlyAccess = () => {
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
    
    // Kleiner Fokus-Effekt: Das Input-Feld im EarlyAccess-Bereich direkt ansteuern
    const input = document.querySelector('input[type="email"]') as HTMLInputElement;
    if (input) setTimeout(() => input.focus(), 800);
  }

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
    <section className="relative py-32 sm:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Background Orbs & Icons (identisch für visuelle Kontinuität) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <motion.h2
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter"
            >
              Ready to <span className="text-accent italic">Cloak</span> Your Data?
            </motion.h2>

            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Don't pay full price later. Join the <span className="text-foreground font-semibold">Early Adopter Cycle</span> today and secure your lifetime discount while we finalize the ultimate AI privacy shield.
            </motion.p>
          </div>

          {/* Massive, glowing CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-6"
          >
            <Button
              onClick={scrollToEarlyAccess}
              size="lg"
              className="group cursor-pointer bg-white text-black text-xl sm:text-2xl px-12 sm:px-20 h-20 sm:h-24 font-black rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:shadow-accent/30 transition-all duration-500 flex items-center gap-4"
            >
              Claim My 50% Discount
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>

            <div className="flex items-center gap-8 text-sm sm:text-base font-medium text-muted-foreground/80">
              <span className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-accent" /> No Credit Card
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-accent" /> Cancel Anytime
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-accent" /> Direct Feedback
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
