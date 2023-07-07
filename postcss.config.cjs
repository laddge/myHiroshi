module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-css-variables': {},
    'postcss-combine-duplicated-selectors': { removeDuplicatedProperties: true },
    cssnano: {},
  }
}
