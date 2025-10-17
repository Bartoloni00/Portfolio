/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FACC15', // Amarillo cálido (acento principal)
          dark: '#EAB308',    // Amarillo más profundo
          light: '#FEF08A',   // Amarillo suave para fondos o hover
        },
        neutral: {
          900: '#0F0F0F', // Fondo casi negro
          800: '#1E1E1E', // Gris carbón (principal)
          700: '#2D2D2D', // Gris medio
          600: '#3F3F3F', // Gris más claro
        },
        accent: {
          DEFAULT: '#FDE68A', // Sutil contraste (por ejemplo, para highlights o tags)
        },
        text: {
          primary: '#F9FAFB', // Texto principal (blanco suave)
          secondary: '#D1D5DB', // Texto secundario (gris claro)
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.25)', // Sombras suaves y modernas
      },
    },
  },
  plugins: [],
};