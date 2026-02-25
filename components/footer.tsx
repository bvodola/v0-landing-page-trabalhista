import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and about */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Assunção Advogados"
              width={280}
              height={84}
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              Escritório especializado em Direito Trabalhista, atuando com ética, dedicação e foco nos direitos do trabalhador em todo o Brasil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Links Rápidos</h4>
            <nav className="mt-3 flex flex-col gap-2">
              <a href="#servicos" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">Serviços</a>
              <a href="#diferenciais" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">Diferenciais</a>
              <a href="#processo" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">Como Funciona</a>
              <a href="#depoimentos" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">Depoimentos</a>
              <a href="#faq" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">Perguntas Frequentes</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Informações Legais</h4>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              OAB/SP 356.276
              <br />
              Este site não constitui oferta de serviço nem garante resultados. Cada caso é avaliado individualmente.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          <p>
            {'© 2026 Assunção Advogados. Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
