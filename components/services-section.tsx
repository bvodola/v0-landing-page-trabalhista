import {
  Briefcase,
  Clock,
  UserX,
  AlertTriangle,
  Baby,
  HandshakeIcon,
  Scale,
  Ban,
} from "lucide-react"

const services = [
  {
    icon: UserX,
    title: "Demissão Injusta",
    description:
      "Defesa completa para demissões sem justa causa, por justa causa indevida ou demissões discriminatórias.",
  },
  {
    icon: Briefcase,
    title: "Verbas Rescisórias",
    description:
      "Cálculo e cobrança de todas as verbas devidas: FGTS, multa de 40%, aviso prévio, férias e 13º.",
  },
  {
    icon: Clock,
    title: "Horas Extras",
    description:
      "Recuperação de valores de horas extras, adicional noturno, intervalos não concedidos e banco de horas irregular.",
  },
  {
    icon: AlertTriangle,
    title: "Assédio Moral e Sexual",
    description:
      "Atuação firme em casos de assédio no ambiente de trabalho, com busca por indenização e reparação.",
  },
  {
    icon: Baby,
    title: "Estabilidade Gestante",
    description:
      "Proteção dos direitos da gestante, incluindo estabilidade no emprego e reintegração quando necessário.",
  },
  {
    icon: HandshakeIcon,
    title: "Vínculo Empregatício",
    description:
      "Reconhecimento de vínculo para trabalhadores sem registro, PJ fraudulento e outros desvios.",
  },
  {
    icon: Scale,
    title: "Danos Morais",
    description:
      "Ações por danos morais decorrentes de humilhação, discriminação ou condições degradantes de trabalho.",
  },
  {
    icon: Ban,
    title: "Desvio e Acúmulo de Função",
    description:
      "Defesa para trabalhadores que exercem funções diferentes ou adicionais sem a devida compensação.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Como posso te ajudar
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
            Áreas de Atuação em Direito Trabalhista
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nosso escritório atua nas principais demandas trabalhistas, sempre com foco na defesa dos direitos do trabalhador.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg text-card-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA mid-section */}
        <div className="mt-12 text-center">
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Fale com um Advogado Agora
          </a>
        </div>
      </div>
    </section>
  )
}
