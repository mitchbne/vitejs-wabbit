// postcss.config.js
module.exports = {
  plugins: [
    require("@tailwindcss/jit"),
    require("autoprefixer"),
    require("cssnano")({ preset: "default" }),
    require("postcss-nesting"),
  ],
}
