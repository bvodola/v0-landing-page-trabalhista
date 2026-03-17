import type { Metadata, Viewport } from 'next'
import { Raleway, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: 'Assunção Advogados | Seus Direitos, Nossa Prioridade',
  description: 'Assunção Advogados - Escritório especializado em Direito Trabalhista. Atendimento humanizado para demissão injusta, horas extras, assédio no trabalho e mais. Consulta gratuita.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${raleway.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
