'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, Filter, BookOpen, Star, Calendar, User, ArrowLeft, 
  ChevronLeft, ChevronRight, Heart, ExternalLink, Clock,
  Grid, List, SortAsc, MapPin, Tag
} from 'lucide-react'
import Link from 'next/link'

// Mock data for books
const mockBooks = [
  {
    id: 1,
    title: 'Algoritmos e Estruturas de Dados',
    author: 'Thomas H. Cormen',
    isbn: '978-0262033848',
    category: 'Computação',
    year: 2009,
    pages: 1312,
    rating: 4.8,
    reviews: 234,
    available: true,
    copies: 3,
    location: 'Seção A - Prateleira 15',
    description: 'Este livro apresenta uma abordagem abrangente aos algoritmos e estruturas de dados fundamentais da ciência da computação.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop',
    tags: ['algoritmos', 'programação', 'ciência da computação']
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    isbn: '978-0132350884',
    category: 'Programação',
    year: 2008,
    pages: 464,
    rating: 4.7,
    reviews: 189,
    available: false,
    copies: 0,
    location: 'Seção A - Prateleira 12',
    description: 'Um manual de artesanato de software ágil que ensina como escrever código limpo e mantível.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    tags: ['clean code', 'programação', 'desenvolvimento']
  },
  {
    id: 3,
    title: 'Design Patterns',
    author: 'Gang of Four',
    isbn: '978-0201633612',
    category: 'Arquitetura de Software',
    year: 1994,
    pages: 395,
    rating: 4.6,
    reviews: 156,
    available: true,
    copies: 2,
    location: 'Seção A - Prateleira 18',
    description: 'Elementos de software orientado a objetos reutilizável. Um guia essencial sobre padrões de design.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    tags: ['design patterns', 'oop', 'arquitetura']
  },
  {
    id: 4,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    isbn: '978-0596517748',
    category: 'Linguagens de Programação',
    year: 2008,
    pages: 176,
    rating: 4.5,
    reviews: 98,
    available: true,
    copies: 4,
    location: 'Seção B - Prateleira 5',
    description: 'Descubra as partes elegantes e expressivas do JavaScript que são frequentemente ocultadas por suas características problemáticas.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
    tags: ['javascript', 'web development', 'programação']
  },
  {
    id: 5,
    title: 'Introduction to Machine Learning',
    author: 'Alpaydin Ethem',
    isbn: '978-0262012430',
    category: 'Inteligência Artificial',
    year: 2020,
    pages: 712,
    rating: 4.9,
    reviews: 167,
    available: true,
    copies: 1,
    location: 'Seção C - Prateleira 8',
    description: 'Uma introdução abrangente ao aprendizado de máquina que cobre tanto os aspectos teóricos quanto práticos.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=400&fit=crop',
    tags: ['machine learning', 'ia', 'data science']
  },
  {
    id: 6,
    title: 'System Design Interview',
    author: 'Alex Xu',
    isbn: '978-1736049426',
    category: 'Arquitetura de Sistemas',
    year: 2021,
    pages: 322,
    rating: 4.8,
    reviews: 203,
    available: true,
    copies: 2,
    location: 'Seção A - Prateleira 20',
    description: 'Um guia insider para acing entrevistas de design de sistema com casos reais da indústria.',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=400&fit=crop',
    tags: ['system design', 'interview', 'arquitetura']
  }
]

const categories = [
  'Todas as Categorias',
  'Computação',
  'Programação',
  'Arquitetura de Software',
  'Linguagens de Programação',
  'Inteligência Artificial',
  'Arquitetura de Sistemas'
]

export default function CatalogPage() {
  const [books, setBooks] = useState(mockBooks)
  const [filteredBooks, setFilteredBooks] = useState(mockBooks)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('title')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBook, setSelectedBook] = useState<typeof mockBooks[0] | null>(null)
  const itemsPerPage = 6

  // Filter and search logic
  useEffect(() => {
    let filtered = books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'Todas as Categorias' || 
                             book.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort books
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'author':
          return a.author.localeCompare(b.author)
        case 'year':
          return b.year - a.year
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

    setFilteredBooks(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, sortBy, books])

  // Pagination
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage)

  const handleReserve = (bookId: number) => {
    // Mock reservation logic
    alert(`Reserva solicitada para o livro! Você será notificado quando estiver disponível.`)
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
                Voltar
              </Link>
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">Catálogo de Livros</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                {viewMode === 'grid' ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar por título, autor ou palavras-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="title">Ordenar por Título</option>
              <option value="author">Ordenar por Autor</option>
              <option value="year">Ordenar por Ano</option>
              <option value="rating">Ordenar por Avaliação</option>
            </select>

            <div className="text-sm text-gray-600">
              {filteredBooks.length} livro(s) encontrado(s)
            </div>
          </div>
        </div>

        {/* Books Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentBooks.map((book) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      book.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {book.available ? 'Disponível' : 'Indisponível'}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {book.rating} ({book.reviews} avaliações)
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {book.year} • {book.pages} páginas
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Ver Detalhes
                    </button>
                    {book.available ? (
                      <button
                        onClick={() => handleReserve(book.id)}
                        className="bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                      >
                        Reservar
                      </button>
                    ) : (
                      <button
                        onClick={() => handleReserve(book.id)}
                        className="bg-yellow-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors"
                      >
                        Fila
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {currentBooks.map((book) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full md:w-32 h-40 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {book.title}
                        </h3>
                        <p className="text-gray-600 mb-2">por {book.author}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        book.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {book.available ? 'Disponível' : 'Indisponível'}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-3 line-clamp-2">{book.description}</p>

                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        {book.rating} ({book.reviews})
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {book.year}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {book.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {book.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedBook(book)}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Ver Detalhes
                      </button>
                      {book.available ? (
                        <button
                          onClick={() => handleReserve(book.id)}
                          className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          Reservar Agora
                        </button>
                      ) : (
                        <button
                          onClick={() => handleReserve(book.id)}
                          className="bg-yellow-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors"
                        >
                          Entrar na Fila
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Anterior
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próxima
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Detalhes do Livro</h2>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {selectedBook.title}
                  </h3>
                  <p className="text-gray-600 mb-4">por {selectedBook.author}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-500">ISBN:</span>
                      <span className="text-gray-900">{selectedBook.isbn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Categoria:</span>
                      <span className="text-gray-900">{selectedBook.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Ano:</span>
                      <span className="text-gray-900">{selectedBook.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Páginas:</span>
                      <span className="text-gray-900">{selectedBook.pages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Localização:</span>
                      <span className="text-gray-900">{selectedBook.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cópias:</span>
                      <span className="text-gray-900">{selectedBook.copies} disponível(is)</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Descrição</h4>
                    <p className="text-gray-700">{selectedBook.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedBook.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {selectedBook.available ? (
                      <button
                        onClick={() => {
                          handleReserve(selectedBook.id)
                          setSelectedBook(null)
                        }}
                        className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Reservar Livro
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleReserve(selectedBook.id)
                          setSelectedBook(null)
                        }}
                        className="flex-1 bg-yellow-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                      >
                        Entrar na Fila de Reserva
                      </button>
                    )}
                    <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}