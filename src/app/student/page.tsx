'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, BookOpen, Calendar, Clock, Bell, User, Heart, ArrowLeft,
  RefreshCw, Star, MapPin, AlertCircle, CheckCircle, Award,
  Settings, LogOut, Plus, Filter, Bookmark, TrendingUp,
  Download, Share, MessageCircle, Eye
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function StudentDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [userSession, setUserSession] = useState<any>(null)

  useEffect(() => {
    // Check if user is logged in
    const session = localStorage.getItem('userSession')
    if (session) {
      setUserSession(JSON.parse(session))
    } else {
      router.push('/login?type=student')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('userSession')
    router.push('/')
  }

  const [activeLoans, setActiveLoans] = useState([
    {
      id: 1,
      title: 'Algoritmos e Estruturas de Dados',
      author: 'Thomas H. Cormen',
      dueDate: '2024-11-25',
      daysLeft: 5,
      canRenew: true,
      renewCount: 1,
      maxRenewals: 3,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=280&fit=crop',
      location: 'Seção A - Prateleira 15',
      category: 'Computação'
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      dueDate: '2024-11-30',
      daysLeft: 10,
      canRenew: false,
      renewCount: 3,
      maxRenewals: 3,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=280&fit=crop',
      location: 'Seção A - Prateleira 12',
      category: 'Programação'
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
      queueLength: 5,
      requestDate: '2024-10-20'
    },
    {
      id: 4,
      title: 'System Design Interview',
      author: 'Alex Xu',
      position: 1,
      estimatedDate: '2024-11-28',
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200&h=280&fit=crop',
      queueLength: 3,
      requestDate: '2024-10-18'
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
      category: 'Linguagens de Programação',
      loanDuration: 14,
      review: 'Excelente livro para entender os fundamentos do JavaScript!'
    },
    {
      id: 5,
      title: 'The Pragmatic Programmer',
      author: 'David Thomas',
      completedDate: '2024-09-20',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=280&fit=crop',
      category: 'Desenvolvimento',
      loanDuration: 21,
      review: 'Ótimas dicas para se tornar um programador mais eficiente.'
    },
    {
      id: 6,
      title: 'Introduction to Machine Learning',
      author: 'Alpaydin Ethem',
      completedDate: '2024-08-30',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=280&fit=crop',
      category: 'Inteligência Artificial',
      loanDuration: 28,
      review: 'Introdução completa e didática ao ML.'
    }
  ])

  const [favorites, setFavorites] = useState([
    {
      id: 7,
      title: 'Clean Architecture',
      author: 'Robert C. Martin',
      category: 'Arquitetura de Software',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=280&fit=crop',
      available: true,
      addedDate: '2024-10-10'
    },
    {
      id: 8,
      title: 'Microservices Patterns',
      author: 'Chris Richardson',
      category: 'Arquitetura de Sistemas',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=280&fit=crop',
      available: false,
      addedDate: '2024-09-25'
    }
  ])

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'Prazo de Devolução Próximo',
      message: 'O livro "Algoritmos e Estruturas de Dados" deve ser devolvido em 5 dias.',
      date: '2024-10-22',
      read: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Reserva Disponível',
      message: 'O livro "System Design Interview" está disponível para retirada.',
      date: '2024-10-21',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'Nova Funcionalidade',
      message: 'Agora você pode avaliar e comentar sobre os livros que leu!',
      date: '2024-10-20',
      read: true
    }
  ])

  const stats = {
    totalBooksRead: readingHistory.length,
    averageRating: readingHistory.reduce((acc, book) => acc + book.rating, 0) / readingHistory.length,
    currentLoans: activeLoans.length,
    totalReservations: reservations.length,
    favoriteGenre: 'Programação',
    readingStreak: 45
  }

  const handleRenewBook = (bookId: number) => {
    setActiveLoans(prev => prev.map(loan => 
      loan.id === bookId && loan.canRenew
        ? { ...loan, daysLeft: loan.daysLeft + 14, renewCount: loan.renewCount + 1, canRenew: loan.renewCount < loan.maxRenewals - 1 }
        : loan
    ))
    alert('Livro renovado com sucesso! Novo prazo: ' + new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString())
  }

  const handleCancelReservation = (reservationId: number) => {
    setReservations(prev => prev.filter(res => res.id !== reservationId))
    alert('Reserva cancelada com sucesso!')
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ))
  }

  if (!userSession) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
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
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">Área do Estudante</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/catalog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Catálogo
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setActiveTab('notifications')}
                  className="p-2 text-gray-500 hover:text-gray-700 relative"
                >
                  <Bell className="h-5 w-5" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                  )}
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {userSession?.name?.charAt(0) || 'U'}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{userSession?.name || 'Usuário'}</p>
                  <p className="text-xs text-gray-500">Estudante</p>
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
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'loans', label: 'Empréstimos', icon: BookOpen },
              { id: 'reservations', label: 'Reservas', icon: Calendar },
              { id: 'history', label: 'Histórico', icon: Clock },
              { id: 'favorites', label: 'Favoritos', icon: Heart },
              { id: 'profile', label: 'Perfil', icon: User }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h1 className="text-3xl font-bold mb-2">
                Olá, {userSession?.name || 'Estudante'}! 👋
              </h1>
              <p className="text-blue-100 mb-6">
                Bem-vindo de volta ao seu painel de controle. Aqui você pode gerenciar todos os seus empréstimos e descobrir novos livros.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/catalog"
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explorar Catálogo
                </Link>
                <button
                  onClick={() => setActiveTab('loans')}
                  className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Ver Empréstimos
                </button>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Livros Lidos', value: stats.totalBooksRead, icon: BookOpen, color: 'text-blue-600' },
                { label: 'Empréstimos Ativos', value: stats.currentLoans, icon: Calendar, color: 'text-green-600' },
                { label: 'Reservas Pendentes', value: stats.totalReservations, icon: Clock, color: 'text-yellow-600' },
                { label: 'Dias de Leitura', value: stats.readingStreak, icon: Award, color: 'text-purple-600' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Active Loans Preview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Empréstimos Ativos</h2>
                  <button
                    onClick={() => setActiveTab('loans')}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Ver todos
                  </button>
                </div>
                <div className="space-y-3">
                  {activeLoans.slice(0, 3).map((loan) => (
                    <div key={loan.id} className="flex items-center space-x-3 p-3 border border-gray-100 rounded-lg">
                      <img src={loan.image} alt={loan.title} className="w-10 h-12 object-cover rounded" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{loan.title}</p>
                        <p className="text-xs text-gray-500">{loan.author}</p>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        loan.daysLeft <= 3 ? 'bg-red-100 text-red-600' : 
                        loan.daysLeft <= 7 ? 'bg-yellow-100 text-yellow-600' : 
                        'bg-green-100 text-green-600'
                      }`}>
                        {loan.daysLeft}d
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Notifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Notificações Recentes</h2>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Ver todas
                  </button>
                </div>
                <div className="space-y-3">
                  {notifications.slice(0, 3).map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3 p-3 border border-gray-100 rounded-lg">
                      <div className={`p-1 rounded-full ${
                        notification.type === 'warning' ? 'bg-yellow-100' :
                        notification.type === 'success' ? 'bg-green-100' :
                        'bg-blue-100'
                      }`}>
                        {notification.type === 'warning' ? <AlertCircle className="h-4 w-4 text-yellow-600" /> :
                         notification.type === 'success' ? <CheckCircle className="h-4 w-4 text-green-600" /> :
                         <Bell className="h-4 w-4 text-blue-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                        <p className="text-xs text-gray-500 line-clamp-2">{notification.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Loans Tab */}
        {activeTab === 'loans' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Meus Empréstimos</h1>
              <Link
                href="/catalog"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Buscar Livros
              </Link>
            </div>

            <div className="grid gap-6">
              {activeLoans.map((loan) => (
                <motion.div
                  key={loan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={loan.image}
                      alt={loan.title}
                      className="w-full md:w-32 h-40 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{loan.title}</h3>
                          <p className="text-gray-600 mb-2">por {loan.author}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {loan.location}
                            </span>
                            <span>{loan.category}</span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          loan.daysLeft <= 3 ? 'bg-red-100 text-red-600' :
                          loan.daysLeft <= 7 ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {loan.daysLeft} dias restantes
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Data de Vencimento</p>
                          <p className="font-medium">{loan.dueDate}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Renovações</p>
                          <p className="font-medium">{loan.renewCount}/{loan.maxRenewals}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Status</p>
                          <p className="font-medium">
                            {loan.canRenew ? 'Renovável' : 'Não renovável'}
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        {loan.canRenew ? (
                          <button
                            onClick={() => handleRenewBook(loan.id)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                          >
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Renovar Empréstimo
                          </button>
                        ) : (
                          <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg">
                            Limite de renovações atingido
                          </div>
                        )}
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Reservations Tab */}
        {activeTab === 'reservations' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Minhas Reservas</h1>
              <Link
                href="/catalog"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Fazer Nova Reserva
              </Link>
            </div>

            <div className="grid gap-6">
              {reservations.map((reservation) => (
                <motion.div
                  key={reservation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={reservation.image}
                      alt={reservation.title}
                      className="w-full md:w-32 h-40 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{reservation.title}</h3>
                          <p className="text-gray-600 mb-2">por {reservation.author}</p>
                        </div>
                        <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                          {reservation.position}° na fila
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Previsão de Disponibilidade</p>
                          <p className="font-medium">{reservation.estimatedDate}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Tamanho da Fila</p>
                          <p className="font-medium">{reservation.queueLength} pessoas</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Data da Reserva</p>
                          <p className="font-medium">{reservation.requestDate}</p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleCancelReservation(reservation.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Cancelar Reserva
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Histórico de Leitura</h1>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Todos os períodos</option>
                  <option>Último mês</option>
                  <option>Últimos 3 meses</option>
                  <option>Último ano</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Todas as categorias</option>
                  <option>Computação</option>
                  <option>Programação</option>
                  <option>Inteligência Artificial</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6">
              {readingHistory.map((book) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full md:w-32 h-40 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{book.title}</h3>
                          <p className="text-gray-600 mb-2">por {book.author}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{book.category}</span>
                            <span>Finalizado em {book.completedDate}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {renderStars(book.rating)}
                          <span className="ml-2 text-sm text-gray-600">({book.rating}/5)</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-700 text-sm italic">"{book.review}"</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4 text-sm text-gray-500">
                          <span>Empréstimo de {book.loanDuration} dias</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="border border-gray-300 text-gray-700 px-3 py-1 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                            Ver Novamente
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-3 py-1 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                            Recomendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Meus Favoritos</h1>
              <Link
                href="/catalog"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Descobrir Livros
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((book) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
                >
                  <div className="relative mb-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                      <Heart className="h-4 w-4 text-red-500 fill-current" />
                    </button>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <p className="text-gray-500 text-xs mb-3">{book.category}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      book.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {book.available ? 'Disponível' : 'Indisponível'}
                    </span>
                    {book.available ? (
                      <button className="bg-blue-600 text-white px-3 py-1 text-xs rounded-lg hover:bg-blue-700 transition-colors">
                        Reservar
                      </button>
                    ) : (
                      <button className="bg-yellow-600 text-white px-3 py-1 text-xs rounded-lg hover:bg-yellow-700 transition-colors">
                        Fila
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <h1 className="text-2xl font-bold text-gray-900">Meu Perfil</h1>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 shadow-md space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {userSession?.name?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{userSession?.name || 'Usuário'}</h2>
                      <p className="text-gray-600">{userSession?.email}</p>
                      <p className="text-sm text-gray-500">Membro desde 2024</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                      <input
                        type="text"
                        value={userSession?.name || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={userSession?.email || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Curso</label>
                      <input
                        type="text"
                        placeholder="Ciência da Computação"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Salvar Alterações
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas de Leitura</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Livros Lidos</span>
                      <span className="font-semibold">{stats.totalBooksRead}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Avaliação Média</span>
                      <div className="flex items-center">
                        {renderStars(Math.round(stats.averageRating))}
                        <span className="ml-2 text-sm text-gray-600">
                          {stats.averageRating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Gênero Favorito</span>
                      <span className="font-semibold">{stats.favoriteGenre}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sequência de Leitura</span>
                      <span className="font-semibold">{stats.readingStreak} dias</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurações</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Notificações por Email</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Lembrete de Devolução</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Newsletter</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Notificações</h1>
              <button
                onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Marcar todas como lidas
              </button>
            </div>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white rounded-xl p-6 shadow-md border-l-4 ${
                    notification.type === 'warning' ? 'border-yellow-500' :
                    notification.type === 'success' ? 'border-green-500' :
                    'border-blue-500'
                  } ${!notification.read ? 'ring-2 ring-blue-100' : ''}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full ${
                      notification.type === 'warning' ? 'bg-yellow-100' :
                      notification.type === 'success' ? 'bg-green-100' :
                      'bg-blue-100'
                    }`}>
                      {notification.type === 'warning' ? (
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                      ) : notification.type === 'success' ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Bell className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                          <p className="text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}