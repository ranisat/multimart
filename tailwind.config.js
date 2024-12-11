/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
    colors:{
      p1:'#03597e',
      // #008ECC
      s1:'#fff'
    }
    },
  },
  plugins: [],
}

