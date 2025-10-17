import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import UserDashboard from './pages/UserDashboard';
import LibrarianDashboard from './pages/LibrarianDashboard';
import CustomCursor from './components/CustomCursor';
import FloatingBooks from './components/FloatingBooks';
import './App.css';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <Router>
      <div className="App min-h-screen library-bg relative">
        <CustomCursor position={cursorPosition} isHovering={isHovering} />
        <FloatingBooks />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Navbar setIsHovering={setIsHovering} />
          
          <Routes>
            <Route path="/" element={<HomePage setIsHovering={setIsHovering} />} />
            <Route path="/books" element={<BooksPage setIsHovering={setIsHovering} />} />
            <Route path="/dashboard" element={<UserDashboard setIsHovering={setIsHovering} />} />
            <Route path="/librarian" element={<LibrarianDashboard setIsHovering={setIsHovering} />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
