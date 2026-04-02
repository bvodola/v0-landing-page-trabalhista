export const PAGE_CONTENT = {
  trabalhista: {
    hero: {
      badge: "Especialistas em Rescisão e Verbas Trabalhistas",
      cta: {
        text: "Foi Demitido e Acha que ",
        highlight: "Recebeu Menos do que Deveria?"
      },
      description: "Descubra em uma análise gratuita se você tem direito a verbas rescisórias, horas extras ou indenização. Atendimento sigiloso e sem compromisso.",
    },
    form: {
      description: "Descubra se você tem direito a verbas rescisórias, horas extras ou indenização. Atendimento sigiloso e sem compromisso.",
    }
  },
  fgts: {
    hero: {
      badge: "Especialistas em Cobrança de FGTS",
      cta: {
        text: "Empresa Não ",
        highlight: "Depositou FGTS?"
      },
      description: "Descubra em uma análise gratuita se você tem direito ao FGTS não depositado, multas e juros. Atendimento sigiloso e sem compromisso.",
    },
    form: {
      description: "Descubra se você tem direito ao FGTS não depositado, multas e juros. Atendimento sigiloso e sem compromisso.",
    }
  }
} as const;

export type ContentGroup = keyof typeof PAGE_CONTENT;
