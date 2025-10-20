'use client'

import { motion } from 'framer-motion'
import { Book, Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Catálogo', href: '#catalog' },
    { name: 'Meus Empréstimos', href: '#loans' },
    { name: 'Reservas', href: '#reservations' },
  ]

  const services = [
    { name: 'Pesquisa de Livros', href: '#search' },
    { name: 'Renovação Online', href: '#renew' },
    { name: 'Suporte Técnico', href: '#support' },
    { name: 'Tutorial do Sistema', href: '#tutorial' },
  ]

  const contact = [
    {
      icon: MapPin,
      text: 'Rua SENAI, 123 - Centro',
      subtext: 'São Paulo, SP - 01000-000',
    },
    {
      icon: Phone,
      text: '(11) 3456-7890',
      subtext: 'Segunda a Sexta, 8h às 18h',
    },
    {
      icon: Mail,
      text: 'biblioteca@senai.br',
      subtext: 'Resposta em até 24h',
    },
    {
      icon: Clock,
      text: 'Seg-Sex: 7h às 22h',
      subtext: 'Sáb: 8h às 17h',
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Book className="h-10 w-10 text-primary-400 animate-float" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-glow"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">
                    Biblioteca Fitzgerald
                  </h3>
                  <p className="text-sm text-gray-400">SENAI</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Transformando a experiência de leitura através da tecnologia. 
                Conectando alunos ao conhecimento de forma moderna e eficiente.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-primary-400 transition-all duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Serviços</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <motion.a
                      href={service.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-primary-400 transition-all duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 hover:opacity-100 transition-opacity duration-200"></span>
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
              <div className="space-y-4">
                {contact.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      <IconComponent className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{item.text}</p>
                        <p className="text-sm text-gray-400">{item.subtext}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-700 py-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Receba Novidades da Biblioteca
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Fique por dentro das novidades, novos livros adicionados ao acervo, 
              eventos especiais e dicas de leitura.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Inscrever-se
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Biblioteca Fitzgerald - SENAI. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Política de Privacidade
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Termos de Uso
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Acessibilidade
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center z-50"
      >
        ↑
      </motion.button>
    </footer>
  )
}