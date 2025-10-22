'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Search, Users, Calendar, ArrowLeft, 
  ChevronDown, ChevronRight, HelpCircle, User,
  Lock, RefreshCw, Heart, FileText, Bell, Shield
} from 'lucide-react'
import Link from 'next/link'

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState('geral')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const categories = [
    { id: 'geral', name: 'Informações Gerais', icon: HelpCircle },
    { id: 'cadastro', name: 'Cadastro e Login', icon: User },
    { id: 'emprestimos', name: 'Empréstimos', icon: BookOpen },
    { id: 'reservas', name: 'Reservas', icon: Calendar },
    { id: 'pesquisa', name: 'Pesquisa no Catálogo', icon: Search },
    { id: 'conta', name: 'Minha Conta', icon: Shield },
  ]

  const faqs = {
    geral: [
      {
        question: 'Como funciona a Biblioteca Fitzgerald?',
        answer: 'A Biblioteca Fitzgerald é um sistema digital que permite aos usuários pesquisar livros, fazer empréstimos, reservas e gerenciar sua conta de forma online. Oferecemos acesso a um vasto acervo de livros físicos e digitais.'
      },
      {
        question: 'Quem pode usar a biblioteca?',
        answer: 'Estudantes, professores, pesquisadores e membros da comunidade acadêmica podem se cadastrar e utilizar nossos serviços. É necessário apresentar documentação válida para o cadastro.'
      },
      {
        question: 'Qual é o horário de funcionamento?',
        answer: 'Nossa biblioteca física funciona de segunda a sexta das 8h às 20h, sábados das 9h às 17h e domingos das 14h às 18h. O acesso online está disponível 24 horas por dia.'
      },
      {
        question: 'Como posso sugerir a compra de um livro?',
        answer: 'Você pode enviar sugestões através do formulário de contato em nosso site ou diretamente para nossa equipe de desenvolvimento de coleções. Todas as sugestões são analisadas pela equipe técnica.'
      }
    ],
    cadastro: [
      {
        question: 'Como me cadastrar na biblioteca?',
        answer: 'Clique em "Login" na página inicial, selecione o tipo de usuário (Estudante ou Bibliotecário) e preencha o formulário. Para o primeiro acesso, você pode usar as credenciais demo@biblioteca.com / demo123.'
      },
      {
        question: 'Esqueci minha senha, como recuperar?',
        answer: 'Na tela de login, clique em "Esqueceu a senha?" e siga as instruções. Você receberá um email com um link para redefinir sua senha.'
      },
      {
        question: 'Como atualizar meus dados pessoais?',
        answer: 'Após fazer login, acesse a aba "Perfil" no seu dashboard para atualizar informações como telefone, curso e preferências de notificação.'
      },
      {
        question: 'Posso ter mais de uma conta?',
        answer: 'Não, cada pessoa deve ter apenas uma conta ativa. Se você precisar alterar o tipo de usuário, entre em contato com a administração.'
      }
    ],
    emprestimos: [
      {
        question: 'Por quanto tempo posso ficar com um livro?',
        answer: 'O prazo padrão é de 15 dias. Este prazo pode ser renovado até 3 vezes, desde que não haja reservas pendentes para o livro.'
      },
      {
        question: 'Como renovar um empréstimo?',
        answer: 'Acesse sua área pessoal, vá para a aba "Empréstimos" e clique no botão "Renovar" ao lado do livro desejado. Você pode renovar até a data de vencimento.'
      },
      {
        question: 'Quantos livros posso pegar emprestado?',
        answer: 'Estudantes podem ter até 5 livros simultaneamente. Professores e pesquisadores podem ter até 10 livros.'
      },
      {
        question: 'O que acontece se eu atrasar a devolução?',
        answer: 'Você receberá notificações por email antes e após o vencimento. Atrasos podem resultar em suspensão temporária dos privilégios de empréstimo.'
      }
    ],
    reservas: [
      {
        question: 'Como fazer uma reserva?',
        answer: 'No catálogo, clique em "Reservar" no livro desejado. Se todas as cópias estiverem emprestadas, você entrará na fila de reservas.'
      },
      {
        question: 'Como saber minha posição na fila?',
        answer: 'Na aba "Reservas" do seu dashboard, você pode ver sua posição na fila e a estimativa de quando o livro estará disponível.'
      },
      {
        question: 'Por quanto tempo o livro fica reservado para mim?',
        answer: 'Quando o livro estiver disponível, você tem 3 dias úteis para retirá-lo. Após este prazo, a reserva é cancelada automaticamente.'
      },
      {
        question: 'Posso cancelar uma reserva?',
        answer: 'Sim, você pode cancelar uma reserva a qualquer momento através da aba "Reservas" no seu dashboard.'
      }
    ],
    pesquisa: [
      {
        question: 'Como pesquisar livros no catálogo?',
        answer: 'Use a barra de pesquisa principal inserindo título, autor ou palavras-chave. Você pode usar filtros para refinar os resultados por categoria, ano ou disponibilidade.'
      },
      {
        question: 'Como usar os filtros de pesquisa?',
        answer: 'No catálogo, use os menus suspensos para filtrar por categoria e ordenar os resultados. Você pode combinar múltiplos filtros para uma pesquisa mais específica.'
      },
      {
        question: 'Posso salvar livros como favoritos?',
        answer: 'Sim! Clique no ícone de coração nos livros para adicioná-los aos seus favoritos. Acesse-os depois na aba "Favoritos" do seu dashboard.'
      },
      {
        question: 'Como encontrar a localização física de um livro?',
        answer: 'Na página de detalhes do livro, você encontrará a informação de localização (seção e prateleira) para facilitar sua busca na biblioteca física.'
      }
    ],
    conta: [
      {
        question: 'Como acessar meu histórico de leitura?',
        answer: 'Na sua área pessoal, vá para a aba "Histórico" para ver todos os livros que você já emprestou, com datas e suas avaliações.'
      },
      {
        question: 'Como avaliar um livro?',
        answer: 'Após devolver um livro, você pode avaliá-lo na aba "Histórico" clicando nas estrelas e deixando um comentário opcional.'
      },
      {
        question: 'Como configurar notificações?',
        answer: 'Na aba "Perfil", você pode escolher receber notificações por email para lembretes de devolução, disponibilidade de reservas e novidades.'
      },
      {
        question: 'Como ver minhas estatísticas de leitura?',
        answer: 'No dashboard principal e na aba "Perfil", você encontra estatísticas como número de livros lidos, gênero favorito e sequência de leitura.'
      }
    ]
  }

  const quickActions = [
    {
      title: 'Fazer Login',
      description: 'Acesse sua conta para gerenciar empréstimos',
      icon: User,
      link: '/login?type=student',
      color: 'blue'
    },
    {
      title: 'Explorar Catálogo',
      description: 'Pesquise livros em nosso acervo',
      icon: Search,
      link: '/catalog',
      color: 'green'
    },
    {
      title: 'Contatar Suporte',
      description: 'Fale conosco para mais ajuda',
      icon: HelpCircle,
      link: '/contact',
      color: 'purple'
    },
    {
      title: 'Sobre a Biblioteca',
      description: 'Conheça nossa história e missão',
      icon: FileText,
      link: '/about',
      color: 'orange'
    }
  ]

  const systemGuides = [
    {
      title: 'Primeiro Acesso',
      steps: [
        'Acesse a página inicial da biblioteca',
        'Clique em "Acessar como Estudante" ou "Acessar como Bibliotecário"',
        'Use as credenciais demo: demo@biblioteca.com / demo123',
        'Explore as funcionalidades do seu dashboard'
      ]
    },
    {
      title: 'Fazendo um Empréstimo',
      steps: [
        'Pesquise o livro desejado no catálogo',
        'Clique em "Ver Detalhes" para mais informações',
        'Se disponível, clique em "Reservar"',
        'Retire o livro na biblioteca física'
      ]
    },
    {
      title: 'Renovando Empréstimos',
      steps: [
        'Faça login em sua conta',
        'Vá para a aba "Empréstimos"',
        'Clique em "Renovar" no livro desejado',
        'Confirme a renovação'
      ]
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
              <h1 className="text-xl font-bold text-gray-900">Central de Ajuda</h1>
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
          <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <HelpCircle className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como podemos <span className="text-blue-600">ajudar</span>?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para suas dúvidas sobre o sistema da biblioteca, empréstimos, reservas e muito mais.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.link}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className={`p-3 rounded-lg w-fit mb-4 ${
                action.color === 'blue' ? 'bg-blue-100' :
                action.color === 'green' ? 'bg-green-100' :
                action.color === 'purple' ? 'bg-purple-100' :
                'bg-orange-100'
              }`}>
                <action.icon className={`h-6 w-6 ${
                  action.color === 'blue' ? 'text-blue-600' :
                  action.color === 'green' ? 'text-green-600' :
                  action.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {action.title}
              </h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </Link>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categorias</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="h-4 w-4 mr-3" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              
              <div className="space-y-4">
                {faqs[activeCategory as keyof typeof faqs]?.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Step-by-Step Guides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Guias Passo a Passo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {systemGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{guide.title}</h3>
                <div className="space-y-3">
                  {guide.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                        {stepIndex + 1}
                      </div>
                      <p className="text-gray-700 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ainda precisa de ajuda?</h2>
          <p className="text-blue-100 mb-6">
            Não encontrou a resposta que procurava? Nossa equipe está pronta para ajudá-lo!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Entre em Contato
            </Link>
            <a
              href="mailto:suporte@fitzgerald.edu"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Enviar Email
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}