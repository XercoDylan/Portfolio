/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal': {
          'bg': '#1a1a1a',
          'text': '#00ff00',
          'accent': '#00ffff',
          'secondary': '#ff00ff',
          'warning': '#ffff00',
          'error': '#ff0000',
        },
        'code': {
          'bg': '#1e1e1e',
          'comment': '#6A9955',
          'string': '#ce9178',
          'keyword': '#569CD6',
          'function': '#DCDCAA',
          'variable': '#9CDCFE',
        }
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'glitch': 'glitch 1s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 