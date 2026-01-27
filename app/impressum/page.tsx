// app/impressum/page.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Impressum() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
      </div>

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
              Impressum / Anbieterkennzeichnung
            </h1>
            <p className="text-lg text-white/60">
              Stand: January 27, 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-white/80">
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">Angaben gemäss Art. 3 UWG</h2>
              <p>
                <strong>Betreiber / Verantwortlich:</strong><br />
                DataCloakAI<br />
                c/o [Dein vollständiger Name oder Firmenname]<br />
                [Strasse und Hausnummer]<br />
                CH-6340 Baar / Zug<br />
                Schweiz
              </p>
              <p>
                <strong>E-Mail:</strong> business.promptin@gmail.com<br />
                <strong>Web:</strong> https://datacloakai.com
              </p>
              <p>
                UID/MWST-Nummer (falls vorhanden): [falls registriert einfügen – sonst weglassen oder „keine MwSt.-Pflicht“]
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">Redaktionell Verantwortlicher</h2>
              <p>
                [Dein Name oder „Der Betreiber“]<br />
                E-Mail: business.promptin@gmail.com
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">Haftung für Inhalte</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </section>
          </div>

          <div className="text-center pt-12 border-t border-white/10">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}