'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Mail, Phone, MapPin, Clock, ArrowLeft, 
  Send, MessageCircle, User, FileText 
} from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua das Bibliotecas, 123', 'Centro - São Paulo, SP', 'CEP: 01234-567'],
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 1234-5678', '(11) 9 8765-4321', 'WhatsApp disponível'],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contato@fitzgerald.edu', 'atendimento@fitzgerald.edu', 'biblioteca@fitzgerald.edu'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      details: ['Segunda a Sexta: 8h às 20h', 'Sábado: 9h às 17h', 'Domingo: 14h às 18h'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const departments = [
    {
      name: 'Atendimento Geral',
      email: 'atendimento@fitzgerald.edu',
      phone: '(11) 1234-5678',
      description: 'Informações gerais, empréstimos e devoluções'
    },
    {
      name: 'Referência e Pesquisa',
      email: 'pesquisa@fitzgerald.edu',
      phone: '(11) 1234-5679',
      description: 'Auxílio em pesquisas acadêmicas e consultas especializadas'
    },
    {
      name: 'Suporte Técnico',
      email: 'suporte@fitzgerald.edu',
      phone: '(11) 1234-5680',
      description: 'Problemas com o sistema, acesso digital e senhas'
    },
    {
      name: 'Coordenação',
      email: 'coordenacao@fitzgerald.edu',
      phone: '(11) 1234-5681',
      description: 'Sugestões, reclamações e parcerias'
    }
  ]

  const faqs = [
    {
      question: 'Como posso me cadastrar na biblioteca?',
      answer: 'Você pode se cadastrar presencialmente trazendo um documento de identidade e comprovante de matrícula, ou através do nosso sistema online.'
    },
    {
      question: 'Por quanto tempo posso ficar com um livro emprestado?',
      answer: 'O prazo padrão é de 15 dias, podendo ser renovado por até 3 vezes, desde que não haja reservas para o livro.'
    },
    {
      question: 'Como faço para reservar um livro?',
      answer: 'Você pode reservar livros através do catálogo online ou presencialmente no balcão de atendimento.'
    },
    {
      question: 'Posso acessar livros digitais?',
      answer: 'Sim! Temos uma coleção digital disponível 24/7 para usuários cadastrados através da plataforma online.'
    },
    {
      question: 'Há espaços para estudo em grupo?',
      answer: 'Sim, temos salas de estudo em grupo que podem ser reservadas com antecedência pelo sistema ou presencialmente.'
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
              <h1 className="text-xl font-bold text-gray-900">Contato</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/catalog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Catálogo
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
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
            Entre em <span className="text-blue-600">Contato</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudá-lo! Entre em contato conosco através dos canais abaixo ou visite-nos pessoalmente.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <div className={`p-3 rounded-lg ${info.bgColor} w-fit mb-4`}>
                <info.icon className={`h-6 w-6 ${info.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Envie uma Mensagem</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="emprestimo">Empréstimos e Devoluções</option>
                  <option value="cadastro">Cadastro e Acesso</option>
                  <option value="pesquisa">Auxílio em Pesquisa</option>
                  <option value="sugestao">Sugestões</option>
                  <option value="reclamacao">Reclamações</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Departamentos</h2>
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-green-600 mr-2" />
                    <a href={`tel:${dept.phone}`} className="text-green-600 hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map/Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Visite Nossa Biblioteca</h2>
          <p className="text-blue-100 mb-6">
            Estamos localizados no coração da cidade, com fácil acesso por transporte público e estacionamento disponível.
          </p>
          <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-sm text-blue-100">Rua das Bibliotecas, 123<br />Centro - São Paulo, SP</p>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Horário</h3>
                <p className="text-sm text-blue-100">Segunda a Sexta: 8h às 20h<br />Fins de semana: 9h às 17h</p>
              </div>
              <div>
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Contato</h3>
                <p className="text-sm text-blue-100">(11) 1234-5678<br />contato@fitzgerald.edu</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}