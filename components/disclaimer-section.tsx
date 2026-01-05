import { AlertCircle } from "lucide-react"

export function DisclaimerSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
      <div className="mx-auto max-w-4xl">
        <div className="p-8 rounded-lg border border-border bg-background space-y-4">
          <div className="flex gap-3 items-start">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" aria-label="Important notice" />
            <div className="space-y-3 flex-1">
              <h3 className="font-semibold text-lg">Important Notice</h3>
              <p className="text-muted-foreground">
                DataCloak AI is currently under development. By purchasing Early Access, you are supporting the
                development and securing lifetime access to the product once released. Learn more in our{" "}
                <a href="/privacy-policy" className="text-accent hover:text-accent/80 transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• The product is not yet publicly available for AI data anonymization</li>
                <li>• The estimated first release date will be announced via email to early access members</li>
                <li>• You may request a full refund at any time before the first public release</li>
                <li>• All early access purchases are final after 30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
