'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Star, Calendar, BookOpen, Heart, Clock } from 'lucide-react'

export default function BookSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  // Mock book data
  const books = [
    {
      id: 1,
      title: 'Dom Casmurro',
      author: 'Machado de Assis',
      category: 'Literatura',
      isbn: '978-85-254-1234-5',
      year: 1899,
      pages: 256,
      available: true,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'Uma obra-prima da literatura brasileira que explora temas de ciúme e traição.',
      reservations: 3,
    },
    {
      id: 2,
      title: 'Algoritmos e Estruturas de Dados',
      author: 'Thomas H. Cormen',
      category: 'Tecnologia',
      isbn: '978-85-352-8556-6',
      year: 2012,
      pages: 944,
      available: true,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop',
      description: 'Referência essencial para estudantes de ciência da computação.',
      reservations: 8,
    },
    {
      id: 3,
      title: 'O Pequeno Príncipe',
      author: 'Antoine de Saint-Exupéry',
      category: 'Infantil',
      isbn: '978-85-359-0277-5',
      year: 1943,
      pages: 96,
      available: false,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      description: 'Uma história tocante sobre amizade, amor e a natureza humana.',
      reservations: 12,
      dueDate: '2024-11-15',
    },
    {
      id: 4,
      title: 'História do Brasil',
      author: 'Boris Fausto',
      category: 'História',
      isbn: '978-85-314-0234-1',
      year: 2019,
      pages: 688,
      available: true,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'Uma análise completa da formação histórica do Brasil.',
      reservations: 2,
    },
    {
      id: 5,
      title: 'Física Quântica',
      author: 'David J. Griffiths',
      category: 'Ciências',
      isbn: '978-85-863-7891-2',
      year: 2018,
      pages: 512,
      available: true,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop',
      description: 'Introdução abrangente aos princípios da mecânica quântica.',
      reservations: 5,
    },
    {
      id: 6,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      category: 'Literatura',
      isbn: '978-85-254-9876-3',
      year: 1813,
      pages: 432,
      available: false,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      description: 'Romance clássico que retrata a sociedade inglesa do século XIX.',
      reservations: 7,
      dueDate: '2024-11-20',
    },
  ]

  const categories = [
    { id: 'all', name: 'Todas as Categorias', count: books.length },
    { id: 'Literatura', name: 'Literatura', count: books.filter(b => b.category === 'Literatura').length },
    { id: 'Tecnologia', name: 'Tecnologia', count: books.filter(b => b.category === 'Tecnologia').length },
    { id: 'Ciências', name: 'Ciências', count: books.filter(b => b.category === 'Ciências').length },
    { id: 'História', name: 'História', count: books.filter(b => b.category === 'História').length },
    { id: 'Infantil', name: 'Infantil', count: books.filter(b => b.category === 'Infantil').length },
  ]

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.isbn.includes(searchQuery)
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Catálogo de Livros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore nossa coleção de mais de 5.000 livros em diversas categorias. 
            Pesquise, reserve e acompanhe seus empréstimos.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Pesquise por título, autor ou ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-16 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                <Filter className={`h-5 w-5 transition-colors duration-200 ${showFilters ? 'text-primary-600' : 'text-gray-400'}`} />
              </motion.button>
            </div>

            {/* Categories Filter */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Categorias</h3>
                    <div className="flex flex-wrap gap-3">
                      {categories.map((category) => (
                        <motion.button
                          key={category.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                            selectedCategory === category.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {category.name} ({category.count})
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Books Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="book-card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                    >
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
                    </motion.button>
                  </div>
                  {!book.available && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                        Emprestado
                      </span>
                    </div>
                  )}
                  {book.available && book.reservations > 5 && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-primary-600 font-medium">{book.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {book.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3">por {book.author}</p>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {book.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(book.rating)}
                      <span className="text-sm text-gray-600 ml-2">{book.rating}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {book.pages} páginas
                    </div>
                  </div>
                  
                  {book.available ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Reservar Livro</span>
                    </motion.button>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Disponível em:</span>
                        </span>
                        <span className="font-medium">{book.dueDate}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center space-x-2 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                      >
                        <Calendar className="h-4 w-4" />
                        <span>Entrar na Fila ({book.reservations})</span>
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBooks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum livro encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar sua pesquisa ou filtros para encontrar o que procura.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}