"use client"

import Image from "next/image"
import { Shield, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { handleWhatsappConversionClick } from "@/lib/whatsappConversion"

export function HeroSection() {
  return (
    <section id="formulario" className="relative overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-lawyer.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: headline */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground/90">
            <Shield className="h-4 w-4" />
            Mais de 15 anos defendendo trabalhadores
          </div>

          <h1 className="font-serif text-4xl font-medium leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Seus Direitos Trabalhistas Merecem{" "}
            <span className="text-accent">Defesa Especializada</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-primary-foreground/80">
            Foi demitido injustamente? Tem horas extras sem pagamento? Sofreu assédio no trabalho?
            Receba uma avaliação gratuita do seu caso por advogados especializados.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              // href removido para evitar race condition
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a] cursor-pointer"
              onClick={e => handleWhatsappConversionClick(e, "https://wa.me/5511913307306?text=Olá, gostaria de uma avaliação gratuita do meu caso trabalhista.")}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground/80 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
            >
              Conheça nossos serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap gap-6 border-t border-primary-foreground/10 pt-8">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <span className="font-serif text-lg font-bold text-accent">+</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary-foreground">2.500+</p>
                <p className="text-xs text-primary-foreground/60">Casos Resolvidos</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <span className="font-serif text-lg font-bold text-accent">%</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary-foreground">97%</p>
                <p className="text-xs text-primary-foreground/60">Clientes Satisfeitos</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <span className="font-serif text-lg font-bold text-accent">15</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary-foreground">15+ Anos</p>
                <p className="text-xs text-primary-foreground/60">De Experiência</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="flex items-start justify-center lg:justify-end">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
