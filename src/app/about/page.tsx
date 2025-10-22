'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Target, Heart, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const stats = [
    { label: 'Anos de História', value: '50+', icon: Award },
    { label: 'Livros no Acervo', value: '15,847', icon: BookOpen },
    { label: 'Usuários Ativos', value: '2,341', icon: Users },
    { label: 'Empréstimos Mensais', value: '5,692', icon: Target },
  ]

  const team = [
    {
      name: 'Maria Santos',
      role: 'Diretora da Biblioteca',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9b3dd41?w=300&h=300&fit=crop&crop=face',
      description: 'Especialista em Ciência da Informação com 25 anos de experiência.'
    },
    {
      name: 'João Silva',
      role: 'Bibliotecário Chefe',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Mestre em Biblioteconomia, especializado em sistemas digitais.'
    },
    {
      name: 'Ana Costa',
      role: 'Bibliotecária de Referência',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
      description: 'Doutora em Literatura, focada em pesquisa e desenvolvimento acadêmico.'
    }
  ]

  const values = [
    {
      icon: BookOpen,
      title: 'Acesso ao Conhecimento',
      description: 'Garantimos que todos tenham acesso democrático à informação e ao conhecimento.'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Construímos uma comunidade de aprendizado colaborativo e inclusivo.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Mantemos os mais altos padrões de qualidade em nossos serviços e acervo.'
    },
    {
      icon: Heart,
      title: 'Paixão pela Leitura',
      description: 'Promovemos o amor pela leitura e o desenvolvimento intelectual contínuo.'
    }
  ]

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
              <h1 className="text-xl font-bold text-gray-900">Sobre a Biblioteca</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/catalog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Catálogo
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Biblioteca <span className="text-blue-600">Fitzgerald</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Uma instituição dedicada ao conhecimento, pesquisa e desenvolvimento intelectual da nossa comunidade há mais de 50 anos.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-gray-700 text-lg mb-6">
                Promover o acesso democrático ao conhecimento, apoiar a pesquisa acadêmica e fomentar 
                o desenvolvimento intelectual e cultural da nossa comunidade através de serviços 
                bibliotecários de excelência.
              </p>
              <p className="text-gray-700 text-lg">
                Acreditamos que o conhecimento deve ser acessível a todos, e trabalhamos 
                incansavelmente para criar um ambiente acolhedor onde estudantes, pesquisadores 
                e curiosos podem explorar, aprender e crescer.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=200&fit=crop"
                alt="Biblioteca"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=200&fit=crop"
                alt="Leitura"
                className="rounded-lg shadow-md mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=250&h=200&fit=crop"
                alt="Estudo"
                className="rounded-lg shadow-md -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=250&h=200&fit=crop"
                alt="Livros"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <p className="text-blue-100 text-lg mb-8">
              Fundada em 1974, a Biblioteca Fitzgerald começou como uma pequena coleção de livros em 
              uma sala de estudos. Ao longo dos anos, crescemos e nos adaptamos às necessidades da 
              nossa comunidade, incorporando tecnologias modernas sem perder nosso compromisso com 
              os valores tradicionais da biblioteconomia.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">1974</div>
                <div className="text-blue-100">Fundação da biblioteca</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1995</div>
                <div className="text-blue-100">Primeira digitalização</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2024</div>
                <div className="text-blue-100">Sistema online integrado</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visite-nos</h2>
          <p className="text-gray-600 mb-6">
            Estamos sempre prontos para recebê-lo e ajudá-lo em sua jornada de aprendizado.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Rua das Bibliotecas, 123</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">(11) 1234-5678</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">contato@fitzgerald.edu</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/catalog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explorar Catálogo
            </Link>
            <Link
              href="/contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}