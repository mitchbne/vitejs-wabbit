// @ts-check
const reactPlugin = require("vite-plugin-react")
const typescriptPlugin = require("rollup-plugin-typescript")

const config = {
  jsx: "react",
  plugins: [reactPlugin, typescriptPlugin],
}

module.exports = config
