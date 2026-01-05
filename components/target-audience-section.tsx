import { Code, Briefcase, Users, Zap } from "lucide-react"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: Code,
      label: "Developers & Engineers",
      description: "Use AI daily while protecting code and API keys from exposure",
    },
    {
      icon: Briefcase,
      label: "Consultants & Freelancers",
      description: "Maintain client confidentiality while leveraging ChatGPT and Claude",
    },
    {
      icon: Users,
      label: "Agencies & Teams",
      description: "Scale AI usage without risking sensitive client data",
    },
    {
      icon: Zap,
      label: "Privacy-Conscious Professionals",
      description: "Ensure GDPR compliance in AI workflows automatically",
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Who Should Use Privacy-First AI Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you care about privacy, compliance, and protecting sensitive data, DataCloak AI is built for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((audience) => {
              const Icon = audience.icon
              return (
                <div
                  key={audience.label}
                  className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{audience.label}</h3>
                    <p className="text-sm text-muted-foreground">{audience.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
