/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
