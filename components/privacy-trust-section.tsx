"use client"

import { Lock, Database, EyeOff, ShieldCheck, HardDrive } from "lucide-react"
import { motion } from "framer-motion"

export function PrivacyTrustSection() {
  const trustPoints = [
    {
      icon: EyeOff,
      title: "Zero-Tracking Policy",
      description: "We don't monitor your activity or collect usage analytics. Your workflow remains strictly confidential and invisible to us.",
    },
    {
      icon: HardDrive,
      title: "Local-Only Execution",
      description: "Your sensitive information never touches our servers. 100% of the anonymization process happens directly on your local machine.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance by Design",
      description: "Architected to exceed GDPR, CCPA, and HIPAA standards. We provide the technical shield for your regulatory requirements.",
    },
  ]

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/40 border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Header mit Fokus auf Autorität */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Lock className="w-3 h-3" /> Military-Grade Privacy
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Trust is our <span className="text-accent">Protocol.</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
              We didn't just build a tool; we built a fortress for your data. No backdoors, no logs, no compromises.
            </p>
          </div>

          {/* Trust Cards mit Glassmorphism */}
          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/30 transition-all duration-500"
              >
                {/* Subtle Icon Glow */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                    <point.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer-Statement für Enterprise-Kunden */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/20 font-bold">
              Secure Anonymization Engine v1.0 — Verified Environment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
