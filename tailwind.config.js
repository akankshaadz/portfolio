/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fbf8fe',
          100: '#f6effd',
          200: '#eedffc',
          300: '#e2c4f9',
          400: '#d59df5',
          500: '#c269ee',
          600: '#ab41e0',
          700: '#942dc7',
          800: '#7c26a3',
          900: '#672484',
          950: '#4a1064',
        },
        dark: {
          DEFAULT: '#000000',
          100: '#0a0a0a',
          200: '#121212',
          300: '#1a1a1a',
          400: '#242424',
          500: '#2d2d2d',
        },
        light: {
          DEFAULT: '#ffffff',
          100: '#f7f7f7',
          200: '#e6e6e6',
          300: '#d6d6d6',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'pulse-slow': 'pulse 6s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.accent.500"), 0 0 20px theme("colors.accent.500")',
        'neon-lg': '0 0 10px theme("colors.accent.500"), 0 0 30px theme("colors.accent.500")',
      },
    },
  },
  plugins: [],
};