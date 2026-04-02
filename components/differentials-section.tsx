import { Award, Users, MapPin, Headphones, ShieldCheck } from "lucide-react"

const differentials = [
  {
    icon: Award,
    title: "Foco em Rescisão e Verbas",
    description:
      "Especialização em casos de demissão, cálculo de verbas rescisórias, horas extras e direitos não pagos. É o que fazemos de melhor.",
  },
  {
    icon: Users,
    title: "Você Fala com Advogado",
    description:
      "Nada de atendentes ou robôs. Desde o primeiro contato, você conversa diretamente com um advogado que entende do seu caso.",
  },
  {
    icon: MapPin,
    title: "Atendimento 100% Digital",
    description:
      "Resolvemos seu caso por WhatsApp e videochamada, sem você precisar sair de casa. Atendemos clientes de todo o Brasil.",
  }
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Por que nos escolher
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Combinamos experiência, dedicação e tecnologia para oferecer a melhor defesa dos seus direitos.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <div key={item.title} className={`flex gap-4 ${index === 4 ? "lg:col-start-2" : ""}`}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
