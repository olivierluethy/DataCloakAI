"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, ShieldCheck, Zap, Lock, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { trackFAQOpen } from "@/lib/analytics"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does the anonymization affect AI response quality?",
      answer: "We use 'Context-Aware Cloaking'. Unlike simple redaction, we replace sensitive data with realistic synthetic placeholders. This ensures that models like ChatGPT or Claude still understand the structure and intent of your prompt, providing high-quality results without seeing your actual secrets.",
      icon: Zap
    },
    {
      question: "Does my data ever touch your servers?",
      answer: "No. DataCloak AI is built on a 'Local-First' architecture. All detection and anonymization happens directly on your device. Your original, sensitive data never leaves your local environment—only the 'cloaked' version is sent to the AI provider.",
      icon: Lock
    },
    {
      question: "Is DataCloak AI compliant with GDPR and Swiss FADP?",
      answer: "Yes. By ensuring that Personally Identifiable Information (PII) is removed before it reaches any US-based AI cloud, you maintain full compliance. It's the technical safeguard needed for professionals in regulated industries (Law, Finance, Consulting).",
      icon: ShieldCheck
    },
    {
      question: "Can I connect my own databases and APIs?",
      answer: "Absolutely. Beyond simple text input, DataCloak AI is designed to integrate with your data ecosystem (SQL, CSV, JSON APIs). It acts as a secure proxy, cloaking data streams in real-time before they are processed by LLMs.",
      icon: Globe
    },
    {
      question: "What exactly is included in the Early Adopter Lifetime Deal?",
      answer: "The €39 Lifetime Deal gives you permanent access to the core anonymization engine. No monthly subscriptions, no hidden fees. Plus, as an early adopter, you get priority access to beta features and a direct line to our roadmap.",
      icon: HelpCircle
    },
  ]

  const handleToggle = (index: number) => {
    if (openIndex !== index) trackFAQOpen(faqs[index].question)
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 relative overflow-hidden bg-black/20">
      <div className="mx-auto max-w-4xl relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Common <span className="text-accent">Questions</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Everything you need to know about the future of secure AI workflows.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                ? "border-accent/40 bg-white/[0.05] shadow-[0_0_30px_-12px_rgba(var(--accent-rgb),0.3)]" 
                : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${openIndex === index ? "bg-accent text-black" : "bg-white/5 text-accent group-hover:bg-accent/20"}`}>
                    <faq.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white/30 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 ml-14">
                      <p className="text-white/60 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support Nudge */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/30">
            Have a more technical question? <a href="mailto:business.promptin@gmail.com" className="text-accent hover:underline decoration-accent/30 underline-offset-4 font-medium transition-all">Reach out to our engineering team.</a>
          </p>
        </div>
      </div>
    </section>
  )
}
