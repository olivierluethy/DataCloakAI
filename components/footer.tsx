import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main content wrapper with better mobile stacking */}
        <div className="py-10 md:py-12">
          <div className="flex flex-col items-center gap-8 text-center md:text-left md:flex-row md:items-start md:justify-between">
            {/* Left section – logo + copyright */}
            <div className="flex flex-col items-center gap-3 md:items-start">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.png"
                  alt="DataCloak Logo"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-semibold tracking-tight text-white">
                  DataCloak<span className="text-yellow-400/80">AI</span>
                </span>
              </div>

              <div className="text-sm text-white/60">
                © {currentYear} DataCloak AI. All rights reserved.
              </div>
            </div>

            {/* Center – navigation links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:gap-x-8">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <a
                href="https://gdpr.eu/"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors duration-200"
              >
                GDPR
              </a>
            </nav>

            {/* Right – contact email */}
            <a
              href="mailto:business.promptin@gmail.com"
              className="flex items-center justify-center gap-2 text-sm hover:text-white transition-colors duration-200 md:justify-end"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="break-all sm:break-normal">
                business.promptin@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}