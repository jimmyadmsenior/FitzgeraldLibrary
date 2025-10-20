'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Calendar, Trophy, TrendingUp, Clock } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    {
      icon: BookOpen,
      number: '5,247',
      label: 'Livros no Acervo',
      description: 'Coleção diversificada em constante crescimento',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Users,
      number: '1,234',
      label: 'Alunos Cadastrados',
      description: 'Comunidade ativa de leitores',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Calendar,
      number: '892',
      label: 'Empréstimos Ativos',
      description: 'Livros sendo lidos neste momento',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Trophy,
      number: '156',
      label: 'Livros Mais Populares',
      description: 'Sucessos de leitura entre os alunos',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      icon: TrendingUp,
      number: '97%',
      label: 'Taxa de Satisfação',
      description: 'Avaliação positiva dos usuários',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Acesso Online',
      description: 'Disponível a qualquer hora',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ]

  const achievements = [
    {
      title: 'Biblioteca Digital do Ano',
      description: 'Reconhecimento pela inovação em 2024',
      year: '2024',
    },
    {
      title: 'Melhor Sistema de Gestão',
      description: 'Prêmio SENAI de Tecnologia',
      year: '2023',
    },
    {
      title: '10 Mil Empréstimos',
      description: 'Marco histórico alcançado',
      year: '2023',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Main Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Números que Impressionam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça os números que demonstram o sucesso e a eficiência da Biblioteca Fitzgerald
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2"
                >
                  {stat.number}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
              Conquistas e Reconhecimentos
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa dedicação à excelência tem sido reconhecida através de diversos prêmios e marcos importantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl border border-primary-100 hover:border-primary-200 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                >
                  {achievement.year}
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h4>
                
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                Faça Parte Desta História
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Junte-se à nossa comunidade de leitores e contribua para que estes números continuem crescendo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                >
                  Cadastrar-se Agora
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
                >
                  Explorar Catálogo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}