/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0B0E14', // Deep space black
          800: '#131b26',
        },
        neon: {
          cyan: '#00f7ff',
          blue: '#3b82f6',
        },
        solar: {
          yellow: '#fbbf24',
          glow: '#f59e0b',
        },
        critical: {
          red: '#ef4444',
          dark: '#991b1b',
        },
        success: {
          green: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(251, 191, 36, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
