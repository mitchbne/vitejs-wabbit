
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./index.html",
  ],
  theme: {
    extend: {
      color: { gray: "red" },
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
    },
    container: { center: true },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({ layout: "sidebar" }),
  ],
}
