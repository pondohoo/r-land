/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        teko: "var(--teko-font)",
        pirata: "var(--pirata-font)",
      },
      colors: {
        rland: {
          black: "#1C1D21",
          red: "#FE0B0A",
          yellow: "#FFD28D",
          gray: "#666666",
          darkgray: "#32393E",
        },
      },
    },
  },
  plugins: [],
};
