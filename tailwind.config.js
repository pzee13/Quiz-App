/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primaryBlack': '#18181B', // Define your custom color here
      },
    },
  },
  plugins: [],
}

