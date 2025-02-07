/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        customBlue: '#FF5733',
        customBlack: "#080808",
        customBlack2: "#131313"
      },
      textShadow: {
        coralGlow: '0 0 20px #ff5733',
      },
      boxShadow: {
        customGlow: '0 0 15px #FF5733',
        customGlowHover: '0 0 40px #FF5733',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-coralGlow': {
          'text-shadow': '0 0 25px #ff5733',
        },
      });
    },
  ],
}

