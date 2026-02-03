"use client"

import { AlertTriangle, ShieldAlert, XCircle, ZapOff, Fingerprint, FileWarning } from "lucide-react"
import { motion } from "framer-motion"

export function ProblemSection() {
  const risks = [
    {
      title: "GDPR & Legal Nightmare",
      icon: ShieldAlert,
      description:
        "Sending PII to LLMs isn't just risky—it's often illegal. Avoid massive fines and the legal fallout of non-compliant data processing.",
    },
    {
      title: "Permanent AI Memory",
      icon: ZapOff,
      description:
        "Once data is in the cloud, it stays there. Sensitive info ends up in training logs, creating a permanent, unerasable leak.",
    },
    {
      title: "Broken Client Trust",
      icon: XCircle,
      description:
        "One leaked NDA or internal code snippet can destroy years of reputation. Don't let a 'quick prompt' ruin your career.",
    },
  ]

  const exposures = [
    { label: "Personal Identifiers", detail: "Names, Emails, Phone Numbers", icon: Fingerprint },
    { label: "Credentials", detail: "API Keys, Tokens, Passwords", icon: FileWarning },
    { label: "Proprietary Data", detail: "Internal Code, Strategy, NDAs", icon: ShieldAlert },
  ]

  return (
    <section id="problem" className="relative py-24 sm:py-32 px-4 overflow-hidden bg-[#050505]">
      {/* Roter Warn-Glow im Hintergrund */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest">
                <AlertTriangle className="w-3 h-3" /> The High Cost of Convenience
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                AI Models Never <br />
                <span className="text-red-500 italic">Forget.</span>
              </h2>
              <p className="text-xl text-white/50 leading-relaxed font-light">
                Every time you paste data into ChatGPT, Claude, or Gemini, you lose control. Without <strong>automated cloaking</strong>, your confidential documents and client secrets become part of the public AI memory.
              </p>
            </div>

            {/* Visual Exposure List */}
            <div className="grid gap-4">
              {exposures.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-red-500/30 transition-all">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white/90">{item.label}</p>
                    <p className="text-xs text-white/40">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Risk Cards */}
          <div className="space-y-4">
            {risks.map((risk, idx) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-red-500/40 transition-all duration-500"
              >
                <div className="flex gap-4">
                  <div className="mt-1">
                    <risk.icon className="w-6 h-6 text-red-500 group-hover:rotate-12 transition-transform" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {risk.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {risk.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
