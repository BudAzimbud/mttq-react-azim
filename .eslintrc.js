module.exports = {
    env: {
      node: true,
      es6: true,
      browser: true
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        modules: true,
        experimentalObjectRestSpread: true
      }
    },
    rules: {} // Empty rules object means no rules are enabled
  }
  