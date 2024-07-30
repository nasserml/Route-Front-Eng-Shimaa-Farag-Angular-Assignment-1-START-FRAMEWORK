/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'navbar-toggler-icon-tw':'url("/images/navbar-toggler.svg")'
      },
      backgroundSize:{
        '100%':'100%'
      },
      colors: {
        '#2C3E50' : '#2C3E50',
        'rgba(0,0,0,0.15)': 'rgba(0,0,0,0.15)',
        'rgba(0,0,0,0.65)':'rgba(0,0,0,0.65)',
        '#1ABC9C':'#1ABC9C',
        '#0F151A': '#0F151A',
        '#1a252f':'#1a252f',
        'rgba(26,188,156,0.9)':'rgba(26,188,156,0.9)',
        'rgb(33,37,41)':'rgb(33,37,41)',
        'rgb(44,62,80)':'rgb(44,62,80)',
        '#dee2e6':'#dee2e6'
        
      },
      spacing:{
        '5px': '0.313rem',
        '6px':'0.375rem',
        '10px':'0.625rem',
        '30px':'1.875rem',
        '92px': '5.75rem',
        '106px': '6.625rem'
      },
      fontSize:{
        '28px':'1.75rem',
        '32px': '2rem',
        '40px':'2.5rem'
      },
      lineHeight: {
        '34px':'2.125rem',
        '48px': '3rem'
      },
      transitionProperty: {
        'padding' : 'padding',
        'top': 'top',
        'height':'height'
      },
      transitionDuration:{
        '0.6s': '600ms'
      },
      screens: {
        'screen-576px': '576px',
        'screen-992px': '992px'
      },
      borderWidth: {
        '1.5px': '1.5px'
      }
      
    },
  },
  plugins: [],
}

