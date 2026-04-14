/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm:   ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          blue:   '#4f8eff',
          purple: '#7c5cff',
          teal:   '#00d4aa',
        },
        dark: {
          900: '#050810',
          800: '#080d1a',
          700: '#0d1426',
          600: '#111827',
          500: '#1a2236',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #4f8eff 0%, #7c5cff 100%)',
        'gradient-teal':  'linear-gradient(135deg, #00d4aa 0%, #4f8eff 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'float':      'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.9' },
        },
      },
      boxShadow: {
        'glow-blue':   '0 0 30px rgba(79,142,255,0.25)',
        'glow-purple': '0 0 30px rgba(124,92,255,0.25)',
        'card':        '0 4px 24px rgba(0,0,0,0.3)',
        'card-hover':  '0 8px 40px rgba(79,142,255,0.2)',
      },
    },
  },
  plugins: [],
}