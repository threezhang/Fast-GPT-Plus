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
        // 新增霓虹色系
        neon: {
          cyan: '#00F5FF',
          pink: '#FF006E',
          purple: '#C026D3',
          blue: '#5E3AEE',
          green: '#00FF88'
        },
        // 极光色系
        aurora: {
          start: '#5E3AEE',
          mid: '#7C3AED',
          end: '#C026D3',
          glow: 'rgba(124, 58, 237, 0.5)'
        },
        // 深色模式优化
        dark: {
          surface: '#0A0A0B',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.05)'
        },
        // 语义色彩
        accent: {
          neon: '#00F5FF',
          aurora: '#FF006E',
          solar: '#FFBE0B',
          cosmic: '#B413EC'
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
        'skeleton': 'skeleton-loading 1.5s infinite',
        // 新增现代动画
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'aurora-flow': 'auroraFlow 15s ease-in-out infinite',
        'float-3d': 'float3D 8s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 1.5s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
        'ripple': 'ripple 0.6s ease-out',
        'text-reveal': 'textReveal 0.8s ease-out forwards',
        'parallax': 'parallax 1s ease-out'
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
        },
        // 新增关键帧
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(124, 58, 237, 0.8), 0 0 60px rgba(124, 58, 237, 0.5)' 
          }
        },
        auroraFlow: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(30deg)'
          }
        },
        float3D: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-10px) rotateX(5deg) rotateY(5deg)' 
          },
          '75%': { 
            transform: 'translateY(-5px) rotateX(-5deg) rotateY(-5deg)' 
          }
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }
        },
        neonFlicker: {
          '0%, 100%': { opacity: 1 },
          '41.99%': { opacity: 1 },
          '42%': { opacity: 0.8 },
          '43%': { opacity: 0.8 },
          '43.01%': { opacity: 1 },
          '47.99%': { opacity: 1 },
          '48%': { opacity: 0.9 },
          '49%': { opacity: 0.9 },
          '49.01%': { opacity: 1 }
        },
        magnetic: {
          to: { transform: 'translate(var(--mouse-x), var(--mouse-y))' }
        },
        ripple: {
          to: { 
            transform: 'scale(4)',
            opacity: 0
          }
        },
        textReveal: {
          from: { 
            clipPath: 'inset(0 100% 0 0)'
          },
          to: { 
            clipPath: 'inset(0 0 0 0)'
          }
        },
        parallax: {
          to: { transform: 'translateY(calc(var(--scroll) * -50px))' }
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 47% 33%, hsl(240, 79%, 70%) 0px, transparent 50%), radial-gradient(at 82% 65%, hsl(280, 85%, 60%) 0px, transparent 50%)',
        // 新增背景效果
        'aurora': 'linear-gradient(135deg, #5E3AEE 0%, #7C3AED 25%, #C026D3 50%, #FF006E 75%, #5E3AEE 100%)',
        'neon-glow': 'radial-gradient(circle at center, rgba(0, 245, 255, 0.4) 0%, transparent 70%)',
        'cosmic': 'radial-gradient(ellipse at top, #0A0A0B 0%, #1a1a2e 50%, #16213e 100%)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="turbulence" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.02"/%3E%3C/svg%3E")'
      },
      // 新增边框半径
      borderRadius: {
        'bento': '24px 8px 24px 8px',
        '3xl': '2rem',
        '4xl': '3rem'
      },
      // 新增模糊效果
      blur: {
        'xs': '2px',
        '4xl': '128px'
      },
      // 新增阴影
      boxShadow: {
        'neon': '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3), 0 0 60px rgba(0, 245, 255, 0.1)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3), 0 0 60px rgba(255, 0, 110, 0.1)',
        'aurora': '0 20px 50px -15px rgba(124, 58, 237, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.05)'
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
        },
        // 新增现代UI效果
        '.glass-2': {
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.08)'
        },
        '.neon-text': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
        },
        '.neon-border': {
          boxShadow: 'inset 0 0 0 2px currentColor, 0 0 20px currentColor',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 'inset 0 0 0 2px currentColor, 0 0 30px currentColor, 0 0 50px currentColor'
          }
        },
        '.bento-card': {
          borderRadius: '24px 8px 24px 8px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="turbulence" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.02"/%3E%3C/svg%3E")',
            opacity: 0.3,
            pointerEvents: 'none'
          }
        },
        '.aurora-bg': {
          background: 'linear-gradient(135deg, #5E3AEE 0%, #7C3AED 25%, #C026D3 50%, #FF006E 75%, #5E3AEE 100%)',
          backgroundSize: '400% 400%',
          animation: 'aurora-flow 15s ease-in-out infinite'
        },
        '.magnetic-btn': {
          position: 'relative',
          '--mouse-x': '0px',
          '--mouse-y': '0px',
          transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translate(var(--mouse-x), var(--mouse-y))'
          }
        },
        '.glow-card': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: '-2px',
            background: 'linear-gradient(135deg, #5E3AEE, #C026D3, #FF006E)',
            borderRadius: 'inherit',
            filter: 'blur(20px)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: -1
          },
          '&:hover::after': {
            opacity: 0.5
          }
        },
        '.text-glow': {
          '--glow-color': '#00F5FF',
          textShadow: '0 0 20px var(--glow-color), 0 0 40px var(--glow-color)'
        },
        '.noise-bg': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="turbulence" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.02"/%3E%3C/svg%3E")',
            opacity: 0.02,
            pointerEvents: 'none'
          }
        }
      }
      addUtilities(glassUtilities)
    }
  ]
}