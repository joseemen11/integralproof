/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
    },
    extend: {
      colors: {
        
        primary: '#C7DFAF',
        // navbar: '#066A79',
        navbar: '#0A486C',
        azul1: '#0A486C',
        celeste1: '#DEEDF6',
        verde1: '#8DC829',
        blanco: '#FFFFFF',
        section:' #78C5BD',
        aboutus: '#C7DFAF',
        text_both: '#32497D',
        footer_bg: '#066A79',
        borders: '#32497D',
        bg_strong: '#09657C',
        button: '#066A79',
        hover_text: '#6CC2B5',
        text: '#ffffff',
        hover_button: '#47B0AC',
        secondary: '#496451',
        backgroundLight: '#B7CBE6',
        textLight: '#666666',
        buttonHover: '#59C378',
      },
      spacing: {
        '5px': '5px',
      },
      textColor: ['current'],
    },
     
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1399px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1199px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '991px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '767px'},
      // => @media (max-width: 639px) { ... }

      'col': {'max': '567px'},
      // => @media (max-width: 320px) { ... }
    },
   fontFamily: {
        'base-font': ['Montserrat', 'sans-serif'], // Cambia a Montserrat
        'heading-font': ['Montserrat', 'sans-serif'], // Opcional: Usa Montserrat también para encabezados
      },
  },
  plugins: [],
  important: true,
}