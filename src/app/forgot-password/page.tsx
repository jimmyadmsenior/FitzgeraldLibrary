'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Por favor, insira um email válido')
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full space-y-8"
        >
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao início
            </Link>
            
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-green-100">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Email Enviado!
            </h2>
            <p className="text-gray-600 mb-6">
              Enviamos um link para redefinir sua senha para <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Verifique sua caixa de entrada e spam. O link expira em 24 horas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Próximos passos:</h3>
              <ol className="text-sm text-blue-700 space-y-1">
                <li>1. Verifique seu email (incluindo spam)</li>
                <li>2. Clique no link de redefinição</li>
                <li>3. Crie uma nova senha segura</li>
                <li>4. Faça login com sua nova senha</li>
              </ol>
            </div>

            <div className="flex flex-col space-y-3">
              <Link
                href="/login?type=student"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Voltar ao Login
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setEmail('')
                }}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Enviar para outro email
              </button>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            Não funcionou? <Link href="/contact" className="text-blue-600 hover:underline">Entre em contato conosco</Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-blue-100">
              <BookOpen className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Esqueceu sua senha?
          </h2>
          <p className="text-gray-600">
            Não se preocupe! Digite seu email e enviaremos um link para redefinir sua senha.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-800 text-sm">{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite seu email"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando...
              </div>
            ) : (
              'Enviar Link de Redefinição'
            )}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Lembrou da senha?{' '}
              <Link href="/login?type=student" className="text-blue-600 hover:text-blue-800 font-medium">
                Fazer login
              </Link>
            </p>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm"
        >
          <h3 className="font-semibold text-yellow-800 mb-2">💡 Dica de Segurança:</h3>
          <p className="text-yellow-700">
            Para sua proteção, apenas emails registrados em nosso sistema receberão o link de redefinição. 
            Se você não receber o email em alguns minutos, verifique sua pasta de spam.
          </p>
        </motion.div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Ainda com problemas?</p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/help" className="text-blue-600 hover:underline">
              Central de Ajuda
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contatar Suporte
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h3 className="font-semibold text-gray-900 mb-3">Outras opções de acesso:</h3>
          <div className="space-y-3">
            <Link
              href="/login?type=librarian"
              className="block w-full text-center py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Área do Bibliotecário
            </Link>
            <Link
              href="/catalog"
              className="block w-full text-center py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Explorar Catálogo (sem login)
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}