import './globals.css'

export const metadata = {
  title: 'Biblioteca Fitzgerald | SENAI',
  description: 'Sistema de gestão de biblioteca do SENAI - Pesquise, reserve e gerencie empréstimos de livros',
  keywords: 'biblioteca, SENAI, livros, empréstimos, reservas, educação',
  authors: [{ name: 'Fitzgerald Library Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {children}
      </body>
    </html>
  )
}