import { motion } from 'framer-motion';
import { BookOpen, Search, Calendar, Bell, Users, BarChart3 } from 'lucide-react';

interface HomePageProps {
  setIsHovering: (hovering: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setIsHovering }) => {
  const features = [
    {
      icon: Search,
      title: 'Pesquisar Livros',
      description: 'Busque por título, autor ou categoria',
      color: 'bg-blue-500',
    },
    {
      icon: Calendar,
      title: 'Reservar Livros',
      description: 'Reserve seus livros favoritos online',
      color: 'bg-green-500',
    },
    {
      icon: Bell,
      title: 'Notificações',
      description: 'Receba lembretes de devolução',
      color: 'bg-yellow-500',
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Conecte-se com outros leitores',
      color: 'bg-purple-500',
    },
    {
      icon: BarChart3,
      title: 'Estatísticas',
      description: 'Acompanhe seu progresso de leitura',
      color: 'bg-red-500',
    },
    {
      icon: BookOpen,
      title: 'Salas de Estudo',
      description: 'Reserve espaços para estudar',
      color: 'bg-indigo-500',
    },
  ];

  const stats = [
    { number: '15,000+', label: 'Livros no Acervo' },
    { number: '3,500+', label: 'Usuários Ativos' },
    { number: '850+', label: 'Empréstimos/Mês' },
    { number: '95%', label: 'Satisfação' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl font-serif font-bold text-library-primary mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Biblioteca Fitzgerald
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Descubra um mundo de conhecimento ao seu alcance. Nossa biblioteca digital 
            conecta você aos melhores recursos educacionais com tecnologia moderna e 
            experiência intuitiva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(45, 27, 105, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="bg-library-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-library-primary/90 transition-all duration-300"
            >
              Explorar Acervo
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="border-2 border-library-secondary text-library-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-library-secondary hover:text-white transition-all duration-300"
            >
              Saiba Mais
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Book */}
        <motion.div
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-16 relative"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-40 mx-auto bg-gradient-to-br from-library-secondary to-library-primary rounded-lg shadow-2xl transform perspective-1000"
          >
            <div className="absolute inset-2 bg-library-accent rounded opacity-20"></div>
            <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={40} />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-library-primary mb-4">
              Recursos Principais
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubra todas as funcionalidades que tornam sua experiência na biblioteca mais eficiente e prazerosa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-library-primary mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-library-primary text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">
              Nossa Biblioteca em Números
            </h2>
            <p className="text-library-accent text-lg">
              Dados que mostram nosso compromisso com a excelência educacional
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold font-serif mb-2 text-library-accent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold text-library-primary mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Junte-se a milhares de estudantes que já descobriram uma nova forma de estudar 
            e pesquisar. Sua próxima descoberta está apenas um clique de distância.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(139, 90, 60, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="bg-library-secondary text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-library-secondary/90 transition-all duration-300"
          >
            Começar Agora
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;