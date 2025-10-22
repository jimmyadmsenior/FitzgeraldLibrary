'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, User, Lock, ArrowLeft, UserCheck, Shield } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const userType = searchParams.get('type') || 'student'
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  // Mock login function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Mock authentication - in real app this would validate against backend
    if (formData.email && formData.password) {
      // Store mock session
      localStorage.setItem('userSession', JSON.stringify({
        type: userType,
        email: formData.email,
        name: userType === 'student' ? 'João Silva' : 'Maria Santos',
        id: Math.random().toString(36).substr(2, 9)
      }))
      
      // Redirect based on user type
      router.push(userType === 'student' ? '/student' : '/librarian')
    }
    
    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${userType === 'student' ? 'bg-blue-100' : 'bg-purple-100'}`}>
              {userType === 'student' ? (
                <UserCheck className={`h-12 w-12 ${userType === 'student' ? 'text-blue-600' : 'text-purple-600'}`} />
              ) : (
                <Shield className={`h-12 w-12 ${userType === 'student' ? 'text-blue-600' : 'text-purple-600'}`} />
              )}
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {userType === 'student' ? 'Área do Estudante' : 'Área do Bibliotecário'}
          </h2>
          <p className="text-gray-600">
            Entre com suas credenciais para acessar o sistema
          </p>
        </div>

        {/* Login Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          onSubmit={handleLogin}
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu.email@exemplo.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Sua senha"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
              Esqueceu a senha?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
              userType === 'student'
                ? 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400'
                : 'bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400'
            } ${isLoading ? 'cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </motion.form>

        {/* Demo Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm"
        >
          <h3 className="font-semibold text-yellow-800 mb-2">🎭 Credenciais de Demonstração:</h3>
          <div className="text-yellow-700">
            <p><strong>Email:</strong> demo@biblioteca.com</p>
            <p><strong>Senha:</strong> demo123</p>
            <p className="text-xs mt-2 text-yellow-600">
              * Use qualquer email/senha para acessar o sistema de demonstração
            </p>
          </div>
        </motion.div>

        {/* Switch User Type */}
        <div className="text-center">
          <p className="text-gray-600 mb-2">Precisa acessar outra área?</p>
          <Link
            href={`/login?type=${userType === 'student' ? 'librarian' : 'student'}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {userType === 'student' ? 'Área do Bibliotecário' : 'Área do Estudante'}
          </Link>
        </div>
      </motion.div>
    </div>
  )
}