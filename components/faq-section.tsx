"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { trackFAQOpen } from "@/lib/analytics"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is AI data anonymization?",
      answer:
        "AI data anonymization automatically removes or obfuscates sensitive information like names, file paths, IDs, and confidential data before sending inputs to AI models. This privacy-first approach protects your data when using ChatGPT, Claude, or other AI tools while maintaining enough context for useful AI responses.",
    },
    {
      question: "How does DataCloak AI ensure GDPR compliance?",
      answer:
        "DataCloak AI automatically anonymizes sensitive data according to GDPR requirements. By removing personally identifiable information (PII) before any data transmission to external AI services, we help you maintain GDPR compliance in your AI workflows without manual effort.",
    },
    {
      question: "Who should use privacy-first AI tools like DataCloak?",
      answer:
        "Developers, freelancers, consultants, and professionals who work with sensitive client data should use privacy-first AI tools. If you're concerned about data leaks, GDPR compliance, or maintaining client confidentiality while using AI, DataCloak AI is built for you.",
    },
    {
      question: "Can I anonymize sensitive data for ChatGPT?",
      answer:
        "Yes, DataCloak AI specializes in automatically anonymizing data before sending it to ChatGPT, Claude, and other AI models. This lets you get AI assistance on sensitive topics without risking your confidential information.",
    },
    {
      question: "What makes DataCloak AI the best AI input protection tool?",
      answer:
        "DataCloak AI combines automatic detection with zero-knowledge architecture: client-side processing means your data never leaves your device, there's no data storage on servers, and no prompt logging. Plus, it requires zero manual work—just type naturally and we handle the anonymization.",
    },
  ]

  const handleToggle = (index: number) => {
    if (openIndex !== index) {
      trackFAQOpen(faqs[index].question)
    }
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions about AI Data Anonymization</h2>
            <p className="text-lg text-muted-foreground">
              Learn more about AI data anonymization and privacy-first AI tools.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg bg-card hover:border-accent/50 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-background/50 transition-colors text-left"
                  aria-expanded={openIndex === index}
                  aria-label={`Toggle FAQ: ${faq.question}`}
                >
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    aria-label={openIndex === index ? "Collapse answer" : "Expand answer"}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-border bg-background/50">
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
