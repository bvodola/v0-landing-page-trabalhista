import { handleWhatsappConversionClick } from "@/lib/whatsappConversion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contato
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
            Entre em Contato
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Estamos prontos para ouvir você. Escolha o canal mais conveniente e fale conosco hoje mesmo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 justify-center lg:max-w-2xl mx-auto">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 hover:shadow-lg"
            onClick={e => handleWhatsappConversionClick(e, "https://wa.me/5511913307306")}
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366]/20">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-base text-card-foreground">WhatsApp</h3>
            <p className="mt-1 text-sm text-muted-foreground">(11) 91330-7306</p>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=R.+Dr.+César,+1161,+Santana,+São+Paulo,+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 hover:shadow-lg"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-base text-card-foreground">Endereço</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              R. Dr. César, 1161 — Santana
              <br />
              Double Office — São Paulo/SP
            </p>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Atendimento: Seg a Sex, das 8h às 18h | Sábados, das 9h às 13h</span>
        </div>
      </div>
    </section>
  )
}
