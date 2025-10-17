/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        library: {
          primary: '#2D1B69',
          secondary: '#8B5A3C',
          accent: '#F4E4C1',
          dark: '#1A1A2E',
          light: '#F8F9FA'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'book-flip': 'book-flip 0.6s ease-in-out',
        'page-turn': 'page-turn 0.8s ease-in-out',
        'cursor-glow': 'cursor-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 90, 60, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 90, 60, 0.8)' },
        },
        'book-flip': {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(-90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        'page-turn': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-180deg)' },
        },
        'cursor-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}