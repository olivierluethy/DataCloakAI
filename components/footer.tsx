export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">© {currentYear} DataCloak AI. All rights reserved.</p>
            <p className="text-xs text-muted-foreground/70">Privacy-first AI protection for the modern professional.</p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground flex-wrap justify-center">
            <ul className="flex gap-6 flex-wrap justify-center">
              <li>
                <a href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-foreground transition-colors">
                  Blog - AI Privacy Tips
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://gdpr.eu/"
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                  aria-label="GDPR.eu - External link to official GDPR resources"
                >
                  GDPR Resources
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
