"use client"
import { handleWhatsappConversionClick } from "@/lib/whatsappConversion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto custa a consulta inicial?",
    answer:
      "A primeira avaliação do seu caso é totalmente gratuita e sem compromisso. Analisamos sua situação e orientamos sobre os próximos passos sem nenhum custo.",
  },
  {
    question: "Posso ser atendido de forma online?",
    answer:
      "Sim! Realizamos atendimento 100% digital por videochamada, WhatsApp e e-mail. Você pode contar com nosso suporte de qualquer lugar do Brasil, com a mesma qualidade do atendimento presencial.",
  },
  {
    question: "Quanto tempo demora um processo trabalhista?",
    answer:
      "O tempo varia conforme a complexidade do caso. Processos mais simples podem ser resolvidos em alguns meses, enquanto casos mais complexos podem levar de 1 a 3 anos. Buscamos sempre a via mais rápida e eficiente.",
  },
  {
    question: "Vocês cobram apenas em caso de êxito?",
    answer:
      "Trabalhamos com honorários combinados previamente, e muitos casos podem ser tratados com cobrança apenas em caso de êxito. Cada situação é avaliada individualmente para garantir a melhor condição para você.",
  },
  {
    question: "Quais documentos preciso ter para abrir uma ação?",
    answer:
      "Documentos como carteira de trabalho, contracheques, contrato de trabalho e comprovantes de horas extras são úteis. Mas não se preocupe: mesmo que não tenha todos, avaliamos seu caso e orientamos sobre como proceder.",
  },
  {
    question: "Qual o prazo para entrar com uma ação trabalhista?",
    answer:
      "Após o encerramento do contrato de trabalho, o trabalhador tem até 2 anos para ajuizar uma ação trabalhista, podendo reivindicar direitos referentes aos últimos 5 anos de trabalho. Por isso, é importante agir rapidamente.",
  },
  {
    question: "Vocês garantem que vou ganhar a causa?",
    answer:
      "Nenhum advogado ético pode garantir resultados em processos judiciais. O que garantimos é dedicação total, análise criteriosa do seu caso e atuação estratégica para buscar os melhores resultados possíveis.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Perguntas Frequentes
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
            Tire Suas Dúvidas
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Reunimos as perguntas mais comuns para que você tenha total clareza antes de entrar em contato.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
          <p className="font-serif text-xl text-card-foreground">Ainda tem dúvidas?</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Fale diretamente com nossa equipe. Estamos prontos para ajudar.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/5511913307306?text=Olá, gostaria de uma avaliação gratuita do meu caso trabalhista."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={e => handleWhatsappConversionClick(e, "https://wa.me/5511913307306?text=Olá, gostaria de uma avaliação gratuita do meu caso trabalhista.")}
            >
              Fale com um Advogado Agora
            </a>
            <a
              href="https://wa.me/5511913307306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary"
              onClick={e => handleWhatsappConversionClick(e, "https://wa.me/5511913307306")}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
