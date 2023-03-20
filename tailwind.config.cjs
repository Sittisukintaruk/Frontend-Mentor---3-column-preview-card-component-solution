/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Neutral: {
          Verylightgray: "#decacc",
        },
        primary: {
          Brightorange: "#E38826",
          Darkcyan: "#006970",
          Verydarkcyan: "#004241",
        },
      },
      fontFamily: {
        Shoulders: ['Big Shoulders Display', 'cursive'],
        LexendDeca: ['Lexend Deca', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: ['0.938rem','25px'],
        xl: ['2.5rem','40px'],
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
};
