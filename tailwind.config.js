/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'task-h3': '#c8781a',
        'task-p': '#444',
        'brand-red': 'rgb(230, 43, 43)',
        'background':'#fecc91'
      }
    },
  },
  plugins: [],
}