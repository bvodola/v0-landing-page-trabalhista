import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ana Paula R.",
    role: "Auxiliar Administrativa",
    text: "Fui demitida grávida e achei que não tinha mais o que fazer. A equipe do escritório me acolheu, explicou meus direitos e conseguimos a reintegração ao emprego. Sou muito grata!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo M.",
    role: "Motorista de Entregas",
    text: "Trabalhei 3 anos como PJ, mas na prática era CLT. Eles provaram o vínculo e recebi todos os meus direitos. Atendimento excelente do início ao fim.",
    rating: 5,
  },
  {
    name: "Fernanda S.",
    role: "Operadora de Caixa",
    text: "Sofri assédio moral do meu supervisor por meses. O escritório tratou tudo com muito sigilo e respeito. Conseguimos uma indenização justa e pude recomeçar.",
    rating: 5,
  },
  {
    name: "Roberto L.",
    role: "Técnico de Manutenção",
    text: "Tinha horas extras acumuladas que a empresa se recusava a pagar. Com a orientação jurídica certa, recuperei mais de R$ 45 mil. Recomendo demais!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Depoimentos
          </p>
          <h2 className="mt-3 font-serif text-3xl text-primary-foreground md:text-4xl text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-primary-foreground/70 leading-relaxed">
            A confiança dos nossos clientes é nossa maior conquista. Veja relatos reais de quem já contou com nossa atuação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <Quote className="mb-3 h-8 w-8 text-accent/40" />
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                {`"${testimonial.text}"`}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-primary-foreground/50">{testimonial.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
