'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Users, Calendar, BarChart3, Plus, Search, 
  Filter, Edit, Trash2, Eye, ArrowLeft, Bell, Settings,
  TrendingUp, AlertCircle, CheckCircle, Clock
} from 'lucide-react'
import Link from 'next/link'

export default function LibrarianDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  
  const stats = [
    {
      title: 'Total de Livros',
      value: '5,247',
      change: '+12 esta semana',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Empréstimos Ativos',
      value: '892',
      change: '+45 hoje',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Usuários Ativos',
      value: '1,234',
      change: '+8 esta semana',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Devoluções Atrasadas',
      value: '23',
      change: '-5 desde ontem',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
  ]

  const recentLoans = [
    {
      id: 1,
      student: 'Ana Silva',
      book: 'Clean Code',
      author: 'Robert C. Martin',
      loanDate: '2024-11-20',
      dueDate: '2024-12-05',
      status: 'active',
    },
    {
      id: 2,
      student: 'Carlos Santos',
      book: 'Design Patterns',
      author: 'Gang of Four',
      loanDate: '2024-11-19',
      dueDate: '2024-12-04',
      status: 'active',
    },
    {
      id: 3,
      student: 'Maria Costa',
      book: 'JavaScript Guide',
      author: 'Mozilla Foundation',
      loanDate: '2024-11-15',
      dueDate: '2024-11-30',
      status: 'overdue',
    },
  ]

  const pendingReservations = [
    {
      id: 1,
      student: 'João Oliveira',
      book: 'React Handbook',
      author: 'Various Authors',
      reserveDate: '2024-11-18',
      position: 1,
    },
    {
      id: 2,
      student: 'Sofia Lima',
      book: 'Python Crash Course',
      author: 'Eric Matthes',
      reserveDate: '2024-11-17',
      position: 2,
    },
  ]

  const popularBooks = [
    { title: 'Clean Code', loans: 45, reservations: 12 },
    { title: 'Design Patterns', loans: 38, reservations: 8 },
    { title: 'JavaScript Guide', loans: 32, reservations: 15 },
    { title: 'Python Basics', loans: 28, reservations: 6 },
    { title: 'React Handbook', loans: 25, reservations: 18 },
  ]

  const tabs = [
    { id: 'overview', name: 'Visão Geral', icon: BarChart3 },
    { id: 'books', name: 'Gestão de Livros', icon: BookOpen },
    { id: 'loans', name: 'Empréstimos', icon: Calendar },
    { id: 'users', name: 'Usuários', icon: Users },
  ]

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
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Settings className="h-6 w-6" />
              </motion.button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  MF
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Maria Fernanda</p>
                  <p className="text-sm text-gray-600">Bibliotecária</p>
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
            Painel do Bibliotecário 📊
          </h1>
          <p className="text-gray-600">
            Gerencie o acervo, empréstimos e usuários da biblioteca.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{tab.name}</span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                    <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
                    <p className="text-green-600 text-xs font-medium">{stat.change}</p>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Loans */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Empréstimos Recentes</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Ver todos
                  </motion.button>
                </div>
                <div className="space-y-4">
                  {recentLoans.map((loan) => (
                    <div
                      key={loan.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-200 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{loan.student}</h4>
                        <p className="text-gray-600 text-sm">{loan.book}</p>
                        <p className="text-gray-500 text-xs">Vence: {loan.dueDate}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          loan.status === 'active' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {loan.status === 'active' ? 'Ativo' : 'Atrasado'}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-1 text-gray-400 hover:text-primary-600"
                        >
                          <Eye className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Popular Books */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Livros Populares</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Relatório completo
                  </motion.button>
                </div>
                <div className="space-y-4">
                  {popularBooks.map((book, index) => (
                    <div key={book.title} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{book.title}</h4>
                          <p className="text-gray-500 text-sm">{book.loans} empréstimos</p>
                        </div>
                      </div>
                      <span className="text-amber-600 text-sm font-medium">
                        {book.reservations} reservas
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Pending Reservations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Reservas Pendentes</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-600 text-sm font-medium">
                    {pendingReservations.length} pendentes
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Processar Todas
                  </motion.button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {pendingReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-center justify-between p-4 border border-amber-200 bg-amber-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{reservation.student}</h4>
                      <p className="text-gray-600 text-sm">{reservation.book}</p>
                      <p className="text-gray-500 text-xs">Reservado em: {reservation.reserveDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-amber-100 text-amber-600 rounded text-xs font-medium">
                        #{reservation.position} na fila
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-1 text-green-600 hover:text-green-700"
                      >
                        <CheckCircle className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Quick Actions Floating Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="fixed bottom-6 right-6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
          >
            <Plus className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}