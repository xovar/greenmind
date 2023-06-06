/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#C1DCDC",
        muted : "#1E1E1E80"
      },
      fontFamily: {
        poppins : "'Poppins', sans-serif",
        alegreya : "'Alegreya SC', serif"
      },
      container: {
        center: true,
        screens: {
          lg: '1250px',
          xl: '1250px',
        },
      },
    },
  },
  plugins: [],
}

