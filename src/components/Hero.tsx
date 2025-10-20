'use client'

import { motion } from 'framer-motion'
import { Search, BookOpen, Calendar, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center library-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-6 bg-white/10 rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight text-shadow"
              >
                Biblioteca
                <span className="block text-amber-300">Fitzgerald</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl lg:text-2xl text-blue-100 max-w-lg leading-relaxed"
              >
                Descubra um mundo de conhecimento. Pesquise, reserve e gerencie seus empréstimos de forma simples e moderna.
              </motion.p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">5,000+</div>
                <div className="text-blue-100 text-sm">Livros disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">1,200+</div>
                <div className="text-blue-100 text-sm">Alunos cadastrados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">24/7</div>
                <div className="text-blue-100 text-sm">Acesso online</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-amber-500 text-gray-900 rounded-xl font-semibold text-lg hover:bg-amber-400 transition-all duration-200 shadow-lg"
              >
                <Search className="h-5 w-5" />
                <span>Pesquisar Livros</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-white/20 text-white rounded-xl font-semibold text-lg backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                <BookOpen className="h-5 w-5" />
                <span>Meus Empréstimos</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Book Stack Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated book stack */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-48 h-64 rounded-lg shadow-2xl book-spine"
                  style={{
                    backgroundColor: `hsl(${200 + i * 30}, 70%, ${60 + i * 5}%)`,
                    transform: `translateY(${-i * 15}px) translateX(${i * 5}px) rotateZ(${i * 2}deg)`,
                    zIndex: 5 - i,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [i * 2, i * 2 + 1, i * 2],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <div className="p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="w-full h-2 bg-white/30 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-white/20 rounded mb-4"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-1 bg-white/20 rounded"></div>
                      <div className="w-5/6 h-1 bg-white/20 rounded"></div>
                      <div className="w-4/5 h-1 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-amber-300 rounded-full"
                  style={{
                    left: `${Math.random() * 300}px`,
                    top: `${Math.random() * 400}px`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}