import { Award, Users, MapPin, Headphones, ShieldCheck } from "lucide-react"

const differentials = [
  {
    icon: Award,
    title: "15+ Anos de Experiência",
    description:
      "Mais de uma década e meia atuando exclusivamente em causas trabalhistas, com profundo conhecimento da legislação e dos tribunais.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description:
      "Entendemos que cada caso é uma história de vida. Ouvimos com atenção e agimos com dedicação total ao seu caso.",
  },
  {
    icon: MapPin,
    title: "Atendimento em Todo Brasil",
    description:
      "Atendemos clientes em todas as regiões do país, presencialmente ou de forma 100% digital, com a mesma qualidade.",
  },
  {
    icon: Headphones,
    title: "Suporte Ágil e Transparente",
    description:
      "Comunicação clara em cada etapa do processo. Você sempre sabe o que está acontecendo com o seu caso.",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso com Resultados",
    description:
      "Atuamos com máxima dedicação para obter os melhores resultados possíveis, com ética e transparência em todas as etapas.",
  },
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
