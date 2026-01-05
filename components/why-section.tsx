import { Lock, Cpu, Shield } from "lucide-react"

export function WhySection() {
  const reasons = [
    {
      icon: Cpu,
      title: "Built for Real-World AI Workflows",
      description: "Purpose-built for developers and professionals who need privacy-first AI tools",
    },
    {
      icon: Shield,
      title: "No Enterprise Complexity",
      description: "Simple, focused design without bloat—just AI input protection that works",
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Local client-side processing with zero data storage or logging",
    },
  ]

  return (
    <section id="why" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Why DataCloak AI</h2>
            <p className="text-lg text-muted-foreground">
              Privacy-first AI protection shouldn't require enterprise complexity. We make it simple.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="space-y-4 p-8 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              )
            })}
          </div>

          <div className="p-8 rounded-lg border border-border bg-card space-y-4">
            <h3 className="text-lg font-semibold">Technical Approach for AI Data Anonymization</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>
                  <span className="text-foreground font-medium">Client-side processing</span> - Your sensitive data
                  never leaves your device
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>
                  <span className="text-foreground font-medium">No data storage</span> - Nothing is saved on our servers
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>
                  <span className="text-foreground font-medium">No prompt logging</span> - Your AI interactions with
                  ChatGPT or Claude remain private
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>
                  <span className="text-foreground font-medium">Privacy by design</span> - Built from the ground up for
                  security and GDPR compliance
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
