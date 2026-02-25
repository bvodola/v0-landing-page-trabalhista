import { ShieldCheck, FileCheck, Scale } from "lucide-react"

export function CredibilitySection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl text-card-foreground md:text-3xl text-balance">
              Compromisso com a Ética e a Transparência
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nosso escritório segue rigorosamente as normas do Código de Ética da OAB. 
              Não prometemos resultados — prometemos dedicação, competência e respeito ao seu caso.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">Sigilo Absoluto</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Todas as informações são tratadas com sigilo profissional garantido.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">Contrato Transparente</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Honorários e condições sempre explicados antes de qualquer compromisso.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">Conforme a OAB</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Atuação em total conformidade com as normas éticas da Ordem dos Advogados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
