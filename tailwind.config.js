import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    extend: {
      colors:{
        'black-custom': '#212121',
      },

      fontFamily: {
        instrument: ['"Instrument Serif"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [animations],
};
