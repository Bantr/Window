module.exports = {
  'processors': [
    'stylelint-processor-styled-components'
  ],
  'extends': [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  'rules': {
    // general
    'no-eol-whitespace': true,
    'max-empty-lines': 1,
    'font-family-no-duplicate-names': true,
    'font-weight-notation': ['numeric', { ignore: 'relative' }],
    // hex
    'color-hex-case': 'lower',
    'color-no-invalid-hex': true,
    'color-hex-length': 'long',
    // block {} & css properties (f.e. color)
    'block-no-empty': true,
    'property-case': 'lower',
    'property-no-vendor-prefix': null,
    'length-zero-no-unit': true,
    'value-list-max-empty-lines': 0,
  },
  'ignoreFiles': ['./node_modules/*.tsx']
}