"use client"

import { Info, ShieldCheck, RefreshCcw, CalendarDays, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function DisclaimerSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-card/30 backdrop-blur-sm p-8 md:p-12"
        >
          {/* Dekorative Hintergrund-Elemente */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Info className="w-32 h-32" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            {/* Linke Seite: Core Promise */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/60">
                <Lock className="w-3 h-3" /> Transparency First
              </div>
              <h3 className="text-3xl font-bold text-white">Our Commitment to Early Adopters</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DataCloak AI is currently in its final engineering phase. We believe in building in public and protecting our earliest supporters. Your trust is our foundation.
              </p>
            </div>

            {/* Rechte Seite: Feature Grid (Die Fakten) */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <CalendarDays className="w-5 h-5" />
                  <span className="font-semibold text-sm italic">Release Roadmap</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  The first beta builds are scheduled for Q2 2026. Early access members get priority seats.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <RefreshCcw className="w-5 h-5" />
                  <span className="font-semibold text-sm italic">Refund Policy</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Zero risk. Should you decide not to use the tool before the official release, we offer an instant refund.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-semibold text-sm italic">Support & Influence</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  By joining now, you directly influence which PII-types we prioritize for anonymization.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <Info className="w-5 h-5" />
                  <span className="font-semibold text-sm italic">No Hidden Costs</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Early Adopter licenses are valid forever. No subscriptions, no surprise fees.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-white/40">
              Detailed legal terms can be found in our{" "}
              <a href="/terms-of-service" className="text-white/60 hover:text-accent underline underline-offset-4 transition-colors">
                Terms of Service
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
