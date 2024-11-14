/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#345540',
        text2: '#173321',
        primary: '#84feae',
        background: {
          primary: '#63806D', // Gris muy claro para el fondo principal
          secondary: '#91AA9A', // Gris claro para fondos secundarios
        },
        textSecondary: '#92D5A9', // Gris medio para subtítulos o texto adicional
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
