/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'subtle-zoom': 'subtle-zoom 20s ease-in-out infinite alternate',
        'line-left': 'line-left 15s ease-in-out infinite',
        'line-right': 'line-right 15s ease-in-out infinite',
        'line-up': 'line-up 15s ease-in-out infinite',
        'line-down': 'line-down 15s ease-in-out infinite',
        'pulse-down': 'pulse-down 2s ease-in-out infinite',
      },
      keyframes: {
        'subtle-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'line-left': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
        },
        'line-right': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'line-up': {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-100%)' },
        },
        'line-down': {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(0%)' },
        },
        'pulse-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}; 