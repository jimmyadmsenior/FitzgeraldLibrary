import { motion } from 'framer-motion';
import { Book, BookOpen, Library } from 'lucide-react';

const FloatingBooks: React.FC = () => {
  const bookIcons = [Book, BookOpen, Library];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: 12 }).map((_, index) => {
        const Icon = bookIcons[index % bookIcons.length];
        const delay = index * 0.5;
        const duration = 8 + (index % 4);
        
        return (
          <motion.div
            key={index}
            className="absolute text-library-primary opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={48 + Math.random() * 32} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingBooks;