import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Library, Book, User, Settings } from 'lucide-react';

interface NavbarProps {
  setIsHovering: (hovering: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsHovering }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Library },
    { path: '/books', label: 'Books', icon: Book },
    { path: '/dashboard', label: 'Dashboard', icon: User },
    { path: '/librarian', label: 'Librarian', icon: Settings },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Library className="h-8 w-8 text-library-primary" />
            <span className="font-serif text-2xl font-bold text-library-primary">
              Fitzgerald Library
            </span>
          </motion.div>

          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-library-primary bg-library-accent'
                        : 'text-gray-600 hover:text-library-primary hover:bg-library-accent/50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-library-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;