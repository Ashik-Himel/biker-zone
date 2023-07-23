/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#E76F51',
        'hero-bg': '#264653',
        paragraph: '#6C6C6C',
        'footer-bg': '#0B0D17'
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  },
};