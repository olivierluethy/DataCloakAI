// app/terms-of-service/page.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Same subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
      </div>

      {/* Glow orbs – consistent look */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -120, 0], y: [0, 120, 0] }}
          transition={{ duration: 65, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/7 rounded-full blur-3xl"
        />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-white/60">
              Last updated: January 21, 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-white/80">
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using DataCloakAI (the "Service"), you agree to be bound by these Terms of Service ("Terms").
                If you do not agree, do not use the Service.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">2. Description of Service</h2>
              <p>
                DataCloakAI provides client-side anonymization of sensitive information in prompts before they are sent
                to third-party AI models (ChatGPT, Claude, etc.). The core anonymization logic runs in your browser —
                we do not receive, store or log your original or anonymized prompts.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">3. Eligibility</h2>
              <p>
                You must be at least 16 years old (or the age of majority in your jurisdiction) to use the Service.
                By using the Service you represent that you meet this requirement.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">4. Account & Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You must notify us immediately of any unauthorized use.</li>
                <li>We reserve the right to suspend or terminate accounts for violation of these Terms.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Attempt to reverse-engineer, decompile or extract the anonymization logic beyond what is necessary for normal use</li>
                <li>Introduce viruses, malware or harmful code</li>
                <li>Interfere with the Service or other users</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">6. Intellectual Property</h2>
              <p>
                The Service, including its design, code, anonymization patterns (excluding your input data) and branding,
                is owned by DataCloakAI or its licensors. You are granted a limited, non-exclusive, non-transferable
                license to use the Service for personal or internal business purposes.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, DataCloakAI shall not be liable for any indirect, incidental,
                special, consequential or punitive damages arising from your use of the Service.
              </p>
              <p className="mt-4">
                In no event shall our total liability exceed the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">8. Termination</h2>
              <p>
                We may terminate or suspend your access immediately, without notice, for any breach of these Terms.
                Upon termination, your right to use the Service ceases immediately.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">9. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of Switzerland, without regard to conflict of law principles.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">10. Changes to Terms</h2>
              <p>
                We may revise these Terms at any time. Continued use after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">11. Contact</h2>
              <p>
                Questions about these Terms? Reach us at:
              </p>
              <p className="font-medium">
                business.promptin@gmail.com
              </p>
            </section>
          </div>

          <div className="text-center pt-12 border-t border-white/10">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}