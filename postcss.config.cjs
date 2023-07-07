module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-css-variables': {},
    'postcss-combine-duplicated-selectors': { removeDuplicatedProperties: true },
    'postcss-remove-prefixes': {},
    'postcss-remove-selectors': { selectors: ['::-webkit'] },
    cssnano: {},
  }
}
