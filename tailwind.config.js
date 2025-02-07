/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34D399', // Main green
        secondary: '#065F46', // Dark green
        'text-base': '#1F2937',
        'text-light': '#4B5563',
        green: {
          light: '#6EE7B7', // Light green
          DEFAULT: '#34D399', // Medium green
          dark: '#065F46', // Dark green
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}