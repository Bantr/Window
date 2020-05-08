module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended'
  ],
  plugins: ['cypress'],
  env: {
    browser: true,
    'cypress/globals': true
  },
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn'
  }
}