/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },

      animation: {
        drop: "MoveUpDown 1.2s linear infinite",
      },

      keyframes: {
        MoveUpDown: {
          "0%": {
            bottom: "2.5rem",
            opacity: "100%",
          },
          "100%": {
            bottom: "1.2rem",
            opacity: "0%",
          },
        },
      },

      fontSize: {
        "5xl": "2.8rem",
      },

      padding: {
        wide: "2rem",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: "#5271FF",
        white: "#ffffff",
        "dark-blue": "#141C3A",
        gray: "#58595B",
        black: "#000000",
        "d-gray": "#071108",
        green: "#09F755",
        pink: "#FF206E",
      },
    },
  },
  plugins: [],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
};
