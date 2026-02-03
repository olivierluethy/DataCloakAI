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
  Gift,
  Mail
} from "lucide-react"

export function PostPurchaseTrustSection() {
  const steps = [
    {
      icon: Gift,
      title: "Instant Advantage",
      description: "Secure your 50% Lifetime Discount (€39 instead of €79) before the public launch. No hidden fees.",
    },
    {
      icon: Mail,
      title: "Priority Access",
      description: "Get exclusive early builds and influence the roadmap with your feedback before anyone else.",
    },
    {
      icon: ShieldCheck,
      title: "100% Risk-Free",
      description: "Our Early Adopter Guarantee: Full refund anytime before the official v1.0 release. Zero friction.",
    },
  ]

  // Floating icons — same style & density
  const floatingIcons = [
    { Icon: Lock,      size: 48, delay: 0,  duration: 24, x: -140, y: -100 },
    { Icon: Sparkles,  size: 56, delay: 6,  duration: 28, x: 120,  y: -140 },
    { Icon: Zap,       size: 44, delay: 12, duration: 22, x: -100, y: 120  },
    { Icon: CheckCircle2, size: 50, delay: 3, duration: 26, x: 160,  y: 80  },
    { Icon: Euro,      size: 52, delay: 9,  duration: 30, x: -80,  y: -180 },
    { Icon: ShieldCheck, size: 48, delay: 15, duration: 25, x: 100,  y: 160 },
  ]

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4" /> Your Early Adopter Journey
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              The Path to <span className="text-accent italic">Zero-Risk</span> Privacy
            </h2>

            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Joining the waitlist or securing early access is just the beginning. Here is how we protect your trust.
            </p>
          </motion.div>

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
                  className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-xl p-10 transition-all duration-500 hover:border-accent/40 hover:bg-white/[0.06]"
                >
                  {/* Icon container */}
                  <div className="relative w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-accent" />
                    <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-white/50 leading-relaxed text-sm">
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
            className="text-center pt-10"
          >
            <div className="inline-flex items-center gap-4 p-1 pr-6 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-black uppercase tracking-widest">
                Safe Choice
              </div>
              <p className="text-sm font-medium text-white/80 flex items-center gap-2">
                No risk. Just the ultimate privacy advantage.
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
