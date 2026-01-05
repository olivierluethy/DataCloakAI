import { Lock, Database, Eye } from "lucide-react"

export function PrivacyTrustSection() {
  const trustPoints = [
    {
      icon: Eye,
      title: "No User Tracking",
      description: "We don't collect analytics on how you use DataCloak AI or track your data",
    },
    {
      icon: Database,
      title: "No Data Storage",
      description: "All processing happens locally on your device. Your data never leaves your computer",
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "Built with privacy regulations in mind and designed for GDPR compliance",
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Privacy & Trust</h2>
            <p className="text-lg text-muted-foreground">Your trust is everything to us. Your data stays yours.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <div
                  key={point.title}
                  className="text-center space-y-4 p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors"
                >
                  <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">{point.title}</h3>
                  <p className="text-muted-foreground text-sm">{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
