/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdfbf0',
          100: '#faf5d3',
          200: '#f5e98a',
          300: '#edd94e',
          400: '#e4c427',
          500: '#c9a227',   
          600: '#a8841c',
          700: '#856418',
          800: '#6b4f18',
          900: '#5a4118',
        },
        noir: {
          50:  '#f7f7f7',
          100: '#efefef',
          200: '#d9d9d9',
          300: '#b8b8b8',
          400: '#8e8e8e',
          500: '#6b6b6b',
          600: '#4f4f4f',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0d0d0d',
          950: '#080808',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Tenor Sans"', 'Optima', 'sans-serif'],
        body:    ['"Jost"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1.05' }],
        '9xl':  ['8rem',   { lineHeight: '1' }],
        '10xl': ['10rem',  { lineHeight: '0.95' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a227 0%, #e4c427 40%, #a8841c 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(13,13,13,0.95) 0%, rgba(26,26,26,0.7) 60%, rgba(13,13,13,0.4) 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':      'fadeUp 0.8s ease forwards',
        'fade-in':      'fadeIn 1s ease forwards',
        'slide-right':  'slideRight 0.7s ease forwards',
        'counter':      'counter 2s ease-out forwards',
        'shimmer':      'shimmer 2.5s infinite',
        'float':        'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      boxShadow: {
        'gold':     '0 4px 32px rgba(201,162,39,0.25)',
        'gold-lg':  '0 8px 48px rgba(201,162,39,0.35)',
        'dark':     '0 4px 32px rgba(0,0,0,0.5)',
        'dark-xl':  '0 20px 60px rgba(0,0,0,0.7)',
        'inset-gold': 'inset 0 0 0 1px rgba(201,162,39,0.4)',
      },
      borderColor: {
        gold: '#c9a227',
      },
    },
  },
  plugins: [],
}
