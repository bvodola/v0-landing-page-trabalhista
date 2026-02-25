import { MessageSquare, FileSearch, Gavel, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Conte seu Caso",
    description:
      "Entre em contato pelo formulário ou WhatsApp e descreva brevemente sua situação. É rápido e sem compromisso.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Avaliação Especializada",
    description:
      "Nossos advogados analisam os detalhes do seu caso e identificam os melhores caminhos para a resolução.",
  },
  {
    number: "03",
    icon: Gavel,
    title: "Atuação Firme",
    description:
      "Com sua aprovação, iniciamos a defesa dos seus direitos com dedicação total, mantendo você informado em cada etapa.",
  },
]

export function ProcessSection() {
  return (
    <section id="processo" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Passo a passo
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
            Como Funciona Nosso Atendimento
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Simples, transparente e sem burocracia. Veja como é fácil começar a defender seus direitos.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden translate-x-1/2 md:block">
                  <ArrowRight className="h-6 w-6 text-border" />
                </div>
              )}
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <step.icon className="h-8 w-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Passo {step.number}
              </span>
              <h3 className="mt-2 font-serif text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5511913307306?text=Olá, gostaria de uma avaliação gratuita do meu caso trabalhista."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Comece Agora — É Gratuito
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
