

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'new-blue': '#98F5F9',
      },
      backgroundImage: {
        'haikaiss': 'url(../src/img/455561.png)',
        'tailwind': 'url(../src/img/Tailwind-CSS1-900x0.png)'
      },
      fontFamily: {
        'arial': 'Arial',
      },
      fontSize: {
        '12xl': '8rem',
      }
    },
  },
  plugins: [],
}

