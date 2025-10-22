'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Users, Calendar, BarChart3, Plus, Search, 
  Filter, Edit, Trash2, Eye, ArrowLeft, Bell, Settings,
  TrendingUp, AlertCircle, CheckCircle, Clock, FileText,
  MapPin, Star, Download, Upload, RefreshCw, LogOut,
  UserPlus, BookPlus, AlertTriangle, Target, Zap
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LibrarianDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [userSession, setUserSession] = useState<any>(null)

  useEffect(() => {
    // Check if user is logged in
    const session = localStorage.getItem('userSession')
    if (session) {
      const parsedSession = JSON.parse(session)
      if (parsedSession.type !== 'librarian') {
        router.push('/login?type=librarian')
      } else {
        setUserSession(parsedSession)
      }
    } else {
      router.push('/login?type=librarian')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('userSession')
    router.push('/')
  }
  
  const stats = [
    {
      title: 'Total de Livros',
      value: '15,847',
      change: '+47 esta semana',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: 'up'
    },
    {
      title: 'Empréstimos Ativos',
      value: '1,342',
      change: '+89 hoje',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: 'up'
    },
    {
      title: 'Usuários Registrados',
      value: '2,341',
      change: '+23 esta semana',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      trend: 'up'
    },
    {
      title: 'Devoluções Atrasadas',
      value: '47',
      change: '-8 desde ontem',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      trend: 'down'
    },
    {
      title: 'Reservas Pendentes',
      value: '156',
      change: '+12 hoje',
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      trend: 'up'
    },
    {
      title: 'Avaliação Média',
      value: '4.7',
      change: '+0.2 este mês',
      icon: Star,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      trend: 'up'
    }
  ]

  const recentLoans = [
    {
      id: 1,
      student: 'Ana Silva',
      studentId: 'EST001',
      book: 'Clean Code',
      author: 'Robert C. Martin',
      isbn: '978-0132350884',
      loanDate: '2024-11-20',
      dueDate: '2024-12-05',
      renewals: 0,
      maxRenewals: 3,
      status: 'active',
      location: 'Seção A - Prateleira 12'
    },
    {
      id: 2,
      student: 'Carlos Santos',
      studentId: 'EST002',
      book: 'Design Patterns',
      author: 'Gang of Four',
      isbn: '978-0201633612',
      loanDate: '2024-11-19',
      dueDate: '2024-12-04',
      renewals: 1,
      maxRenewals: 3,
      status: 'active',
      location: 'Seção A - Prateleira 18'
    },
    {
      id: 3,
      student: 'Maria Costa',
      studentId: 'EST003',
      book: 'JavaScript Guide',
      author: 'Mozilla Foundation',
      isbn: '978-1449325619',
      loanDate: '2024-11-15',
      dueDate: '2024-11-30',
      renewals: 2,
      maxRenewals: 3,
      status: 'overdue',
      location: 'Seção B - Prateleira 5',
      daysOverdue: 7
    },
    {
      id: 4,
      student: 'Pedro Alves',
      studentId: 'EST004',
      book: 'System Design Interview',
      author: 'Alex Xu',
      isbn: '978-1736049426',
      loanDate: '2024-11-21',
      dueDate: '2024-12-06',
      renewals: 0,
      maxRenewals: 3,
      status: 'active',
      location: 'Seção A - Prateleira 20'
    }
  ]

  const pendingReservations = [
    {
      id: 1,
      student: 'João Oliveira',
      studentId: 'EST005',
      book: 'React Handbook',
      author: 'Various Authors',
      isbn: '978-1492056058',
      reserveDate: '2024-11-18',
      position: 1,
      estimatedDate: '2024-11-28',
      queueLength: 3
    },
    {
      id: 2,
      student: 'Sofia Lima',
      studentId: 'EST006',
      book: 'Python Crash Course',
      author: 'Eric Matthes',
      isbn: '978-1593279288',
      reserveDate: '2024-11-17',
      position: 2,
      estimatedDate: '2024-12-02',
      queueLength: 5
    },
    {
      id: 3,
      student: 'Lucas Ferreira',
      studentId: 'EST007',
      book: 'Clean Architecture',
      author: 'Robert C. Martin',
      isbn: '978-0134494166',
      reserveDate: '2024-11-19',
      position: 1,
      estimatedDate: '2024-11-25',
      queueLength: 2
    }
  ]

  const booksInventory = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      isbn: '978-0132350884',
      category: 'Programação',
      totalCopies: 5,
      availableCopies: 2,
      loanedCopies: 3,
      reservations: 12,
      location: 'Seção A - Prateleira 12',
      condition: 'Bom',
      addedDate: '2023-01-15',
      lastUpdated: '2024-11-20'
    },
    {
      id: 2,
      title: 'Design Patterns',
      author: 'Gang of Four',
      isbn: '978-0201633612',
      category: 'Arquitetura de Software',
      totalCopies: 3,
      availableCopies: 0,
      loanedCopies: 3,
      reservations: 8,
      location: 'Seção A - Prateleira 18',
      condition: 'Excelente',
      addedDate: '2023-02-10',
      lastUpdated: '2024-11-19'
    },
    {
      id: 3,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      isbn: '978-0596517748',
      category: 'Linguagens de Programação',
      totalCopies: 4,
      availableCopies: 4,
      loanedCopies: 0,
      reservations: 2,
      location: 'Seção B - Prateleira 5',
      condition: 'Bom',
      addedDate: '2023-03-20',
      lastUpdated: '2024-10-15'
    }
  ]

  const recentUsers = [
    {
      id: 1,
      name: 'Ana Silva',
      email: 'ana.silva@email.com',
      studentId: 'EST001',
      course: 'Ciência da Computação',
      registrationDate: '2024-01-15',
      activeLoans: 2,
      totalLoans: 15,
      overdueBooks: 0,
      status: 'active'
    },
    {
      id: 2,
      name: 'Carlos Santos',
      email: 'carlos.santos@email.com',
      studentId: 'EST002',
      course: 'Engenharia de Software',
      registrationDate: '2024-02-20',
      activeLoans: 1,
      totalLoans: 8,
      overdueBooks: 0,
      status: 'active'
    },
    {
      id: 3,
      name: 'Maria Costa',
      email: 'maria.costa@email.com',
      studentId: 'EST003',
      course: 'Sistemas de Informação',
      registrationDate: '2023-09-10',
      activeLoans: 1,
      totalLoans: 23,
      overdueBooks: 1,
      status: 'warning'
    }
  ]

  const popularBooks = [
    { title: 'Clean Code', author: 'Robert C. Martin', loans: 45, reservations: 12, rating: 4.8 },
    { title: 'Design Patterns', author: 'Gang of Four', loans: 38, reservations: 8, rating: 4.6 },
    { title: 'JavaScript Guide', author: 'Mozilla Foundation', loans: 32, reservations: 5, rating: 4.4 },
    { title: 'Python Crash Course', author: 'Eric Matthes', loans: 29, reservations: 15, rating: 4.7 },
    { title: 'System Design Interview', author: 'Alex Xu', loans: 27, reservations: 18, rating: 4.9 }
  ]

  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Sistema de Backup',
      message: 'Backup automático agendado para hoje às 02:00',
      date: '2024-11-22',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'error',
      title: 'Livros em Atraso',
      message: '47 livros estão com devolução em atraso',
      date: '2024-11-22',
      severity: 'high'
    },
    {
      id: 3,
      type: 'info',
      title: 'Novos Usuários',
      message: '23 novos usuários registrados esta semana',
      date: '2024-11-21',
      severity: 'low'
    }
  ]

  if (!userSession) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p>Carregando...</p>
      </div>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 mr-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Início
              </Link>
              <BookOpen className="h-6 w-6 text-purple-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">Área do Bibliotecário</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/catalog" className="text-gray-700 hover:text-purple-600 transition-colors">
                Catálogo Público
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setActiveTab('alerts')}
                  className="p-2 text-gray-500 hover:text-gray-700 relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <button
                onClick={() => setActiveTab('settings')}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {userSession?.name?.charAt(0) || 'B'}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{userSession?.name || 'Bibliotecário'}</p>
                  <p className="text-xs text-gray-500">Administrador</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-red-600"
                  title="Sair"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'books', label: 'Gestão de Livros', icon: BookOpen },
              { id: 'loans', label: 'Empréstimos', icon: Calendar },
              { id: 'users', label: 'Usuários', icon: Users },
              { id: 'reports', label: 'Relatórios', icon: FileText },
              { id: 'system', label: 'Sistema', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h1 className="text-3xl font-bold mb-2">
                Bem-vindo, {userSession?.name || 'Bibliotecário'}! 🏛️
              </h1>
              <p className="text-purple-100 mb-6">
                Painel administrativo da Biblioteca. Gerencie todo o sistema de forma eficiente.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab('books')}
                  className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Livro
                </button>
                <button
                  onClick={() => setActiveTab('loans')}
                  className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Ver Empréstimos
                </button>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.trend === 'up' ? '↗' : '↘'}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm mb-1">{stat.title}</div>
                  <div className="text-xs text-gray-500">{stat.change}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Loans */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Empréstimos Recentes</h2>
                  <button
                    onClick={() => setActiveTab('loans')}
                    className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                  >
                    Ver todos
                  </button>
                </div>
                <div className="space-y-4">
                  {recentLoans.slice(0, 5).map((loan) => (
                    <div key={loan.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{loan.book}</p>
                        <p className="text-sm text-gray-600">{loan.student} • {loan.loanDate}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        loan.status === 'active' ? 'bg-green-100 text-green-800' :
                        loan.status === 'overdue' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {loan.status === 'active' ? 'Ativo' :
                         loan.status === 'overdue' ? 'Atrasado' : 'Pendente'}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* System Alerts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Alertas do Sistema</h2>
                  <button
                    onClick={() => setActiveTab('alerts')}
                    className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                  >
                    Ver todos
                  </button>
                </div>
                <div className="space-y-4">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 border border-gray-100 rounded-lg">
                      <div className={`p-1 rounded-full ${
                        alert.type === 'error' ? 'bg-red-100' :
                        alert.type === 'warning' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}>
                        {alert.type === 'error' ? <AlertTriangle className="h-4 w-4 text-red-600" /> :
                         alert.type === 'warning' ? <AlertCircle className="h-4 w-4 text-yellow-600" /> :
                         <Bell className="h-4 w-4 text-blue-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                        <p className="text-xs text-gray-500 line-clamp-2">{alert.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Popular Books */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Livros Mais Populares</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {popularBooks.map((book, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg text-center">
                    <h3 className="font-medium text-gray-900 mb-2 text-sm">{book.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Empréstimos:</span>
                        <span className="font-medium">{book.loans}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reservas:</span>
                        <span className="font-medium">{book.reservations}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Avaliação:</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">{book.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
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