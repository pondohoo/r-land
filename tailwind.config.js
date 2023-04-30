/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "heart-pulse": " pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
        "reverse-spin": "reverse-spin 15s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
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
