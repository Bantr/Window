const path = require('path')

module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['react-hooks', 'react'],
  settings: {
    react: {
      version: 'detect'
    },
  },
  ignorePatterns: ['node_modules/',
    'ssr/',
    'dist/',
    'webpack.parts.js',
    'webpack.config.js',
    'storybook.setup.js',
    '.storybook/',
    '@types/',
    'cypress/',
    'lib/types/generated/index.tsx'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {

    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/interface-name-prefix': [2, { 'prefixWithI': 'always' }],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-non-null-assertion': 0,

    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'camelcase': 2,
    'comma-dangle': [
      2,
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'eol-last': 2,
    'eqeqeq': 2,
    'indent': [2, 2, { SwitchCase: 1 }],
    'keyword-spacing': 2,
    'linebreak-style': [2, 'unix'],
    'no-console': 0,
    'no-case-declarations': 0,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-return-assign': 2,
    'no-trailing-spaces': 2,
    'no-var': 2,
    'no-void': 2,
    'semi': [2, 'always'],
    'object-curly-spacing': [2, 'always'],
    'padded-blocks': [2, 'never'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'quotes': [2, 'single'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2, { int32Hint: true }],
    'strict': 0,
    'no-extraneous-dependencies': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'react/no-array-index-key': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-sort-default-props': 2,
    'react/jsx-sort-props': [2, { ignoreCase: true }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': [2, { return: 'parens-new-line' }],
    'react/prefer-stateless-function': 2,
    'react/prop-types': 0,
    'react/sort-comp': [
      1,
      {
        order: ['lifecycle', 'render', 'static-methods', 'everything-else']
      }
    ],
    'react/display-name': 0
  },
  overrides: [{
    "files": ["*.js"],
    "rules": {
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/explicit-function-return-type': 0
    }
  }]
}
