'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Book, Calendar, Users, Clock, BookOpen, User, LogIn, Menu, X } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'
import BookSearch from '@/components/BookSearch'
import StatsSection from '@/components/StatsSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <BookSearch />
        <StatsSection />
      </main>
      <Footer />
    </motion.div>
  )
}