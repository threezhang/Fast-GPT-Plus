/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_components/**/*.html',
    './docs/**/*.{html,md}',
    './*.{html,md}',
    './assets/js/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b'
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764'
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'PingFang SC', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'draw': 'draw 2s ease-in-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'skeleton': 'skeleton-loading 1.5s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        draw: {
          to: { strokeDashoffset: 0 }
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideInLeft: {
          from: { opacity: 0, transform: 'translateX(-50px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        slideInRight: {
          from: { opacity: 0, transform: 'translateX(50px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        'skeleton-loading': {
          to: { left: '100%' }
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 47% 33%, hsl(240, 79%, 70%) 0px, transparent 50%), radial-gradient(at 82% 65%, hsl(280, 85%, 60%) 0px, transparent 50%)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // 自定义玻璃拟态插件
    function({ addUtilities, theme }) {
      const glassUtilities = {
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
        },
        '.glass-card': {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: theme('borderRadius.xl'),
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          transition: 'all 0.2s cubic-bezier(0, 0, 0.2, 1)'
        },
        '.glass-button': {
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 15px 0 rgba(99, 102, 241, 0.3)',
          transition: 'all 0.2s cubic-bezier(0, 0, 0.2, 1)'
        },
        '.gradient-mesh': {
          backgroundColor: '#667eea',
          backgroundImage: 'radial-gradient(at 47% 33%, hsl(240, 79%, 70%) 0px, transparent 50%), radial-gradient(at 82% 65%, hsl(280, 85%, 60%) 0px, transparent 50%)'
        },
        '.hover-lift': {
          transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-5px)'
          }
        },
        '.hover-grow': {
          transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }
      }
      addUtilities(glassUtilities)
    }
  ]
}