const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: ['@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/preset-typescript',
    '@storybook/addon-notes/register',
    '@storybook/addon-a11y/register',
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      'lib': path.resolve(__dirname, '../lib'),
      'stories': path.resolve(__dirname, '../stories')
    },

      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: require.resolve('ts-loader'),
            options: { getCustomTransformers: () => ({ before: [styledComponentsTransformer] }) }
          },
          // Optional
          //      {
          //       loader: require.resolve('react-docgen-typescript-loader'),
          //     }
        ]
      });

    config.module.rules.push({
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader' }
    });

    config.resolve.extensions.push('.storybook.tsx');
    return config;
  }
};
