/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primaryBlack': '#18181B',
        'optionColor':'#3F3F46' 
      },
      dropShadow: {
        'white-xl': '0 4px 8px rgba(255, 255, 255, 0.5)', // Custom white drop shadow
      },
    },
  },
  plugins: [],
}

