/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "main-page":
        "url('https://www.nerdynaut.com/wp-content/uploads/2021/03/Learn-How-to-Play-Keno-Lottery.png')",
      "main-page2":
        "url('https://www.nerdynaut.com/wp-content/uploads/2021/03/Learn-How-to-Play-Keno-Lottery.png')",
    },
    extend: {
      fontFamily: {
        title: ["Montserrat Alternates", "sans-serif"],
        content: ["'Poppins'", "sans-serif"],
      },
      fontSize: {
        "main-title": "11rem",
        "main-mid": "15rem",
      },
      colors: {
        primary: "#FFF",
        secondary: "#fff",
        header: "#181c2c",
        product: "#23262C",
      },
      screens: {
        ss: "500px",
        ss: "400px",
      },
    },
  },
  plugins: [],
};
