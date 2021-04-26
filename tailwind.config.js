module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgc: "#121212",
        dp01: "hsla(0, 100%, 100%, 0.05)",
        dp02: "hsla(0, 100%, 100%, 0.07)",
        dp03: "hsla(0, 100%, 100%, 0.08)",
        dp04: "hsla(0, 100%, 100%, 0.09)",
        dp06: "hsla(0, 100%, 100%, 0.11)",
        dp08: "hsla(0, 100%, 100%, 0.12)",
        dp12: "hsla(0, 100%, 100%, 0.14)",
        dp16: "hsla(0, 100%, 100%, 0.15)",
        dp24: "hsla(0, 100%, 100%, 0.16)",
        accent: "#14ffec",
        accentHover: "#11999e",
      },
      boxShadow: {
        dp02:
          "0px 2px 2px 0px hsla(0,0%,0%,0.14), 0px 3px 1px -2px hsla(0,0%,0%,0.12), 0px 1px 5px 0px hsla(0,0%,0%,0.2)",
        dp03:
          "0px 3px 4px 0px hsla(0,0%,0%,0.14), 0px 3px 3px -2px hsla(0,0%,0%,0.12), 0px 1px 8px 0px hsla(0,0%,0%,0.2)",
        dp04:
          "0px 4px 5px 0px hsla(0,0%,0%,0.14), 0px 1px 10px 0px hsla(0,0%,0%,0.12), 0px 2px 4px -1px hsla(0,0%,0%,0.2)",
        dp06:
          "0px 6px 10px 0px hsla(0,0%,0%,0.14), 0px 1px 18px 0px hsla(0,0%,0%,0.12), 0px 3px 5px -1px hsla(0,0%,0%,0.2)",
        dp08:
          "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%,0.12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)",
        dp12:
          "0px 12px 17px 2px hsla(0,0%,0%,0.14), 0px 5px 22px 4px hsla(0,0%,0%,0.12), 0px 7px 8px -4px hsla(0,0%,0%,0.2)",
        dp16:
          "0px 16px 24px 2px hsla(0,0%,0%,0.14), 0px 6px 30px 5px hsla(0,0%,0%,0.12), 0px 8px 10px -5px hsla(0,0%,0%,0.2)",
        dp24:
          "0px 24px 38px 3px hsla(0,0%,0%,0.14), 0px 9px 46px 8px hsla(0,0%,0%,0.12), 0px 11px 15px -7px hsla(0,0%,0%,0.2)",
      },
      fontFamily: {
        heading: ["Gambetta", "serif"],
        body: ["Alpino", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
