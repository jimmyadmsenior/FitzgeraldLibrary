'use client'

import { motion } from 'framer-motion'
import { Search, Calendar, Clock, Users, BookOpen, Bell, Star, Shield } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: 'Busca Inteligente',
      description: 'Encontre livros por título, autor, categoria ou ISBN de forma rápida e intuitiva.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Calendar,
      title: 'Reservas Online',
      description: 'Reserve livros disponíveis e receba notificações quando estiverem prontos para retirada.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Clock,
      title: 'Controle de Prazos',
      description: 'Acompanhe seus empréstimos ativos e datas de devolução em tempo real.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      icon: Users,
      title: 'Gestão de Usuários',
      description: 'Interface dedicada para bibliotecários gerenciarem o acervo e usuários.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: BookOpen,
      title: 'Histórico de Leitura',
      description: 'Mantenha um registro completo de todos os livros que você já leu.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
    {
      icon: Bell,
      title: 'Notificações Smart',
      description: 'Receba lembretes sobre devoluções, novas aquisições e reservas.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Star,
      title: 'Recomendações',
      description: 'Descubra novos livros baseados em suas preferências de leitura.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: Shield,
      title: 'Acesso Seguro',
      description: 'Seus dados estão protegidos com criptografia e autenticação segura.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Recursos Incríveis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa plataforma oferece todas as ferramentas necessárias para uma experiência 
            completa de biblioteca digital, tanto para alunos quanto para bibliotecários.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 origin-left"
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se aos mais de 1.200 alunos que já utilizam nossa plataforma 
              para descobrir, reservar e gerenciar seus livros favoritos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg"
              >
                Criar Conta de Aluno
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Acesso Bibliotecário
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}