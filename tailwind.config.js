/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {    
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'pinky': '#FA95C1',
        'lightblue': '#42BAF2',
        'lightpeach': '#FBD8AB',
        'lavender': '#AC97EB',
        'easteregg': '#89F875',
        'darkskyblue': '#649FEE',
        'lightkhaki': '#E6FBA6',
        'perrywinkle': '#94A1F4',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      },
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      },
      animation: {
        wiggle1: 'wiggle1 1.7s ease-in-out infinite',
        wiggle2: 'wiggle2 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle1: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wiggle2: {
          '0%': { transform: 'rotate(10deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
    },
  },
  plugins: [
  ],
}
