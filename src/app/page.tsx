'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Search, Calendar, Shield, UserCheck, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const stats = [
    { label: 'Livros no Acervo', value: '15,847', icon: BookOpen },
    { label: 'Usuários Ativos', value: '2,341', icon: Users },
    { label: 'Empréstimos Mensais', value: '5,692', icon: TrendingUp },
    { label: 'Avaliação Média', value: '4.8', icon: Star },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Biblioteca Fitzgerald</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/catalog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Catálogo
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Sistema de Biblioteca
            <span className="text-blue-600"> Fitzgerald</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Acesse nosso acervo digital, gerencie seus empréstimos e explore o conhecimento. 
            Entre com suas credenciais para acessar todas as funcionalidades.
          </motion.p>
        </div>

        {/* Access Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <UserCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Área do Estudante</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Consulte seus empréstimos, faça reservas, renove livros e acesse seu histórico de leitura.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <Search className="h-4 w-4 text-green-500 mr-2" />
                Buscar e reservar livros
              </li>
              <li className="flex items-center text-gray-700">
                <Calendar className="h-4 w-4 text-green-500 mr-2" />
                Acompanhar prazos de devolução
              </li>
              <li className="flex items-center text-gray-700">
                <BookOpen className="h-4 w-4 text-green-500 mr-2" />
                Histórico de leituras
              </li>
            </ul>
            <Link
              href="/login?type=student"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
            >
              Acessar como Estudante
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Área do Bibliotecário</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Gerencie o acervo, usuários, empréstimos e acesse relatórios administrativos.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <BookOpen className="h-4 w-4 text-green-500 mr-2" />
                Gerenciar acervo de livros
              </li>
              <li className="flex items-center text-gray-700">
                <Users className="h-4 w-4 text-green-500 mr-2" />
                Administrar usuários
              </li>
              <li className="flex items-center text-gray-700">
                <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                Relatórios e estatísticas
              </li>
            </ul>
            <Link
              href="/login?type=librarian"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block text-center"
            >
              Acessar como Bibliotecário
            </Link>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Estatísticas da Biblioteca
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Access to Catalog */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Explore Nosso Catálogo
          </h2>
          <p className="text-gray-600 mb-6">
            Navegue por milhares de livros em diversas categorias
          </p>
          <Link
            href="/catalog"
            className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Explorar Catálogo
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">Biblioteca Fitzgerald</span>
              </div>
              <p className="text-gray-400">
                Promovendo o acesso ao conhecimento e à educação através de um acervo diversificado e serviços de qualidade.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/catalog" className="hover:text-white transition-colors">Catálogo</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contato</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Ajuda</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 contato@bibliotecafitzgerald.edu</li>
                <li>📞 (11) 1234-5678</li>
                <li>📍 Rua das Bibliotecas, 123</li>
                <li>🕒 Seg-Sex: 8h às 20h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Biblioteca Fitzgerald. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}