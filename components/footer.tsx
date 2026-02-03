"use client"

import Link from "next/link";
import { Mail, ShieldCheck, Globe, ShieldAlert, CheckCircle2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/95 text-white/60">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          
          {/* 1. Brand & Description */}
          <div className="flex flex-col items-center gap-4 md:items-start md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="DataCloak Logo"
                className="h-7 w-7 object-contain brightness-110"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                DataCloak<span className="text-accent italic">AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-center md:text-left text-white/40 max-w-xs">
              The next generation of AI privacy. Shielding sensitive data while empowering LLM capabilities. 
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-accent/80 font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Built in EU / DACH
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
            <nav className="flex flex-col items-center md:items-start gap-3 text-sm">
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
              <a href="https://gdpr.eu/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                GDPR Compliance <ShieldCheck className="w-3 h-3" />
              </a>
            </nav>
          </div>

          {/* 3. Trust & Reliability (DIE VERTRAUENSSYMBOLE) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Reliability</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Beta Support: 24h Response</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <ShieldAlert className="w-4 h-4 text-accent" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80 font-medium">
                <img src="/Stripe.png" alt="Stripe" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>

          {/* 4. Contact & Support */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Get in touch</h4>
            <a
              href="mailto:business.promptin@gmail.com"
              className="group flex flex-col items-center md:items-start gap-1 text-sm hover:text-white transition-colors duration-200"
            >
              <span className="text-white/40 group-hover:text-accent transition-colors">Direct Support:</span>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="font-medium">business.promptin@gmail.com</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <div>© {currentYear} DataCloak AI. All rights reserved.</div>
          <div className="flex items-center gap-4 italic">
            <span>Powered by Privacy. Driven by AI.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
