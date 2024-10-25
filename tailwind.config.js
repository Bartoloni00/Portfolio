/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#1C1C1C', // Gris oscuro profundo para el texto principal
        primary: '#FF2D20', // Rojo de acento similar al de Laravel
        background: {
          primary: '#F5F5F5', // Gris muy claro para el fondo principal
          secondary: '#E0E0E0', // Gris claro para fondos secundarios
        },
        textSecondary: '#3A3A3A', // Gris medio para subtítulos o texto adicional
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
