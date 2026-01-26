// app/privacy-policy/page.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle animated grid background – same as hero */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
      </div>

      {/* Soft glow orbs – reused from hero for consistency */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -120, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -140, 0], y: [0, 140, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/6 rounded-full blur-3xl"
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
              Privacy Policy
            </h1>
            <p className="text-lg text-white/60">
              Last updated: January 21, 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-white/80">
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">1. Introduction</h2>
              <p>
                DataCloakAI ("we", "us", "our") operates the datacloakai.com website and the DataCloakAI service (the "Service").
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our Service — with strong emphasis on privacy by design.
              </p>
              <p>
                We are committed to protecting your privacy. DataCloakAI is built GDPR-compliant by design, processes data client-side
                whenever possible, and retains zero prompt or sensitive content on our servers.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">2. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">2.1 Information You Provide</h3>
                <p>
                  When you register, subscribe or contact us we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email address</li>
                  <li>Name (optional)</li>
                  <li>Payment information (handled by secure third-party processor — we do not store card details)</li>
                  <li>Any message or data you send via support/contact forms</li>
                </ul>

                <h3 className="text-xl font-medium mt-6">2.2 Automatically Collected Information</h3>
                <p>
                  When you visit the website or use the Service we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Browser type and version</li>
                  <li>IP address (anonymized where possible)</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring/exit pages</li>
                  <li>Device information</li>
                </ul>
                <p className="mt-3">
                  <strong>Important:</strong> We do <strong>not</strong> collect, log, store or process the actual prompts or content
                  you anonymize and send to third-party AI models. All sensitive anonymization happens client-side in your browser.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain and improve the Service</li>
                <li>To communicate with you (updates, support, legal notices)</li>
                <li>To process payments and prevent fraud</li>
                <li>To comply with legal obligations</li>
                <li>To protect the security and integrity of the Service</li>
              </ul>
              <p>
                We never use your personal data for training AI models or for marketing without explicit consent.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">4. Data Sharing & Disclosure</h2>
              <p>We do not sell your personal data. We may share information only:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers (payment processors, email services) under strict contracts</li>
                <li>To comply with law, court order or regulatory request</li>
                <li>In connection with a merger, acquisition or sale of assets</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">5. Data Retention & Security</h2>
              <p>
                We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law.
                Account data is kept until you delete your account (subject to some limited backup retention for legal reasons).
              </p>
              <p>
                We implement appropriate technical and organizational measures to protect your data, including encryption,
                access controls and regular security reviews. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">6. Your Privacy Rights (GDPR, CCPA, etc.)</h2>
              <p>
                Depending on your location you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct or delete your personal data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at business.promptin@gmail.com.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">7. International Transfers</h2>
              <p>
                We are based in Switzerland (adequate jurisdiction under GDPR). If data is transferred outside the EEA/Switzerland,
                we use appropriate safeguards (Standard Contractual Clauses, etc.).
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting
                the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at:
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