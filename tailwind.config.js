/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f2f6fb',
          100: '#dce7f2',
          200: '#b9cfe5',
          300: '#8baecf',
          400: '#5d8cb7',
          500: '#3a6d9a',
          600: '#2a5580',
          700: '#1e3e66',
          800: '#142c4d',
          900: '#0c1e38',
        },
        accent: {
          50:  '#f0f4f8',
          300: '#6b8bad',
          400: '#4a6fa3',
          500: '#3a6d9a',
          600: '#2a5580',
          700: '#1e3e66',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
