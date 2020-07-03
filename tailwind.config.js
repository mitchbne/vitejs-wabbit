
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./index.html",
  ],
  theme: {
    extend: {
      color: {
        gray: "red"
      },
        fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      screens: {
      // print: { raw: "print" }, // use utilities like print:text-black
        // dark: { raw: "(prefers-color-scheme: dark)" }, // use utilities like dark:text-white
      },
    },
    container: { center: true },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({ layout: "sidebar" }),
  ],
}
