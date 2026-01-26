import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black py-10 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-white/60">
          {/* Left */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <span className="text-xl font-semibold tracking-tight text-white">
              DataCloak<span className="text-white/70">AI</span>
            </span>

            <span>© {currentYear} DataCloak AI. All rights reserved.</span>
          </div>

          {/* Center or right – links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://gdpr.eu/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors"
            >
              GDPR
            </a>
          </nav>

          {/* Right – email */}
          <a
            href="mailto:business.promptin@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            business.promptin@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}