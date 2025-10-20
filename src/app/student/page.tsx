'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, BookOpen, Calendar, Clock, Bell, User, Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function StudentDashboard() {
  const [activeLoans, setActiveLoans] = useState([
    {
      id: 1,
      title: 'Algoritmos e Estruturas de Dados',
      author: 'Thomas H. Cormen',
      dueDate: '2024-11-25',
      daysLeft: 5,
      canRenew: true,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=280&fit=crop',
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      dueDate: '2024-11-30',
      daysLeft: 10,
      canRenew: false,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=280&fit=crop',
    },
  ])

  const [reservations, setReservations] = useState([
    {
      id: 3,
      title: 'Design Patterns',
      author: 'Gang of Four',
      position: 2,
      estimatedDate: '2024-12-05',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=280&fit=crop',
    },
  ])

  const [readingHistory, setReadingHistory] = useState([
    {
      id: 4,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      completedDate: '2024-10-15',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=280&fit=crop',
    },
    {
      id: 5,
      title: 'The Pragmatic Programmer',
      author: 'David Thomas',
      completedDate: '2024-09-20',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=280&fit=crop',
    },
  ])

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Voltar ao Início</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </motion.button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JS
                </div>
                <div>
                  <p className="font-semibold text-gray-800">João Silva</p>
                  <p className="text-sm text-gray-600">Aluno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
            Bem-vindo, João! 📚
          </h1>
          <p className="text-gray-600">
            Gerencie seus empréstimos, renovações e descobra novos livros.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Loans */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <BookOpen className="h-6 w-6 text-primary-600 mr-2" />
                  Empréstimos Ativos ({activeLoans.length})
                </h2>
              </div>
              
              <div className="space-y-4">
                {activeLoans.map((loan) => (
                  <motion.div
                    key={loan.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-primary-200 transition-all duration-200"
                  >
                    <img
                      src={loan.image}
                      alt={loan.title}
                      className="w-16 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{loan.title}</h3>
                      <p className="text-gray-600">{loan.author}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          loan.daysLeft <= 3 
                            ? 'bg-red-100 text-red-600' 
                            : loan.daysLeft <= 7 
                              ? 'bg-yellow-100 text-yellow-600' 
                              : 'bg-green-100 text-green-600'
                        }`}>
                          {loan.daysLeft} dias restantes
                        </span>
                        <span className="text-sm text-gray-500">
                          Vence em {loan.dueDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      {loan.canRenew ? (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                        >
                          Renovar
                        </motion.button>
                      ) : (
                        <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm text-center">
                          Não renovável
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Reservations */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Calendar className="h-6 w-6 text-amber-600 mr-2" />
                  Reservas ({reservations.length})
                </h2>
              </div>
              
              <div className="space-y-4">
                {reservations.map((reservation) => (
                  <motion.div
                    key={reservation.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-amber-200 transition-all duration-200"
                  >
                    <img
                      src={reservation.image}
                      alt={reservation.title}
                      className="w-16 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{reservation.title}</h3>
                      <p className="text-gray-600">{reservation.author}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm px-3 py-1 bg-amber-100 text-amber-600 rounded-full">
                          {reservation.position}° na fila
                        </span>
                        <span className="text-sm text-gray-500">
                          Disponível em {reservation.estimatedDate}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                    >
                      Cancelar
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Reading History */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-2" />
                  Histórico de Leitura
                </h2>
              </div>
              
              <div className="space-y-4">
                {readingHistory.map((book) => (
                  <motion.div
                    key={book.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-green-200 transition-all duration-200"
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-16 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{book.title}</h3>
                      <p className="text-gray-600">{book.author}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-500">
                          Lido em {book.completedDate}
                        </span>
                        <div className="flex items-center">
                          {renderStars(book.rating)}
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Ler Novamente
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <Search className="h-5 w-5 text-primary-600" />
                  <span>Pesquisar Livros</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Lista de Desejos</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <User className="h-5 w-5 text-gray-600" />
                  <span>Editar Perfil</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-4">Suas Estatísticas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Livros lidos este ano:</span>
                  <span className="text-2xl font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Página favorita:</span>
                  <span className="text-lg font-semibold">Tecnologia</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tempo de leitura:</span>
                  <span className="text-lg font-semibold">45h</span>
                </div>
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recomendado para Você</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=60&h=80&fit=crop"
                    alt="Recommended Book"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-800">Refactoring</h4>
                    <p className="text-xs text-gray-600">Martin Fowler</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  Reservar
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}