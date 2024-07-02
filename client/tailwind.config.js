/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, rgba(19,38,62,1) 0%, rgba(19,38,62,1) 75%, rgba(9,57,75,1) 90%, rgba(24,52,82,1) 96%, rgba(19,38,62,1) 100%)',
      },
    },
  },
  plugins: [],
}

